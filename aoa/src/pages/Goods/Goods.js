import React, { Component } from "react";
import '../../component/CreatedComment';
import './Goods.less';
import CreatedComment from "../../component/CreatedComment";

 class Goods extends Component{
    constructor() {
        super();
        this.state = {
            index: 3,
            list: [
                {
                    id: 1,
                    name: '香蕉',
                },
                {
                    id: 2,
                    name: '菠萝',
                },
                {
                    id: 3,
                    name: '哈密瓜',
                },
            ]
        }
    }
    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }
     changeSelect = (e) => {
        this.setState({
            index: e.target.value,
        })
     }
    render() {
        return(
            <div>
                <p>这里是商品详情页</p>
                { this.props.children }
                <select  value={ this.state.index }  onChange={ this.changeSelect }>
                    {
                        this.state.list.map((item) => {
                            return(
                                <option key={ item.id } value={ item.id }>{ item.name }</option>
                            )
                        })
                    }
                </select>
                <p>经过改造了哦</p>
            </div>
        )
    }
}
Goods = CreatedComment(Goods, {name: 'xxxxxxx'});
export default Goods;