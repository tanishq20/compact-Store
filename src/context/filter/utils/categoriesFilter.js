export const categoriesFilter = (state, data) => {
  const { categories } = state
  if (categories.length !== 0) {
    return data.filter((item) => categories.includes(item.categoryName))
  }
  return data
}
