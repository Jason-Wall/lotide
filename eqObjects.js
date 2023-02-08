const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`🔴: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrA, arrB) {
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function (object1, object2) {
  const obj1KeyArr = Object.keys(object1).sort();
  const obj2KeyArr = Object.keys(object2).sort();
  if (eqArrays(obj1KeyArr, obj2KeyArr)) {
    for (key of obj1KeyArr) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true
  }
  return false;
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { color: "red", size: "medium" };
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject,longSleeveShirtObject),false);