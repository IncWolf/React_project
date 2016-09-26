/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;


var redux = require('redux');
var createStore = redux.createStore;
var combineReducers = redux.combineReducers;
var applyMiddleware = redux.applyMiddleware;

// redux-thunk - middleware-функция, позволяющая создавать actionCreators, которые возвращают функцию вместо action.
var thunk = require('redux-thunk').default;

var appReducer = require('./reducers/appReducer');
var companyReducer = require('./reducers/companyReducer');
var portfolioReducer = require('./reducers/portfolioReducer');
var achievementsReducer = require('./reducers/achievementsReducer');
var newsReducer = require('./reducers/newsReducer');

var App = require('./containers/app.jsx');
var Article = require('./components/article.jsx');

var fetchNews = require('./actions/async').fetchNews;

const middleware = applyMiddleware(thunk);
let allreducers = combineReducers({
    app: appReducer,
    company: companyReducer,
    portfolio: portfolioReducer,
    achievements: achievementsReducer,
    news: newsReducer
});

// store
const store = createStore(allreducers, middleware);

// инициализация асинхронной загрузки данных
store.dispatch(fetchNews());
ReactDOM.render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="article/:id" component={Article} />
    </Router>
</Provider>, document.getElementById('output'));