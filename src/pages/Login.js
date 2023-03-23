import React, { useState } from "react";
import { Button, Col, Figure, Modal, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import loginimg from "../img/loginicon.png";
import facebookLogo from "../img/facebook.png";
import googleLogo from "../img/google-logo-9808.png";
import Image from "react-bootstrap/Image";

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
      <Modal.Header
        className="border-0 p-2 "
        closeButton
        style={{ backgroundColor: "#EFFFF4" }}
      >
        <div style={{ color: "#008A45" }} className="mx-auto mt-1">
          <p>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
      </Modal.Header>

      <Modal.Title className="d-flex justify-content-between mx-md-4 mt-md-4">
        <h3 style={{ fontSize: "24px", fontWeight: "700" }}>Sign In</h3>
        <p className="" style={{ fontSize: "16px" }}>
          Don`t have an account yet?{" "}
          <span style={{ color: "#2F6CE5" }}> create new for free!</span>
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

              <Button
                variant="primary"
                type="submit"
                className="col-md-12 mb-3  rounded-pill"
                size="lg"
              >
                Sign in
              </Button>
            </Form>
            <Button
              variant="white"
              type="submit"
              className="col-md-12 mb-2 border d-flex  justify-content-center align-items-center "
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
              className="col-md-12 mb-3 border d-flex  justify-content-center align-items-center"
            >
              <Image
                src={googleLogo}
                className="mt- me-2"
                width={20}
                alt="googleLogo-logo"
              />
              sign in with Facebook
            </Button>
            <Button variant="white" type="submit" className="col-md-12 mb-3 ">
              Forgot Password
            </Button>
          </Col>
          <Col md={5} className="mx-auto">
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
