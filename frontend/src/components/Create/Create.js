import axios from 'axios'
import './create.css'
import React, { Component } from 'react'

export class create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:"",
            email:"",
            password:"",
            contact:""
        }
    }

    
    handleOnSubmit = (e) =>{
        e.preventDefault();
        axios.post("/api/v1/user/new" , this.state).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    handleOnchange = (e) =>{
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value ,
        })
    }

  render() {
    return (
            <form onSubmit={this.handleOnSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={this.handleOnchange} value={this.state.name} type="text" name="name" id="name" /><br />
                <label htmlFor="email">Email</label>
                <input onChange={this.handleOnchange} value={this.state.email} type="email" name='email' id="email" /><br />
                <label htmlFor="password">Password</label>
                <input onChange={this.handleOnchange} value={this.state.password} type="password" name="password" id="password" /><br />
                <label htmlFor="contact">Contact</label>
                <input onChange={this.handleOnchange} value={this.state.contact} type="tel" name="contact" id="contact" /><br />
                <button type="submit">Create User</button>
            </form>
    )
  }
}

export default create