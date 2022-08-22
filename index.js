const nums = [0, 2, 1, 5, 3, 4]
// Output: [0,1,2,4,5,3]


const findPermutation = (n) => {
  const newArray = []
  for (let i = 0; i < n.length; i++) {
    newArray.push(nums[nums[i]])
  }
  alert(newArray)
}

alert(findPermutation(nums))