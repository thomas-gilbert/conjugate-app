'use strict';

import React from 'react';
import Formsy from 'formsy-react';
import AccessoriesComponent from 'components/formelements/AccessoriesComponent.js';
import SelectExerciseComponent from 'components/formelements/SelectExerciseComponent.js';
// import InputExerciseComponent from 'components/formelements/InputExerciseComponent.js';

require('styles/week/day/Day.css');

class DynamicEffortFormComponent extends React.Component {
  render() {
    return (
		<Formsy.Form >
			<label htmlFor="Deadlift">Deadlift</label>
			<input type="radio" onChange={function() {}} name="Deadlift" id="lowerDeadlift" value="Deadlift" />
			<label htmlFor="Squat">Squat</label>
			<input type="radio" onChange={function() {}} name="Deadlift" id="lowerSquat" value="Squat" />
			<label htmlFor="Main Lift">Main Lift</label>
			<SelectExerciseComponent />
			<label htmlFor="Secondary Lift">Secondary Lift</label>
			<SelectExerciseComponent />
			<label htmlFor="Accessories">Accessories</label>
			<AccessoriesComponent />
		</Formsy.Form>
    );
  }
}

DynamicEffortFormComponent.displayName = 'DynamicEffortFormComponent';

// Uncomment properties you need
// DynamicEffortFormComponent.propTypes = {};
// DynamicEffortFormComponent.defaultProps = {};

export default DynamicEffortFormComponent;
