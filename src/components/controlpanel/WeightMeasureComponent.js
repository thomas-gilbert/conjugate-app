import React from 'react';

class WeightMeasureComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weightMeasure: props.weightMeasure
		};
	}
	changeMeasure() {
		console.log(this, this.props);
	}
	render() {
		return (
			<button onPress={this.changeMeasure()}>{this.state.weightMeasure}</button>
		);
	}
}

WeightMeasureComponent.defaultProps = {
	weightMeasure: 'KG'
};

export default WeightMeasureComponent;
