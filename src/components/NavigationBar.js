import React from 'react';
import { Link } from 'react-router-dom'


export default function NavigationBar() {
  return (
			<nav className="navbar navbar-expand-lg bg-dark">
				<div className="container-fluid">
					<div className='d-flex w-100 justify-content-between align-items-center'>
						<Link to="/" className="navbar-brand text-white">Blog Posts</Link>
						<div>
							<Link className="navbar-brand text-white" to='/signin'>SignIn</Link>
							<Link className="navbar-brand text-white" to='/signup'>SignUp</Link>
						</div>
					</div>
				</div>
			</nav>
  )
}
