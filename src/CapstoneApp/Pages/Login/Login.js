import React, { useState } from "react";
import { Container, Form, Field, Label, Input, Button } from "./Login.Styled";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const { dispatch } = useAuth();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "LOGIN",
      payload: user,
    });
    navigate("/",{replace:true})
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={user.username || ""}
            onChange={handleOnChange}
          />
        </Field>

        <Field>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={user.password || ""}   
            onChange={handleOnChange}
          />
        </Field>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;