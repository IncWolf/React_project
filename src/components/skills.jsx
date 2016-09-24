/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.step = this.step.bind(this);
        this.stop = this.stop.bind(this);
    }
    step() {
        var elements = document.querySelectorAll(".progress-bar");
        for (var i=0; i<elements.length;i++) {
            elements[i].style.width = parseInt(elements[i].style.width) + Math.floor(elements[i].dataset.max/30) + '%';
        }
    }
    stop() {
        clearInterval(this.interval);
    }
    componentDidMount() {
        this.interval = setInterval(this.step, 100);
        this.timeout = setTimeout(this.stop, 3000);
    }
    componentWillUnmount() {
        this.stop();
    }
    render() {
        return (<div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" data-max="80" style={{width:1+'%'}}>
                    USER INTERFACE
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" data-max="90" style={{width:1+'%'}}>
                    WEB DESIGN
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" data-max="75" style={{width:1+'%'}}>
                    WORDPRESS
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" data-max="94" style={{width:1+'%'}}>
                    HTML & CSS
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar"data-max="87" style={{width:1+'%'}}>
                    APP DESIGN
                </div>
            </div>
        </div>)
    }
}

module.exports = Skills;