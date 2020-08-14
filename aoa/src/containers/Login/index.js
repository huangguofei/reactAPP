import React, {Component} from "react";
import {Link, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {get, post} from '../../utils/ajax';
import URL from '../../utils/url';
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

    shouldComponentUpdate(nextProps, nextState, nextContext) {

    }

    componentWillMount() {
        get(URL.GET_COUNTRY_CODE).then(res => {
            console.log(res)
        })
        // axios.get(URL.GET_COUNTRY_CODE, {params: {}},
        //     {
        //         headers: {
        //             'token': 'NDM3YzA3NGU4MjU5M2M0YTVjMDczZWY5NjI5Mzk2YTE=',
        //             'Content-Type': 'application/json;charset=utf-8'
        //         }
        //     })
        //     .then((login) => {
        //         console.log(login)
        //     });
    }

    login = (e) => {
        console.log(this);
        post(URL.CHAT_LIST).then(res => {
            console.log(res)
        });

        return;
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
        return (
            <div>
                <h3>登录页面</h3>
                <input type="text" value={this.state.formData.mobile}
                       onChange={this.setValue.bind('formData.mobile', this)}/>
                <button type='button' className='login' onClick={this.login}>登录</button>
                <Link to='register'> 注册</Link>
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
