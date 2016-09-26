/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

class Service extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let service = this.props.services[this.props.params.id];
        return (<div><img src={service.src} /><div>{service.description}</div></div>)
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
module.exports = connect(mapStateToProps, matchDispatchToProps)(Service);