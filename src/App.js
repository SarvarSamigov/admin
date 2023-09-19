import React from 'react';
import { Layout,Menu,} from 'antd';
import { Header,Content} from 'antd/es/layout/layout';
import { Route, Routes,useNavigate } from 'react-router-dom';
import { Table1 } from './components/menu';
import { Login } from './components/login';
import { Typography, Card } from 'antd'
 
import Sider from 'antd/es/layout/Sider';

import { useState } from 'react';
import {FiUsers} from "react-icons/fi"
import {GiHamburgerMenu} from "react-icons/gi"
import {FiLogIn} from "react-icons/fi"

import './styles/dashboard.css'

function App() {
  const navigate = useNavigate()
 const [collpased,setCollpased] = useState(false)


  return (
   
   <Layout className='container'>
    
      <Header className='header'>
      
      <div style={{display: "flex",alignItems:"center"}} >
        <GiHamburgerMenu onClick={()=>{
          setCollpased(!collpased)
        }} size={15} style={{marginRight : 20}}/>
        <div className="brand"> <img src="./logo1.png" height={40} alt="" /> </div>
      
      </div>
  
      </Header>
      
      
      <Layout>
      <Sider className='sider' collapsed={collpased} theme='light'>
        
        <Menu 
        onClick = {({key})=>{
           
            navigate(key);
          
          
        }}
        style={{fontSize:15,borderRadius:10}} 
        mode='inline'
        items={[
            {
              key: '/users_table',
              icon:  <FiUsers/>,
              label: 'Users table',
            },
            
            {key: '/login',
              icon:  <FiLogIn/>,
              label: 'Login',
              danger:"true"
            },
           
          ]} />  

       </Sider>
 
      <Content className='content' >
       

      <Routes>
        <Route path='/login' element={<div><Login/></div>} ></Route>
        <Route path='/users_table' element={<div><Table1/></div>} ></Route>
      </Routes>

      </Content>
      </Layout>
    </Layout>

  )
}

export default App
