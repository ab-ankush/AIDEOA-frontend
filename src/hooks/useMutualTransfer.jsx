import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useMutualTransfer = (designationType, searchTerm) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (designationType, searchTerm) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/transferrequest`,
        {
          params: {
            designationType: designationType || "",
            searchTerm: searchTerm || "",
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
  const acceptPair=async(formData)=>{
    console.log(formData)
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/transferpair`,
       formData
      );
      if (res.status === 200) toast.success(res.data.message)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
      toast.error(error.response.data.error)
    }
  }
  useEffect(() => {
    fetchData(designationType, searchTerm);
  }, [designationType, searchTerm]);

  return { dataList, loading,acceptPair };
};

export default useMutualTransfer;
