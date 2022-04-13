import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { URL, MyContext } from "../../global";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function LogIn() {
  const { setUserInfo } = useContext(MyContext);
  const navigate = useNavigate();
  const [logIn, setLogIn] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");

  const signIn = async () => {
    const data = { email: logIn, password: password };

    try {
      const response = await fetch(URL + "/api/user/check", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      navigate("/mainPage");
      setUserInfo(json.value);
      console.log("Успех:", json);
    } catch (error) {
      setShow(true);
      console.error("Ошибка:", error);
    }
  };

  return (
    <>
      <div className="logInBox">
      <h1 className="mainText">KNU ELITE</h1>
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
