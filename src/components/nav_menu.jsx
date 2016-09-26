/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');

class NavMenu extends React.Component {
    render() {
        return (<div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SERVICE</a></li>
                <li><a href="#">WORK</a></li>
                <li><a href="#">TESTIMONIAL</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">TEAM</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>)
    }
}

module.exports = NavMenu;