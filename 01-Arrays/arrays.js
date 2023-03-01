const array1 =[1, 2, 3, 4, 5];
const array2 =[6, 7, 8, 9, 10];

const array3=array1.concat(array2);
console.log(array3);

array3.push(11);
array3.unshift(0);
array1.pop();
array1.shift();
console.log(array1.length)
console.log(array2.includes(1))
console.log(array1)
console.log(array2)
console.log(array3)
console.log(array3.filter(x=> x>8))