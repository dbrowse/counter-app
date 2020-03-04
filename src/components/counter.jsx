import React, { Component } from "react";

class Counter extends Component {
	//special property
	state = {
		count: 2
	};

	render() {
		return (
			<div>
				<span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button className='btn btn-secondary btn-sm'>Increment</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
