import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';




const useEducation = (searchTerm) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10); // Default limit per page

  const fetchData = async (value, page = currentPage) => {
    setLoading(true);
    try {
      let res;
      const endpoint =
        value === "1"
          ? `${import.meta.env.VITE_API_BACKEND_URL}/api/education/files`
          : `${import.meta.env.VITE_API_BACKEND_URL}/api/education/videos`;

      res = await axios.get(endpoint, {
        params: {
          searchTerm: searchTerm || "",
          page,
          limit,
        },
      });

      if (res.status === 200) {
        setDataList(res.data.files || res.data.videos);
        setCurrentPage(page);
        setTotalPages(res.data.totalPages || 1);
      }
      setLoading(false);
      return res.data;
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  const deleteFile = async (id, value) => {
    try {
      let res;
      const endpoint =
        value === "1"
          ? `${import.meta.env.VITE_API_BACKEND_URL}/api/education/files/${id}`
          : `${import.meta.env.VITE_API_BACKEND_URL}/api/education/videos/${id}`;

      res = await axios.delete(endpoint);

      if (res.status === 200) {
        fetchData(value, currentPage); // Fetch the current page after deletion
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      throw new Error("Error deleting file: " + error.message);
    }
  };

  const setPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      fetchData("1", page); // Adjust value as needed ("1" for files or "2" for videos)
    }
  };

  return {
    dataList,
    loading,
    deleteFile,
    fetchData,
    currentPage,
    totalPages,
    setPage,
    limit,
    setLimit,
  };
};

export default useEducation;

