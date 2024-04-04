import React from "react";

export const Image = ({ mobile = "", desktop = "" }) => {
  return (
    <picture>
      <source media="(min-width:768px)" srcSet={"/img/" + desktop} />
      <img className="hero-banner" src={"/img/" + mobile} alt="bannerVR" />
    </picture>
  );
};
