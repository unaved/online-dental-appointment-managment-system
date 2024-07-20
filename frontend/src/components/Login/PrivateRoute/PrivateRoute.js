import React from 'react';
import { Navigate, Route, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import jwt_decode from "jwt-decode";
import { AuthContext } from '../../Context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { state } = useLocation();
  
  
  return isLoggedIn() ? children : <Navigate to="/sign-in"/>
};

export default PrivateRoute;
const isLoggedIn = () => {
  const token = localStorage.getItem('user');
  
  if(token=='null' || !token ) {
    return false;
  } else {
    return true;
  }
  
  
}