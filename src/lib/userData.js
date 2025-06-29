import { getToken } from "./authenticate";

export const getUserDatabyID = async (userId) => {

  const token = getToken()?.trim(); 

  if (!token) {
    console.error("No token found in localStorage");
    return [];
  }

  if (token.split('.').length !== 3) {
    console.error("Malformed token structure");
    return [];
  }
  try {
    const response = await fetch(`/.netlify/functions/get-client?id=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
