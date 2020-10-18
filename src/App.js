import React from 'react';
import './App.scss';

import Nav from './Containers/Nav';
import Header from './Containers/Header';
import Services from './Containers/Services';
import Contact from './Containers/Contact';
import Footer from './Containers/Footer';

function App() {
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

export default App;
