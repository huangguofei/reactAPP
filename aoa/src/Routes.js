import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
// import { createHashHistory } from History
import {Home, Login, Register, Product, Goods, List, NotFound} from './containers';

const routes = [{
    path: '/home',
    exact: true,
    component: Home,
}, {
    path: '/login',
    component: Login,
}, {
    path: '/register',
    component: Register,
}, {
    path: '/product',
    component: Product,
    exact: true,
    children: [
        {
            path: '/product/:id',
            component: Goods,
        },
        {
            path: '/product/index',
            component: Goods,
            exact: true,
        }
    ]
}, {
    path: '/product/:id',
    component: Goods,
}, {
    path: '/product/index',
    component: Goods,
}, {
    path: '/list',
    component: List,
}, {
    path: '/404',
    component: NotFound,
}]

export default routes;
