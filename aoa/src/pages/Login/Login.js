import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import './Login.less';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: false, //是否登录成功
        }
    }
    login = (e) => {
        console.log(this);
        alert('登录成功！');
        this.setState({
            loginFlag: true,
        });
    }
    render() {
        if(this.state.loginFlag) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h3>登录页面</h3>
                <button type='button' className='login' onClick={ this.login }>登录</button>
                <Link to='register'> 注册</Link>
            </div>

        )
    }
}