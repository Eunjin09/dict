//configStore.js
// 리듀서의 묶음(root리듀서)과 그 외에 필요한 다른 어떤 옵션들 (리듀서+리듀서+)
import { createStore, combineReducers, applyMiddleware } from "redux"; //createStore: 스토어 생성, combineReucers : 리듀서는 묶는 역할
import dict from "./modules/dict"; //리듀서 불러오기
import thunk from "redux-thunk";

const middlewares = [thunk];
// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가!
const rootReducer = combineReducers({ dict });
const enhancer = applyMiddleware(...middlewares);

// 스토어를 만듭니다.
// const store = createStore(rootReducer);
const store = createStore(rootReducer, enhancer);

export default store;