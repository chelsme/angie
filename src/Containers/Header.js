import React, {Component} from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<div className="section header">
				<h2>Header</h2>
				<p>(nice big cover photo - will change p to img)</p>
			</div>
		);
	}
}
