import React, { useContext } from "react";
import { Image } from "../components/Image";
import { MyContext } from "../mycontext";

export const SchoolVrForSchool = () => {
  const { setModalActive } = useContext(MyContext);
  return (
    <div className="text-center text-dark svs-banner">
      <div className="content">
        <p>SchoolVR for </p>
        <h3>Schools</h3>
        <p className="text-center">
          SVS, or SchoolVR for Schools, is a unique VR (Virtual Reality)
          education platform designed for schools, particularly grades 5 through
          12. Unlike other VR platforms that offer passive 360-degree videos,
          SVS creates an interactive learning environment. This environment
          provides students with a vast library of concepts, along with
          practical applications they can explore in VR. Students can also test
          their understanding through quizzes and receive AI-powered help for
          any doubts they encounter. Teachers benefit from analytics that track
          student performance, allowing them to personalize learning.
          Additionally, SVS offers an admin dashboard for principals to manage
          the platform and a separate app for parents to monitor their child's
          learning progress. This focus on interactivity and comprehensive
          features sets SVS apart as a complete VR education ecosystem, aiming
          to enhance student engagement and knowledge retention.{" "}
        </p>
      </div>
      <Image
        mobile="students/page/svs-m.webp"
        desktop="students/page/svs.webp"
      />
      <button className="btn" onClick={() => setModalActive(true)}>
        book a demo
      </button>
    </div>
  );
};
