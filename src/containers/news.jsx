/**
 * Created by IncWolf on 26.09.2016.
 */
var React = require('react');

var Link = require('react-router').Link;
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

class News extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid text-center" id="news">
                <div className="wrapper">
                    <div className="title">
                        <p>Breaking News</p>
                    </div>
                    <div className="row">
                        {this.props.news?this.props.news.map((article, i) => {
                            return(
                                <Link key={i} to={{pathname: 'article/'+article.id}}>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="image-wrapper">
                                            <div className="image-caption date">
                                                <p>{article.date}</p>
                                            </div>
                                            <div className="image-caption desc">
                                                <p style={{fontSize: '16px'}}>Amazing Blog Post</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }):null}
                    </div>
                </div>
            </div>
        )
    }
}

// связывание состояния приложения с React компонентом
function mapStateToProps(state) {
    return {
        news: state.news.list
    }
}

// связывание функции действия deleteUser со свойством React компонента deleteUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}
module.exports = connect(mapStateToProps, matchDispatchToProps)(News);