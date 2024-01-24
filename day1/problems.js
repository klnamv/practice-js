// solved problems from website: JSchallenger
// javascript fundamentals

// sum two numbers
function myFunction1(a, b) {
    return a + b;
}

// comparison operators, strict equality
function myFunction2(a, b) {
    return a === b;
}

// get type of value
function myFunction3(a) {
    return typeof a;
}

// get nth character of string
function myFunction4(a, n) {
    return a[n - 1];
}
// remove first n characters of string
function myFunction5(a) {
    return a.slice(3);
}

// get last n character of srting
function myFunction6(srt) {
    return str.slice(-3);
}
// get first n characters of string
function myFunction7(a) {
    return a.slice(0, 3);
}

// find the position of one string in another
function myFunction8(a) {
    return a.indexOf('is');
}

// extract first half of string
function myFunction9(a) {
    return a.slice(0, a.length/2);
}

// remove last n characters of string
function myFunction10(){
    return a.slice(0, -3);
}

// return the percentage of a number
function myFunction11(){
    return b / 100 * a;
}

// basic JavaScript math operators
function myFunction12(){
    return (((a + b - c) * d) / e) ** f;
}

// check whether a string contains another string  and concatenate
function myFunction13(a, b){
    // return a.indexOf(b) === -1 ? a + b : b + a;
    return a.includes(b) ? b + a : a + b; 
}

// check if a number is even
function myFunction14(a) {
    return a % 2 === 0;
}

// check if a number is a whole number
function myFunction15(a) {
    return a - Math.floor(a) === 0;
}

// how many times does a character occur?
function myFunction16(a, b) {
    return b.split(a).length - 1;
}
