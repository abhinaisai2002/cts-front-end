import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button } from './button/Button';
import { BiPencil } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import authSlice from '../store/slices/authSlice';


export default function NavigationBar() {

	const navigation = useNavigate();

	const dispatch = useDispatch();

	const {user,isAuthenticated } = useSelector(state => state.auth);

	const logoutHandler = () => {
		dispatch(authSlice.actions.logOut());
	}
	
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<div className='d-flex w-100 justify-content-between align-items-center'>
					<Link to="/blogs" className="navbar-brand text-white">Blog Posts</Link>
					<div>
						{isAuthenticated && <span className='text-white mx-5'>
							<Button
								className="rounded-pill font-monospace p-1"
								color="primary"
								text={
									<>
										<BiPencil /> | Write
									</>
								}
								onClick={() => {
									return navigation('/blogs/new');
								}} />
						</span>}
						
						{isAuthenticated && <Link className="navbar-brand text-white" to='/myblogs'>My Blogs</Link>}
						{!isAuthenticated && <Link className="navbar-brand text-white" to='/signin'>SignIn</Link>}
						{!isAuthenticated && <Link className="navbar-brand text-white" to='/signup'>SignUp</Link>}
						{isAuthenticated && <span className='text-white mx-5'>
							<Button
								className="rounded-pill font-monospace"
								color="primary"
								text="Logout"
								onClick={logoutHandler} />
						</span>}
					</div>
				</div>
			</div>
		</nav>
	)
}
