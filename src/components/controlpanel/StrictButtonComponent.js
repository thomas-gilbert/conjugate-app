import React from 'react';

class WeightMeasureComponent extends React.Component {
	changeMode() {
		this.props.toggleStrictMode(this.props.strictMode);
	}
	render() {
		let buttonText = this.props.strictMode ? 'Disable Strict Mode' : 'Enable Strict Mode';
		return (
			<button className="button" onClick={this.changeMode.bind(this)}>{buttonText}</button>
		);
	}
}

export default WeightMeasureComponent;
