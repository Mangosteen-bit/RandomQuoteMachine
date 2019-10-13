import React from "react";
import { pure } from "recompose";

const BackgroundImage = pure(({ image }) => {
  const imgStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div id="background-image" style={imgStyle} />;
});

export default BackgroundImage;
