import React, {Component} from 'react';

export default class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<div className="section nav">
				<h2>Angie's Site</h2>
				<div className="buttons">
					<button>Home</button>
					<button>Our Story</button>
					<button>Services</button>
					<button>FAQ’s</button>
					<button>Gallery</button>
					<button
						onClick={() => this.props.scrollToContent('contact')}>
						Contact Us
					</button>
				</div>
			</div>
		);
	}
}
