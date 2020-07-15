import Loadable from "react-loadable";

const Loading = () => null; //加载时不显示loading

const Home = Loadable({
    loader: () => import('./Home/Home'), //按需加载点击只加载一个页面
    loading: Loading,
});
const Login = Loadable({
    loader: () => import('./Login/Login'),
    loading: Loading,
});
const Register = Loadable({
    loader: () => import('./Register/Register'),
    loading: Loading,
});

const List = Loadable({
    loader: () => import('./List/List'),
    loading: Loading,
});

const Product = Loadable({
    loader: () => import('./Product/Product'),
    loading: Loading,
});

const Goods = Loadable({
    loader: () => import('./Goods/Goods'),
    loading: Loading,
});

const NotFound = Loadable({
    loader: () => import('./NotFound/NotFound'),
    loading: Loading,
});

export {
    Home, Login, Register, List, Product, Goods, NotFound
}