
import { jwtDecode } from "jwt-decode"

export function setToken(token) {
    localStorage.setItem("token", token);
  }
  

export function getToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("token");
  }
  return null;
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function readToken() {
  const token = getToken();
  if (!token) {
    return null;
  }
  const cleanToken = token.trim();
  try {
    // Verify token structure first
    if (cleanToken.split('.').length !== 3) {
      throw new Error("Invalid JWT structure");
    }
    const decoded = jwtDecode(cleanToken);
    
    if (!decoded._id || !decoded.userName || !decoded.userFirstName) {
      throw new Error("Token missing required fields");
    }
    
    return decoded;
  } catch (err) {
    console.log("Token decoding failed:", err.message);
    console.log("Problematic token:", cleanToken);
    return null;
  }
}
export function isAuthenticated() {
  const token = readToken();
  return token !== null;
}

const url = "/.netlify/functions"

export async function authenticateUser(userData) {
  try {
    const res = await fetch(`${url}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (res.status === 200) {
      const data = await res.json();
      setToken(data.token);
      return true;
    } else {
      const err = await res.json();
      console.warn("[Auth] Login failed:", err.message);
      throw new Error(err.message || "Invalid credentials");
    }
  } catch (err) {
    console.error("[Auth] authenticateUser error:", err.message);
    throw err;
  }
}

export async function registerUser(data) {
  try {
    const res = await fetch(`${url}/add-client`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      console.log("[Auth] Registration successful");
      return true;
    } else {
      const error = await res.json();
      console.warn("[Auth] Registration failed:", error.message);
      throw new Error(error.message || "Registration failed");
    }
  } catch (err) {
    console.error("[Auth] registerUser error:", err.message);
    throw err;
  }
}