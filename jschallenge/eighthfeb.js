// Split a number into its digits
function myFunc(a){
    return a.toString().split("").map(num => parseInt(num, 10));
}

// get nth element of array
function myFunction(array){
    return array[n-1];
}

//remove first n elements of an array
function myFunct(array){
    return array.slice(3);
}

//get last n elements from array
function myFun(array){
    return array.slice(-3);
}

//get first n elements of an array
function myFunction(array){
    return array.slice(0, 3);
}

//remove last n array elements
function lastElem(arr, n){
    return arr.slice(-n)
}

//remove a specific array element
function removeElem(arr, elem){
    return arr.filter(cur => cur !== elem);
}