import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import { GiHamburgerMenu } from "react-icons/gi";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";

import { FiUsers } from "react-icons/fi";

import "../styles/dashboard.css";

function HomePage({ route }) {
  const [navigate, setNavigate] = useState(false);
  const [collpased, setCollpased] = useState(false);
  const navigateMenu = useNavigate();
  const logout = () => {
    localStorage.clear();
    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Layout className="container">
        <Header className="header">
          <ul className="left-nav">
            <li>
              <GiHamburgerMenu
                onClick={() => {
                  setCollpased(!collpased);
                }}
                size={15}
                style={{ marginRight: 20 }}
              />
            </li>

            <li>
              <img src="./logo1.png" alt="logo" height={40} />
            </li>
          </ul>

          <ul className="right-nav">
            <li>
              {" "}
              <Button type="primary" danger onClick={logout}>
                LogOut
              </Button>
            </li>
          </ul>
        </Header>

        <Layout>
          <Sider className="sider" collapsed={collpased} theme="light">
            <Menu
              onClick={({ key }) => {
                navigateMenu(key);
              }}
              style={{ fontSize: 15, borderRadius: 10 }}
              mode="inline"
              items={[
                {
                  key: "/usersTable",
                  icon: <FiUsers />,
                  label: "Users table",
                },
              ]}
            />
          </Sider>

          <Content className="content">
             <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default HomePage;
