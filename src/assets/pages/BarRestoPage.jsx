import React from "react";
import { useParams } from "react-router-dom";
const BarRestoPage = () => {
  const { lang } = useParams();
  return (
    <div>
      <h1>bar + resto </h1>
    </div>
  );
};

export default BarRestoPage;
