import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton,GoogleLoginButton } from 'react-social-login-buttons';
import '../App.css';

const Login = (props) =>{
    return(
        <div className="all">
        <Form className = "login-form">
            <h1>
                <span className="font-weight-bold">collegefinder</span>.com/np
            </h1>

            <h2 className="text-center">
                Welcome
            </h2>

            <FormGroup>
                <label>Username</label>
                <Input type="text" placeholder="Enter your username"/>
            </FormGroup>

            <FormGroup>
                <label>Password</label>
                <Input type="password" placeholder="Enter your password"/>
            </FormGroup>

            <Button className="btn-lg btn-dark btn-block">Log in</Button>

            <div className="text-center pt-3">
                Or continue with your social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3"/>
            <GoogleLoginButton className="mt-3 mb-3"/>

            <div className="text-center">
                <a href="/">Sign-up</a>
                <span className="p-2">|</span>
                <a href="/">Forgot password</a>

            </div>
            
        </Form>
        </div>
    );
}
export default Login;