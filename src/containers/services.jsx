/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');

var Link = require('react-router').Link;
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

class Services extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>{this.props.services.map((service) => {
            return(<Link to={{pathname: '/services/service/'+service.id}}>{service.title}</Link>)
        })}
            <div>{this.props.children}</div>
        </div>)
    }
}
// связывание состояния приложения с React компонентом
function mapStateToProps(state) {
    return {
        services: state.app.services
    }
}

// связывание функции действия deleteUser со свойством React компонента deleteUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Services);