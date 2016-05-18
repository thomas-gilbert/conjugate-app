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