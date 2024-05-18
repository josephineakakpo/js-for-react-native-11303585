

function createUserProfiles(originalName,modifiedName){
  return originalName.map((name,index)=> {
    return{
      id:index+1,
      originalNames:name,
      modifiedNames:modifiedName[index]
    }
  });
}




function processArray(ar){
  return ar.map(num => num % 2 ===0 ? num**2 : num*3)
} 

function formatArrayStrings(strings,numbers){
  return strings.map((str,index) => {
    const num =numbers[index];
    if (num % 2 ===0){
      return str.toUpperCase();
    }else {
      return str.toLowerCase();
    }
  })
}

const myArray = [4, 7,9,3,10,15]
const myString = ["boy","man","toy","girl", "pen "]

const myFormatedString =formatArrayStrings(myString,myArray)


const userProfile = createUserProfiles(myString, myFormatedString )
console.log(userProfile)