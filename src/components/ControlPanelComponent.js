'use strict';

import React from 'react';

require('styles//ControlPanel.css');

class ControlPanelComponent extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
    	squattotal: props.squattotal,
    	deadlifttotal: props.deadlifttotal,
    	benchtotal: props.benchtotal,
    	weightMeasure: props.weightMeasure
    };
  }
  handleChange(e) {
  	this.state[e.target.name] = e.target.value;
  }
  changeMeasure() {
  	var weightMeasure = this.state.weightMeasure === 'KG' ? 'LB' : 'KG';
  	this.setState({
  		weightMeasure: weightMeasure
  	});
  }
  render() {
    return (
		<div className="control-panel">
			<button>Strict Mode</button>
			<button>Use Percentages %</button>
			<button onClick={this.changeMeasure.bind(this)}>{this.state.weightMeasure}</button>
			<div className="weight-totals">
				<input type="text" onChange={this.handleChange.bind(this)} name="squattotal" value={this.state.squattotal} className="input__small" />
				<input type="text" onChange={this.handleChange.bind(this)} name="deadlifttotal" value={this.state.deadlifttotal} className="input__small" />
				<input type="text" onChange={this.handleChange.bind(this)} name="benchtotal" value={this.state.benchtotal} className="input__small" />
			</div>
		</div>
    );
  }
}

ControlPanelComponent.defaultProps = {
	squattotal: 'Insert your max KG',
	deadlifttotal: 'Insert your max KG',
	benchtotal: 'Insert your max KG',
	weightMeasure: 'KG'
};
ControlPanelComponent.displayName = 'ControlPanelComponent';

// Uncomment properties you need
// ControlPanelComponent.propTypes = {};
// ControlPanelComponent.defaultProps = {};

export default ControlPanelComponent;
