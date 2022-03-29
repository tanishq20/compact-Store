export const fastDeliveryFilter = (state, data) => {
  const { fastDelivery } = state
  if (fastDelivery) {
    return data.filter((item) => item.fastDelivery)
  } else {
    return data
  }
}
