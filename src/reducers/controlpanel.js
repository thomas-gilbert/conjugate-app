const controlPanel = (state = {weightMeasure: 'KG'}, action) => {
	switch (action.type) {
	case 'TOGGLE_MEASURE':
		var measure;
		if (action.id === 'LB') {
			measure = 'KG'
		} else if (action.id === 'KG') {
			measure = 'LB'
		}

		return [...state, {
			weightMeasure: measure
		}]
	default:
		return state
	}
}

export default controlPanel