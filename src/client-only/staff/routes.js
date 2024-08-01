export const BASE_STAFF_PATH = "/staff";

export const staffPaths = {
  profile: "/",
  login: "/login",
  logout: "/logout",
};

/** @type {{[K in keyof typeof staffPaths]: string}} */
export const fullStaffPaths = Object.entries(staffPaths).reduce((acc, [key, value]) => {
  acc[key] = `${BASE_STAFF_PATH}${value}`;
  return acc;
}, {});
