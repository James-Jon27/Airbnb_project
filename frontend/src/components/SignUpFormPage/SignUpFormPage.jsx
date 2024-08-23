import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignUpForm.css"

function SignUpFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});

	if (sessionUser) return <Navigate to="/" replace={true} />;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors({});
			return dispatch(
				sessionActions.signUp({
					email,
					username,
					firstName,
					lastName,
					password,
				})
			).catch(async (res) => {
				const data = await res.json();
				if (data?.errors) {
					setErrors(data.errors);
				}
			});
		}
		return setErrors({
			confirmPassword: "Confirm Password field must be the same as the Password field",
		});
	};

	return (
		<div className="login-page">
			<h1 className="login">Sign Up</h1>
			<form onSubmit={handleSubmit} className="signup-form">
				<label>
					<input className="sign-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				</label>
				{errors.email && <p>{errors.email}</p>}
				<label>
					<input className="sign-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
				</label>
				{errors.username && <p>{errors.username}</p>}
				<label>
					<input className="sign-input" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
				</label>
				{errors.firstName && <p>{errors.firstName}</p>}
				<label>
					<input className="sign-input" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
				</label>
				{errors.lastName && <p>{errors.lastName}</p>}
				<label>
					<input className="sign-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
				</label>
				{errors.password && <p>{errors.password}</p>}
				<label>
					<input className="sign-input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
				</label>
				{errors.confirmPassword && <p>{errors.confirmPassword}</p>}
				<button className="sUButt" type="submit">Sign Up</button>
			</form>
		</div>
	);
}

export default SignUpFormPage;
