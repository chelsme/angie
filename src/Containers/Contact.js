import React, {Component} from 'react';

export default class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<div className="section contact" ref={this.props.ref}>
				<h2>Contact</h2>
				<p>(555) 555-5555</p>
				<p>Find us here.</p>
				<div>(Map)</div>
			</div>
		);
	}
}
