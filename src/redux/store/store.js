import { createStore } from 'redux';
import rootReducer from '../reducers/root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';



export default createStore(
  rootReducer,
  composeWithDevTools()
);
