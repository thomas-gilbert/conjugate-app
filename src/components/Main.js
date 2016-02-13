require('normalize.css');
require('styles/App.css');

import React from 'react';

import WestsideFormComponent from 'components/WestsideFormComponent.js';

class AppComponent extends React.Component {
	render() {
		return (
			<div className="index">
				<div className="header">Conjugate Program Builder</div>
				<div className="tabs"></div>
				<div className="content">
					<div className="max-effort--lower">
						<WestsideFormComponent />
					</div>
					<div className="max-effort--upper"></div>
					<div className="dynamic-effort--lower"></div>
					<div className="dynamic-effort--upper"></div>
				</div>
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
