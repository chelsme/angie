import React, {Component} from 'react';
import './App.scss';

import Nav from './Containers/Nav';
import Header from './Containers/Header';
import Services from './Containers/Services';
import Contact from './Containers/Contact';
import Footer from './Containers/Footer';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<Nav />
				<Header />
				<Services />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;
