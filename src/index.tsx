import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import { reducer, saga, Root } from "./app";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    process.env.NODE_ENV !== 'production' && window['__REDUX_DEVTOOLS_EXTENSION__'] != null
        ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
        : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
sagaMiddleware.run(saga);

const rootElement =     document.getElementById('root') as HTMLElement;
const rootComponent = (
    <Provider store={store}>
        <Root/>
    </Provider>
);

ReactDOM.render(rootComponent, rootElement);
