export const getCategories = (arr) => {
  return arr.map(item => {
    return item.category
  }).filter((item, index, array) => {
    return array.indexOf(item) === index
  })
}