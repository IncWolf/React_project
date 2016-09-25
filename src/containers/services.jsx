/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');

var Link = require('react-router').Link;
var connect = require('react-redux').connect;

class Services extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var services = this.props.services;
        return (<div>
            <Link to='/services/service/1'>Нажми меня</Link>
            <div>{this.props.children}</div>
        </div>)
    }
}
module.exports = Services;