import React from 'react';

import ControlPanelContainer from '../container/ControlPanelContainer.js';
import WeekComponent from 'components/week/WeekComponent.js';

class MainComponent extends React.Component {
	render() {
		return (
			<div className="index">
				<div className="top-bar">
					<p className="menu-text">Conjugate Program Builder</p>
				</div>
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
