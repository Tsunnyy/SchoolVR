import React, { useEffect, useState } from "react";
import { ListCard } from "../../components/ListCard";
import { Axiosinstance } from "../../../Axios";

export const BlogCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    Axiosinstance.get("api/blog/category").then((res) => {
      console.log(res);
      setCategoryData(
        res.data.data
          .filter((e) => e.showInHome)
          .map((data, index) => {
            return {
              key: index,
              content: data.name,
              url: `/blogs/category/${data.slug}`,
            };
          })
      );
    });
  }, []);
  if (categoryData.length === 0) return null;
  console.log(categoryData);
  return (
    <ListCard
      img="category"
      extraClass="category"
      title="Category"
      data={categoryData}
    />
  );
};
