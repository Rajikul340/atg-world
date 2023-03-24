import React, { useState } from "react";
import { Button, Col, Figure, Modal, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import loginimg from "../img/loginicon.png";
import facebookLogo from "../img/facebook.png";
import googleLogo from "../img/google-logo-9808.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal
      {...props}
      size="md"
      className="custom-modal relative"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

<Modal.Header className="border-0 closeBtn" closeButton></Modal.Header>

      <Modal.Header
        className="border-0 p-2 d-none d-md-block "
        style={{ backgroundColor: "#EFFFF4" }}
      >
        <div style={{ color: "#008A45" }} className="mx-auto mt-1 d-none d-md-block">
          <p>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
      </Modal.Header>



      <Modal.Title className="d-flex justify-content-between mx-4 mt-4">
        <h3 style={{ fontSize: "24px", fontWeight: "700" }} className="d-none d-md-block">Sign In</h3>
        <h3 style={{ fontSize: "24px", fontWeight: "700" }} className="d-md-none d-block">Welcome back !</h3>
        <p className="d-none d-md-block" style={{ fontSize: "16px" }}>
          Don`t have an account yet?{" "}
          <Link href="/register" style={{ color: "#2F6CE5" }}> Sign up !</Link>
        </p>
      </Modal.Title>

      <Modal.Body>
        <Row className="mx-auto">
          <Col md={5}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  className="rounded-0 p-2"
                  style={{ backgroundColor: "#F7F8FA" }}
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  className="rounded-0 p-2 mb-3"
                  style={{ backgroundColor: "#F7F8FA", position: "relative" }}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <Form.Text
                  className="text-muted"
                  onClick={toggleShowPassword}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? (
                    <p style={{ position: "absolute", top: "70px", left:"300px" }}>
                
                      <AiFillEye />
                    </p>
                  ) : (
                    <p style={{ position: "absolute", top: "70px", left:"300px" }}>
                
                    <BiHide />
                  </p>
                  )}
                </Form.Text>
              </Form.Group>

              <div className="d-flex d-md-block   justify-content-between">
            <Button
                variant="primary"
                type="submit"
                className="col-md-12 col-4 mb-3  rounded-pill"
                size="lg"
              >
                Sign In
              </Button>
              <Link className="d-md-none d-block">or, Creae Account </Link>
            </div>
            </Form>
            <Button
              variant="white"
              type="submit"
              className="col-12 mb-2 border d-flex  justify-content-center align-items-center "
            >
              <Image
                src={facebookLogo}
                className="mt-1 me-2"
                width={20}
                alt="facebook-logo"
              />
              sign in with Facebook
            </Button>
            <Button
              variant="white"
              type="submit"
              className="col-12 mb-3 border d-flex  justify-content-center align-items-center"
            >
              <Image
                src={googleLogo}
                className="mt- me-2"
                width={20}
                alt="googleLogo-logo"
              />
              sign in with Google
            </Button>
            <Button variant="white" type="submit" className="col-12 mb-3 ">
              Forgot Password
            </Button>
          </Col>
          <Col md={5} className="mx-auto d-none d-md-block">
            <Figure>
              <Figure.Image alt="171x180" src={loginimg} />
            </Figure>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
