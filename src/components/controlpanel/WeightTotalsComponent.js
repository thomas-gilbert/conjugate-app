import React from 'react';

class WeightTotalsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squattotal: props.squattotal,
			deadlifttotal: props.deadlifttotal,
			benchtotal: props.benchtotal
		};
	}
	handleChange(e) {
		this.state[e.target.name] = e.target.value;
	}
	changeMeasure() {
		console.log(this.props.actions);
	}
	render() {
		return (
			<div className="weight-totals">
				<input type="text" onChange={this.handleChange.bind(this)} name="squattotal" value={this.state.squattotal} className="input__small" />
				<input type="text" onChange={this.handleChange.bind(this)} name="deadlifttotal" value={this.state.deadlifttotal} className="input__small" />
				<input type="text" onChange={this.handleChange.bind(this)} name="benchtotal" value={this.state.benchtotal} className="input__small" />
			</div>
		);
	}
}

WeightTotalsComponent.defaultProps = {
	squattotal: 'Insert your max KG',
	deadlifttotal: 'Insert your max KG',
	benchtotal: 'Insert your max KG'
};

export default WeightTotalsComponent;
