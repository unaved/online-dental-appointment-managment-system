import axios from "axios";
import { useEffect, useState } from "react";
import httpClient from "../../helper/axios";

const useFetch = (url) =>{
    
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() =>{
        const fetchData = async() =>{
            setLoading(true);
            try{
                const res = await httpClient.get(url);
                setData(res.data);
            }catch(err){
                setError(err);
                setLoading(false)
            }
            setLoading(false);
        }
        fetchData();
    },[url])
    const reFetchData = async() =>{
        setLoading(true);
        try{
            const res = await httpClient.get(url);
            setData(res.data);
        }
        catch(err){
            setError(err);
            setLoading(false);
        }
        setLoading(false);
    }

    return {data, loading, error, reFetchData}
}

export default useFetch;