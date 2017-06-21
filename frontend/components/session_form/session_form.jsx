import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.userDemo = { user: { username: 'user', password: 'password' } };

		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user})
		.then(res => this.props.history.push('/'));
	}

	navLink() {
		if (this.props.formType === 'login') {
			return (
				<div>
					<span>New to Clickstarter?</span>&nbsp;&nbsp;
					<span onClick={this.props.clearErrors}><Link to="/signup"
							className="link-form">
							Sign up!
						</Link>
					</span>
				</div>
			);
		} else {
			return (
				<div>
					<span>Have an account?</span>&nbsp;&nbsp;
					<span onClick={this.props.clearErrors}><Link to="/login"
							className="link-form">
							Log in!
						</Link>
					</span>
				</div>
			);
		}
	}

	renderErrors() {
		return(
			<ul className="errors">
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	demoLogin(e){
		e.preventDefault();
		this.props.login(this.userDemo)
		.then(res => this.props.history.push('/'));
	}

	render() {
		let formType, buttonType;
		if (this.props.formType === 'login'){
			formType = 'Log in';
			buttonType = 'Log me in!'
 		} else{
			formType = 'Sign Up';
			buttonType = 'Create account';
		}


		return (
			<div className="authFormContainer group">
				<form onSubmit={this.handleSubmit} className ="authForm">
					<div className ="authFormInputs">
						<h1 className="formType">
							{formType}
						</h1>
						<br/>
						{this.renderErrors()}
						<div>
							<br/>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								placeholder="Username"
								/>
							<br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								placeholder="Password"
								/>
							<br/>
							<div className="loginDiv">
								<input type="submit"
									value={buttonType}
									className="login"
						  />

						<div className='separator-text'>
								<span>or</span>
							</div>
							<div>
								<button className="demo-login" onClick={this.demoLogin}>Demo</button>
							</div>
							</div>

						</div>
						<div className="redirect">
							{this.navLink()}
						</div>
					</div>
				</form>

			</div>
		);
	}
}

export default withRouter(SessionForm);
