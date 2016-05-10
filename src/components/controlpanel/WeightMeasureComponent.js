import React from 'react';

class WeightMeasureComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weightMeasure: props.weightMeasure
		};
	}
	changeMeasure() {
		console.log(this.props);
	}
	render() {
		return (
			<button>{this.state.weightMeasure}</button>
		);
	}
}

WeightMeasureComponent.defaultProps = {
	weightMeasure: 'KG'
};

export default WeightMeasureComponent;
