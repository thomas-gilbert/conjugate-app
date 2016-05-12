'use strict';

import React from 'react';
import PercentageButton from 'components/controlpanel/PercentageButtonComponent.js';
import WeightMeasure from 'components/controlpanel/WeightMeasureComponent.js';
import WeightTotals from 'components/controlpanel/WeightTotalsComponent.js';

require('styles//ControlPanel.css');

class ControlPanelComponent extends React.Component {
  render() {
	return (
		<div className="control-panel">
			<button>Strict Mode</button>
			<PercentageButton />
			<WeightMeasure toggleMeasure={this.props.actions.toggleMeasure} weightMeasure={this.props.weightMeasure} />
			<WeightTotals />
		</div>
	);
  }
}


ControlPanelComponent.displayName = 'ControlPanelComponent';

// Uncomment properties you need
// ControlPanelComponent.propTypes = {};
// ControlPanelComponent.defaultProps = {};

export default ControlPanelComponent;
