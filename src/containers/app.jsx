/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');

var Header = require('./header.jsx');
var Company = require('./company.jsx');
var Portfolio = require('./portfolio.jsx');
var Team = require('./team.jsx');
var Achievements = require('./achievements.jsx');
var ServicesWrapper = require('./servicesWrapper.jsx');
var News = require('./news.jsx');

class App extends React.Component {
    constructor() {
        super();
    }
    render() {

        return( <div>
                <Header />
                <ServicesWrapper />
                <Company />
                <Portfolio />
                <Team />
                <Achievements />
                <News />
            </div>
        )
    }
}

module.exports = App;
