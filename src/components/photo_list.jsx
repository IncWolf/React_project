/**
 * Created by Incy on 25.09.2016.
 */
var React = require('react');

class PhotoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="photo-wrapper">
                {this.props.photos.map((photo) => {
                    return(
                        <div key={photo.id} data-id={photo.id} onMouseEnter={this.props.enterHandler} onMouseLeave={this.props.leaveHandler}>
                            <img src={photo.src} />
                            <div className="mask" style={this.props.showMask == photo.id.toString()?{display: 'block'}:{display: 'none'}}>
                                <p style={{fontSize: '25px'}}>{photo.title}</p>
                                <p style={{fontSize: '16px'}}>{photo.category}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

module.exports = PhotoList;