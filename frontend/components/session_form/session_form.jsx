import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
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
					<span onClick={this.props.clearErrors}><Link to="/signup">Sign up!</Link></span>
				</div>
			);
		} else {
			return (
				<div>
					<span>Have an account?</span>&nbsp;&nbsp;
					<span onClick={this.props.clearErrors}><Link to="/login">Log in</Link></span>
				</div>
			);
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		let formType;
		(this.props.formType === 'login') ? formType = 'Log in' : formType = 'Sign Up'

		return (
			<div className="authFormContainer">
				<form onSubmit={this.handleSubmit} className ="authForm">
					<h1 className="formType">
						{formType}
					</h1>

					<br/>
						{this.renderErrors()}
					<div>
						<br/>
						<div className ="authFormInputs">
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
									value="Log me in!"
									className="login"
						  />
							</div>
						</div>
					</div>
				</form>

				<div className="redirect">
					{this.navLink()}
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
