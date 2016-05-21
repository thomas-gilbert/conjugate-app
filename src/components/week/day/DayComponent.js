'use strict';

import React from 'react';
import MaxEffortFormComponent from 'components/week/day/MaxEffortFormComponent.js';
import DynamicEffortFormComponent from 'components/week/day/DynamicEffortFormComponent.js';

require('styles/week/day/Day.css');

class DayComponent extends React.Component {
  render() {
  	let dayComponent = <MaxEffortFormComponent day={1} {...this.props} />;
  	if (this.props.dayType === 'dynamic') {
  		dayComponent = <DynamicEffortFormComponent day={1} {...this.props} />
  	}
    return (
		<li className="day">
			{dayComponent}
		</li>
    );
  }
}

DayComponent.displayName = 'DayComponent';

// Uncomment properties you need
// DayComponent.propTypes = {};
// DayComponent.defaultProps = {};

export default DayComponent;
