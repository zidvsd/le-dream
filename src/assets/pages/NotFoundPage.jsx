import React from "react";
import BackHomeButton from "../components/buttons/BackHomeButton";
const NotFoundPage = () => {
  return (
    <div className="custom-container flex h-96 flex-col items-center justify-center space-y-8">
      <h1 className="font-garamond text-4xl font-semibold">
        Sorry, something went wrong!
      </h1>
      <p className="font-montserrat text-lg">
        Lost in luxury? It seems this page has checked out.
      </p>
      <BackHomeButton />
    </div>
  );
};

export default NotFoundPage;
