import { createStore } from "redux";
import { rootReducers } from "./reducers/indexReducer";

export const store = createStore(rootReducers);