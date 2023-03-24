import {
  Button,
  Figure,
  NavDropdown,
  Row,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiSearch } from "react-icons/bi";
import React from "react";
import Login from "../pages/Login";


const NavBar = () => {
    
  const [modalShow, setModalShow] = React.useState(false);
  return (
  
         <div className=" ms-5 d-none d-md-block ">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <span className="bgTitle fs-4">ATG.</span>
            <span className="fs-4">
              W
              <Figure>
                <Figure.Image width={22} height={16} alt="171x180" src="https://i.ibb.co/N6vTXz3/Union-1.png"/>
              </Figure>
              RLD
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-evenly">
            <Form className=" ">
              <Form.Control
                type="search"
                placeholder="search for your favorite groups ATG"
                className="me-2  rounded-pill search-input "
                aria-label="Search"
                style={{ width: "360px", backgroundColor: "#F2F2F2" }}
              />
              <BiSearch size={20} className="positionTop" />
            </Form>

            <Nav className="freeSize">
              <p className="m-2">
                create account.
                <span style={{ color: "#2F6CE5" }}> it`s free</span>
              </p>
              <Nav className="">
                <NavDropdown id="dropdown" className=" ">
                  <div className=" me-md-5">
                    <NavDropdown.Item >
                      <Button
                        className=" border-0 "
                        variant=""
                        style={{}}
                        onClick={() => setModalShow(true)}
                      >
                        Login
                      </Button>

                      <Login
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/register">
                      Sign up{" "}
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  
  );
};

export default NavBar;
