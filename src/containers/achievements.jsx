/**
 * Created by Incy on 25.09.2016.
 */
var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

var actions = require('../actions/actions');

class Achievements extends React.Component {
    constructor(props) {
        super(props);
        this.step = this.step.bind(this); 
        this.stop = this.stop.bind(this); 
    } 
    step() { 
        var elements = document.querySelectorAll(".counters"); 
        var newValues = [];
        for (var i=0; i<elements.length;i++) { 
            newValues.push(parseInt(elements[i].innerHTML) + Math.floor(elements[i].dataset.counter/30)); 
        } 
        this.props.changeValue(newValues);
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
        console.log(this.props.achievements);
        console.log(this.props.achievements[0].currentValue);
        return (
            <div className="container-fluid reverse text-center" id="numbers">
                <div className="row">
                    {this.props.achievements.map((item, i) => {
                        return(
                            <div key={i} className="col-md-3 col-sm-6 col-xs-12">
                                <div>
                                    <div className="icon-wrapper"><span className={item.icon}></span></div>
                                    <h4 className="counters" data-counter={item.maxValue}>{item.currentValue}</h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

// связывание состояния приложения с React компонентом
function mapStateToProps(state) {
    return {
        achievements: state.achievements.data
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeValue: actions.changeNumberValue
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Achievements);