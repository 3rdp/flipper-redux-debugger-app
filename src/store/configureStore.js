import { createStore, applyMiddleware } from "redux";

const middlewares = [
  /* other middlewares */
];

const mockChangingStates = [{}, {
  fieldBool: false,
  fieldString: '1',
}, {
  fieldBool: true,
  fieldString: '12',
  fieldArray: {
    foo: '313',
    bar: '123'
  }
}, {}]

const RootReducer = (state = { n: 0 }, action) => {
  switch (action.type) {
    case 'i': {
      const nextN = state.n + 1

      return {
        n: nextN,
        state: mockChangingStates[nextN % mockChangingStates.length]
      }
    }
    default:
      return state
  }
}

if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  middlewares.push(createDebugger());
}

const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store
