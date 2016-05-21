'use strict';

import React from 'react';

require('styles/week/Week.css');

import DayComponent from 'components/week/day/DayComponent.js';

class WeekComponent extends React.Component {
	render() {
	    return (
			<ul className="week">
				<DayComponent day={1} {...this.props} />
				<DayComponent day={2} {...this.props} />
				<DayComponent day={3} dayType="dynamic" {...this.props} />
				<DayComponent day={4} dayType="dynamic" {...this.props} />
			</ul>
		);
  }
}

WeekComponent.displayName = 'WeekComponent';

// Uncomment properties you need
// WeekComponent.propTypes = {};
// WeekComponent.defaultProps = {};

export default WeekComponent;
