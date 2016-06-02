// TODO: extract the structure as a schema
const initalState = {
	weeks: [
		{
			days: {
				0: {
					exercise_group: null,
					mainlift: null,
					secondarylift: null,
					accessories: []
				},
				1: {
					exercise_group: 'bench',
					mainlift: null,
					secondarylift: null,
					accessories: []
				},
				2: {
					exercise_group: null,
					mainlift: null,
					secondarylift: null,
					accessories: []
				},
				3: {
					exercise_group: 'bench',
					mainlift: null,
					secondarylift: null,
					accessories: []
				}
			}
		}
	]
};

const weeks = (state = initalState, action) => {
	let newState;

	switch (action.type) {
	case 'ADD_WEEK':
	// todo
		return state
	case 'ADD_EXERCISE_GROUP':
		newState = Object.assign({}, state);
		newState.weeks[0].days[action.day].exercise_group = action.exercise_group;
		return newState
	case 'ADD_MAIN_LIFT':
		newState = Object.assign({}, state);
		newState.weeks[0].days[action.day].mainlift = {
			exercise: action.info.exercise,
			weight: action.info.weight,
			sets: action.info.sets,
			reps: action.info.reps
		};
		return newState
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