import { useReducer } from "react";
import { createContext, useEffect } from "react"

const INITIAL_STATE = {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
}

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) =>{
    
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,
            }
        case "LOGIN_SUCCESS":  
           localStorage.setItem('token',action.token);   
            return {
                user: action.payload,
                loading: false,
                error: false,
            }
        case "LOGIN_FAILURE":
            localStorage.removeItem('token');
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        case "LOGOUT": 
            localStorage.removeItem('token');
            return {
                user: null,
                loading: false,
                error: null,
            }
        default:
            return state;
    }

}

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user));
    },[state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}