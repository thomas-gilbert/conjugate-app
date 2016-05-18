'use strict';

import React from 'react';
import PercentageButton from 'components/controlpanel/PercentageButtonComponent.js';
import WeightMeasure from 'components/controlpanel/WeightMeasureComponent.js';
import WeightTotals from 'components/controlpanel/WeightTotalsComponent.js';
import StrictButton from 'components/controlpanel/StrictButtonComponent.js';

require('styles//ControlPanel.css');

class ControlPanelComponent extends React.Component {
  render() {
  	let weightTotals = this.props.usingPercentages ? <WeightTotals weightMeasure={this.props.weightMeasure} /> : '';
	return (
		<div className="control-panel">
			<StrictButton strictMode={this.props.strictMode} toggleStrictMode={this.props.actions.toggleStrictMode} />
			<PercentageButton weightMeasure={this.props.weightMeasure} usingPercentages={this.props.usingPercentages} togglePercentages={this.props.actions.togglePercentages} />
			<WeightMeasure toggleMeasure={this.props.actions.toggleMeasure} weightMeasure={this.props.weightMeasure} />
			{weightTotals}
		</div>
	);
  }
}


ControlPanelComponent.displayName = 'ControlPanelComponent';

// Uncomment properties you need
// ControlPanelComponent.propTypes = {};
// ControlPanelComponent.defaultProps = {};

export default ControlPanelComponent;
