export const ratingFilter = (state, data) => {
  const { rating } = state
  if (rating !== 0) {
    return data.filter((item) => item.cardRating >= rating)
  }
  return data
}
