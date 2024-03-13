import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        setTimeout(() => {
            fetch(url)
            .then((res)=>{
                if(!res.ok)
                {
                    throw Error("fetching is not successful");
                }
                return res.json();
            })
            .then((data)=>{
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((error)=>{
                setError(error.message);
                setIsLoading(false);
            })
        }, 0);
    }, [url])

    const fetchNewdata=()=>{
        fetch(url)
        .then(res => res.json())
        .then(quote => {
            setQuote(quote.content);
            setAuthor(quote.author);
        });
    }
    const refetch = () => {
        setIsLoading(true);
        fetchNewdata();
    };
    return { data, isLoading, error,refetch };
}

export default useFetch