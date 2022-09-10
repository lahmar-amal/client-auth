import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../Redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={user.email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
