const map = (arr, func) => {
  const resultArr = [];
  for (let element of arr) {
    const output = (func(element));
    resultArr.push(output);
  }
  return resultArr;
};



const words = ["ground", "control", "to", "major", "tom"];
const myfunc = (argString) => argString.toUpperCase();
console.log(map(words, myfunc));