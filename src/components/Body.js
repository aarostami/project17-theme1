import pic2 from '../pics/2.png';
import pic3 from '../pics/3.png';
import pic4 from '../pics/4.png';
import pic5 from '../pics/5.png';
import pic6 from '../pics/6.png';
import pic7 from '../pics/7.png';
import icon1 from '../pics/icon1.png';
import icon2 from '../pics/icon2.png';
import icon3 from '../pics/icon3.png';

function Body() {
	return (
		<div className="body mt-5">
			<div className="container prevnext d-sm-flex justify-content-between">
				<h3 className="w-sm-25 fw-bold">Build professional valuable room</h3>
				<div>
					<button className="btn bg-light text-danger"><i className="bi bi-arrow-left fs-5"></i></button>
					<button className="btn bg-light text-danger ms-2"><i className="bi bi-arrow-right fs-5"></i></button>
				</div>
			</div>
			<section className="container pictures mt-3">
				<div className='row'>
					{/* <div className="pictures"> */}
					<div className='col-sm-3 mb-3'>
						<img src={pic2} width={'95%'} />
					</div>
					<div className='col-sm-3 mb-3'>
						<img src={pic3} width={'95%'} />
					</div>
					<div className='col-sm-3 mb-3'>
						<img src={pic4} width={'95%'} />
					</div>
					<div className='col-sm-3'>
						<img src={pic5} width={'95%'} height={'88%'} />
					</div>
					{/* </div> */}
				</div>
			</section>
			<section className='container info my-sm-5'>
				<div className='row justify-content-between'>
					<img src={pic6} className='col-md-5 d-block' style={{ maxHeight: '25rem' }} />
					<div className='col-md-6 collec mt-3 mt-sm-0'>
						<h3 className='w-sm50'>Build your needs with Archmove</h3>
						<div className='row mt-4'>
							<div className='col-sm-2 text-center'>
								<img src={icon1} width="70%" />
							</div>
							<div className='col-sm-10'>
								<p className='fw-bold mb-1'>100% guaranteed project completion</p>
								<p>Build safe, comfortable and transparent with a project management application with a joint account.</p>
							</div>
						</div>
						<div className='row mt-3'>
							<div className='col-sm-2 text-center'>
								<img src={icon2} width="70%" />
							</div>
							<div className='col-sm-10'>
								<p className='fw-bold mb-1'>No additional fees</p>
								<p>There are no hidden costs. The value of the offer you get is the value you paid.</p>
							</div>
						</div>
						<div className='row mt-3'>
							<div className='col-sm-2 text-center'>
								<img src={icon3} width="70%" />
							</div>
							<div className='col-sm-10'>
								<p className='fw-bold mb-1'>Get escort from the Team</p>
								<p>Monitor reports from the Arsitag team who check directly in the field.</p>
							</div>
						</div>
					</div>
				</div>
				<div className='row justify-content-center mt-5 mt-sm-2'>
					<button className="btn text-white mt-2">free consultant</button>
				</div>
			</section>
			<section className='container qoute my-5'>
				<h3 className='fw-bold w-sm-25'>Sound Too Good To Be True?</h3>
				<div className='row justify-content-end mt-4'>
					<img />
					<div className='col-md-7'>
						<p className='fs-5'>“We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.”</p>
						<div className='row justify-content-between'>
							<p className='col-md-6 mb-0 align-self-center fs-6'>Adam Morph — CEO Alfatech</p>
							<div className='col-md-6 text-end prevnext mt-3 mt-sm-0'>
								<button className="btn bg-light text-danger"><i className="bi bi-arrow-left fs-5"></i></button>
								<button className="btn bg-light text-danger ms-2"><i className="bi bi-arrow-right fs-5"></i></button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='container-fluid my-5 last-part'>
				<div className='row align-items-center text-center'>
					<div className='col-md-6'>
						<img src={pic7} style={{ maxWidth: '70%' }} />
					</div>
					<div className='col-md-6 mt-4 mt-sm-0'>
						<h2 className='w-100 text-center'>Realize your dream project with <span>Archmove</span></h2>
						<button className='btn btn-md text-white mt-4 text-center'>free consultant</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Body;