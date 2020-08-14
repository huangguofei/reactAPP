import React from "react";

const CommentList = (props, context) => { //评论列表
    return <div>
        {props.children[0]}
        {
            props.list.map((item, i) => {
                return <p key={i}>{item.name}: {item.content}</p>
            })
        }
        {props.children[1]}
        <h3>{context.parentName}</h3>
    </div>
}

export default CommentList;