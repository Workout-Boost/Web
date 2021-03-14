import React, { Component } from 'react'
import { connect } from 'react-redux';
import { forgotPassword } from '../../actions';
import '../styles/Landing.css'

class ForgotPass extends Component {
    constructor(props) {
        super(props)
        this.state = {
          email: ''
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div>
                <style>{'body { background: linear-gradient(90deg, #FF8000 0%, #FF6666 100%); overflow: hidden }'}</style>
                <div className="blob">
                    <svg link="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                    <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
                    </svg>
                </div>
                <p className="landingSubTitle">Forgot Your Password?</p>
                <p className="landingText">Just enter the email address you used to create your account and we'll send you a reset link.</p>
                <input
                style={{width: '42%'}}
                name="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
                />
                <div className="authContainer">
                    <button className="landingAuth" onClick={()=> this.props.forgotPassword(this.state.email)}>Send Link</button>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { forgotPassword }
  )(ForgotPass);
  