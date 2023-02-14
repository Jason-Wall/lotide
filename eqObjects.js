const eqArrays = function(arrA, arrB) {
  if (arrA.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  const obj1KeyArr = Object.keys(object1).sort();
  const obj2KeyArr = Object.keys(object2).sort();
  if (eqArrays(obj1KeyArr, obj2KeyArr)) {
    for (key of obj1KeyArr) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { color: "red", size: "medium" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false