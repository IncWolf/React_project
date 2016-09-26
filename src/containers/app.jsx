/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');

var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
//var actions = require('../actions/actions');

var Header = require('./header.jsx');
var Services = require('./services.jsx');
var Company = require('./company.jsx');
var Portfolio = require('./portfolio.jsx');
var Team = require('./team.jsx');
var Achievements = require('./achievements.jsx');
var Service = require('../components/service.jsx');

class App extends React.Component {
    constructor() {
        super();
    }
    render() {

        return( <div>
                <Header />
                <Services  services={this.props.state.services}><Service /></Services>
                <Company />
                <Portfolio />
                <Team />
                <Achievements />
                <p>News</p>
                <p>Feedback</p>
                <p>Contact</p>
                <p>Footer</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);
