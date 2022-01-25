import React, {Component} from 'react';
import './SignIn.scss'
import FormInput from "../FormInput/FormInput";
import CustomBtn from "../CustomBtn/CustomBtn";

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }
    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email & password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" type="email" name="email"
                               value={this.state.email} required/>
                    <FormInput handleChange={this.handleChange} label="password" type="password" name="password"
                               value={this.state.password} required/>
                </form>
                <CustomBtn type="submit">Sign in</CustomBtn>
            </div>
        );
    }
}

export default SignIn;