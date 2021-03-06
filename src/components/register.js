// import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// const Register = (prpos)=>{
//     return(
//         <div className="all-reg">
//         <Form className="register-form">
//             <h1>Registration</h1>

//             <FormGroup>
//                 <label>First Name</label>
//                 <Input type="text" placeholder="Enter First Name"/>
//             </FormGroup>

//             <FormGroup>
//                 <label>Last Name</label>
//                 <Input type="text" placeholder="Enter Last Name"/>
//             </FormGroup>

//             <FormGroup>
//                 <label>Number</label>
//                 <Input type="text" placeholder="Enter Number"/>
//             </FormGroup>

//             <FormGroup>
//                 <label>Username</label>
//                 <Input type="text" placeholder="Enter Username"/>
//             </FormGroup>

//             <FormGroup>
//                 <label>Password</label>
//                 <Input type="password" placeholder="Enter Password"/>
//             </FormGroup>

//             <FormGroup>
//                 <label>Confirm Password</label>
//                 <Input type="password" placeholder="Enter Password again"/>
//             </FormGroup>

//             <Button className="btn-lg btn-dark btn-block" href="/">Sign up</Button>

//         </Form>
//         </div>
//     );
// }

// export default Register;

import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            isRegistered: false
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:9999/users/signup', this.state)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                this.setState({
                    firstName: '',
                    lastName: '',
                    username: '',
                    password: '',
                    isRegistered: true
                });

            }).catch((err) => console.log(err))
    }


    render() {
        if (this.state.isRegistered === true) {
            return <Redirect to='/dashboard' />
        }
        return (
            <Container>
                <h2>Sign Up</h2>
                <Form>
                    <FormGroup>
                        <Label for='firstName'>First Name</Label>
                        <Input type='text' name='firstName' id='firstName'
                            value={this.state.firstName} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='lastName'>Last Name</Label>
                        <Input type='text' name='lastName' id='lastName'
                            value={this.state.lastName} onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='number'>Number</Label>
                        <Input type='number' name='number' id='number'
                            value={this.state.number} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input type='text' name='username' id='username'
                            value={this.state.username} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            value={this.state.password} onChange={this.handleChange} />
                    </FormGroup>
                    <Button color='primary' onClick={this.register}>Sign Up</Button>
                    <FormText>Already a user? <Link to='/'> Login here!</Link></FormText>
                </Form>
            </Container>
        )
    }
}