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
                    <div className="progress-bar max80" role="progressbar">
                        USER INTERFACE
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max90" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <div className="progress-bar max90" role="progressbar">
                        WEB DESIGN
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max75" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <div className="progress-bar max75" role="progressbar">
                        WORDPRESS
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max94" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <div className="progress-bar max94" role="progressbar">
                        HTML & CSS
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max87" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <div className="progress-bar max87" role="progressbar">
                        APP DESIGN
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        </div>)
    }
}

module.exports = Skills;