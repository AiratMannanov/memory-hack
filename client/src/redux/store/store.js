import { createStore } from 'redux';
import rootReducer from '../reducers/root-reducers';
import { composeWithDevTools } from 'redux-devtools-extension';



export default createStore(
  rootReducer,
  composeWithDevTools()
);
