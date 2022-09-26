import React, { Component } from 'react'
import "./main.css"
const axios = require("axios");

export class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
        }
    }
    
    fetchData = () => {
        axios.get("/api/v1/user").then((res) => {
            // console.log(res.data.success);
            this.setState({
                data: res.data.user,
            })
        }).catch((error) => {
            console.log(error);
        })
    }
    

    
    render() {
        return (
            <>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr >
                            <th>Id</th>
                            <th>Name</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((x, idx) => {
                            return <tr key={x._id}> <td>{idx}</td> <td>{x.name}</td> <td>{x.password}</td> <td>{x.email}</td> <td>{x.contact}</td> </tr>
                        })}
                    </tbody>
                </table>

                <button onClick={() => { this.fetchData() }}> Fetch Data  </button><br />
            </>
        )
    }
}

export default Main