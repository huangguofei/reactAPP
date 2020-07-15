import React, { Component } from 'react';
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import routes from "./Routes";
import './App.less';

const RouteTree = (props) => {
    return (
        <>
            {
                props.list.map((item) => {
                    if(item.children) {
                        return <Route key={ item.path }
                                      path={ item.path }
                                      component={ item.component }
                                      exact={ item.exact }
                        >
                            <RouteTree list={ item.children } />
                        </Route>
                    } else {
                        return <Route key={ item.path }
                                      path={ item.path }
                                      component={ item.component }
                                      exact={ item.exact }
                        />
                    }


                })
            }
        </>
    );
}

class App extends Component{
    render() {
        return (
            <div className="App">
                <Switch>
                    {/*<RouteTree list={ routes } />*/}
                    {
                        routes.map(route => {
                            return(
                                <Route key={ route.path }
                                       path={ route.path }
                                       component={ route.component }
                                       exact={ route.exact }
                                />
                            )
                        })
                    }
                    <Redirect exact from='/' to={ routes[0].path } />
                    <Redirect to='/404' />
                </Switch>

            </div>
        );
    }
}

export default App;
