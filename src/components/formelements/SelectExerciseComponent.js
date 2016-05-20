import React from 'react';

require('styles/formelements/exercise.css');

class SelectExerciseComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.state[e.target.name] = e.target.value;
	}
	render() {
		return (
			<div className="exercise">
				<select onChange={function() {}} name="exercise">
					<option>Select Exercise</option>
				</select>
				<input type="text" onChange={this.handleChange} name="weight" value={this.props.weightMeasure} className="input__small" />
				<input type="text" onChange={this.handleChange} name="sets" value="Sets" className="input__small" />
				<input type="text" onChange={this.handleChange} name="reps" value="Reps" className="input__small" />
			</div>
		);
	}
}

SelectExerciseComponent.displayName = 'FormelementsSelectExerciseComponent';

// Uncomment properties you need
// SelectExerciseComponent.propTypes = {};
// SelectExerciseComponent.defaultProps = {};

export default SelectExerciseComponent;
