export const priceRangeFilter = (state, data) => {
  const { priceRange } = state
  return data?.filter(
    (item) => Number(item.cardDiscPrice) <= Number(priceRange)
  )
}
