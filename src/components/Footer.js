import logo1 from '../pics/logos/U-Turn.png';
import logo2 from '../pics/logos/Nextmove.png';
import logo3 from '../pics/logos/Pinpoint.png';
import logo4 from '../pics/logos/Leafe.png';
import logo5 from '../pics/logos/Terra.png';
import logo6 from '../pics/logos/Dune.png';
import logo from '../pics/logos/logo.png';

function Footer() {
	return (
		<footer className="container mt-5">
			<h2 className="fw-bold">Our Partners</h2>
			<div className="row my-5 justify-content-between brands">
				<img src={logo1} />
				<img src={logo2} />
				<img src={logo3} />
				<img src={logo4} />
				<img src={logo5} />
				<img src={logo6} />
			</div>
			<div className='row py-4 border-top justify-content-between'>
				<ul className='nav col-md-6'>
					<li className='nav-item'>
						<a href='' className='nav-link text-dark'>About Us</a>
					</li>
					<li className='nav-item'>
						<a href='' className='nav-link text-dark'>How it Works</a>
					</li>
					<li className='nav-item'>
						<a href='' className='nav-link text-dark'>FAQ</a>
					</li>
					<li className='nav-item'>
						<a href='' className='nav-link text-dark'>Contact Us</a>
					</li>
					<li className='nav-item'>
						<a href='' className='nav-link text-dark'>Privacy Policy</a>
					</li>
				</ul>
				<div className='col-md-6 text-center text-sm-end mt-3 mt-sm-0'>
					<img src={logo} width='20%' />
				</div>
			</div>
		</footer>
	)
}

export default Footer;