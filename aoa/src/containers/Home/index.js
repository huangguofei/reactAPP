import React, { Component, useRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import './style.less';

const Input = forwardRef(({ type, placeholder}, ref) => {
    return <input type={ type } ref={ ref } placeholder={ placeholder }/>
});

class Header extends Component {
    render() {
        return (
            <h1>标题鸭</h1>
        )
    }
}

class Count extends Component {
    static defaultProps = {
        onClick: () => {
            console.log('默认事件');
        },
        nameText: '陌生人',
    }
    constructor() {
        super();
        this.state = {
            count: 0,
        };
        this.inputRef = React.createRef();
    }

    addCount = () => {
        console.log(this.state.count);
        this.setState({
            count: ++this.state.count,
        });
        console.log(this.state.count);
    }
    clearCount = () => {
        this.setState({
            count: 0,
        })
        this.props.onClick();
    }
    getFocus = () => { //获取焦点
        const { current } = this.inputRef;
        current.focus();
    }
    render() {

        return (
            <div>
                <h3>尊敬的{this.props.nameText} 您好，您已经点击了{this.state.count}次</h3>
                <h4>操作人：{this.props.info.name}, 年龄： {this.props.info.age}</h4>
                <button type='button' onClick={this.addCount}>点击+1</button>
                <hr/>
                <button type='button' onClick={this.clearCount}>清空</button>
                <hr/>
                <Input ref={ this.inputRef } placeholder='请输入内容' type='text'/>
                <hr/>
                <button type='button' onClick={ this.getFocus }>获取焦点</button>
            </div>
        )
    }
}

export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            info: {name: 'nazi', age: 18},
        };
    }

    changeInfo = () => {
        this.setState({
            info: {name: '王大娘', age: 19},
        })
    }
    toProduct = () => {
        this.props.history.push('/product')
    }

    render() {
        const isLogin = false;
        return (
            <div>
                <Header/>
                <h1>这个是首页</h1>
                {isLogin ? <h2>欢迎来到react学习天地！</h2> : <Link to='login'> 登录</Link>}
                <Count nameText='tony' info={this.state.info} onClick={() => {
                    alert('归零成功！')
                }}/>
                <button type='button' onClick={ this.changeInfo }>修改操作人信息</button>
                <button type='button' onClick={ this.toProduct }>查看商品</button>
            </div>
        )
    }
}