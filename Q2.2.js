const one = [2, 10, 99, 150];
const two = [2, 1, 3, 4];

const inAscOrder = (arr) => {
  for (let i = 0; i < arr.length; i++) {
     if (i > 0 && arr[i - 1] > arr[i]) {
       return false;
     }
  }
  return true;
}

console.log(one, inAscOrder(one));
console.log(two, inAscOrder(two));