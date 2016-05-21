import React from 'react';
import { connect } from 'react-redux';

class BenchRadioComponent extends React.Component {
	render() {
		this.props.dispatch(this.props.addMainLift('bench', this.props.day, 1));
		return (
			<div>
				<label htmlFor="bench">Bench</label>
				<input type="radio" defaultChecked={true} name="bench" id="lowerDeadlift" value="Deadlift" />
			</div>
		);
	}
}

BenchRadioComponent.displayName = 'BenchRadioComponent';

// Uncomment properties you need
// BenchRadioComponent.propTypes = {};
// BenchRadioComponent.defaultProps = {};

export default connect()(BenchRadioComponent);