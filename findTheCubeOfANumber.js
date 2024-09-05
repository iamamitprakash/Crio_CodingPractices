/*
Problem Description
The cube of a number is the product obtained by multiplying the number by itself three times.


Implement the function findCube() that

Accept a number argument a

Returns the cube of that number


Hints
Use the multiplication operator (*).


Sample Input
3


Sample Output
27


Explanation
Cube of 3 would be 3 * 3 * 3 = 27
*/

function cube(a){
    return a*a*a; //its return the cube of a given number
}

//Call the function and print the result
console.log(cube(5));
console.log(cube(15));
console.log(cube(51));