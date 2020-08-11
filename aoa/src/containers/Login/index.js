import React, {Component} from "react";
import {Link, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import './style.less';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: false, //是否登录成功
            formData: {
                mobile: '',
                type: 1,
                password: '',
            }
        }
    }

    login = (e) => {
        console.log(this);
        alert('登录成功！');
        this.setState({
            loginFlag: true,
        });
    }
    setValue = (type, e) => {
        let comment = {};
        comment[type] = e.target.value;
        this.setState(comment);
    }

    render() {
        if (this.state.loginFlag) {
            return <Redirect to='/'/>
        }
        const {PayIncrease, PayDecrease, clear} = this.props;
        return (
            <div>
                <h3>登录页面</h3>
                <input type="text" value={this.state.formData.mobile} onChange={this.setValue('formData.mobile', this)}/>
                <button type='button' className='login' onClick={this.login}>登录</button>
                <Link to='register'> 注册</Link>
                <p>{this.props.tiger}</p>
                <button type='button' onClick={PayIncrease}>增加</button>
                <button type='button' onClick={PayDecrease}>减少</button>
                <button type='button' onClick={clear}>清除</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        tiger: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        PayIncrease: () => dispatch({type: 'add'}),
        PayDecrease: () => dispatch({type: 'reduce'}),
        clear: () => dispatch({type: 'clear'}),
    }
}

export default Index = connect(mapStateToProps, mapDispatchToProps)(Index)