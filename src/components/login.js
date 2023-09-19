
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserStart } from '../slice/auth';
import '../styles/dashboard.css'
import { Typography, Card } from 'antd'
 

export function Login() {

 const dispatch = useDispatch() 
 const {isLoading} = useSelector(state => state) 
 
 
 
 return ( 
<Card style={{borderRadius:20,width:"fit-content"}}>
    <Form 
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
      
    }}
    initialValues={{
      remember: true,
    }}
    
  >
    <Typography.Title>Sign up</Typography.Title>
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button onClick={()=> dispatch(loginUserStart())} type="primary" htmlType="submit">
        Sign up 
      </Button>
    </Form.Item>
  </Form>
  </Card>
  )}
    