import React, { useEffect, useState } from "react";
import { ListCard } from "../../components/ListCard";
import { Axiosinstance } from "../../../Axios";

export const BlogTrending = () => {
  const [trendingData, setTrendingData] = useState([]);
  useEffect(() => {
    Axiosinstance.get("api/blog?trending=true")
      .then((res) => {
        console.log(res.data);
        setTrendingData(
          res.data.map((data) => {
            return {
              key: data.id,
              content: data.title,
              url: `/blogs/${data.slug}`,
            };
          })
        );
      })
      .catch((err) => console.log(err));
    console.log(trendingData);
  }, []);
  if (trendingData.length === 0) return null;
  return (
    <ListCard
      img="trend"
      extraClass="trending"
      title="Trending blog"
      data={trendingData}
    />
  );
};
