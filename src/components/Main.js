require('normalize.css');
require('styles/App.css');

import React from 'react';

import ControlPanelComponent from 'components/ControlPanelComponent.js';
import WeekComponent from 'components/week/WeekComponent.js';

class AppComponent extends React.Component {
	render() {
		return (
			<div className="index">
				<div className="header">Conjugate Program Builder</div>
				<div className="control-panel">
					<ControlPanelComponent />
				</div>
				<div className="content">
					<WeekComponent />
				</div>
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
