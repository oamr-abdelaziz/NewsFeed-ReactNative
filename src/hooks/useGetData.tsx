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
      console.log(data);
      setLoading(false);
        if(data.status=='ok'){
          console.log(data.articles);
          
          setData(data.articles);
          setError(null);
        }
        else{
          setError(data.message)
        }
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
  useEffect(()=>{
    console.log(loading,"loaaading..1");

  },[loading])

  const refresh=()=>{
    getData();
  }
  return {data,loading,error,refresh}

};
export default useGetData;
