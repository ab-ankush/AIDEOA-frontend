import React, { createContext, useState } from 'react';
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // State to store authentication information
  const [authState, setAuthState] = useState({
    accessToken: null,
    refreshToken: null,
    user: null,
  });

  // Function to refresh access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken"); // Get refresh token from local storage

    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    // Send request to refresh token API
    const response = await axios.post("http://localhost:4000/api/auth/refresh-token", { refreshToken });

    const { accessToken } = response.data;

    // Store the new access token in localStorage
    localStorage.setItem("accessToken", accessToken);

    return accessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
};

  // Function to handle login and set the auth state
  const handleLogin = (loginResponse) => {
    console.log("loginResponse",loginResponse);
    const { accessToken, refreshToken, user } = loginResponse;
    console.log("authStateauthState:",authState)
    // Save tokens and user info in the state
    setAuthState({
      accessToken,
      refreshToken,
      user,
    });

    // You might want to save the tokens in localStorage to persist login
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
  };

  // Function to handle logout
  const handleLogout = () => {
    setAuthState({
      accessToken: null,
      refreshToken: null,
      user: null,
    });

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        handleLogin,
        handleLogout,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
