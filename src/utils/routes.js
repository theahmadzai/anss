/**
 * convert object of routes to full paths
 * @param {string} base base path to prepend
 * @param { {[K in keyof typeof routes]: string} } routes object of routes
 * @returns { {[K in keyof typeof routes]: string} } routes object with full paths
 */
function toFullPath(base, routes) {
    const fullPaths = {};
    for(const [key, value] of Object.entries(routes))
        fullPaths[key] = `${base}${value}`;

    return fullPaths;
}

export const STAFF_BASE_PATH = "/staff";

const staffPaths = {
    profile: "/",
    login: "/login",
    logout: "/logout",
};

/** @type {{[K in keyof typeof staffPaths]: string}} */
const fullStaffPaths = toFullPath(STAFF_BASE_PATH, staffPaths);


export const CLIENT_BASE_PATH = "/client";

const clientPaths = {
    register: "/",
};

/** @type {{[K in keyof typeof clientPaths]: string}} */
const fullClientPaths = toFullPath(CLIENT_BASE_PATH, clientPaths);


export const relativeRoutes = {
    staff: staffPaths,
    client: clientPaths,
};


export default {
    staff: fullStaffPaths,
    client: fullClientPaths,
};
