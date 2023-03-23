import React from "react";
import { Figure } from "react-bootstrap";
import bannerImg from "../img/homeImg.jpg";

const Banner = () => {
  return (
    <div>
      <Figure>
        <Figure.Image
          alt="banner-img"
          style={{ height: "440px", width: "1440px", position: "relative" }}
          src={bannerImg}
        />

        <div
          className="text-white"
          style={{
            position: "absolute",
            top: "34%",
            left: "130px",
            fontFamily: "IBM Plex Sans",
          }}
        >
          <h1 style={{ fontSize: "36px", fontWeight: "700" }}>
            Computer Engineering
          </h1>
          <p style={{ fontSize: "18px" }}>
            142, 765 Computer Engineers follw this
          </p>
        </div>
      </Figure>
    </div>
  );
};

export default Banner;
