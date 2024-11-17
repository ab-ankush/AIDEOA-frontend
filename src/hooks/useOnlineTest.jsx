import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useOnlineTest = (searchTerm) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10); // Default limit per page

  const fetchData = async (searchTerm, page = currentPage) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/onlinetest`,
        {
          params: {
            searchTerm: searchTerm || "",
            page,
            limit, // Include limit for backend pagination
          },
        }
      );

      if (res.status === 200) {
        const { quizzes, pagination } = res.data;
        setDataList(quizzes);
        setCurrentPage(pagination?.currentPage || 1);
        setTotalPages(pagination?.totalPages || 0);
        setTotalItems(pagination?.totalQuizzes || 0);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  const deleteTest = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/onlinetest/${id}`
      );

      if (res.status === 200) {
        toast.success(res.data.message);
        // Refresh the current page data after deletion
        fetchData(searchTerm, currentPage);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete the test");
      throw new Error("Error deleting test: " + error.message);
    }
  };

  return {
    dataList,
    loading,
    deleteTest,
    fetchData,
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
    setLimit, // Allow changing the limit dynamically
  };
};


export default useOnlineTest