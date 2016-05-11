import React from 'react';

class WeightMeasureComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weightMeasure: props.weightMeasure
		};
	}
	changeMeasure() {
		this.props.toggleMeasure(this.state.weightMeasure);
	}
	render() {
		return (
			<button onClick={this.changeMeasure.bind(this)}>{this.state.weightMeasure}</button>
		);
	}
}

WeightMeasureComponent.defaultProps = {
	weightMeasure: 'KG'
};

export default WeightMeasureComponent;
