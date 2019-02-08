export const indexOf = (arr, val) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) return i;
  }
  return -1;
};
export const contains = (arr, val) => {
  return indexOf(arr, val) > -1;
};
export const remove = (arr, val) => {
  var index = indexOf(arr, val);
  if (index > -1) {
    arr.splice(index, 1);
  }
};
const arrays = {
  indexOf,
  contains,
  remove
};

export default arrays;
