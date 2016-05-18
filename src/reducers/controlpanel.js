const initalState = {
	weightMeasure: 'KG',
	strictMode: true,
	usingPercentages: false
}

const controlPanel = (state = initalState, action) => {
	switch (action.type) {
	case 'TOGGLE_MEASURE':
		let measure;
		if (action.id === 'LB') {
			measure = 'KG'
		} else if (action.id === 'KG') {
			measure = 'LB'
		}

		return Object.assign({}, state, {
			weightMeasure: measure
		})
	case 'TOGGLE_STRICT_MODE':
		return Object.assign({}, state, {
			strictMode: !action.id
		})
	case 'TOGGLE_USE_OF_PERCENTAGES':
		return Object.assign({}, state, {
			usingPercentages: !action.id
		})
	default:
		return state
	}
}

export default controlPanel