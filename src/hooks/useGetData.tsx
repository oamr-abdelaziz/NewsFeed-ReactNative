import React, {useCallback, useEffect, useState} from 'react';
import { fetchData } from '../APIsCalls/fetchData';

const useGetData = (url:String) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData=useCallback(() => {
    setLoading(true);
    fetchData(url)
    .then((data)=>{      
      setLoading(false);
        if(data.status=='ok'){
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

  const refresh=()=>{
    getData();
  }
  return {data,loading,error,refresh}

};
export default useGetData;
