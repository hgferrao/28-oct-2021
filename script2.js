//  return first element of array
/*
function getFirstValue(arr) {
  // console.log(arr);
  return arr[0];
}
console.log(getFirstValue([1, 2, 3])); //, 1)
console.log(getFirstValue([80, 5, 100])); //, 80)
console.log(getFirstValue([-500, 0, 50])); //, -500)
console.log(getFirstValue([5, 2, 3])); //, 5)
console.log(getFirstValue([75675, 5, 100])); //, 75675)
console.log(getFirstValue([-52320, 0, 50])); //, -52320)


// convert arguments to array

function makePair(...num) {
  return [...num];
  // console.log([...num]);
}
console.log(makePair(1, 2, 3)); //, [1, 2])
console.log(makePair(21, 82)); //, [21, 82])
console.log(makePair(4213, 526)); //, [4213, 526])


// Reverse an Array
function reverse(arr) {
  return arr.reverse();
}
console.log(reverse([1, 2, 3, 4])); //, [4, 3, 2, 1])
console.log(reverse([5, 6, 7])); //, [7, 6, 5])
console.log(reverse([9, 9, 2, 3, 4])); //, [4, 3, 2, 9, 9])
console.log(reverse([3, 3])); //, [3, 3])
console.log(reverse([-1, -1, -1])); //, [-1, -1, -1])
console.log(reverse([])); //, [])


// adding 1 to each element of an array

function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }

  return arr;
}
console.log(incrementItems([0, 1, 2, 3])); //, [1, 2, 3, 4])
console.log(incrementItems([2, 4, 6, 8])); //, [3, 5, 7, 9])
console.log(incrementItems([-1, -2, -3, -4])); //, [0, -1, -2, -3])


// destructure an aray
const arr = [1, 2, 3, 4, 5, 6];
const [a, b] = arr;
console.log(a);
console.log(b);

//Return the Last Element in an Array

function getLastItem(arr) {
  return arr.slice(-1);
}
console.log(getLastItem(["Cat", "Dog", "Duck"])); //, 'Duck')
console.log(getLastItem([1, 2, 3])); //, 3)
console.log(getLastItem([undefined]));
console.log(getLastItem([true, false, false, true])); //, true)
console.log(getLastItem([7, "String", false, undefined, null])); //, null)
console.log(getLastItem([false])); //, false)
console.log(getLastItem([undefined, undefined, undefined])); //, undefined)
console.log(getLastItem([1, 2, 3, 56, 87, 23, 65, 45])); //, 45)
console.log(getLastItem(["Apple", "Orange", undefined])); //, undefined)
console.log(getLastItem([true, false, "Apple"])); //, 'Apple')
console.log(getLastItem([null, null, null])); //, null)
console.log(getLastItem([1])); //, 1)

// Given an index and an array, return the value of the array with the given index.

function valueAt(arr, i) {
  let index = Math.floor(i);
  return arr[index];
  // console.log(arr);
  // console.log(index);
}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)); //, 6);
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)); //, 4);
console.log(valueAt([1, 2], 1.0 / 2)); //, 1);
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)); //, 5);


// Create a function that takes an array of numbers or letters and returns a string.
function arrayToString(arr) {
  return arr.join("");
}
console.log(arrayToString([1, 2, 3, 4, 5, 6])); //, "123456")
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); //, "abcdef")
console.log(arrayToString([1, 2, 3, "a", "s", "d"])); //, "123asd")
console.log(arrayToString(["a", "s", "d", "f", "e", "r", 1, 2, 3, 4, 5, 0])); //, "asdfer123450")
console.log(arrayToString(["A", "D", "F", "G", "H", "Y", "TR", "NNHJK"])); //, "ADFGHYTRNNHJK")

// Concatenating Two Integer Arrays
function concat(arr1, arr2) {
  return arr1.concat(arr2);
  // return [...arr1, arr2];
}
console.log(concat([1, 3, 5], [2, 6, 8])); //, [1, 3, 5, 2, 6, 8])
console.log(concat([7, 8], [10, 9, 1, 1, 2])); //, [7, 8, 10, 9, 1, 1, 2])
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])); //, [4, 5, 1, 3, 3, 3, 3, 3])


// Find the Index
function findIndex(arr, str) {
  return arr.indexOf(str);
}
console.log(findIndex(["abc", "ghj", "banana", "grape"], "grape")); //, 3)
console.log(findIndex(["a", "b", "c", "d", "e", "f"], "f")); //, 5)
console.log(
  findIndex(["hi", "edabit.com", "testcase", "validstring"], "edabit.com")
); //, 1)

// Check if an Array Contains a Given Number
function check(arr, el) {
  return arr.includes(el);
}
console.log(check([1, 2, 3, 4, 5], 3)); //, true)
console.log(check([1, 1, 2, 1, 1], 3)); //, false)
console.log(check([1, 1, 2, 1, 5, 4, 7], 7)); //, true)
console.log(check([1, 1, 2, 1, 5, 4, 7], 8)); //, false)
console.log(check([5, 5, 5, 6], 5)); //, true)
console.log(check([], 5)); //, false)



//  Array of Strings to Array of Numbers
function toNumberArray(arr) {
  return arr.map((indexElement) => parseFloat(indexElement));
  // console.log(arr);
}
console.log(toNumberArray(["1", "2"])); //, [1, 2])
console.log(toNumberArray(["3", "4"])); //, [3, 4])
console.log(toNumberArray(["5", "6"])); //, [5, 6])
console.log(toNumberArray(["7", "8"])); //, [7, 8])
console.log(toNumberArray(["9", "10"])); //, [9, 10])
console.log(toNumberArray(["91", "44"])); //, [91, 44])
console.log(toNumberArray(["19", "14"])); //, [19, 14])
console.log(toNumberArray(["29", "34"])); //, [29, 34])
console.log(toNumberArray(["0", "4"])); //, [0, 4])
console.log(toNumberArray(["21", "23"])); //, [21, 23])
console.log(toNumberArray(["12", "25"])); //, [12, 25])
console.log(toNumberArray(["99", "20"])); //, [99, 20])
console.log(toNumberArray(["9", "4", "5", "6", "7", "8", "9"])); //, [9, 4, 5, 6, 7, 8, 9])
console.log(toNumberArray(["11", "14", "13", "12", "3", "6"])); //, [11, 14, 13, 12, 3, 6])
console.log(toNumberArray(["7", "14", "16", "18", "19", "20"])); //, [7, 14, 16, 18, 19, 20])
console.log(toNumberArray(["8.3", "9.7", "8.0"])); //, [8.3, 9.7, 8])
console.log(
  toNumberArray(["2.1", "1.7", "7.0", "4.7", "9.3", "6.8", "9.1", "9.1"])
); //, [2.1, 1.7, 7, 4.7, 9.3, 6.8, 9.1, 9.1])
console.log(toNumberArray(["9.8", "4.6", "7.3", "7.4", "1.9", "6.3", "8.7"])); //, [9.8, 4.6, 7.3, 7.4, 1.9, 6.3, 8.7])
console.log(toNumberArray(["2.4"])); //, [2.4])


/////////////////////  MID level ///////////////////////////

// Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
  return arr.filter((el) => el === true).length;
  // console.log(newArr);
}
console.log(countTrue([true, false, false, true, false])); //, 2)
console.log(countTrue([false, false, false, false])); //, 0)
console.log(countTrue([])); //, 0)
console.log(
  countTrue([
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
  ])
); //, 8)
console.log(
  countTrue([true, false, true, true, false, false, false, false, false])
); //, 3)
console.log(
  countTrue([
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
  ])
); //, 8)
console.log(
  countTrue([true, false, true, true, true, false, true, true, false, false])
); //, 6)
console.log(
  countTrue([
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
  ])
); //, 3)
console.log(
  countTrue([
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
  ])
); //, 3)
console.log(
  countTrue([true, true, false, true, false, false, false, false, true, false])
); //, 4)
console.log(
  countTrue([
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
  ])
); //, 9)
console.log(
  countTrue([
    true,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
  ])
); //, 8)
console.log(
  countTrue([
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    true,
    false,
    true,
  ])
); //, 6)


// Converting Objects to Arrays

function toArray(obj) {
  return Object.entries(obj);
  // console.log(obj2);
  // console.log(obj);
}
console.log(toArray({ a: 1, b: 2 })); //, [["a", 1], ["b", 2]])
console.log(toArray({ foo: 33, bar: 45, baz: 67 })); //, [["foo", 33], ["bar", 45], ["baz", 67]])
console.log(toArray({ shrimp: 15, tots: 12 })); //, [["shrimp", 15], ["tots", 12]])
console.log(toArray({})); //, [])


// Concatenate Variable Number of Input Arrays

function concat(...args) {
  return args.flat(Infinity);
}
console.log(concat([1, 2, 3], [4, 5], [6, 7])); //, [1, 2, 3, 4, 5, 6, 7])
console.log(concat([1], [2], [3], [4], [5], [6], [7])); //, [1, 2, 3, 4, 5, 6, 7])
console.log(concat([1, 2], [3, 4])); //, [1, 2, 3, 4])
console.log(concat([4, 4, 4, 4, 4])); //, [4, 4, 4, 4, 4])
console.log(concat(["a"], ["b", "c"])); //, ['a', 'b', 'c'])


//
function arrayOfMultiples(num, length) {
  const arr = new Array(length);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = (i + 1) * num;
  }
  return arr;
}
console.log(arrayOfMultiples(7, 5)); //, [7, 14, 21, 28, 35])
console.log(arrayOfMultiples(12, 10)); //, [12, 24, 36, 48, 60, 72, 84, 96, 108, 120])
console.log(arrayOfMultiples(17, 7)); //, [17, 34, 51, 68, 85, 102, 119])
console.log(arrayOfMultiples(630, 14)); //, [630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820])
console.log(arrayOfMultiples(140, 3)); //, [140, 280, 420])
console.log(arrayOfMultiples(7, 8)); //, [7, 14, 21, 28, 35, 42, 49, 56])
console.log(arrayOfMultiples(11, 21)); //, [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231])


// Convert Key, Values in an Object to Array
function objectToArray(obj) {
  return Object.entries(obj);
}
console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  })
); //, [["D", 1], ["B", 2], ["C", 3]])

console.log(
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10,
  })
); //, [["likes", 2], ["dislikes", 3], ["followers", 10]])



////////////////////////////////////////////
//  false, null, 0, "", undefined, and NaN

function compact(arr) {
  console.log(arr.filter(Boolean));
}
console.log(compact([1, 0, false, null, undefined, "banana"])); //, [1,'banana']);
console.log(compact([])); //, []);
console.log(
  compact(
    [
      {
        color: "red",
        make: "toyota",
      },
      {
        color: "blue",
        make: "mazda",
      },
    ],
    null
  )
);
//   ,
//   [
//     {
//       color: "red",
//       make: "toyota",
//     },
//     {
//       color: "blue",
//       make: "mazda",
//     },
//   ]
// );


// Sort the Unsortable
function sortIt(arr) {
  return arr.sort();
}
console.log(sortIt([4, 1, 3])); //, [1, 3, 4])
console.log(sortIt([[4], [1], [3]])); //, [[1], [3], [4]])
console.log(sortIt([4, [1], 3])); //, [[1], 3, 4])
console.log(sortIt([[4], 1, [3]])); //, [1, [3], [4]])
console.log(sortIt([[3], 4, [2], [5], 1, 6])); //, [1, [2], [3], 4, [5], 6])
console.log(sortIt([[3], 7, [9], [5], 1, 6])); //, [1, [3], [5], 6, 7, [9]])
console.log(sortIt([[3], 7, [9], [5], 1, 6, [0]])); //, [[0], 1, [3], [5], 6, 7, [9]])

//
function secondLargest(arr) {
  arr.sort((a, b) => a - b);
  // return arr.slice(-2, -1);
  return arr[arr.length - 2];
}
console.log(secondLargest([10, 40, 30, 20, 50])); //, 40)
console.log(secondLargest([25, 143, 89, 13, 105])); //, 105)
console.log(secondLargest([54, 23, 11, 17, 10])); //, 23)
console.log(secondLargest([513, 211, 131, 417, 11])); //, 417)
console.log(secondLargest([63, 44, 11, 22, 33, 66, 65])); //, 65)

//////////////////// conditional///////////////////
function lessThanOrEqualToZero(num) {
  return num <= 0 ? true : false;
}
console.log(lessThanOrEqualToZero(5)); //, false);
console.log(lessThanOrEqualToZero(0)); //, true);
console.log(lessThanOrEqualToZero(-5)); //, true);

// checj for equal number
function isSameNum(num1, num2) {
  return num1 === num2 ? true : false;
}
console.log(isSameNum(4, 8)); //, false)
console.log(isSameNum(2, 2)); //, true)
console.log(isSameNum(0, 6)); //, false);
console.log(isSameNum(2, "2")); //, false)


//Boolean to String Conversion
function boolToString(flag) {
  return String(flag);
}
console.log(boolToString(true)); //, "true")
console.log(boolToString(false)); //, "false")

function intWithinBounds(n, lower, upper) {
  const safeInt = Number.isSafeInteger(n);
  return safeInt === true && n >= lower && n < upper ? true : false;

  // console.log(safeInt);
}
console.log(intWithinBounds(3, 1, 9)); //, true)
console.log(intWithinBounds(6, 1, 6)); //, false)
console.log(intWithinBounds(4.5, 3, 8)); //, false)
console.log(intWithinBounds(-5, -10, 6)); //, true)
console.log(intWithinBounds(4, 0, 0)); //, false)
console.log(intWithinBounds(10, 9, 11)); //, true)
console.log(intWithinBounds(6.3, 2, 6)); //, false)
console.log(intWithinBounds(6.3, 2, 10)); //, false)
console.log(intWithinBounds(9, 2, 3)); //, false)
console.log(intWithinBounds(9, 9, 9)); //, false)
console.log(intWithinBounds(-3, -5, -2)); //, true)
console.log(intWithinBounds(-3, -5, -3)); //, false)
console.log(intWithinBounds(-3, -10, 10)); //, true)
console.log(intWithinBounds(0, -3, 3)); //, true)
console.log(intWithinBounds(0, 0, 1)); //, true)
console.log(intWithinBounds(7, 7, 12)); //, true)

// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.

function perimeter(l, num) {
  return l == "s" ? num * 4 : num * 6.28;
}
console.log(perimeter("s", 1)); //, 4);
console.log(perimeter("s", 4)); //, 16);
console.log(perimeter("s", 9)); //, 36);
console.log(perimeter("s", 13)); //, 52);
console.log(perimeter("s", 30)); //, 120);
console.log(perimeter("c", 1)); //, 6.28);
console.log(perimeter("c", 4)); //, 25.12);
console.log(perimeter("c", 9)); //, 56.52);
console.log(perimeter("c", 13)); //, 81.64);
console.log(perimeter("c", 30)); //, 188.4);
*/

