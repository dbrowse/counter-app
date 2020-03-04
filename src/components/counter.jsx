import React, { Component } from "react";

class Counter extends Component {
	//special property
	state = {
		count: 1,
		imageUrl: "https://picsum.photos/200"
	};
	render() {
		return (
			<div>
				<img src={this.state.imageUrl} alt='' />
				<span>{this.formatCount()}</span>
				<button>Increment</button>
			</div>
		);
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
