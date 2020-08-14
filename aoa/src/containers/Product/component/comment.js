import React, {Component} from "react";
import PropTypes from "prop-types";
import CommentList from "./commentList";
import CommentForm from "./commentForm";

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
                <button type='button' onClick={this.showCommentForm}>{this.state.isShowForm ? '收起' : '评论'}</button>
                {this.state.isShowForm ? <CommentForm isShowForm={this.state.isShowForm} id={this.props.id}
                                                      addComment={this.props.addComment}/> : ''}
                <CommentList list={this.props.commentList}>
                    <p>这个是嵌套进去的1</p>
                    <p>这个是嵌套进去的2</p>
                </CommentList>
                <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
                <p>祖宗传下来的信息： {this.context.parentName}</p>
            </div>
        )
    }
}
export default Comment;