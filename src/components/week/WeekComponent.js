'use strict';

import React from 'react';

require('styles/week/Week.css');

import MaxEffortFormComponent from 'components/week/day/MaxEffortFormComponent.js';
import DynamicEffortFormComponent from 'components/week/day/DynamicEffortFormComponent.js';

class WeekComponent extends React.Component {
  render() {
    return (
    	<ul className="week">
	    	<div className="day">
				<MaxEffortFormComponent day={1} weightMeasure={this.props.weightMeasure} />
			</div>
			<div className="day">
				<MaxEffortFormComponent day={2} weightMeasure={this.props.weightMeasure} />
			</div>
			<div className="day">
				<DynamicEffortFormComponent weightMeasure={this.props.weightMeasure} />
			</div>
			<div className="day">
				<DynamicEffortFormComponent weightMeasure={this.props.weightMeasure} />
			</div>
		</ul>
    );
  }
}

WeekComponent.displayName = 'WeekComponent';

// Uncomment properties you need
// WeekComponent.propTypes = {};
// WeekComponent.defaultProps = {};

export default WeekComponent;
