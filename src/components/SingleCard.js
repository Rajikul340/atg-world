import React from "react";
import {
  Button,
  Card,
  Col,
  Figure,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const SingleCard = ({ data }) => {
  return (
    <Card className="my-4">
      <Card.Img variant="top" src={data.coverImg} />
      <Card.Body>
        <Figure>
          <Figure.Image
            width={50}
            height={100}
            alt="coverImg"
            src={data.icon}
          />
        </Figure>
        <Card.Title className=" my-0 py-0">
          <div className="d-flex justify-content-between align-items-center ">
            <div>
              <h4 className="fs-4 ">{data.title}</h4>
            </div>
            <div className="" style={{ width: "50px", height: "50px" }}>
              <Button
                variant="outline-light"
                className=" text-black dot d-flex align-items-center"
                style={{ fontSize: "20px" }}
              >
                <BsThreeDots className="relative" />

                <NavDropdown id="dropdown" className="">
                  <NavDropdown.Item>Edit</NavDropdown.Item>
                  <NavDropdown.Item>Report </NavDropdown.Item>
                  <NavDropdown.Item>Option 3</NavDropdown.Item>
                </NavDropdown>
              </Button>
            </div>
          </div>
        </Card.Title>
        <Card.Text className=" m-0 p-0" style={{ color: "#5C5C5C" }}>
          {data.description ? (
            <p>{data.description}</p>
          ) : "" || (data.date && data.location) ? (
            <div className="d-flex  justify-content-between col-md-8 ">
              <p>
                {" "}
                <BsBag /> <span className="text-black">{data.date}</span>
              </p>
              <p>
                {" "}
                <GoLocation />{" "}
                <span className="text-black">{data.location}</span>
              </p>
            </div>
          ) : "" || (data.company && data.location) ? (
            <div className="d-flex  justify-content-between col-md-8 ">
              <p>
                {" "}
                <BsBag /> <span className="text-black">{data.company}</span>
              </p>
              <p>
                {" "}
                <GoLocation />{" "}
                <span className="text-black">{data.location}</span>
              </p>
            </div>
          ) : (
            ""
          )}
        </Card.Text>
        {data.date && data.location ? (
          <Button
            className="col-md-12 bg-white  mt-2 mb-3 border "
            style={{ color: "#E56135" }}
          >
            View Details
          </Button>
        ) : "" || (data.company && data.location) ? (
          <Button
            className="col-md-12 bg-white mt-2 mb-3 border"
            style={{ color: "#02B875" }}
          >
            Apply on Timesjobs
          </Button>
        ) : (
          ""
        )}

        <Row className="d-flex  bg-white  justify-content-between">
          <Col className="d-flex col-md-8">
            <Figure>
              <Figure.Image
                width={48}
                height={100}
                alt=""
                src={data.img}
                className="rounded-full "
              />
            </Figure>
            <Figure.Caption className="fs-5 text-black mt-2 ms-2">
              {data.Name}
            </Figure.Caption>
          </Col>

          <Col className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <AiFillEye />
              <p className="mt-3 ms-3" style={{ color: "#525252" }}>
                {data.views} views
              </p>
            </div>
            <Button variant="light">
              <AiOutlineShareAlt size={22} />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
