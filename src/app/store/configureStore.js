import { createStore } from "redux";
import testReducer from "../../features/testArea/testReducer";
import { devToolsEnhancer } from 'redux-devtools-extension'
// import newTestReducer from "../../features/newTestArea/newTestReducer";


export const configureStore = () => {
    const store = createStore(testReducer, devToolsEnhancer());
    // const store = createStore(newTestReducer);

    return store;
}