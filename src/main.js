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
var App = require('./containers/app.jsx');
var Services = require('./containers/services.jsx');
var Service = require('./components/service.jsx');

// импорт зависимостей для настройки маршрутизации
var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

//var fetchUsers = require('./actions/async').fetchUsers;

//const middleware = applyMiddleware(thunk);
let allreducers = combineReducers({
    app: appReducer,
    company: companyReducer
});

// store
const store = createStore(allreducers);

// инициализация асинхронной загрузки данных
//store.dispatch(fetchUsers());
ReactDOM.render(
<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path='service' component={Services}>
                <Route path="service/:id" component={Service} />
            </Route>
        </Route>
    </Router>
    </Provider>,
    document.getElementById('output')
);