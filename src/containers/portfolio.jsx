/**
 * Created by Incy on 25.09.2016.
 */
var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var PhotoList = require('../components/photo_list.jsx');
var actions = require('../actions/actions');

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
        this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    }
    clickHandler(e) {
        this.props.changeFilter(e.target.dataset.filter);
    }
    mouseEnterHandler(e) {
        this.props.showMask(e.currentTarget.dataset.id)
    }
    mouseLeaveHandler(e) {
        this.props.showMask(false);
    }
    render() {
        return (
            <div className="container-fluid text-center">
                <div className="wrapper">
                    <div className="row">
                        <div className="title">
                            <h4>Our Amazing Work</h4>
                        </div>
                        <div className="col-md-12" onClick={this.clickHandler}>
                            <div data-filter="ALL" className={this.props.activeFilterTab == 'ALL'?'active':null}>All</div><div data-filter="GRAPHIC" className={this.props.activeFilterTab == 'GRAPHIC'?'active':null}>Graphic Design</div><div data-filter="WEB" className={this.props.activeFilterTab == 'WEB'?'active':null}>Web Design</div><div data-filter="LANDING" className={this.props.activeFilterTab == 'LANDING'?'active':null}>Landing Pages</div><div data-filter="WORDPRESS" className={this.props.activeFilterTab == 'WORDPRESS'?'active':null}>Wordpress</div>
                        </div>
                        <div className="col-md-12" id="photo_container">
                            <PhotoList photos={this.props.photos} showMask={this.props.mask} enterHandler={this.mouseEnterHandler} leaveHandler={this.mouseLeaveHandler}/>
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
        photos: state.portfolio.photos,
        mask: state.portfolio.mask,
        activeFilterTab: state.portfolio.activeFilterTab
    }
}

// связывание функции действия deleteUser со свойством React компонента deleteUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeFilter: actions.changeFilter,
        showMask: actions.showMask
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Portfolio);