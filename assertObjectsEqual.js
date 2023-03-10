const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🔴: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

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
assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject,longSleeveShirtObject);