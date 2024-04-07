import React from "react";
import { Link, NavLink } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { EffectFade } from "swiper/modules";

let productData = [
  {
    id: 1,
    name: "BioVerse",
    class: "bio-verse",
    video: true,
    path: "/BioVerse",
    content:
      "Uncover the wonders of life with BioVerse, where students engage in immersive journeys through biological structures and processes.",
  },
  {
    id: 2,
    name: "ChemVerse",
    class: "chem-verse",
    path: "/ChemVerse",
    video: true,
    content:
      "Ignite a passion for chemistry in ChemVerse, offering dynamic virtual labs and simulations for hands-on experimentation and learning.",
  },
  {
    id: 3,
    name: "AtomVerse",
    class: "atom-verse",
    path: "/AtomVerse",
    video: true,
    content:
      "Dive into the microscopic world with AtomVerse, exploring the fundamental building blocks of matter through interactive 3D experiences.",
  },
  {
    id: 4,
    name: "SpaceVerse",
    class: "space-verse",
    path: "/SpaceVerse",
    video: true,
    content:
      "Embark on a cosmic adventure with SpaceVerse, exploring the vastness of the universe and celestial phenomena in an interactive virtual space.",
  },
  {
    id: 5,
    name: "GeoVerse",
    class: "geo-verse",
    path: "/GeoVerse",
    video: true,
    content: "Coming Soon",
  },
];

export const Product = () => {
  return (
    <div className="product-section full-height">
      <span className="line top"></span>
      <span className="line bottom"></span>

      <div className="product-item">
        <Swiper
          modules={[Pagination, EffectFade]}
          slidesPerView={1}
          speed="700"
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                '"><img class="icon" src="/img/product/icon/verse-' +
                index +
                '.svg" alt="verse" /></span>'
              );
            },
          }}
        >
          {productData.map((product) => (
            <SwiperSlide key={product.id}>
              <div className={`product-content product-${product.class}`}>
                <div className="vr-video">
                  {product.video ? (
                    <>
                      <div className="video">
                        <video
                          loop
                          src={`/videos/${product.name}.mp4`}
                          autoPlay
                          muted
                          playsInline
                        ></video>
                      </div>
                    </>
                  ) : (
                    <>
                      <picture>
                        <source
                          media="(min-width:768px)"
                          srcSet="/img/vr.webp"
                        />
                        <img
                          className="product-banner"
                          src="/img/vr-m.webp"
                          alt="bannerVR"
                        />
                      </picture>
                    </>
                  )}
                </div>
                <h4 className="section-title">{product.name}</h4>
                <span className="section-sub-title">{product.content}</span>
                <Link preventScrollReset={true} to={product.path}>
                  <span className="btn btn-secondary">Know More</span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
