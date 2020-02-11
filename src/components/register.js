import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = (prpos)=>{
    return(
        <div className="all-reg">
        <Form className="register-form">
            <h1>Registration</h1>

            <FormGroup>
                <label>First Name</label>
                <Input type="text" placeholder="Enter First Name"/>
            </FormGroup>

            <FormGroup>
                <label>Last Name</label>
                <Input type="text" placeholder="Enter Last Name"/>
            </FormGroup>

            <FormGroup>
                <label>Number</label>
                <Input type="text" placeholder="Enter Number"/>
            </FormGroup>

            <FormGroup>
                <label>Username</label>
                <Input type="text" placeholder="Enter Username"/>
            </FormGroup>

            <FormGroup>
                <label>Password</label>
                <Input type="password" placeholder="Enter Password"/>
            </FormGroup>

            <FormGroup>
                <label>Confirm Password</label>
                <Input type="password" placeholder="Enter Password again"/>
            </FormGroup>

            <Button className="btn-lg btn-dark btn-block">Sign up</Button>

        </Form>
        </div>
    );
}

export default Register;