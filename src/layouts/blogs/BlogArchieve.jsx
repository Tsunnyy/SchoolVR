import React, { useEffect, useState } from "react";
import { ListCard } from "../../components/ListCard";
import { Axiosinstance } from "../../../Axios";

export const BlogArchieve = () => {
  return null;
  const [archivesData, setArchivesData] = useState([]);
  useEffect(() => {
    Axiosinstance.get("api/blog/archive").then((res) => {
      setArchivesData(
        res.data.data.map((data, index) => {
          return {
            key: index,
            content: data.slug,
            url: `/blogs?archive=${data.slug}`,
          };
        })
      );
    });
  }, []);
  if (archivesData.length === 0) return null;
  return (
    <ListCard
      img="calendar"
      extraClass="archive"
      title="Archive"
      data={archivesData}
    />
  );
};
