var React = require('react');

var Router = require('react-router');
var Navigation = Router.Navigation;


var Link = Router.Link;

var SignInView = React.createClass({
	mixins: [Navigation],

	/* function: signin 
	 * ----------------
	 * This function is invoked when the user presses enter of clicks the signin
	 * button. It takes the username and password from the text boxes and sends
	 * them via ajax request to the server
	*/
	signin: function(){
		var username = React.findDOMNode(this.refs.username).value;
		var password = React.findDOMNode(this.refs.password).value;
		var data = [username, password];
		$.ajax({
			url:window.location.origin + '/signin',
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
				<h2>Sign In</h2>

				<form className="form text-center">
					<div className="username">Username:<input ref="username" rows="1" cols="20" type="text" className="form-control" placeholder="Username"></input></div>
					<div className="password">Password: <input ref="password" rows="1" cols="20" type="password" className="form-control" placeholder="Password"></input></div>
					<button onClick={this.signin}>Submit</button>
				</form>
				<p>Log into your user account here. If you still need an account, click bellow</p>
				<div><Link to="signup"  className="btn btn-primary">Signup</Link></div>
			</div>
		)

	}
});	

module.exports= SignInView;