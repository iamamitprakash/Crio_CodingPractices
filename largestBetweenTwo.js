/*
Implement the function findLargest() that

Accepts two numbers arguments a and b

Returns the largest number between the two input numbers a and b


Hints
Use comparison operator (>).

Use if else.


Sample Input
1, 9


Sample Output
9


Explanation
As 9 is greater than 1, return 9.
*/

function findLargest(a, b){
    // Logic that show a is greater than b
    if(a > b) return a; return b;
}

//Call the function and print the result
console.log(findLargest(1, 9));
console.log(findLargest(10, 9));