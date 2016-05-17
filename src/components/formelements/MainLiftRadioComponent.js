'use strict';

import React from 'react';

class MainLiftRadioComponent extends React.Component {
  render() {
  	// TODO: Make this nicer!!
  	let deadliftLabel, deadlift, squatLabel, squat, benchLabel, bench;
		if (this.props.day === 1) {
			deadliftLabel = <label htmlFor="deadlift">Deadlift</label>
			deadlift = <input type="radio" onChange={this.selectedRadio} name="deadlift" id="lowerDeadlift" value="Deadlift" />
			squatLabel = <label htmlFor="squat">Squat</label>
			squat = <input type="radio" onChange={this.selectedRadio} name="squat" id="lowerSquat" value="Squat" />
		} else {
			benchLabel = <label htmlFor="bench">Bench</label>
			bench = <input type="radio" onChange={this.selectedRadio} name="bench" id="lowerDeadlift" value="Deadlift" />
		}
    return (
		<div>
			{benchLabel}
			{bench}
			{deadliftLabel}
			{deadlift}
			{squatLabel}
			{squat}
		</div>
    );
  }
}

MainLiftRadioComponent.displayName = 'MainLiftRadioComponent';

// Uncomment properties you need
// MainLiftRadioComponent.propTypes = {};
// MainLiftRadioComponent.defaultProps = {};

export default MainLiftRadioComponent;
