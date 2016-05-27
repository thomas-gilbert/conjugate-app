import React from 'react';

class DeadliftSquatRadioComponent extends React.Component {

	render() {
		let addExerciseGroup = this.props.addExerciseGroup,
			day = this.props.index,
			week = 0,
			onChange = (e) => {
				addExerciseGroup(e.target.value.toLowerCase(), day, week);
			};
		return (
			<div>
				<label htmlFor="mainlift">Deadlift</label>
				<input type="radio" onClick={onChange} name="mainlift" value="Deadlift" />
				<label htmlFor="mainlift">Squat</label>
				<input type="radio" onClick={onChange} name="mainlift" value="Squat" />
			</div>
		);
	}
}

DeadliftSquatRadioComponent.displayName = 'DeadliftSquatRadioComponent';

// Uncomment properties you need
// DeadliftSquatRadioComponent.propTypes = {};
// DeadliftSquatRadioComponent.defaultProps = {};

export default DeadliftSquatRadioComponent;