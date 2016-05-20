'use strict';

import React from 'react';
import AccessoriesComponent from 'components/formelements/AccessoriesComponent.js';
import SelectExerciseComponent from 'components/formelements/SelectExerciseComponent.js';
import MainLiftComponent from 'components/formelements/MainLiftRadioComponent.js';
// import InputExerciseComponent from 'components/formelements/InputExerciseComponent.js';

require('styles/week/day/Day.css');

class DynamicEffortFormComponent extends React.Component {
  render() {
    return (
		<form>
			<h3>Dynamic effort - day {this.props.day}</h3>
			<MainLiftComponent day={this.props.day} />
			<label htmlFor="Main Lift">Main Lift</label>
			<SelectExerciseComponent {...this.props}/>
			<label htmlFor="Secondary Lift">Secondary Lift</label>
			<SelectExerciseComponent {...this.props}/>
			<label htmlFor="Accessories">Accessories</label>
			<AccessoriesComponent {...this.props}/>
		</form>
    );
  }
}

DynamicEffortFormComponent.displayName = 'DynamicEffortFormComponent';

// Uncomment properties you need
// DynamicEffortFormComponent.propTypes = {};
// DynamicEffortFormComponent.defaultProps = {};

export default DynamicEffortFormComponent;
