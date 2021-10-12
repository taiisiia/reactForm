import React, { Component } from 'react';
import './loginForm.css'


class loginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login:"",
            passw:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(event) {
        console.log('Login:' + this.state.login, 'Password:'+ this.state.passw);
        event.preventDefault();
      }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Login:
                <input className='loginButton' placeholder="Email address"
                    type='text'
                    name='login'
                    value={this.state.login}
                    onChange={this.handleChange}
                    />
                </label>

                <label>Password:
                    <input className='passButton' placeholder="Password"
                    type="password"
                    name="passw"
                    value={this.state.passw}
                    onChange={this.handleChange}
                    />
                </label>
                    
                <label>Remember me
                    <input 
                    type="checkbox" 
                    name="remember"
                    checked={this.state.remember} 
                    onChange={this.handleChange}
                    />
                </label>

                <a href='google.com'>Forgot password</a>

                    <input className='sendButton'
                    type="submit" 
                    value="Login"
                    />
            </form>
        )
    }
}

export default loginForm;