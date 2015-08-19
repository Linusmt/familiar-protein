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

	getInitialState: function(){
    return {
      login: true
    };
  },

	signin: function(){
		var username = React.findDOMNode(this.refs.username).value;
		var password = React.findDOMNode(this.refs.password).value;
		var data = [username, password];
		var that = this;

		$.ajax({
			url:window.location.origin + '/signin',
			method: 'POST',
			data: JSON.stringify(data),
			contentType:"application/json",
			dataType: 'json',
			success: function(data){
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
			<div id='page-content-wrapper'> 
        <div className='container-fluid'>
					<h2>Sign In</h2>
					<form className="form-inline">
						<div className="form-group">
							<label>Username</label>
	  	  			<input ref="username" type="username" className="form-control" placeholder="Username" />
	    			</div>
	    			<div className="form-group">
							<label>Password </label>
	    				<input ref="password" type="password" className="form-control" placeholder="Password" />
	    			</div>
						<button onClick={this.signin} className="btn btn-primary">Submit</button>
					</form>
					<Link to="signup" className="btn btn-primary">Signup</Link>
					{this.state.login === false ? <p className="error-msg">Login incorrect, please try again</p> : null}
				</div>
			</div>
		)
	}
});	

module.exports= SignInView;