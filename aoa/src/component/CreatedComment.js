//高阶组件
import React, {Component} from "react";

export default (Component, data) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                val: '',
            }
        }
        valChange(e) {
            this.setState({
                val: e.target.value,
            });
        }
        render() {
            const newProps = {
                controlledProps:{
                    value: this.state.val,
                    onChange: this.valChange
                }
            }
            return (
                <Component { ...this.props } { ...newProps}>
                    <p>{ data.name }</p>
                </Component>
                )
        }

    }

    return NewComponent;
}