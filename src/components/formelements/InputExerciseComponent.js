import React from 'react';

class InputExerciseComponent extends React.Component {
  render() {
    return (
    	<div className="exercise">
			<input type="text" onChange={function() {}} name="exercise" placeholder="Insert Exercise" />
			<input type="text" onChange={function() {}} name="weight" placeholder={this.props.weightMeasure} className="input__small" />
			<input type="text" onChange={function() {}} name="sets" placeholder="Sets" className="input__small" />
			<input type="text" onChange={function() {}} name="reps" placeholder="Reps" className="input__small" />
		</div>
    );
  }
}

InputExerciseComponent.displayName = 'FormelementsInputExerciseComponent';

// Uncomment properties you need
// InputExerciseComponent.propTypes = {};
// InputExerciseComponent.defaultProps = {};

export default InputExerciseComponent;
