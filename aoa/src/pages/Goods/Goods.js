import React, { Component } from "react";
import './Goods.less';

export default class Goods extends Component{
    constructor() {
        super();
        console.log(1);
    }
    componentWillMount() {
        console.log(2)
    }

    componentDidMount() {
        console.log(3)
    }

    componentWillUnmount() {
        console.log('销毁')
    }

    render() {
        console.log('render')
        return(
            <div>这里是商品详情页</div>
        )
    }
}