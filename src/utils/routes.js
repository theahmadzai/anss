export const STAFF_BASE_PATH = "/staff";

const staffPaths = {
    profile: "/",
    login: "/login",
    logout: "/logout",
};

/** @type {{[K in keyof typeof staffPaths]: string}} */
const fullStaffPaths = Object.entries(staffPaths).reduce((acc, [key, value]) => {
    acc[key] = `${STAFF_BASE_PATH}${value}`;
    return acc;
}, {});


export const CLIENT_BASE_PATH = "/client";

const clientPaths = {
    register: "/register",
};

/** @type {{[K in keyof typeof clientPaths]: string}} */
const fullClientPaths = toFullPath(CLIENT_BASE_PATH, clientPaths);

/**
 * convert object of routes to full paths
 * @param {string} base base path to prepend
 * @param { {[K in keyof typeof routes]: string} } routes object of routes
 * @returns { {[K in keyof typeof routes]: string} } routes object with full paths
 */
function toFullPath(base, routes) {
    const fullPaths = routes;
    for(const [key, value] of Object.entries(fullPaths))
        fullPaths[key] = `${base}${value}`;

    return fullPaths;
}

const relativeRoutes = {
    staff: staffPaths,
    client: clientPaths,
};
export { relativeRoutes };


export default {
    staff: fullStaffPaths,
    client: fullClientPaths,
};
