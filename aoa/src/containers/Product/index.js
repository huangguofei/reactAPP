import React, {Component} from "react";
import PropTypes from 'prop-types';
import {getList} from '../../redux/modules/product';
import Goods from "./component/goods";
import './style.less';
import {connect} from "react-redux";

class Index extends Component {
    static childContextTypes = {
        parentName: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '这个是父组件的名字：Tony',
        }
    }

    getChildContext() {
        return {
            parentName: this.state.name,
        }
    }

    addComment = (id, comment) => {
        let productList = this.state.productList;
        productList.forEach((item) => {
            if (item.id == id) {
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
                {this.state.list.map((item, i) => {
                    return <Goods key={i} product={item} addComment={this.addComment.bind(this)}/>
                })}
                <button type='button' onClick={this.changeName}>修改名字</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    list: getList(),
});
const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Index);