'use strict';

import React from 'react';

require('styles//ControlPanel.css');

class ControlPanelComponent extends React.Component {
  render() {
    return (
		<div className="control-panel">
			<button>Strict Mode</button>
			<button>Use Percentages %</button>
			<button>KG/LB</button>
		</div>
    );
  }
}

ControlPanelComponent.displayName = 'ControlPanelComponent';

// Uncomment properties you need
// ControlPanelComponent.propTypes = {};
// ControlPanelComponent.defaultProps = {};

export default ControlPanelComponent;
