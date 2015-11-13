// This is a one line comment

//Created a function that takes a string and return the first character

function firstCharacter(string){
    return string.charAt(0);
}
firstCharacter('hello');

//Created a function that takes a string and returns the last character 

function lastCharacter(string){
    return string.charAt(string.length -1);
}
lastCharacter('hello');


//Created a function that takes a number and string and returns the letter at the postion specified by the number
//Indexing starts at 0
//This will return "r" which is the 4th letter given that indexing starts from 0 '0,1,2,3'

function positionString(position, string){
    return string.charAt(position + 1);
}

positionString(3, 'montreal');

//A function that adds two number or concatenates two strings or one string and a number

function add(a, b){
    return a + b;
}
add(2, 4);
add("f","g")

//A function that multiplies numbers. If numbers are not passed NaN is returned


function multiply(a, b){
    return a * b;
}

multiply(2,4);
//This will return NaN
multiply('a','b');