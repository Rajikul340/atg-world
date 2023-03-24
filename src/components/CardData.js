import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardImg1 from "../img/Rectangle 5 (1).png";
import { GoLocation } from "react-icons/go";
import { MdModeEditOutline } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";
import sarthak from "../img/Rectangle 3 (3).png";
import article from "../img/✍️ Article.png";
import sarah from "../img/Rectangle 3 (2).png";
import education from "../img/🔬️ Education.png";
import hill from "../img/Rectangle 5.png";
import lock from "../img/Rectangle 5 (1).png";
import car from "../img/Rectangle 5 (2).png";
import meetup from "../img/🗓️ Meetup.png";
import ronal from "../img/Rectangle 3 (1).png";
import joseph from "../img/Rectangle 3.png";
import job from "../img/💼️ Job.png";
import SingleCard from "./SingleCard";
import { AiOutlineLike } from "react-icons/ai";
import leisure from "../img/leisure.png";
import activision from "../img/activism.png";
import mbs from "../img/mba.png";
import philosophy from "../img/philosophy.png";
import SingleGroup from "./SingleGroup";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: "1",
    coverImg: hill,
    Name: "Sarthak Kamra",
    title: " Waht if famouse brands had regula fonts ? Meet RegulaBrands",
    img: sarthak,
    icon: article,
    views: "1.4",
    description:
      "   i ve worked in ux for the better part of a decade. From now on, I plan to reiceved...",
  },
  {
    id: "2",
    coverImg: lock,
    Name: "Sarah West",
    title:
      "Tax Benefits for Investment under National Pesion Seheme launched by Government",
    img: sarah,
    icon: education,
    views: "1.4",
    description:
      "   i ve worked in ux for the better part of a decade. From now on, I plan to reiceved...",
  },
  {
    id: "3",
    coverImg: car,
    Name: "Ronal Jones",
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    date: "Fri, 12 Oct, 2108",
    location: "Ahmedahad, india",
    img: ronal,
    icon: meetup,
    views: "1.4",
  },
  {
    id: "4",
    Name: "Joseph Gray",
    title: " Software Development",
    img: joseph,
    icon: job,
    location: "Noida, India",
    views: "1.4",
    company: "  Innovaccer Analytices Private Ltd",
  },
];

const groupData = [
  {
    id: "1",
    groupName: "leisure",
    groupImg: leisure,
  },
  {
    id: "2",
    groupName: "Activism",
    groupImg: activision,
  },
  {
    id: "3",
    groupName: "MBA",
    groupImg: mbs,
  },
  {
    id: "4",
    groupName: "philosophy",
    groupImg: philosophy,
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
