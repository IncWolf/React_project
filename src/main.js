/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;

var redux = require('redux');
var createStore = redux.createStore;
var combineReducers = redux.combineReducers;
//var applyMiddleware = redux.applyMiddleware;

// redux-thunk - middleware-функция, позволяющая создавать actionCreators, которые возвращают функцию вместо action.
//var thunk = require('redux-thunk').default;

var appReducer = require('./reducers/appReducer');
var companyReducer = require('./reducers/companyReducer');
var portfolioReducer = require('./reducers/portfolioReducer');
var achievementsReducer = require('./reducers/achievementsReducer');

var App = require('./containers/app.jsx');

//var fetchUsers = require('./actions/async').fetchUsers;

//const middleware = applyMiddleware(thunk);
let allreducers = combineReducers({
    app: appReducer,
    company: companyReducer,
    portfolio: portfolioReducer,
    achievements: achievementsReducer
});

// store
const store = createStore(allreducers);

// инициализация асинхронной загрузки данных
//store.dispatch(fetchUsers());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('output'));