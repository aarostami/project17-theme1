import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Nav from './components/Nav';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css'


function Mainapp() {
	

	return (
		<div>
			<Nav />
			<Header />
			<Body />
			<Footer />
		</div>
	)
}

export default Mainapp;