import reducer from "./store/reducer";
import { createStore } from "redux";

const store = createStore(reducer);

export default store;