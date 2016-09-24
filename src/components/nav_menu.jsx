/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');

class NavMenu extends React.Component {
    render() {
        return (<div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">HOME</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">WORK</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CLIENTS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>)
    }
}

module.exports = NavMenu;