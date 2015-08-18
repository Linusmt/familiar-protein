var React = require('react');

var Router = require('react-router');
var Navigation = Router.Navigation;


var Link = Router.Link;

var SignUpView = React.createClass({
	mixins: [Navigation],

	signup: function(){
		var username = React.findDOMNode(this.refs.username).value;
		var password = React.findDOMNode(this.refs.password).value;
		var data = [username, password];
		$.ajax({
			url:window.location.origin + '/signup',
			method: 'POST',
			data: JSON.stringify(data),
			contentType:"application/json",
			dataType: 'json',
			success: function(data){
					console.log(data);
				
			},
			error: function(xhr, status, err){
			  console.error(xhr, status, err.message);
			}
		});

	},

	render: function(){
		return (
			<div> 
				<h2>Sign Up</h2>
				<p>Create a new user account here. If you already have an account, click bellow</p>
				<div><Link to="signin"  className="btn btn-primary">Signin</Link></div>
				<form className="form text-center">
					<div className="username">Username:<input ref="username" rows="1" cols="20" type="text" className="form-control" placeholder="Username"></input></div>
					<div className="password">Password: <input ref="password" rows="1" cols="20" type="password" className="form-control" placeholder="Password"></input></div>
					<button onClick={this.signup}>Submit</button>
				</form>
			</div>
		)

	}
});	

module.exports= SignUpView;