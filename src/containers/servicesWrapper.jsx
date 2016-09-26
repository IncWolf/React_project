/**
 * Created by galushkasergiy on 26.09.16.
 */
var React = require('react');
var Services = require('./services.jsx');
var Service = require('../components/service.jsx');
var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;
class ServicesWrapper extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={Services}>
                    <Route path="service/:id" component={Service} />
                </Route>
            </Router>
        )
    }
}
module.exports = ServicesWrapper;