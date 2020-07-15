import React, {Component} from "react";
import {Link} from "react-router-dom";
import './Product.less';

const Goods = (props) => {

    return <div className='item'>
        <h2>商品名称: {props.product.productName}</h2>
        <h2>商品价格: {props.product.price}</h2>
        <Link to={'/product/' + props.product.id }>查看详情</Link>
        <Comment commentList={props.product.commentList} id={ props.product.id } addComment={ props.addComment }/>
    </div>
}

const CommentList = (props) => { //评论列表
    return <div>
        {
            props.list.map((item, i) => {
                return <p key={ i }>{item.name}: {item.content}</p>
            })
        }
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
    submitComment = () => {
        let {name, content} = this.state;
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
        if (this.props.isShowForm) {
            return (
                <div>
                    <section>姓名：<input type="text" placeholder='请输入您的昵称' value={ this.state.name } onChange={ this.setValue.bind(this, 'name') }/></section>
                    <section>内容：<input type="text" placeholder='请输入评论内容' value={ this.state.content } onChange={ this.setValue.bind(this,'content') }/></section>
                    <button type='button' onClick={this.submitComment.bind(this)}>发布</button>
                </div>
            );
        } else {
            return null;
        }

    }
}

class Comment extends Component { //评论组件
    constructor() {
        super();
        this.state = {
            isShowForm: false,
        }
    }

    showCommentForm = () => {
        this.setState({isShowForm: !this.state.isShowForm});
    }

    render() {
        return (
            <div>
                <button type='button' onClick={ this.showCommentForm }>{ this.state.isShowForm ? '收起' : '评论'}</button>
                <CommentForm isShowForm={ this.state.isShowForm } id={this.props.id} addComment={ this.props.addComment }/>
                <CommentList list={this.props.commentList}/>
            </div>
        )
    }
}


export default class Product extends Component {
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
        }
    }
    addComment = (id, comment) => {
        console.log(id, comment);
        let productList = this.state.productList;
        console.log(productList)
        productList.forEach((item) => {
            if(item.id == id) {
                console.log(item.commentList)
                item.commentList.push(comment);
                console.log(item.commentList)
            }
        });
        this.setState({
            productList: productList,
        })
    }
    render() {
        return (
            <div className='product'>
                {this.state.productList.map((item, i) => {
                    return <Goods key={i} product={item} addComment={ this.addComment.bind(this) }/>
                })}
            </div>
        )
    }
}