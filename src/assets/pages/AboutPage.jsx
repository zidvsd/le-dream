import React from "react";
import { useParams } from "react-router-dom";
const AboutPage = () => {
  const { lang } = useParams();
  return <div>about</div>;
};

export default AboutPage;
