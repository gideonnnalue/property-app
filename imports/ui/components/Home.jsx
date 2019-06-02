import React, { Component } from 'react'

export default class home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-md-10">
                        <h1 className="header-main">Simple Property Management App</h1>
                        <p className="header-primary mt-5">Please <span>Login</span> or <span>Create Account</span> to manage property</p>    
                    </div>
                </div>
            </div>
        )
    }
}
