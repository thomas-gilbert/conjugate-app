import React from 'react';
import $ from 'jquery';

require('styles/formelements/exercise.css');

class SelectExerciseComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			data: []
		};
	}
	handleChange(e) {
		this.state[e.target.name] = e.target.value;
	}
	loadExercises() {
		$.ajax({
			url: '/data/exercises.json',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(status, err.toString());
			}.bind(this)
		});
	}
	componentDidMount() {
		this.loadExercises();
	}
	render() {
		let array = [];
		$.each(this.state.data.bench, function(key, value){
			array.push(
				<option key={key}>
					{value}
				</option>
			)
		});
		return (
			<div className="exercise">
				<select onChange={function() {}} name="exercise">
					{array}
				</select>
				<input type="text" onChange={this.handleChange} name="weight" value={this.props.weightMeasure} className="input__small" />
				<input type="text" onChange={this.handleChange} name="sets" value="Sets" className="input__small" />
				<input type="text" onChange={this.handleChange} name="reps" value="Reps" className="input__small" />
			</div>
		);
	}
}

SelectExerciseComponent.displayName = 'FormelementsSelectExerciseComponent';

// Uncomment properties you need
// SelectExerciseComponent.propTypes = {};
// SelectExerciseComponent.defaultProps = {};

export default SelectExerciseComponent;
