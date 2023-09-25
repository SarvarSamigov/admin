import React, { useContext, useState } from "react";
import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import UsersTable from "../components/usersTable";
import { Header } from "antd/es/layout/layout";
import { GiHamburgerMenu } from "react-icons/gi"; 
import  {Link} from 'react-router-dom'


import Sider from "antd/es/layout/Sider";

import { FiUsers } from "react-icons/fi";


import "../styles/dashboard.css";
import AuthContext from "../context/AuthContext";


function HomePage() {
  const navigate = useNavigate();
    let {user, logoutUser} = useContext(AuthContext)
    const [collpased, setCollpased] = useState(false);

  return (
    <>
      <Layout className="container">

    
      <Header className="header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <GiHamburgerMenu
            onClick={() => {
              setCollpased(!collpased);
            }}
            size={15}
            style={{ marginRight: 20 }}
          />
          <div className="brand">
            {" "}
            <img src="./logo1.png" height={40} alt="" />

            {user ? (
                 <p  onClick={logoutUser}>Logout</p>
            ): (
                <Link to="/login" >Login</Link>
            )}
          </div>
        </div>
      </Header>
        <Layout>
          <Sider className="sider" collapsed={collpased} theme="light">
            <Menu
              onClick={({ key }) => {
                navigate(key);
              }}
              style={{ fontSize: 15, borderRadius: 10 }}
              mode="inline"
              items={[
                {
                  key: "/users_table",
                  icon: <FiUsers />,
                  label: "Users table",
                },
              ]}
            />
          </Sider>

          <Content className="content">
            <UsersTable />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default HomePage;
