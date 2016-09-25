/**
 * Created by Incy on 25.09.2016.
 */
var React = require('react');
// var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var Member = require('../components/member.jsx');
// var actions = require('../actions/actions');

class Team extends React.Component {
    render() {
        return (<div className="container-fluid text-center">
            <div className="wrapper">
                <div className="title">
                    <h4>Meet Our Team</h4>
                </div>
                <div className="row">
                    {this.props.team.map((member, i) => {
                        return(<Member key={i} member={member} />)
                    })}
                </div>
            </div>
        </div>)
    }
}
// связывание состояния приложения с React компонентом
function mapStateToProps(state) {
    return {
        team: state.app.team
    }
}

module.exports = connect(mapStateToProps)(Team);