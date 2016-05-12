const initalState = {
	weightMeasure: 'KG'
}

const controlPanel = (state = initalState, action) => {
	switch (action.type) {
	case 'TOGGLE_MEASURE':
		var measure;
		if (action.id === 'LB') {
			measure = 'KG'
		} else if (action.id === 'KG') {
			measure = 'LB'
		}

		return Object.assign({}, state, {
			weightMeasure: measure
		})
	default:
		return state
	}
}

export default controlPanel