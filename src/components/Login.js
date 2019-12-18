import React, { Component } from 'react';
import { loginUrl } from './routes';
import { saveUser } from './auth';

class Login extends Component {

    state = {
        // user: [
        //     { 
        //         email: '', 
        //         password : '',
        //     }
        // ],
        email: '',
        password: '',
        loginBtn : 'Login',
        emailError: false,
        passwordError: false,
        errorMsg: ''       
    }

    validEmail = (e) => {
        const checkEmail = /\S+@\S+\.\S+/.test(e.target.value);
        if(e.target.value.length < 1) {
            e.target.style.borderBottom = '2px solid red';
            this.setState({emailError: true});
            return false;
        }
        if (checkEmail === false) {
            e.target.style.borderBottom = '2px solid red';
            this.setState({emailError: true});
            return false;
        } else {
            e.target.style.borderBottom = '2px solid #90EE90';
            this.setState({emailError: false});
            return true;
        }
    }

    validPassword = (e) => {
        if(e.target.value.length < 1) {
            e.target.style.borderBottom = '2px solid red';
            this.setState({passwordError: true});
            return false;
        } else {
            e.target.style.borderBottom = '2px solid #90EE90';
            this.setState({ passwordError: false});
            return true;
        }
    }
    

    // handleEmailChange = (e) => {
    //     this.setState({
    //         email: e.target.value
    //     })
    // }

    // handlePasswordChange = (e) => {
    //     this.setState({
    //         password: e.target.value
    //     })
    // }

    handleOnchange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.email, this.state.password);
        // if(this.validEmail === true && this.validPassword === true) {
            this.setState({ loginBtn: 'Loading, Please wait...'})
            fetch(loginUrl, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                }),
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({ loginBtn: 'Login' })
                console.log(data.message);
                if(data.message === 'success') {
                    // const user = {
                    //     email: this.state.email,
                    //     password: this.state.password
                    // }
                    saveUser(data);
                    this.props.history.push('/dashboard');
                } else {
                    this.setState({
                        errorMsg: data.message
                    })
                }
                
            })
            .catch(err => {
                this.setState({
                    loginBtn: 'Login'
                })
                if(err) {
                    this.setState({
                        errorMsg: 'Fatal Error. Please try again '
                    })
                }
            })
        // } else {
        //     this.setState ({
        //         errorMsg : 'Please enter correct data in form'
        //     })
        // }
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <h5 className="center">Login to Dashboard</h5>
                <h6>{this.state.errorMsg}</h6>
                <label>Email</label>
                <input type="text" name="email" onChange = {this.handleOnchange} onBlur={this.validEmail} required />

                <label>Password</label>
                <input type="password" name="password" onChange={this.handleOnchange} onBlur={this.validPassword} required />

                <button className="btn">{this.state.loginBtn}</button>

            </form>
        )
    }

}

export default Login;