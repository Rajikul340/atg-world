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

const SignUp = (props) => {
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
        className="border-0  d-none d-md-block  border border-primary  "
        style={{ backgroundColor: "#EFFFF4" }}
      >
        <div
          style={{ color: "#008A45" }}
          className=" d-none d-md-block  "
        >
          <p>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
      </Modal.Header>

      <Modal.Title className="d-flex justify-content-between mx-4 mt-4">
        <h3
          style={{ fontSize: "24px", fontWeight: "700" }}
          className="d-none d-md-block"
        >
          Sign Up
        </h3>
        <h3
          style={{ fontSize: "24px", fontWeight: "700" }}
          className="d-md-none"
        >
          Create Account
        </h3>
        <p className="  d-md-block d-none" style={{ fontSize: "16px" }}>
          Already have an account?
          <Link href="/login" style={{ color: "#2F6CE5" }}>
            Sign In!
          </Link>
        </p>
      </Modal.Title>

      <Modal.Body>
        <Row className="mx-auto">
          <Col md={5}>
            <Form>
              <Form.Group controlId="formBasicEmail" className="d-flex">
                <Form.Control
                  className="rounded-0 p-2"
                  style={{ backgroundColor: "#F7F8FA" }}
                  type="text"
                  placeholder="First Name"
                />
                <Form.Control
                  className="rounded-0 p-2"
                  style={{ backgroundColor: "#F7F8FA" }}
                  type="text"
                  placeholder="Last Name"
                />
              </Form.Group>

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
                    <p
                      style={{
                        position: "absolute",
                        top: "150px",
                        left: "300px",
                      }}
                    >
                      <AiFillEye />
                    </p>
                  ) : (
                    <p
                      style={{
                        position: "absolute",
                        top: "150px",
                        left: "300px",
                      }}
                    >
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
                Sign Up
              </Button>
              <Link className="d-md-none d-block">or, Sign In</Link>
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
          </Col>
          <Col md={5} className="mx-auto d-none d-md-block">
            <Figure>
              <Figure.Image alt="171x180" src={loginimg} />
            </Figure>
          </Col>
        </Row>

        <div className="d-md-none d-block mx-5 text-center">By signing up, you agree to our Terms & conditions, Privacy policy</div>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
