'use strict';

import React from 'react';
import AccessoriesComponent from 'components/formelements/AccessoriesComponent.js';
import SelectExerciseComponent from 'components/formelements/SelectExerciseComponent.js';
import MainLiftComponent from 'components/formelements/MainLiftRadioComponent.js';
// import InputExerciseComponent from 'components/formelements/InputExerciseComponent.js';

require('styles/week/day/Day.css');

class MaxEffortFormComponent extends React.Component {
	constructor(props) {
		super(props);
		this.selectedRadio = this.selectedRadio.bind(this);
	}
	selectedRadio(e) {
		this.setState({
			mainLift: e.target.name
		})
	}
	render() {
		return (
			<form>
				<h3>Max effort day {this.props.day}</h3>
				<MainLiftComponent day={this.props.day} />
				<label htmlFor="Main Lift">Main Lift</label>
				<SelectExerciseComponent />
				<label htmlFor="Secondary Lift">Secondary Lift</label>
				<SelectExerciseComponent />
				<label htmlFor="Accessories">Accessories</label>
				<AccessoriesComponent />
			</form>
		);
	}
}

MaxEffortFormComponent.displayName = 'MaxEffortFormComponent';

// Uncomment properties you need
// MaxEffortFormComponent.propTypes = {};
// MaxEffortFormComponent.defaultProps = {};

export default MaxEffortFormComponent;