/////////////////////////////////////////////

// Can you write a javascript function for return value of a nested property like line2 ?
// Note: Your js function should work even when the json structure is changed.
// Hint: Create a js function that takes two arguments - (jsonObject, pathArray) In the above example, the pathArray could be ['user', 'personalInfo', 'Address', 'line2']. Leverage reduce() to implement the logic.
// Let me know if the question is not clear. Add this to one of your challenges today and share the update

const user1 = {
  id: 101,
  email: "jack@dev.com",
  personalInfo: {
    name: "Jack",
    address: {
      line1: "westwish st",
      line2: "washmasher",
      city: "wallas",
      state: "WX",
    },
  },
};
const user = JSON.stringify(user1);

const array = ["user", "personalInfo", "Address", "line2"];

function js(jsonObject, pathArray) {
  const user = JSON.parse(jsonObject);

  const keys = pathArray.reduce((acc, arr) => {}, []);

  console.log(keys);
  // console.log(pathArray);
}
console.log(js(user, array));

//////////////////
// var wizards = [
//   {
//     name: "Harry Potter",
//     house: "Gryfindor",
//   },
//   {
//     name: "Cedric Diggory",
//     house: "Hufflepuff",
//   },
//   {
//     name: "Tonks",
//     house: "Hufflepuff",
//   },
//   {
//     name: "Ronald Weasley",
//     house: "Gryfindor",
//   },
//   {
//     name: "Hermione Granger",
//     house: "Gryfindor",
//   },
// ];

// var hufflepuff = wizards.reduce(function (newArr, wizard) {
//   if (wizard.house === "Hufflepuff") {
//     newArr.push(wizard.name);
//   }
//   return newArr;
// }, []);

// console.log(hufflepuff);
