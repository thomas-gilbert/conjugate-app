import React from 'react';

class WeightTotalsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			weightMeasure: props.weightMeasure,
			squattotal: props.squattotal + props.weightMeasure,
			deadlifttotal: props.deadlifttotal + props.weightMeasure,
			benchtotal: props.benchtotal + props.weightMeasure
		};
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}
	componentWillReceiveProps(newProps) {
		if (newProps.weightMeasure != this.state.weightMeasure) {
			this.setState({
				weightMeasure: newProps.weightMeasure,
				squattotal: 'Insert your max ' + newProps.weightMeasure,
				deadlifttotal: 'Insert your max ' + newProps.weightMeasure,
				benchtotal: 'Insert your max ' + newProps.weightMeasure
			});
		}
	}
	render() {
		return (
			<div className="weight-totals">
				<input type="text" onChange={this.handleChange} name="squattotal" value={this.state.squattotal} className="input__small" />
				<input type="text" onChange={this.handleChange} name="deadlifttotal" value={this.state.deadlifttotal} className="input__small" />
				<input type="text" onChange={this.handleChange} name="benchtotal" value={this.state.benchtotal} className="input__small" />
			</div>
		);
	}
}

WeightTotalsComponent.defaultProps = {
	squattotal: 'Insert your max ',
	deadlifttotal: 'Insert your max ',
	benchtotal: 'Insert your max '
};

export default WeightTotalsComponent;
