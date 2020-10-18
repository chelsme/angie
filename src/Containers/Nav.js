import React, {Component} from 'react';

export default class Nav extends Component {
	state = {};

	componentDidMount() {}

	render() {
		return (
			<div className="nav">
				<ul>
					<li>Home</li>
					<li>Our Story</li>
					<li>Services</li>
					<li>FAQ’s</li>
					<li>Gallery</li>
					<li>Contact Us</li>
				</ul>
			</div>
		);
	}
}
