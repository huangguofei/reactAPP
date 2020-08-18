import React, {Component} from "react";
import PropTypes, {func} from 'prop-types';
import { actions as productActions } from '../../redux/modules/product';
import Goods from "./component/goods";
import './style.less';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Index extends Component {
    static childContextTypes = { //context 格式限制
        parentName: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '这个是父组件的名字：Tony',
        }

    }
    componentWillMount() {
        this.props.loadList();
    }
    componentDidMount() {
    }

    getChildContext() { //设置context值
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
    skipAddProduct = () => {

    }
    deleteGoods = (productId) => {
        this.props.deleteProduct(productId);
    }
    render() {
        const { productList } = this.props;
        return (
            <div className='product'>
                { Object.keys(productList).map( key => {
                    return <Goods key={key} product={productList[key]} deleteProduct={ this.deleteGoods } addComment={this.addComment.bind(this)}/>
                })}
                <div className="btn-group">
                    <button type='button' onClick={this.skipAddProduct}>新增商品</button>
                    <button type='button' onClick={this.changeName}>修改名字</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    productList: state.product.productList,
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(productActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);