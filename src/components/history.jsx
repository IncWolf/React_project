/**
 * Created by galushkasergiy on 24.09.16.
 */
var React = require('react');

class History extends React.Component {
    render() {
        return (<div>
            <div className="col-md-12"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar lacus sit amet mi bibendum sodales.</p><p> Nulla mi leo, elementum sit amet rutrum quis, posuere quis metus. Pellentesque in posuere neque, vitae euismod ipsum.</p></div>
            <div className="row">
                <div className="col-md-6"><ul><li>Morbi vel tempus tellus. </li><li>Morbi vel tempus tellus. </li><li>Morbi vel tempus tellus. </li><li>Morbi vel tempus tellus. </li></ul></div>
                <div className="col-md-6"><ul><li>Morbi vel tempus tellus. </li><li>Morbi vel tempus tellus. </li><li>Morbi vel tempus tellus. </li><li>Morbi vel tempus tellus. </li></ul></div>
            </div>
        </div>)
    }
}

module.exports = History;