import React from 'react';
import { Layout,Menu} from 'antd';
import { Header,Content  } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

import { useState } from 'react';

import {AiOutlineHome} from 'react-icons/ai'
import {GrOrganization} from 'react-icons/gr'
import {BsPersonSquare} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import {FiLogIn} from "react-icons/fi"
import {HiOutlineNewspaper} from "react-icons/hi2"



import './styles/dashboard.css'



function App() {
 const [collpased,setCollpased] = useState(false)


  return (
   
   <Layout className='container'>
      <Header className='header'>
      
      <div style={{display: "flex",alignItems:"center"}} >
        <GiHamburgerMenu onClick={()=>{
          setCollpased(!collpased)
        }} size={28} style={{marginRight : 20}}/>
        <div className="brand">Admin Panel </div>
      
      </div>
      
      </Header>
      
      
      <Layout>
      <Sider className='sider' collapsed={collpased} theme='light'>
        <Menu style={{fontSize:15,borderRadius:20}} 
        mode='inline'
        items={[
            {
              key: 'home',
              icon:  <AiOutlineHome/>,
              label: 'Home',
              children: [{
                label : "All Users",
                key : "all_users",
                icon: <BsPersonSquare/>
              }]
            },
            {
              key: 'about_us',
              icon:  <GrOrganization/>,
              label: 'About Us',
            },
            {key: 'login',
              icon:  <FiLogIn/>,
              label: 'Login'
            },
            {key: 'register',
              icon:  <HiOutlineNewspaper/>,
              label: 'Register'
          }
          ]} />  

       </Sider>

      <Content>
          
      </Content>
      </Layout>
    </Layout>

  )
}

export default App
