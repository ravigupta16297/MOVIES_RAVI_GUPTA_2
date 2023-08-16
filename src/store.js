import { legacy_createStore } from "redux";
import root from "./reducer";

const store=legacy_createStore(root);
export default store;
