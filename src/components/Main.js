require('normalize.css');
require('styles/App.css');

import React from 'react';

import ControlPanelContainer from 'components/controlpanel/ControlPanelContainer.js';
import WeekComponent from 'components/week/WeekComponent.js';

class MainComponent extends React.Component {
	render() {
		return (
			<div className="index">
				<div className="header">Conjugate Program Builder</div>
				<ControlPanelContainer />
				<div className="content">
					<WeekComponent />
				</div>
			</div>
		);
	}
}

MainComponent.defaultProps = {
};

export default MainComponent;
