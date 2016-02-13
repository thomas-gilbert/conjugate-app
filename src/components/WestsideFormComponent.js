'use strict';

import React from 'react';

require('styles//WestsideForm.css');

import Formsy from 'formsy-react';


class WestsideFormComponent extends React.Component {
	// getInitialState() {
	//   return {
	// 	canSubmit: false
	//   }
	// }
	// enableButton() {
	//   this.setState({
	// 	canSubmit: true
	//   });
	// }
	// disableButton() {
	//   this.setState({
	// 	canSubmit: false
	//   });
	// }
	// submitmodel() {
	//   // someDep.saveEmail(model.email);
	// }
	render() {
		return (
			<Formsy.Form >
				<label for="Deadlift">Deadlift</label>
  				<input type="radio" name="Deadlift" id="lowerDeadlift" value="Deadlift" /><br />
  				<label for="Squat">Squat</label>
  				<input type="radio" name="Deadlift" id="lowerSquat" value="Squat" /><br />
  				<label for="Main Lower Lift">Main Lower Lift</label>
  				<select>
  					<option>Pause Squat</option>
  					<option>High-bar Squat</option>
  					<option>Low-bar Squat</option>
  				</select><br />
  				<label for="Secondary Lower Lift">Secondary Lower Lift</label>
  				<select>
  					<option>Pause Squat</option>
  					<option>High-bar Squat</option>
  					<option>Low-bar Squat</option>
  				</select><br />
				<button type="submit" >Submit</button>
			</Formsy.Form>
		);
	}
}

WestsideFormComponent.displayName = 'WestsideFormComponent';

// Uncomment properties you need
// WestsideFormComponent.propTypes = {};
// WestsideFormComponent.defaultProps = {};

export default WestsideFormComponent;
