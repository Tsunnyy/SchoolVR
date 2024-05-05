import React, { useEffect, useState } from "react";
import { Axiosinstance } from "../../../Axios";
import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom";

export const BlogListHead = () => {
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    if (query) {
      setSearchParams({ search: query });
    } else {
      setSearchParams({});
    }
  };
  useEffect(() => {
    setQuery(search || "");
    Axiosinstance.get("api/blog/category")
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(category);
  return (
    <div className="blog-list-head">
      <h4 className="blog-list-title">All Blogs</h4>
      <form onSubmit={handleSubmit} className="input-wrap">
        <img className="search-icon" src="/img/icon/search.svg" alt="back" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by keyword"
          className="search-input"
        />
      </form>
      <div className={`dropdown ${isActive ? "dropdown-active" : ""}`}>
        <button
          className="dropdown-btn"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <img className="dropdown-icon" src={"/img/menu.svg"} alt="dropdown" />
          View Categories
        </button>
        <ul className={`dropdown-list`}>
          {category.map((item, index) => {
            return (
              <li key={index} className="dropdown-item">
                <NavLink
                  to={"/blogs/category/" + item.slug}
                  className="dropdown-item-btn"
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
