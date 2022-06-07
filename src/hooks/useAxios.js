import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (dataUrl) => {
  const [data, setData] = useState([]);
  const [errMsg, setErrMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getItems = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setErrMsg(error.message);
      } finally {
          setTimeout(() => {
              setIsLoading(false);
          }, 1000);
      }
    };
    getItems(dataUrl);
  }, [dataUrl]);

  useEffect(() => {
    setTimeout(() => {
      console.log(data)
    }, 1000);
  }, [])
  

  return { data, errMsg, isLoading };
};

export default useAxios;
