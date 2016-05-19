import React from 'react';

import ControlPanelContainer from '../container/ControlPanelContainer';
import WeeksContainer from '../container/WeeksContainer';

class MainComponent extends React.Component {
	render() {
		return (
			<div className="index">
				<div className="top-bar">
					<p className="menu-text">Conjugate Program Builder</p>
				</div>
				<ControlPanelContainer />
				<div className="content">
					<WeeksContainer />
				</div>
			</div>
		);
	}
}

MainComponent.defaultProps = {
};

export default MainComponent;
