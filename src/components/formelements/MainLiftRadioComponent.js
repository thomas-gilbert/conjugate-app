import React from 'react';

import DeadliftSquatRadio from 'components/formelements/mainliftradio/DeadliftSquatRadioComponent.js';
import BenchRadio from 'components/formelements/mainliftradio/BenchRadioComponent.js';

class MainLiftRadioComponent extends React.Component {
  render() {
  	let deadliftSquatRadio, benchRadio;
		if (this.props.index === 0 || this.props.index === 2) {
			deadliftSquatRadio = <DeadliftSquatRadio {...this.props} />
		} else {
			benchRadio = <BenchRadio {...this.props} />
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