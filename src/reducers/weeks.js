// TODO: extract the structure as a schema
const initalState = {
	weeks: [
		{
			days: {
				day1: {
					mainlift: null,
					secondarylift: null,
					accessories: []
				},
				day2: {
					mainlift: null,
					secondarylift: null,
					accessories: []
				},
				day3: {
					mainlift: null,
					secondarylift: null,
					accessories: []
				},
				day4: {
					mainlift: null,
					secondarylift: null,
					accessories: []
				}
			}
		}
	]
};

const weeks = (state = initalState, action) => {
	switch (action.type) {
	case 'ADD_WEEK':
	// todo
		return state
	case 'ADD_MAIN_LIFT':
		return Object.assign({}, state, {
			weeks: [{
				days: {
					['day'+action.day]: {
						mainlift: action.name
					}
				}
			}]
		})
	case 'ADD_SECONDARY_LIFT':
	// todo
		return state
	case 'ADD_ACCESSORY':
	// todo
		return state
	default:
		return state
	}
}

export default weeks