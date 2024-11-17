import axios from "axios";
import { limit } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useStudentNews = () => {
  const [dataList, setDataList] = useState([]); // Store the list of news items
  const [totalPages, setTotalPages] = useState(1); // Track total pages for pagination
  const [loading, setLoading] = useState(false); // Track loading state

  const fetchData = async (currentPage) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/studentnews`,
        {
          params: {
            page: currentPage, // Pass current page for pagination
            limit: 8, // Number of items per page
          },
        }
      );

      if (res.status === 200) {
        const { news, pagination } = res.data; // Destructure response data
        setDataList(news); // Set the news list
        setTotalPages(pagination.totalPages); // Set the total pages
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  const deletenews = async (id, currentPage) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BACKEND_URL}/api/studentnews/${id}`
      );
      if (res.status === 200) {
        fetchData(currentPage); // Fetch updated data for the current page
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      throw new Error("Error deleting news: " + error.message);
    }
  };

  return { dataList, totalPages, loading, deletenews, fetchData };
};


export default useStudentNews;

