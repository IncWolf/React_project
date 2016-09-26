/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Skills extends React.Component {
    render() {
        return (<div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max80" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <div className="progress-bar violet max80" role="progressbar">
                        <div>USER INTERFACE</div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max90" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <div className="progress-bar blue max90" role="progressbar">
                        <div>WEB DESIGN</div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max75" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <div className="progress-bar pink max75" role="progressbar">
                        <div>WORDPRESS</div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max94" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <div className="progress-bar green max94" role="progressbar">
                        <div>HTML & CSS</div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max87" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <div className="progress-bar brown max87" role="progressbar">
                        <div>APP DESIGN</div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        </div>)
    }
}

module.exports = Skills;