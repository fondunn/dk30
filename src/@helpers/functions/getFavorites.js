export const getFavorites = (arr, category) => arr.filter(item => {
  if (item.favorite && item.category === category) return item
})