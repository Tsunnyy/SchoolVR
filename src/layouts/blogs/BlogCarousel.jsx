import React, { useEffect, useState } from "react";
import { Axiosinstance } from "../../../Axios";
import { NavLink, useLocation, useParams, useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

export const BlogCarousel = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  let url = "/api/blog";

  if (slug && search) {
    url = "/api/blog/category/" + slug + "?search=" + search;
  } else if (slug) {
    url = "/api/blog/category/" + slug;
  } else if (search) {
    url = "/api/blog?search=" + search;
  }

  useEffect(() => {
    setLoading(true);
    Axiosinstance.get(url)
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [slug, search]);

  const leftArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
        <path d="m27 33l-9-9l9-9" />
      </g>
    </svg>
  );

  const rightArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
      <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
        <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
        <path stroke-linecap="round" d="m21 33l9-9l-9-9" />
      </g>
    </svg>
  );


  return (
    <div className="blog-carousel">
      <div className="text-center">

        <h2>Innovations & Research</h2>
        <p className="desc">
          Get the latest updates from our blog and stay updated in the world of VR
        </p>
      </div>
      <div className="blog-carousel-body">
        <div className="swiper-container">
          <Swiper
            className="bannerSwiper blogsPageSlider"
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // 640: {
              //   slidesPerView: 2,
              //   spaceBetween: 20,
              // },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}
          >
            {blogs.length ? (
              blogs.map((blog) => (
                <>
                  <SwiperSlide key={blog.id}>
                    <div className="blogsCards">
                      <img src={blog.banner} alt={blog.banner} />
                      <div className="blogsCardsData">
                        <span>{new Date(blog.updatedAt).toLocaleDateString(undefined, {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}</span>
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                        <NavLink to={`/blogs/${blog.slug}`} className="read-more">
                          Read
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0.6875C6.55373 0.6875 5.13993 1.11637 3.9374 1.91988C2.73486 2.72339 1.7976 3.86544 1.24413 5.20163C0.690668 6.53781 0.545857 8.00811 0.828011 9.4266C1.11017 10.8451 1.80661 12.148 2.82928 13.1707C3.85196 14.1934 5.15492 14.8898 6.57341 15.172C7.99189 15.4541 9.46219 15.3093 10.7984 14.7559C12.1346 14.2024 13.2766 13.2651 14.0801 12.0626C14.8836 10.8601 15.3125 9.44628 15.3125 8C15.3088 6.06175 14.5372 4.20394 13.1666 2.83339C11.7961 1.46283 9.93826 0.691217 8 0.6875ZM8 14.1875C6.77623 14.1875 5.57994 13.8246 4.56241 13.1447C3.54488 12.4648 2.75182 11.4985 2.2835 10.3679C1.81518 9.23724 1.69265 7.99314 1.93139 6.79288C2.17014 5.59262 2.75944 4.49011 3.62478 3.62478C4.49012 2.75944 5.59262 2.17014 6.79288 1.93139C7.99314 1.69264 9.23724 1.81518 10.3679 2.2835C11.4985 2.75181 12.4648 3.54488 13.1447 4.56241C13.8246 5.57994 14.1875 6.77623 14.1875 8C14.1856 9.64046 13.5331 11.2132 12.3732 12.3732C11.2132 13.5331 9.64046 14.1856 8 14.1875ZM10.5313 6.03125V9.40625C10.5313 9.55543 10.472 9.69851 10.3665 9.804C10.261 9.90949 10.1179 9.96875 9.96875 9.96875C9.81957 9.96875 9.67649 9.90949 9.571 9.804C9.46552 9.69851 9.40625 9.55543 9.40625 9.40625V7.38828L6.43203 10.3695C6.32452 10.4735 6.18081 10.5316 6.03125 10.5316C5.88169 10.5316 5.73799 10.4735 5.63047 10.3695C5.52485 10.2629 5.46559 10.1189 5.46559 9.96875C5.46559 9.81865 5.52485 9.67461 5.63047 9.56797L8.61172 6.59375H6.59375C6.44457 6.59375 6.3015 6.53449 6.19601 6.429C6.09052 6.32351 6.03125 6.18043 6.03125 6.03125C6.03125 5.88207 6.09052 5.73899 6.19601 5.6335C6.3015 5.52801 6.44457 5.46875 6.59375 5.46875H9.96875C10.1179 5.46875 10.261 5.52801 10.3665 5.6335C10.472 5.73899 10.5313 5.88207 10.5313 6.03125Z"
                              fill="#292D32"
                            />
                          </svg>
                        </NavLink>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))
            ) : (
              <div className="no-data">
                <img src="/img/no-data.webp" alt="" />
                <p>No Blogs Found</p>
                <span>please try searching something else</span>
              </div>
            )}
            <div className="swiper-button-prev">{leftArrow}</div>
            <div className="swiper-button-next">{rightArrow}</div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
