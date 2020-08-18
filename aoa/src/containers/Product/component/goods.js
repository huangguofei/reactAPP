import {Link} from "react-router-dom";
import Comment from "./comment";
import React from "react";

const Goods = (props) => {
    function deleteProduct() {
        props.deleteProduct(props.product.id);
    }
    return <div className='item'>
        <h2>商品名称: {props.product.productName}</h2>
        <h2>商品价格: {props.product.price}</h2>
        <Link to={'/product/' + props.product.id}>查看详情</Link>
        <button type='button' onClick={deleteProduct}>删除</button>
        <Comment commentList={props.product.commentList} id={props.product.id} addComment={props.addComment}/>
    </div>
}
export default Goods;