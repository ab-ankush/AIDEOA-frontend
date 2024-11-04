import axios from 'axios';
import { useEffect, useState } from 'react'

const useMembers = () => {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async (userType,searchTerm) => {
        
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/members`,
          {
            params: {
                userType: userType,
                searchTerm:searchTerm
            },
          }
        );
        if (res.status === 200) setDataList(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error(error);
      }
    };


    return {dataList,loading,fetchData}
  }
  


export default useMembers