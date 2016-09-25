/**
 * Created by Incy on 25.09.2016.
 */
var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

var actions = require('../actions/actions');

class Achievement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid reverse text-center">
                <div className="wrapper">
                    <div className="row">
                        {this.prop.achievements.map((item) => {
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div>
                                    <div><img src={item.icon} /></div>
                                    <h4 data-counter={item.max}></h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

// связывание состояния приложения с React компонентом
function mapStateToProps(state) {
    return {
        achievements: state.app.achievements
    }
}

module.exports = connect(mapStateToProps)(Achievements);