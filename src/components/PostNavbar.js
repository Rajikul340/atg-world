import React, { useState } from "react";
import { Button, Col, Nav, Row } from "react-bootstrap";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";

const PostNavbar = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButton1Click = () => setActiveButton("AllPost");
  const handleArticleClick = () => setActiveButton("article");
  const handleEventClick = () => setActiveButton("event");
  const handleEducationClick = () => setActiveButton("education");
  const handleJobClick = () => setActiveButton("job");

  return (
    <div>
      <div className=" d-flex justify-content-between">
        <div className="col-md-8">
          <Nav>
            <Nav.Item className="">
              <Nav.Link
                style={{ color: "#8A8A8A" }}
                href=""
                onClick={handleButton1Click}
                className={activeButton === "AllPost" ? "active" : ""}
              >
                All Post(32)
              </Nav.Link>
            {activeButton === "AllPost" ? <hr className="activeHr" /> : ""}
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                style={{ color: "#8A8A8A" }}
                onClick={handleArticleClick}
                className={activeButton === "article" ? "active" : ""}
              >
                Article
              </Nav.Link>
              {activeButton === "article" ? <hr className="activeHr" /> : ""}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ color: "#8A8A8A" }}
                onClick={handleEventClick}
                className={activeButton === "event" ? "active " : ""}
              >
                Event
              </Nav.Link>
              {activeButton === "event" ? <hr className="activeHr" /> : ""}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ color: "#8A8A8A" }}
                onClick={handleEducationClick}
                className={activeButton === "education" ? "active " : ""}
              >
                Education
              </Nav.Link>
              {activeButton === "education" ? <hr className="activeHr" /> : ""}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ color: "#8A8A8A" }}
                onClick={handleJobClick}
                className={activeButton === "job" ? "active  " : "normalBtn"}
              >
                Job
              </Nav.Link>
              {activeButton === "job" ? <hr className="activeHr" /> : ""}
            </Nav.Item>
          </Nav>
        </div>

        <div className="col-md-4">
          <Nav className="">
            <Nav.Item>
              <Button variant="light"
               className="me-3"
              >
                Write Post <BsFillCaretDownFill size={12} />
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="primary">
                <AiOutlineUsergroupAdd /> Join Group{" "}
              </Button>{" "}
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <hr className="postHr" />
    </div>
  );
};

export default PostNavbar;
