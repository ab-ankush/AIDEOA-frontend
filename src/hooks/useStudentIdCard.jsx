import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useStudentIdCard = (userType) => {
    const [data, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const getIdCard=async(category)=>{
        setLoading(true);
        let res;
           try {
            if(category==='Employees')
           {  res = await axios.get(
               `${import.meta.env.VITE_API_BACKEND_URL}/api/employeeidcard`,{ 
               }
             );}
             else{
               res = await axios.get(
                `${import.meta.env.VITE_API_BACKEND_URL}/api/studentidcard`,{ 
                })
             }
             if (res.status === 200) setDataList(res.data)
             setLoading(false);
           } catch (error) {
             setLoading(false);
             console.log(error)
             toast.error(error.response.data.error)
           }
         }
    const approveIdCard=async(id,status)=>{
        setLoading(true);
        try {
          const res = await axios.put(
            `${import.meta.env.VITE_API_BACKEND_URL}/api/studentidcard/approve`,
            {
              id:id,
              status:status
            }
      
          );
          if (res.status === 200) toast.success(res.data.message)
          getIdCard(userType)
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error)
          toast.error(error.response.data.error)
        }
    }
   
       useEffect(()=>{
        getIdCard(userType)
       },[userType])
  return {data,loading,approveIdCard,getIdCard}
}
export default useStudentIdCard