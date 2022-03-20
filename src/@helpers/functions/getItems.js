export const getItems = (arr = [], num = 4) => {
  let result = []
  if (arr.length === 0) {
    return arr
  }
  if (arr.length < num) {
    num = arr.length
  }
  for (let i = 0; i < num; i++) {
    result.push(arr[i])
  }
  return result
}