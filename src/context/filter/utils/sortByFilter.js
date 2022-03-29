export const sortByFilter = (state, data) => {
  const { sortBy } = state
  switch (sortBy) {
    case 'LOW_TO_HIGH':
      return [...data].sort(
        (a, b) => Number(a.cardDiscPrice) - Number(b.cardDiscPrice)
      )
    case 'HIGH_TO_LOW':
      return [...data].sort(
        (a, b) => Number(b.cardDiscPrice) - Number(a.cardDiscPrice)
      )
    default:
      return data
  }
}
