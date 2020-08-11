//组件懒加载
import Loadable from "react-loadable";

const Loading = () => null; //加载时不显示loading

const Home = Loadable({
    loader: () => import('./Home/index'), //按需加载点击只加载一个页面
    loading: Loading,
});
const Login = Loadable({
    loader: () => import('./Login/index'),
    loading: Loading,
});
const Register = Loadable({
    loader: () => import('./Register/index'),
    loading: Loading,
});

const List = Loadable({
    loader: () => import('./List/index'),
    loading: Loading,
});

const Product = Loadable({
    loader: () => import('./Product/index'),
    loading: Loading,
});

const Goods = Loadable({
    loader: () => import('./Goods/index'),
    loading: Loading,
});

const NotFound = Loadable({
    loader: () => import('./NotFound/index'),
    loading: Loading,
});

export {
    Home, Login, Register, List, Product, Goods, NotFound
}