
function processArray(ar){
  return ar.map(num => num % 2 ===0 ? num**2 : num*3)
} 




const myArray = [4, 7,9,3,10,15]
 const myResult = processArray(myArray)

console.log(myResult)
