import React from "react";
import image7 from "../images/error.jpg";
import icon1 from "../images/icons/back.png";

const Error = () => {
  return (
    <div>
      <a href="/">
        <img src={icon1} alt="sans" width="7em" class="mx-2" />
        Front page
      </a>
      <p class="big-title">Oops... Sorry, but something went wrong.</p>
      <p>The page could not be found.</p>
      <img src={image7} alt="..." class="illustration mx-auto my-2" />
    </div>
  );
};

export default Error;
