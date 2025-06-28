// import { getToken } from "./authenticate";


// async function makeRequest(url, method = "GET") {
//   const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
//   const token = getToken()?.trim(); // Trim whitespace

//   if (!token) {
//     console.error("No token found in localStorage");
//     return [];
//   }

//   // Verify token structure
//   if (token.split('.').length !== 3) {
//     console.error("Malformed token structure");
//     return [];
//   }

//   try {
//     const res = await fetch(fullUrl, {
//       method,
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `jwt  ${token}`,
//       },
//       credentials: 'same-origin'
//     });

//     console.log("Response status:", res.status);
    
//     if (res.status === 401) {
//       // Specific 401 handling
//       const errorBody = await res.text();
//       console.error("401 Details:", errorBody);
//       removeToken(); // Clear invalid token
//       return [];
//     }

//     if (!res.ok) {
//       throw new Error(`Request failed with status ${res.status}`);
//     }

//     return await res.json();
//   } catch (err) {
//     console.error("Request failed:", err);
//     return [];
//   }
// }

// // export async function addToFavourites(id) {
// //   return makeRequest(`/favourites/${id}`, "PUT");
// // }

// // export async function removeFromFavourites(id) {
// //   return makeRequest(`/favourites/${id}`, "DELETE");
// // }

// // export async function getFavourites() {
// //   return makeRequest("/favourites");
// // }

// // export async function addToHistory(id) {
// //   return makeRequest(`/history/${id}`, "PUT");
// // }

// // export async function removeFromHistory(id) {
// //   return makeRequest(`/history/${id}`, "DELETE");
// // }

// // export async function getHistory() {
// //   return makeRequest("/history");
// // }