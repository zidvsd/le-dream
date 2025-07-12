import React from "react";
import BackHomeButton from "../components/buttons/BackHomeButton";
import background from "../images/thumbnails/not-found-bg.webp";
const NotFoundPage = () => {
  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center ",
  };
  return (
    <div
      style={divStyle}
      className="flex h-full min-h-[75vh] flex-col items-center justify-center space-y-12 p-12 text-center text-black lg:min-h-auto lg:p-42"
    >
      <h1 className="font-garamond text-4xl">Sorry, something went wrong!</h1>
      <p className="font-montserrat text-lg">
        The page you are looking for seems to be missing. It seems this page has
        checked out.
      </p>
      <BackHomeButton />
    </div>
  );
};

export default NotFoundPage;
