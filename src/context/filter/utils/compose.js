export const compose =
  (filterState, ...functions) =>
  (data) =>
    functions.reduce((acc, cur) => cur(filterState, acc), data)
