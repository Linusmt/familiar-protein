var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;

var ProfileView = React.createClass({ 
  mixins: [Navigation],

  getInitialState: function(){ 
    return { 
      user: null
    }
  },

  componentDidMount: function(){ 


  },  

  //check to see which user is logged in, then load that data into the state

  render: function(){ 
    return(
      <div id='page-content-wrapper'>
        <div className='container-fluid'>



      )
  }

});

module.exports = ProfileView;