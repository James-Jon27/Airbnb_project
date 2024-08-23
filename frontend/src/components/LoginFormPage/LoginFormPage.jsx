import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [credential, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});

	if (sessionUser) return <Navigate to="/" replace={true} />;

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors({});
		return dispatch(sessionActions.loginThunk({ credential, password })).catch(async (res) => {
			const data = await res.json();
			if (data?.errors) setErrors(data.errors);
		});
	};

	return (
		<div className="login-page">
			<h1 className="login">Log In</h1>
			<form onSubmit={handleSubmit} className="login-form">
				<label>
					<input type="text" placeholder="Username or Email" value={credential} onChange={(e) => setCredential(e.target.value)} required />
				</label>
				<label>
					<input type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} required />
				</label>
				{errors.credential && <p>{errors.credential}</p>}
				<button type="submit" className="lIButt">
					Log In
				</button>
			</form>
		</div>
	);
}

export default LoginFormPage;
