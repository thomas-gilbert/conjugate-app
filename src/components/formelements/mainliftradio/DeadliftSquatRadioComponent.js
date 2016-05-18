import React from 'react';

class DeadliftSquatRadioComponent extends React.Component {
  render() {
    return (
		<div>
			<label htmlFor="deadlift">Deadlift</label>
			<input type="radio" onChange={this.selectedRadio} name="deadlift" id="lowerDeadlift" value="Deadlift" />
			<label htmlFor="squat">Squat</label>
			<input type="radio" onChange={this.selectedRadio} name="squat" id="lowerSquat" value="Squat" />
		</div>
    );
  }
}

DeadliftSquatRadioComponent.displayName = 'DeadliftSquatRadioComponent';

// Uncomment properties you need
// DeadliftSquatRadioComponent.propTypes = {};
// DeadliftSquatRadioComponent.defaultProps = {};

export default DeadliftSquatRadioComponent;