const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const connections = new Map();
const mongoDBConnectionString = process.env.MONGODB_URI;
let isCleanupRegistered = false;

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true  
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports.connect = function({ table, schema }) {
    return new Promise((resolve, reject) => {
        if (connections.has(table)) {
            return resolve(connections.get(table));
        }

        const db = mongoose.createConnection(mongoDBConnectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            maxPoolSize: 5,
        });

        const timeoutId = setTimeout(() => {
            reject(new Error('Connection timeout'));
        }, 10000);

        db.on('error', (err) => {
            clearTimeout(timeoutId);
            connections.delete(table);
            reject(err);
        });

        db.once('open', () => {
            clearTimeout(timeoutId);
            try {
                const model = db.model(table, schema);
                connections.set(table, model);
                
                // Register cleanup only once
                if (!isCleanupRegistered) {
                    registerCleanup();
                    isCleanupRegistered = true;
                }
                
                resolve(model);
            } catch (error) {
                connections.delete(table);
                db.close();
                reject(error);
            }
        });
    });
};

// Register cleanup handlers once
function registerCleanup() {
    const cleanup = async () => {
        console.log('Closing database connections...');
        const closePromises = Array.from(connections.values()).map(model => {
            if (model.db && model.db.readyState === 1) {
                return model.db.close();
            }
        });
        
        await Promise.all(closePromises.filter(Boolean));
        connections.clear();
        console.log('All database connections closed');
        process.exit(0);
    };

    process.on('SIGINT', cleanup);
    process.on('SIGTERM', cleanup);
}

module.exports.registerUser = async function(userData) {
    try {
        if (!userData || !userData.firstName || !userData.password) {
            throw new Error(`Username and password are required`);
        }

        if (userData.password !== userData.password2) {
            throw new Error('Passwords do not match');
        }

        // Get or create User model
        const User = await this.connect({ 
            table: 'User', 
            schema: userSchema 
        });

        // Hash password
        const hash = await bcrypt.hash(userData.password, 10);
        userData.password = hash;
        
        // Remove password2 before saving
        delete userData.password2;

        // Create and save user
        const newUser = new User(userData);
        await newUser.save();
        
        return `User ${userData.fullName} successfully registered`;
        
    } catch (err) {
        if (err.code === 11000) {
            throw new Error('User Name already taken');
        } else {
            throw new Error(`There was an error creating the user: ${err.message}`);
        }
    }
};

module.exports.checkUser = async function(userData) {
    // eslint-disable-next-line no-useless-catch
    try {
        // Input validation
        if (!userData || !userData.firstName || !userData.lastName || !userData.password) {
            throw new Error('Username and password are required');
        }

        // Get or create User model
        const User = await this.connect({ 
            table: 'User', 
            schema: userSchema 
        });

        // Find user
        const user = await User.findOne({ useremail: userData.useremail }).exec();
        
        if (!user) {
            throw new Error(`Unable to find user ${userData.userName}`);
        }

        // Compare password
        const isMatch = await bcrypt.compare(userData.password, user.password);
        
        if (!isMatch) {
            throw new Error(`Incorrect password for user ${userData.userName}`);
        }

        // Return user without password
        const userObj = user.toObject();
        delete userObj.password;
        return userObj;
        
    } catch (err) {
        throw err;
    }
};

// Alternative version using promises (if you prefer the original style)
module.exports.registerUserPromise = function(userData) {
    return new Promise((resolve, reject) => {
        this.registerUser(userData)
            .then(result => resolve(result))
            .catch(error => reject(error.message));
    });
};

module.exports.checkUserPromise = function(userData) {
    return this.checkUser(userData);
};

// Export schema for external use if needed
module.exports.userSchema = userSchema;

// Utility function to get User model directly
module.exports.getUserModel = function() {
    return this.connect({ 
        table: 'User', 
        schema: userSchema 
    });
};