import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers/reducers';

const store = createStore(reducers)



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'))