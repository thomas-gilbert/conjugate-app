import React from 'react';

class BenchRadioComponent extends React.Component {
  render() {
    return (
		<div>
			<label htmlFor="bench">Bench</label>
			<input type="radio" onChange={this.selectedRadio} name="bench" id="lowerDeadlift" value="Deadlift" />
		</div>
    );
  }
}

BenchRadioComponent.displayName = 'BenchRadioComponent';

// Uncomment properties you need
// BenchRadioComponent.propTypes = {};
// BenchRadioComponent.defaultProps = {};

export default BenchRadioComponent;