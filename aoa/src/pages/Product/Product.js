import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import './Product.less';

const Goods = (props) => {

    return <div className='item'>
        <h2>商品名称: {props.product.productName}</h2>
        <h2>商品价格: {props.product.price}</h2>
        <Link to={'/product/' + props.product.id }>查看详情</Link>
        <Comment commentList={props.product.commentList} id={ props.product.id } addComment={ props.addComment }/>
    </div>
}

const CommentList = (props, context) => { //评论列表
    return <div>
        { props.children[0] }
        {
            props.list.map((item, i) => {
                return <p key={ i }>{item.name}: {item.content}</p>
            })
        }
        { props.children[1] }
        <h3>{ context.parentName }</h3>
    </div>
}

class CommentForm extends Component { //写评论
    constructor() {
        super();
        this.state = {
            name: '',
            content: '',
        }
    }
    componentWillMount() { //挂在前
        console.log('will')
    }

    componentDidMount() {
        console.log('dis')
        this.input.focus();
    }

    componentWillUnmount() {
        console.log('unwill');
    }

    submitComment = () => {
        let {name, content} = this.state;
        console.log(this.props.match.params)
        this.props.addComment(this.props.id, {name, content});
        this.setState({
            name: '',
            content: '',
        })
    }
    setValue = (type, e) => {
        let comment = {};
        comment[type] = e.target.value;
        this.setState(comment);
    }

    render() {
        console.log('render')
        return (
            <div>
                <section>姓名：<input type="text" placeholder='请输入您的昵称' value={ this.state.name } onChange={ this.setValue.bind(this, 'name') } ref={ (input) => { this.input = input} }/></section>
                <section>内容：<input type="text" placeholder='请输入评论内容' value={ this.state.content } onChange={ this.setValue.bind(this,'content') }/></section>
                <button type='button' onClick={this.submitComment.bind(this)}>发布</button>
            </div>
        );

    }
}

class Comment extends Component { //评论组件
    static contextTypes = {
        parentName: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            isShowForm: false,
            content: '<b>xxxxxxxxxxxx</b>',
        }
    }
    static propTypes = {
        commentList: PropTypes.array,
    }

    showCommentForm = () => {
        this.setState({isShowForm: !this.state.isShowForm});
    }

    render() {
        return (
            <div>
                <button type='button' onClick={ this.showCommentForm }>{ this.state.isShowForm ? '收起' : '评论'}</button>
                { this.state.isShowForm ? <CommentForm isShowForm={ this.state.isShowForm } id={this.props.id} addComment={ this.props.addComment }/> : '' }
                <CommentList list={this.props.commentList}>
                    <p>这个是嵌套进去的1</p>
                    <p>这个是嵌套进去的2</p>
                </CommentList>
                <div dangerouslySetInnerHTML={{__html: this.state.content }}/>
                <p>祖宗传下来的信息： { this.context.parentName }</p>
            </div>
        )
    }
}


export default class Product extends Component {
    static childContextTypes = {
        parentName: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            productList: [
                {
                    id: 1,
                    productName: '牛肉',
                    price: 99,
                    commentList: [
                        {
                            name: '小米',
                            content: '好东西',
                        },
                        {
                            name: '小三',
                            content: '差评',
                        }
                    ]
                },
                {
                    id: 2,
                    productName: '羊肉',
                    price: 199,
                    commentList: [
                        {
                            name: '小西',
                            content: '卖不出去',
                        },
                        {
                            name: '小洞',
                            content: '难吃啊',
                        }
                    ]
                }, {
                    id: 3,
                    productName: '鸡肉',
                    price: 59,
                    commentList: [
                        {
                            name: '小槜',
                            content: '过期了好像',
                        },
                        {
                            name: '小肆',
                            content: '好臭，都谁会买哦',
                        }
                    ]
                }],
            name: '这个是父组件的名字：Tony',
        }
    }
    getChildContext() {
        return{
            parentName: this.state.name,
        }
    }
    addComment = (id, comment) => {
        let productList = this.state.productList;
        productList.forEach((item) => {
            if(item.id == id) {
                item.commentList.push(comment);
            }
        });
        this.setState({
            productList: productList,
        })
    }
    changeName = () => {
        this.setState({
            name: 'xibei',
        })
    }
    render() {
        return (
            <div className='product'>
                {this.state.productList.map((item, i) => {
                    return <Goods key={i} product={item} addComment={ this.addComment.bind(this) }/>
                })}
                <button type='button' onClick={ this.changeName }>修改名字</button>
            </div>
        )
    }
}