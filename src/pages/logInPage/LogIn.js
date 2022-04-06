import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function LogIn() {
  const navigate = useNavigate();
  const [logIn, setLogIn] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");

  const signIn = () => {
    if (logIn === "knu@gmail.com" && password === "11111") {
      navigate("/mainPage");
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <h1 className="mainText">KNU ELITE</h1>
      <div className="logInBox">
        {show && (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Invalid Login or Password</Alert.Heading>
            <p>Please try again</p>
          </Alert>
        )}
        <div className="box">
          <h2 className="text">Sign In</h2>
          <div className="form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter login"
                onChange={({ target }) => setLogIn(target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </Form.Group>
          </div>
          <div>
            <Button
              className="button"
              variant="warning"
              size="lg"
              onClick={signIn}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
