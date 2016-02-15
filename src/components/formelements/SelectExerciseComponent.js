'use strict';

import React from 'react';
// import Formsy from 'formsy-react';

require('styles/formelements/exercise.css');

class SelectExerciseComponent extends React.Component {
  render() {
    return (
    	<div className="exercise">
			<select onChange={function() {}} name="exercise">
				<option>Select Exercise</option>
			</select>
			<input type="text" onChange={function() {}} name="weight" value="KG" className="input__small" />
			<input type="text" onChange={function() {}} name="sets" value="Sets" className="input__small" />
			<input type="text" onChange={function() {}} name="reps" value="Reps" className="input__small" />
		</div>
    );
  }
}

SelectExerciseComponent.displayName = 'FormelementsSelectExerciseComponent';

// Uncomment properties you need
// SelectExerciseComponent.propTypes = {};
// SelectExerciseComponent.defaultProps = {};

export default SelectExerciseComponent;
