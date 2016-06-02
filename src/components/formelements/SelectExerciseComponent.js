import React from 'react';
import $ from 'jquery';

require('styles/formelements/exercise.css');

class SelectExerciseComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.modifyMainLift = this.modifyMainLift.bind(this);
		this.state = {
			info: {
				exercise: '',
				weight: '',
				set: '',
				reps: ''
			}
		};
	}

	/**
	 * Update the state with the changes and modify the mainlift
	 * @param  {e} event
	 */
	handleChange(e) {
		this.state.info[e.target.name] = e.target.value;
		this.modifyMainLift();
	}

	/**
	 * Main lift is updated upon change of form elements
	 */
	modifyMainLift() {
		this.props.actions.addMainLift(this.state.info, this.props.index, 0);
	}

	render() {
		let array = [];

		if (this.props.day.exercise_group && this.props.exercises[this.props.day.exercise_group]) {
			array.push(
				<option key="default">Select an exercise</option>
			);

			$.each(this.props.exercises[this.props.day.exercise_group], (key, value) => {
				array.push(
					<option key={key}>
						{value}
					</option>
				)
			});
		}
		return (
			<div className="exercise">
				<select onChange={this.handleChange} name="exercise">
					{array}
				</select>
				<input type="text" onChange={this.handleChange} name="weight" placeholder={this.props.weightMeasure} className="input__small" />
				<input type="text" onChange={this.handleChange} name="sets" placeholder="Sets" className="input__small" />
				<input type="text" onChange={this.handleChange} name="reps" placeholder="Reps" className="input__small" />
			</div>
		);
	}
}

SelectExerciseComponent.displayName = 'FormelementsSelectExerciseComponent';

// Uncomment properties you need
// SelectExerciseComponent.propTypes = {};
// SelectExerciseComponent.defaultProps = {};

export default SelectExerciseComponent;
