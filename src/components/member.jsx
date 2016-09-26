/**
 * Created by Incy on 25.09.2016.
 */
var React = require('react');

class Member extends React.Component {
    render() {
        return(
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="general_information">
                    <div className="image-wrapper">
                        <div className="image-caption text-left">
                            <p style={{fontSize: '16px'}}>{this.props.member.name}</p>
                            <p style={{fontSize: '13px', color: '#18cfab'}}>{this.props.member.position}</p>
                        </div>
                    </div>
                    <div className="social-btns">
                        <div className="facebook"><span className="fa fa-facebook"></span></div>
                        <div className="twitter"><span className="fa fa-twitter"></span></div>
                        <div className="google"><span className="fa fa-skype"></span></div>
                        <div className="dribble"><span className="fa fa-vimeo"></span></div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Member;