import React from "react";
import { Image } from "../components/Image";

export const SchoolVrForIndividual = () => {
  return (
    <div className="text-center text-dark svs-banner">
      <div className="content">
        <p>SchoolVR for </p>
        <h3>Individual</h3>
        <p className="text-justify">
          SVI, or SchoolVR for Individuals, is a cutting-edge Virtual Reality
          platform meticulously crafted for independent learners. Offering an
          extensive spectrum of subjects encompassing Biology, Chemistry,
          Physics, History, Space, and Geography, SVI opens up exciting
          possibilities for students keen on exploring these domains. It serves
          as an ideal platform for those with a curious mind, providing an
          engaging and interactive approach to learning. SVI is designed to
          break free from the constraints of traditional 2D videos and ebooks,
          offering a significant upgrade in the learning experience. This
          platform empowers students to embark on a journey of exploration and
          education from the comfort of their homes. With SVI, learning becomes
          an immersive and exciting adventure, making it an invaluable resource
          for anyone seeking to expand their knowledge beyond the confines of
          formal education.
        </p>
      </div>
      <Image
        mobile="students/page/svi-m.webp"
        desktop="students/page/svi.webp"
      />
      <button class="btn">book a demo</button>
    </div>
  );
};
