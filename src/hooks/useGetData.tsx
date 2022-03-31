import React, {useCallback, useEffect, useState} from 'react';
import { fetchData } from '../APIsCalls/fetchData';

const useGetData = (url:String) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData=useCallback(() => {
    setLoading(true);
    
    fetchData(url)
    .then((data)=>{
        console.log('data',data.articles);
        setData(data.articles);
        setLoading(false);
    })
    .catch((err)=>{
        console.log('err',err);
        setError(err)
        setLoading(false);
    });
    },
    [url],
  )

  useEffect(()=>{
    getData();
  },[getData])
  
  return {data,loading,error}

};
export default useGetData;
