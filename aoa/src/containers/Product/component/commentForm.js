import React, {Component} from "react";

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
                <section>姓名：<input type="text" placeholder='请输入您的昵称' value={this.state.name}
                                   onChange={this.setValue.bind(this, 'name')} ref={(input) => {
                    this.input = input
                }}/></section>
                <section>内容：<input type="text" placeholder='请输入评论内容' value={this.state.content}
                                   onChange={this.setValue.bind(this, 'content')}/></section>
                <button type='button' onClick={this.submitComment.bind(this)}>发布</button>
            </div>
        );

    }
}
export default CommentForm;