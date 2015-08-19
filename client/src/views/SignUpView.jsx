var React = require('react');

var Router = require('react-router');
var Navigation = Router.Navigation;


var Link = Router.Link;

var SignUpView = React.createClass({
	mixins: [Navigation],

	getInitialState: function(){
    return {
      login: true
    };
  },

	signup: function(){
		var username = React.findDOMNode(this.refs.username).value;
		var password = React.findDOMNode(this.refs.password).value;
		var data = [username, password];
		var that = this;

		$.ajax({
			url:window.location.origin + '/signup',
			method: 'POST',
			data: JSON.stringify(data),
			contentType:"application/json",
			dataType: 'json',
			success: function(data){
					console.log('SUCCESS!');
					console.log(data);
					that.transitionTo('overview');
			},
			error: function(xhr, status, err){
			  console.error(xhr, status, err.message);
			  that.setState({
			    login: false 
			  });
			}
		});

	},

	render: function(){
		return (
			<div> 
				<h2>Sign Up</h2>
				<p>Please create a new account or continue to Login</p>
				<div><Link to="signin"  className="btn btn-primary">Signin</Link></div>
					<form className="form-inline">
						<div className="form-group">
							<label>Username</label>
	  	  			<input ref="username" type="username" className="form-control" placeholder="Username" />
	    			</div>
	    			<div className="form-group">
							<label>Password</label>
	    				<input ref="password" type="password" className="form-control" placeholder="Password" />
	    			</div>
						<button onClick={this.signup} className="btn btn-primary">Submit</button>
					</form>
					{this.state.login === false ? <p className="error-msg">Username is taken, please try again</p> : null}
			</div>
		)
	}
});

module.exports= SignUpView;