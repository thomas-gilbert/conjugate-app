'use strict';

import React from 'react';

require('styles/week/Week.css');

import DayComponent from 'components/week/day/DayComponent.js';

class WeekComponent extends React.Component {
	render() {
		debugger
	    return (
			<ul className="week">
				<DayComponent day={this.props.weeks.weeks[0].days[0]} index={0} {...this.props} />
				<DayComponent day={this.props.weeks.weeks[0].days[1]} index={1} {...this.props} />
				<DayComponent day={this.props.weeks.weeks[0].days[2]} index={2} dayType="dynamic" {...this.props} />
				<DayComponent day={this.props.weeks.weeks[0].days[3]} index={3} dayType="dynamic" {...this.props} />
			</ul>
		);
  }
}

WeekComponent.displayName = 'WeekComponent';

// Uncomment properties you need
// WeekComponent.propTypes = {};
// WeekComponent.defaultProps = {};

export default WeekComponent;
