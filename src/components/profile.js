// import React, { useState } from 'react';
// import Navigation from './Navigation';
// import { Form, FormGroup, Label, Button } from 'reactstrap';

// const Profile = (props)=>{
//     return(
//         <div className="profile">
//         <Navigation/>

//         <Form>
//             <FormGroup>
//                 <center><Label for='firstName'>First Name</Label></center>
//                 <center><input type ='text' id ="firstName" name='firstName' value="john"/></center>
//             </FormGroup>

//             <FormGroup>
//                 <center><Label for='lastName'>Last Name</Label></center>
//                 <center><input type='text' id ='lastName' name ='lastName' value="cena"/></center>
//             </FormGroup>

//             <FormGroup>
//                 <center><Label for='number'>Number</Label></center>
//                 <center><input type='text' id='number' name='number' value="7777"/></center>
//             </FormGroup>

//             <FormGroup>
//                 <center><Label for='username'>Username</Label></center>
//                 <center><input type='text' id='username' name='username' value="admin"/></center>
//             </FormGroup>

//             <center><Button color='danger' block href="/dashboard">Update User</Button></center>


//         </Form>

//         </div>

//     )
// }

// export default Profile;

import React, { Component } from 'react'
import Navigation from './Navigation'
import Axios from 'axios'
import { Form, FormGroup, Input, Button, Label, CustomInput, Container } from 'reactstrap'
//import FileUploadButton from './FileUploadButton'

export default class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: null,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
            selectedFile: null,
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:9999/users/me', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data
                })
            });
    }

    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    // uploadFile = (e) => {
    //     e.preventDefault();
    //     const data = new FormData()
    //     data.append('myFile', this.state.selectedFile)
    //     Axios.post('http://localhost:9999/upload', data, this.state.config)
    //         .then((response) => {
    //             this.setState({
    //                 user: { ...this.state.user, image: response.data.filename }
    //             })
    //         }).catch((err) => console.log(err.response))
    // }

    updateUser = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:9999/users/me', this.state.user, this.state.config)
            .then((response) => console.log(response.data)).catch((err) => console.log(err.response))
        this.props.history.push('/dashboard');
    }

    handleChange(e) {
        this.setState({
            user: { ...this.state.user, [e.target.name]: e.target.value }
        })
    }

    render() {
        if (this.state.user === null) {
            return <h3>Loading ...</h3>
        } else {
            return (
                <div>
                    <Navigation />
                    <Container className='mt-4'>
                        <Form>
                            <FormGroup>
                                <Label for='firstName'>First Name</Label>
                                <Input type='text'
                                    id="firstName"
                                    name='firstName'
                                    value={this.state.user.firstName}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='lastName'>Last Name</Label>
                                <Input type='text' id='lastName'
                                    name='lastName'
                                    value={this.state.user.lastName}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for='number'>Number</Label>
                                <Input type='text' id='number' name='number'
                                value={this.state.user.number}
                                onChange={(e) => this.handleChange(e)}/>
                                
                            </FormGroup>

                            <FormGroup>
                                <Label for='username'>Username</Label>
                                <Input type='text' id='username' name='username'
                                value={this.state.user.username}
                                onChange={(e) => this.handleChange(e)}/>
                                
                            </FormGroup>
                            {/* <FormGroup>
                                <img className='img-thumbnail'
                                    width='400' src={`http://localhost:9999/uploads/${this.state.user.image}`}
                                    alt="profile" />
                                <CustomInput type='file' id='profilePic'
                                    onChange={this.handleFileSelect} />
                                {this.state.selectedFile ? (<FileUploadButton
                                    uploadFile={this.uploadFile} />) : null}
                            </FormGroup> */}
                            <Button color='danger' onClick={this.updateUser} block>Update User</Button>
                        </Form>
                    </Container>
                </div>
            )
        }
    }
}