import React from 'react';

class WeightMeasureComponent extends React.Component {
	changeMeasure() {
		this.props.toggleMeasure(this.props.weightMeasure);
	}
	render() {
		return (
			<button className="button" onClick={this.changeMeasure.bind(this)}>{this.props.weightMeasure}</button>
		);
	}
}

export default WeightMeasureComponent;
