import React from 'react';
import { connect } from 'react-redux';

class PercentageButtonComponent extends React.Component {
	usePercentages() {
		this.props.dispatch(this.props.togglePercentages(this.props.usingPercentages));
	}
	render() {
		let buttonText = this.props.usingPercentages ? 'Weights in percentages %' :  'Weights in ' + this.props.weightMeasure;
		return (
			<button className="button" onClick={this.usePercentages.bind(this)}>{buttonText}</button>
		);
	}
}

PercentageButtonComponent.defaultProps = {
};

export default connect()(PercentageButtonComponent);
