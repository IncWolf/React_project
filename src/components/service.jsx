/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');

class Service extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.location);
        return (<div>

        </div>)
    }
}

module.exports = Service;