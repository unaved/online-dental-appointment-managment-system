import axios from 'axios';



const httpClient = axios.create({
    baseURL: "http://localhost:5000"
 })

export default httpClient;



export const setAuthToken = token =>{    
    if(token){        
        httpClient.defaults.headers.common['x-auth-token'] = token;        
    } else {
        delete httpClient.defaults.headers.common['x-auth-token'];
    }
}

