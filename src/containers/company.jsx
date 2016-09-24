/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var OurHistory = require('../components/history.jsx');
var OurBiography = require('../components/biography.jsx');
var OurSkills = require('../components/skills.jsx');
var actions = require('../actions/actions');

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e) {
        this.props.changeTab(e.target.dataset.tab);
    }
    render() {
        var showedTab;

        switch (this.props.activeTab.toString()) {
            case '0':
                showedTab = <OurHistory />;
                break;
            case '1':
                showedTab = <OurBiography />;
                break;
            case '2':
                showedTab = <OurSkills />;
                break;
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <img src="src/img/2.jpg" style={{width: 100+'%'}} />
                    </div>
                    <div className="col-sm-6">
                        <div className="title"><h4>About Our Company</h4></div>
                        <div><ul style={{listType: 'none'}} onClick={this.clickHandler}><li className={this.props.activeTab == 0?'active':null} data-tab="0" style={{float: 'left'}}>OUR HISTORY</li><li className={this.props.activeTab == 1?'active':null} data-tab="1" style={{float: 'left'}}>OUR BIOGRAPHY</li><li className={this.props.activeTab == 2?'active':null} data-tab="2" style={{float: 'left'}}>OUR SKILLS</li></ul></div>
                        {showedTab}
                    </div>
                </div>
            </div>
        )
    }
}
// связывание состояния приложения с React компонентом
function mapStateToProps(state) {
    return {
        activeTab: state.company.activeCompanyTab
    }
}

// связывание функции действия deleteUser со свойством React компонента deleteUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeTab: actions.changeCompanyTab
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Company);