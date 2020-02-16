import React, { useState } from 'react';
import Navigation from './Navigation';
import { Form, FormGroup, Label, Button } from 'reactstrap';

const Profile = (props)=>{
    return(
        <div className="profile">
        <Navigation/>

        <Form>
            <FormGroup>
                <Label for='firstName'>First Name</Label>
                <input type ='text' id ="firstName" name='firstName' value="john"/>
            </FormGroup>

            <FormGroup>
                <Label for='lastName'>Last Name</Label>
                <input type='text' id ='lastName' name ='lastName' value="cena"/>
            </FormGroup>

            <FormGroup>
                <Label for='number'>Number</Label>
                <input type='text' id='number' name='number' value="7777"/>
            </FormGroup>

            <FormGroup>
                <Label for='username'>Username</Label>
                <input type='text' id='username' name='username' value="admin"/>
            </FormGroup>

            <Button color='danger' block href="/dashboard">Update User</Button>


        </Form>

        </div>

    )
}

export default Profile;