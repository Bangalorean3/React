import React from 'react';
import ReactDOM from 'react-dom';
import App from './rootcomponent/app';

import {Provider} from 'react-redux'
import {createStore} from 'redux'

import allReducers from './reducers/combine-reducers'

const reduxStore = createStore(allReducers
    ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
                <Provider store={reduxStore}>
                <App></App>
                </Provider>,
                document.getElementById('root'))