import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Artists} from './artists';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        artists:Artists
    }),
    applyMiddleware(thunk, logger))

    return store;
}