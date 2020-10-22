import React, {Component} from 'react';
import dogLookingUp from './../Assets/dogLookingUp.png';
export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<div className="section header">
				<img className="doggo" src={dogLookingUp} alt="doggo" />
			</div>
		);
	}
}
