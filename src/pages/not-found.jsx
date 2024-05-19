import React, { useContext, useEffect } from "react";
import { MyContext } from "../mycontext";

export const NotFound = () => {
  const { setExtraClass } = useContext(MyContext);

  useEffect(() => {
    setExtraClass("svs-page");
  }, []);
  return (
    <div className="blog-page">
      <div className="not-found">
        <img src="/img/not-found.webp" alt="" />
      </div>
    </div>
  );
};
