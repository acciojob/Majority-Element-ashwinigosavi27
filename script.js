//your code here
function findMajorityElement(nums) {
  let candidate;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}
