import React from 'react';

class InputExerciseComponent extends React.Component {
  render() {
    return (
    	<div className="exercise">
			<input type="text" onChange={function() {}} name="exercise" value="Insert Exercise" />
			<input type="text" onChange={function() {}} name="weight" value={this.props.weightMeasure} className="input__small" />
			<input type="text" onChange={function() {}} name="sets" value="Sets" className="input__small" />
			<input type="text" onChange={function() {}} name="reps" value="Reps" className="input__small" />
		</div>
    );
  }
}

InputExerciseComponent.displayName = 'FormelementsInputExerciseComponent';

// Uncomment properties you need
// InputExerciseComponent.propTypes = {};
// InputExerciseComponent.defaultProps = {};

export default InputExerciseComponent;
