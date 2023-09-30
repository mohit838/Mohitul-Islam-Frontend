/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import API from "../../../service/API";

export function useGenericPagination(url) {
  const [collection, setCollection] = useState([]);
  const [currentPages, setCurrentPages] = useState();
  const [totalElements, setTotalElements] = useState();
  const [isActive, setIsActive] = useState(true);
  const paginate = async (e) => {
    let p = e - 1;
    console.log("mod p", p);
    let { data } = await API.post(`${url}?page=${p}`, {
      isActive: isActive,
    });
    setCurrentPages(data.currentPage);
    setTotalElements(data.totalElements);
    setCollection(data.model);
  };

  const fetchData = async (value) => {
    let { data } = await API.post(`${url}`, value);
    setTotalElements(data.totalElements);
    setCurrentPages(data.currentPage);
    setCollection(data.model);
  };
  const setActive = (value) => {
    setIsActive(value);
    fetchData({
      isActive: value,
    });
  };
  useEffect(() => {
    fetchData({
      query: "",
      isActive: isActive,
    });
  }, []);
  return {
    fetchData,
    paginate,
    collection,
    totalElements,
    currentPages,
    isActive,
    setActive,
  };
}
