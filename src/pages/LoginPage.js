import React, { useState } from "react";
import "../styles/login.css";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const formSuccess = () => {
    axios
      .post("users/auth", {
        email,
        password,
      })

      .then((res) => {
        console.log(res);
        const { accessToken, refreshToken } = res.data;
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data["accessToken"]}`;
      });

    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/" />;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={formSuccess}
        style={{ width: 300 }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
