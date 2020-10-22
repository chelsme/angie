import React, {Component} from 'react';
import facebook from './../Assets/facebook.png';
import instagram from './../Assets/instagram.png';
import twitter from './../Assets/twitter.png';

export default class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<div className="section footer">
				<h2>Footer</h2>
				<p>Check us out on social media.</p>
				<div className="socials">
					<img className="social-media" src={facebook} alt="facebook" />
					<img className="social-media" src={instagram} alt="instagram" />
					<img className="social-media" src={twitter} alt="twitter" />
				</div>
			</div>
		);
	}
}
