import { Col, Figure, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../img/Union 1.png";
import { BiSearch } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className=" ms-5 " >
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <span className="bgTitle fs-4">ATG.</span>
            <span className="fs-4">
              W
              <Figure>
                <Figure.Image width={22} height={16} alt="171x180" src={icon} />
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
                style={{ width: "360px", backgroundColor:"#F2F2F2" }}
              />
              <BiSearch size={20} className="positionTop" />
            </Form>

            <Nav className="freeSize">
              <p className="">
                create account.
                <span className="m-2" style={{ color: "#2F6CE5" }}>
                  it`s free
                </span>
                <BsFillCaretDownFill size={12} />
              </p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
