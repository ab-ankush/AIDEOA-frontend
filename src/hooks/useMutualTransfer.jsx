import axios from "axios";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    fetchData(designationType, searchTerm);
  }, [designationType, searchTerm]);

  return { dataList, loading };
};

export default useMutualTransfer;
