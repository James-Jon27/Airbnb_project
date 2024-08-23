import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import "./Navigation.css"
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from '../SignUpFormModal';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutThunk());
  };

  const sessionLinks = sessionUser ? (
		<>
			<li>
				<ProfileButton user={sessionUser} />
			</li>
			<li>
				<button className="hover" style={{ color: "bisque", background: "none", border: "none", fontSize: "2.5rem", fontFamily: "Times New Roman, Times, serif" }} onClick={logout}>
					Log Out
				</button>
			</li>
		</>
	) : (
		<>
			<li>
				<OpenModalButton buttonText="Log In" modalComponent={<LoginFormModal />} />
			</li>
			<li>
				<OpenModalButton buttonText="Sign Up" modalComponent={<SignUpFormModal />} />
			</li>
		</>
	);

  return (
    <ul className="nav-li">
      <li>
        <NavLink  className="home" to="/">Home</NavLink>
      </li>
      {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;