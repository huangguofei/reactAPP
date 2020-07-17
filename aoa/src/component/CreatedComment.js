//高阶组件
import React, {Component} from "react";

export default (Component, data) => {
    class NewComponent extends Component {
        constructor() {
            super();
        }

        render() {
            return (
                <Component>
                    <p>{ data.name }</p>
                </Component>
                )
        }

    }

    return NewComponent;
}