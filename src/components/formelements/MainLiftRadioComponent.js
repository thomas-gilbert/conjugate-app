import React from 'react';

import DeadliftSquatRadio from 'components/formelements/mainliftradio/DeadliftSquatRadioComponent.js';
import BenchRadio from 'components/formelements/mainliftradio/BenchRadioComponent.js';

class MainLiftRadioComponent extends React.Component {
  render() {
  	let deadliftSquatRadio, benchRadio;
		if (this.props.day === 1 || this.props.day === 3) {
			deadliftSquatRadio = <DeadliftSquatRadio addMainLift={this.props.addMainLift} day={this.props.day} />
		} else {
			benchRadio = <BenchRadio addMainLift={this.props.addMainLift} day={this.props.day} />
		}
    return (
		<div>
			{deadliftSquatRadio}
			{benchRadio}
		</div>
    );
  }
}

MainLiftRadioComponent.displayName = 'MainLiftRadioComponent';

// Uncomment properties you need
// MainLiftRadioComponent.propTypes = {};
// MainLiftRadioComponent.defaultProps = {};

export default MainLiftRadioComponent;