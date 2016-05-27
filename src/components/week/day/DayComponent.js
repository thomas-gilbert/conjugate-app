'use strict';

import React from 'react';
import AccessoriesComponent from 'components/formelements/AccessoriesComponent.js';
import SelectExerciseComponent from 'components/formelements/SelectExerciseComponent.js';
import MainLiftComponent from 'components/formelements/MainLiftRadioComponent.js';

require('styles/week/day/Day.css');

class DayComponent extends React.Component {
  render() {
  	let dayTypeTitle = 'Max effort';
  	if (this.props.dayType === 'dynamic') {
  		dayTypeTitle = 'Dynamic effort'
  	}
    return (
		<li className="day">
			<form>
				<h3>{dayTypeTitle} - day {this.props.index}</h3>
				<MainLiftComponent index={this.props.index} day={this.props.day} addMainLift={this.props.actions.addMainLift} addExerciseGroup={this.props.actions.addExerciseGroup} />
				<label htmlFor="Main Lift">Main Lift</label>
				<SelectExerciseComponent {...this.props}/>
				<label htmlFor="Secondary Lift">Secondary Lift</label>
				<SelectExerciseComponent {...this.props}/>
				<label htmlFor="Accessories">Accessories</label>
				<AccessoriesComponent {...this.props}/>
			</form>
		</li>
    );
  }
}

DayComponent.displayName = 'DayComponent';

// Uncomment properties you need
// DayComponent.propTypes = {};
// DayComponent.defaultProps = {};

export default DayComponent;
