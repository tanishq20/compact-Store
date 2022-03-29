export const outOfStockFilter = (state, data) => {
  const { outOfStock } = state
  if (!outOfStock) {
    return data.filter((item) => item.inStock)
  } else {
    return data
  }
}
