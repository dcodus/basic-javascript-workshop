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

//A function that takes two numbers and runs an operation based on the third parameter

function calculate(num1, num2, operation){
    if(operation === 'add'){
        return num1 + num2;
    } else if(operation === 'subtract'){
        return num1 - num2;
    } else if(operation === 'mult'){
        return num1 * num2;
    } else if(operation === 'div'){
        return num1/num2;
    } else {
        return 0;
    }
}

calculate(1,2, 'add');

//A function that takes a number and a string and returns that string n number of times n = number

function repeat(num, string){
    var returns = "";
    for(var i = 0; i < num; i++){
        returns = returns + string + " ";
    }
    return returns;
}
repeat(4, 'hello');

//A function that takes a string and reverses it. In this case we start from the end of the string and work backwords
//We add every end letter to a new variable and return the reversed string


function reverse(string){
    var reversed = '';
    for(var i = string.length -1; i >= 0; i--){
        reversed = reversed + string[i];
    }
    return reversed;
}

reverse('montreal');

//Two functions calculating the factorial pf a number. One uses recursion and the other uses a for loop.

function factorial(number){
    if(number < 0){
        return -1
        //We are given that the factorial of 0 = 1. This is the base case.
    } else if(number === 0){
        return 1;
        //We work our way up from the base case. Base case = 1;
        //factorial(5) = 120;
        //factorial(4) = 20;
        //factorial(3) = 5;
        //factorial(2) = 2;
        //factorial(1) = 1;
    } else {
        return number * factorial(number -1);
    }
}


factorial(5);

function factorialLoop(number){
    if(number < 0){
        return 0;
    }
    
    var base = 1;
    var result = 1;
    for(var i = base; i <= number; i++){
        
            result = result * i;
    }
    return result;
}

factorialLoop(5);