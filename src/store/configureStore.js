import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import thunk from 'redux-thunk';

export default function configureStore(){
	return createStore(
		rootReducer,
		window.__REDUX_DEVTOOLS_EXTENSTION__ && window.__REDUX_DEVTOOLS_EXTENSTION__(),
		applyMiddleware(thunk)
	);
}
