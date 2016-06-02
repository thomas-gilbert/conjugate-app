export const toggleMeasure = (id) => {
  return {
    type: 'TOGGLE_MEASURE',
    id
  }
}

export const toggleStrictMode = (id) => {
  return {
    type: 'TOGGLE_STRICT_MODE',
    id
  }
}

export const togglePercentages = (id) => {
  return {
    type: 'TOGGLE_USE_OF_PERCENTAGES',
    id
  }
}

export const addExerciseGroup = (exercise_group, day, week) => {
  return {
    type: 'ADD_EXERCISE_GROUP',
    exercise_group,
    day,
    week
  }
}

export const addMainLift = (info, day, week) => {
  return {
    type: 'ADD_MAIN_LIFT',
    info,
    day,
    week
  }
}