import React from 'react';
import { connect } from 'react-redux';

class WeightMeasureComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	changeMeasure() {
		this.props.dispatch(this.props.toggleMeasure(this.props.weightMeasure));
	}
	render() {
		return (
			<button onClick={this.changeMeasure.bind(this)}>{this.props.weightMeasure}</button>
		);
	}
}

export default connect()(WeightMeasureComponent);
