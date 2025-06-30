import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Eye, EyeOff, User, Mail, Lock, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { navigate, Link } from 'gatsby';
import { registerUser } from '../lib/authenticate';

export default function Register() {
  const [submitError, setSubmitError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  // Input sanitization function
  const sanitizeInput = (value) => {
    if (typeof value !== 'string') {
      return '';
    }
    // Remove HTML tags, script tags, and potentially dangerous characters
    return value
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/[<>]/g, '') // Remove remaining < >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove on* event handlers
      .trim();
  };

  // Password strength checker
  const checkPasswordStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    return strength;
  };

  const password = watch('password');
  React.useEffect(() => {
    setPasswordStrength(checkPasswordStrength(password));
  }, [password]);

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 4) return 'Medium';
    return 'Strong';
  };

  const onSubmit = async (data) => {
    setSubmitError(null);

    // Sanitize all inputs
    const sanitizedData = {
      firstName: sanitizeInput(data.firstName),
      lastName: sanitizeInput(data.lastName),
      email: sanitizeInput(data.email),
      password: data.password, // Don't sanitize password as it might remove valid characters
      password2: data.password2
    };

    // Additional validation
    if (Array.isArray(data.firstName) || typeof data.firstName === 'object') {
      setSubmitError("Invalid input format detected");
      return;
    }

    if (sanitizedData.password !== sanitizedData.password2) {
      setSubmitError("Passwords do not match");
      return;
    }

    try {
      // Your registration logic here
      await registerUser(sanitizedData);
      navigate("/login");
    } catch (err) {
      setSubmitError(err.message);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h2>
            <p className="text-gray-600">Join us and start your journey today</p>
          </div>

          {/* Form Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <div className="space-y-6">
              {/* First Name */}
              <div className="relative">
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="firstName"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                      errors.firstName 
                        ? 'border-red-500 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/50'
                    }`}
                    placeholder="Enter your first name"
                    {...register('firstName', { 
                      required: 'First name is required',
                      minLength: { value: 2, message: 'Minimum 2 characters' },
                      maxLength: { value: 30, message: 'Maximum 30 characters' },
                      validate: (value) => {
                        if (Array.isArray(value) || typeof value === 'object') {
                          return 'Invalid input format';
                        }
                        if (/<|>/.test(value)) {
                          return 'Invalid characters detected';
                        }
                        return true;
                      }
                    })}
                  />
                </div>
                {errors.firstName && (
                  <div className="flex items-center mt-2 text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <p className="text-sm">{errors.firstName.message}</p>
                  </div>
                )}
              </div>

              {/* Last Name */}
              <div className="relative">
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="lastName"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                      errors.lastName 
                        ? 'border-red-500 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/50'
                    }`}
                    placeholder="Enter your last name"
                    {...register('lastName', { 
                      required: 'Last name is required',
                      minLength: { value: 2, message: 'Minimum 2 characters' },
                      maxLength: { value: 30, message: 'Maximum 30 characters' },
                      validate: (value) => {
                        if (Array.isArray(value) || typeof value === 'object') {
                          return 'Invalid input format';
                        }
                        if (/<|>/.test(value)) {
                          return 'Invalid characters detected';
                        }
                        return true;
                      }
                    })}
                  />
                </div>
                {errors.lastName && (
                  <div className="flex items-center mt-2 text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <p className="text-sm">{errors.lastName.message}</p>
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/50'
                    }`}
                    placeholder="example@mail.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { 
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      },
                      validate: (value) => {
                        if (Array.isArray(value) || typeof value === 'object') {
                          return 'Invalid input format';
                        }
                        if (/<|>/.test(value)) {
                          return 'Invalid characters detected';
                        }
                        return true;
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <p className="text-sm">{errors.email.message}</p>
                  </div>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                      errors.password 
                        ? 'border-red-500 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/50'
                    }`}
                    placeholder="Create a strong password"
                    {...register('password', { 
                      required: 'Password is required',
                      minLength: { value: 8, message: 'Minimum 8 characters' },
                      validate: (value) => {
                        if (Array.isArray(value) || typeof value === 'object') {
                          return 'Invalid input format';
                        }
                        return true;
                      }
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">Password strength:</span>
                      <span className={`text-xs font-medium ${
                        passwordStrength <= 2 ? 'text-red-600' : 
                        passwordStrength <= 4 ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {getPasswordStrengthText()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                        style={{ width: `${(passwordStrength / 6) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
                
                {errors.password && (
                  <div className="flex items-center mt-2 text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <p className="text-sm">{errors.password.message}</p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label htmlFor="password2" className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password2"
                    type={showConfirmPassword ? 'text' : 'password'}
                    className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
                      errors.password2 
                        ? 'border-red-500 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/50'
                    }`}
                    placeholder="Confirm your password"
                    {...register('password2', { 
                      required: 'Please confirm your password',
                      validate: value => 
                        value === watch('password') || 'Passwords do not match'
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(prev => !prev)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password2 && (
                  <div className="flex items-center mt-2 text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <p className="text-sm">{errors.password2.message}</p>
                  </div>
                )}
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <p className="text-red-700 text-sm font-medium">{submitError}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit(onSubmit)}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-200 transform ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Create Account
                  </div>
                )}
              </button>
            </div>
            
            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Already have an account? 
                <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500 ml-1 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 flex items-center justify-center">
              <Shield className="h-4 w-4 mr-1" />
              Your information is secure and encrypted
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <SEO title="register with ANSS" pathname="/register" />;
