import logonav from '../pics/logos/logo-arch.png';

function Nav() {
	return (
		<nav className="container navbar navbar-expand-lg py-3">
			<div className="container-fluid">
				<div className="navbar-brand">
					<img src={logonav} className="" />
				</div>
				<button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navtarget">
					<i className='navbar-toggler-icon'></i>
				</button>
				<div className='collapse navbar-collapse d-flex- justify-content-between' id="navtarget">
					<ul className="navbar-nav align-items-center ms-sm-2">
						<li className="nav-item">
							<a href="" className="nav-link">How it Works</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">Design Gallary</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">Architects</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">Articles</a>
						</li>
					</ul>
					<div className="d-flex justify-content-center mt-3 mt-sm-0 register">
						<a href="" className="align-self-center">
							<i className="bi bi-search bg-light p-2 rounded-5 text-black"></i>
						</a>
						<button className="btn ms-1">Sign In</button>
						<button className="btn ms-1 text-white">Sign Up</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav;