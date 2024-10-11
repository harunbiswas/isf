'use client'

// utils/auth.js
export const isLoggedIn = () => {
  if (typeof window !== "undefined") {
    return !!localStorage.getItem("token");
  }
  return false; // or handle it differently if necessary
};
