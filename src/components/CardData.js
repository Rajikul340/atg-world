import React from "react";
import { Col, Row } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { MdModeEditOutline } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";
import SingleCard from "./SingleCard";
import { AiOutlineLike } from "react-icons/ai";
import SingleGroup from "./SingleGroup";
import { Link } from "react-router-dom";



const cardData = [
  {
    id: "1",
    coverImg: "https://i.ibb.co/Qcyt3gH/Rectangle-5.png",
    Name: "Sarthak Kamra",
    title: " Waht if famouse brands had regula fonts ? Meet RegulaBrands",
    img: "https://i.ibb.co/ySBwbzd/Rectangle-3-3.png",
    icon: "https://i.ibb.co/N9j3CxW/Article.png",
    views: "1.4",
    description:
      "   i ve worked in ux for the better part of a decade. From now on, I plan to reiceved...",
  },
  {
    id: "2",
    coverImg: "https://i.ibb.co/TKbHfmy/Rectangle-5-1.png",
    Name: "Sarah West",
    title:
      "Tax Benefits for Investment under National Pesion Seheme launched by Government",
    img: "https://i.ibb.co/SPgt9gk/Rectangle-3-2.png",
    icon:"https://i.ibb.co/4V6BfR6/Education.png" ,
    views: "1.4",
    description:
      "   i ve worked in ux for the better part of a decade. From now on, I plan to reiceved...",
  },
  {
    id: "3",
    coverImg: "https://i.ibb.co/B6P3nWh/Rectangle-5-2.png",
    Name: "Ronal Jones",
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    date: "Fri, 12 Oct, 2108",
    location: "Ahmedahad, india",
    img: "https://i.ibb.co/9vsBwsC/Rectangle-3-1.png",
    icon: "https://i.ibb.co/thHMyRC/Meetup.png",
    views: "1.4",
  },
  {
    id: "4",
    Name: "Joseph Gray",
    title: " Software Development",
    img: "https://i.ibb.co/176tntc/Rectangle-3.png",
    icon: "https://i.ibb.co/ss1M8k5/Job.png",
    location: "Noida, India",
    views: "1.4",
    company: "  Innovaccer Analytices Private Ltd",
  },
];

const groupData = [
  {
    id: "1",
    groupName: "leisure",
    groupImg: "https://i.ibb.co/6Ych1Pg/leisure.png",
  },
  {
    id: "2",
    groupName: "Activism",
    groupImg: "https://i.ibb.co/0rqRq2N/activism.png",
  },
  {
    id: "3",
    groupName: "MBA",
    groupImg: "https://i.ibb.co/pxFk365/mba.png",
  },
  {
    id: "4",
    groupName: "philosophy",
    groupImg: "https://i.ibb.co/0Mj1twT/philosophy.png",
  },
];
const CardData = () => {
  return (
    <Row>
      <Col md={7}>
        {cardData.map((singleData) => (
          <SingleCard key={singleData.id} data={singleData} />
        ))}
      </Col>
      <Col md={4} className="my-5  ">
        <div className="">
          <div
            className=" ms-5 d-flex align-items-center 
        justify-content-between"
          >
            <div className="d-flex align-items-center">
              <GoLocation size={15} className="me-2" />
              <h4 className="fs-6">Noida, India</h4>
            </div>

            <MdModeEditOutline size={15} />
          </div>

          <hr className="postHr ms-5" />
        </div>
        <div className="ms-5">
          <div className="d-flex ">
            <FiAlertCircle size={30} />
            <p className="ms-2" style={{ color: "#8A8A8A" }}>
              Your location will help us serve better and extend a personalised
              experience
            </p>
          </div>
        </div>
        <div className="ms-5">
          <h6>
         
            <AiOutlineLike size={24} />{" "}
            <span
              className="text-uppercase"
            
            >
              recommended Groups
            </span>
          </h6>
          <div>
            {groupData.map((singleGpData) => (
              <SingleGroup key={singleGpData.id} data={singleGpData} />
            ))}
          </div>

        
        </div>
        <Row>
          <Col className=" d-flex justify-content-end mt-4">
          <Link href="/" className=" "> See More ...</Link></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CardData;
