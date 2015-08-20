var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;

var cookie = require('react-cookie')

var ProfileView = React.createClass({ 
  mixins: [Navigation],

  getInitialState: function(){ 
    return { 
      user: {
        username: null, 
        points: null, 
        questionSolved: [{
          qNumber: null,
          solved: null, 
          solution: null, 
          points: [], 
          votes: null
        }]  
      }
    }
  },

  getUserData: function() {
    $.ajax({
      url: window.location.origin + '/getUserData',
      dataType: 'json',
      method: 'GET',
      success: function(data) {
        this.setState({user: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function(){ 
    this.getUserData()
  },  

  render: function(){ 
    return(
      <div id='page-content-wrapper'>
        <div className='container-fluid'>
        <h2>{this.state.user.username}</h2>
        </div>
        </div>


      )
  }

});

module.exports = ProfileView;