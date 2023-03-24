import React from "react";
import { Button, Figure } from "react-bootstrap";
import bannerImg from "../img/homeImg.jpg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SignUp from "../pages/SignUp";

const Banner = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Figure>
        <Figure.Image
          alt="banner-img"
          style={{ height: "440px", width: "1440px" }}
          src={bannerImg}
        />
        <div className="d-md-none d-block">
        <div className="col-12 d-flex  justify-content-between px-3 GroupBtn">
          
          <AiOutlineArrowLeft size={30} className="text-white" />
        
       
          <Button variant="white" className=" border text-white" onClick={() => setModalShow(true)}>Join Group</Button>
          <SignUp show={modalShow} onHide={() => setModalShow(false)} />
     
      </div>
        </div>


        <div className="text-white banner-desc">
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
