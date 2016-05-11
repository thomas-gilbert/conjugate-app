const controlPanel = (state = 0, action) => {
	switch (action.type) {
	case 'TOGGLE_MEASURE':
		console.log('msg');
		return weightMeasure(state, action);
	default:
		return state
	}
}


const weightMeasure = (state = 0, action) => {
	switch (action.id) {
	case 'KG':
	console.log('inin');
		return Object.assign({}, state, {
			weightMeasure: 'LB'
		})
	case 'LB':
		return Object.assign({}, state, {
			weightMeasure: 'KG'
		})
	default:
	  return state
	}
}

export default controlPanel