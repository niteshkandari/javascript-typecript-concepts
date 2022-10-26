const Rotation_of_array = (array, d) => {
  let slice_it = array.slice(0, d);
  let splice_it = array.splice(d);
  let spread_it = [...splice_it, ...slice_it];
  return spread_it;
};

const rotated = Rotation_of_array([1, 2, 3, 4, 5,6,7,8], 2);
console.log(rotated);
