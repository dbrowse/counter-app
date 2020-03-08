import React, { Component } from "react";

class Counter extends Component {
	//special property
	state = {
		count: 0,
		tags: ["tag1", "tag2", "tag3"]
	};

	// constructor() {
	// 	super();
	// 	//functions are object and we have bind to set the value of 'this' to return new instcance
	// 	//and reference current object
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	handleIncrement = () => {
		console.log("Button clicked", this);
		this.setState({ count: this.state.count + 1 });
	};

	renderTags() {
		if (this.state.tags.length === 0) return <p>No more tags</p>;

		return (
			<ul>
				{this.state.tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={this.handleIncrement}
					className='btn btn-secondary btn-sm'
				>
					Increment
				</button>
				{this.renderTags()}
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
