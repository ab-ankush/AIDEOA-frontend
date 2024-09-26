import  { createContext, useEffect, useState } from 'react';
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';


export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
const params= useLocation()
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authToken")
      ? jwtDecode(localStorage.getItem("authToken"))
      : null
  );
    const [loading, setLoading] = useState(true);
    const refreshAccessToken = async () => {
      console.log("Updating token");
      const refreshToken = authToken.refreshToken
      try {
        const resp = await axios.post("http://localhost:4000/api/auth/refresh-token", { refreshToken });
        const { accessToken } = resp.data;
        if (resp.status === 200) {
          handleLogin({accessToken,refreshToken});
        } else {
          handleLogout();
        }
      } catch (error) {
        console.log(error);
        handleLogout();
      }
  
      if (loading) {
        setLoading(false);
      }
    };
  const handleLogin = (token) => {
    console.log("loginResponse",token);
    setAuthToken(token);
    setUser(jwtDecode(token.accessToken))
    localStorage.setItem("authToken", JSON.stringify(token));
  };
  console.log(params)
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);

    const paramValue = urlParams.get('way');
    console.log(paramValue)
    if(paramValue==='google')
    {
      const accessToken = Cookies.get("accessToken");
      const refreshToken = Cookies.get("refreshToken");
      handleLogin({accessToken,refreshToken})
    }
   
  },[])
  const handleLogout = () => {
    setUser(null);
    setAuthToken(null);
    localStorage.removeItem("authToken");
  };
  
  useEffect(() => {
    if (authToken) {
      refreshAccessToken();
    }
  }, []);

  useEffect(() => {
    const time = 1000 * 60 * 1;
    if (authToken) {
      const interval = setInterval(() => {
        refreshAccessToken();
      }, time);
      return () => clearInterval(interval);
    }
  }, [authToken, loading]);

  return (
    <AuthContext.Provider
      value={{
        authToken,
        handleLogin,
        handleLogout,
        refreshAccessToken,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
