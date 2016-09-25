/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');

var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

//var actions = require('../actions/actions');
var asyncActions = require('../actions/async');
var NavMenu = require('../components/nav_menu.jsx');

class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(<div>
            <nav className="navbar navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"><span className="fa fa-bars"></span></button>
                        <a className="navbar-brand" href="#">KET</a>
                    </div>
                    <NavMenu />
                </div>
            </nav>
            <div className="jumbotron reverse text-center" id="header">
                <div className="jumb_wrapper">
                    <h4 className="x-large x-light">WE MAKE WEBSITES</h4>
                    <a href="#" className="btn btn-custom light">START TOUR</a>
                </div>
            </div>
        </div>)
    }
}

module.exports = Header;