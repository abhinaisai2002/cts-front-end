import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button } from './button/Button';
import { BiPencil } from 'react-icons/bi'


export default function NavigationBar() {

	const navigation = useNavigate();
	
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<div className='d-flex w-100 justify-content-between align-items-center'>
					<Link to="/blogs" className="navbar-brand text-white">Blog Posts</Link>
					<div>
						<span className='text-white mx-5'>
							<Button
								className="rounded-pill font-monospace"
								color="primary"
								text={
									<>
										<BiPencil /> | Write
									</>
								}
								onClick={() => {
								return navigation('/blogs/new');
							}} />  
						</span>
						<Link className="navbar-brand text-white" to='/signin'>SignIn</Link>
						<Link className="navbar-brand text-white" to='/signup'>SignUp</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}
