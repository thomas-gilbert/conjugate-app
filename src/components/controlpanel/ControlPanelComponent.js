'use strict';

import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
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
			<WeightMeasure />
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