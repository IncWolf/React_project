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
        return (
            <div className="container-fluid text-center">
                <div className="wrapper">
                    <div className="row">
                        <div className="title">
                            <h4>Our Services</h4>
                        </div>
                        <div className="col-md-12">
                            {this.props.services.map((service) => {
                                return(<Link to={{pathname: 'services/service/'+service.id, query: {src: service.src, description: service.description}}} activeClassName="active">{service.title}</Link>)
                            })}
                            <div>{this.props.children}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
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