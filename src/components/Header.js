import pic1 from '../pics/1.png'

function Header() {
	return (
		<header	className="container mt-5 mb-3">
			<div className="row">
				<div className="col-md-6">
					<h1 className="display-3 fw-bold">Build Your Dream <span>House</span></h1>
				</div>
			</div>
			<div className="row second-row mt-3">
				<div className="col-md-3">
					<p>100% guaranteed build safe, comfortable and transparent with a project management for the best result</p>
					<button className="btn mt-2">free consultant</button>
				</div>
				<div className="col-md-9 text-center text-sm-end mt-4 mt-sm-0">
					<img src={pic1} className="" style={{width: "85%"}} />
				</div>
			</div>
		</header>
	)
}

export default Header;