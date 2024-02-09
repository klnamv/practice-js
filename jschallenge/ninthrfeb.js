// 1 count numbers of element in JS array
const numOfElem = (array) => {
    return array.length;
}

//count number of negative values in array
const numOfNegative = (array) => {
    return array.filter((num) => num < 0).length;
}

// 2 sort an array of strings alphabetically
const sortArray = (array) => {
    return array.sort();
}

// 3 sort an array of numbers in descending order
const sortArrayInDescendingOrder = (array) => {
    return array.sort((a, b) => (b - a)).reverse();
}

//4 calculate the sum of an array of numbers
const sumOfArray = array => {
    return array.reduce((acc, curr) => acc + curr)
}

// 5 return the average of an array of numbers
const averOfArr = array => {
    return array.reduce((acc, curr) => acc + curr) / array.length;
}

// 6 return the longest string from an array of strings
const lonStr = array => {
    return array.reduce((a, b) => a.length <= b.length ? b : a)
}

//7 check if all array elements are equal
const arrEqual = arr => {
    return arr.every(elem => elem === arr[0]);
}

const allArrEqual = arr => {
    return new Set(arr).size === 1
}

// 8 merge an arbitrary number of arrays
const mergeArray = arr => {
    return arrays.flat()
}

const mergeArrays = arr => {
    return Array.prototype.concat(...arr)
} 
// 9 sort array by object property


// 10