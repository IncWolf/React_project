/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Skills extends React.Component {
    //constructor(props) {
    //    super(props);
    //    this.step = this.step.bind(this);
    //    this.stop = this.stop.bind(this);
    //}
    //step() {
    //    var elements = document.querySelectorAll(".progress-bar");
    //    for (var i=0; i<elements.length;i++) {
    //        elements[i].style.width = parseInt(elements[i].style.width) + Math.floor(elements[i].dataset.max/30) + '%';
    //    }
    //}
    //stop() {
    //    clearInterval(this.interval);
    //}
    //componentDidMount() {
    //    this.interval = setInterval(this.step, 100);
    //    this.timeout = setTimeout(this.stop, 3000);
    //}
    //componentWillUnmount() {
    //    this.stop();
    //}
    render() {
        return (<div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max80" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={3000} >
                    <div className="progress-bar max80" role="progressbar">
                        USER INTERFACE
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max90" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={3000}>
                    <div className="progress-bar max90" role="progressbar">
                        WEB DESIGN
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max75" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={3000}>
                    <div className="progress-bar max75" role="progressbar">
                        WORDPRESS
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max94" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={3000}>
                    <div className="progress-bar max94" role="progressbar">
                        HTML & CSS
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <div className="progress">
                <ReactCSSTransitionGroup transitionName="max87" transitionAppear={true} transitionAppearTimeout={3000} transitionEnterTimeout={3000}>
                    <div className="progress-bar max87" role="progressbar">
                        APP DESIGN
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        </div>)
    }
}

module.exports = Skills;