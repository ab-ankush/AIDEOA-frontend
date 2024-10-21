import axios from 'axios';
import  { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useQuery = () => {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async ( ) => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/query`,
       
        );
        if (res.status === 200) setDataList(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error(error);
      }
    };
    const deleteQuery = async (id) => {
      try {
        const res = await axios.delete(
          `${import.meta.env.VITE_API_BACKEND_URL}/api/mission/${id}`
        );
        if (res.status === 200) {
      fetchData()
        toast.success("Mission Deleted")
        }
      } catch (error) {
        
          toast.error(error?.response?.data?.message)
        throw new Error("Error deleting mission: " + error.message);
      }
    };
    useEffect(() => {
      fetchData( );
    }, [ ]);
    return {dataList,loading,deleteQuery}
  }

export default useQuery