// TASK 2: COMPARISON OPERATORS (Further Studies: W3Schools)
// Comparison operators evaluate two values and return true or false.
let studentGrade = 80;
/*
console.log(studentGrade > 50); // true
console.log(studentGrade < 50); // false
console.log(studentGrade >= 80); // true
console.log(studentGrade <= 40); // false
*/

// TASK 1: LOGICAL OPERATORS (Further Studies: W3Schools)
// Logical operators combine multiple boolean conditions together.
console.log(studentGrade === 80); // true //check the data type
console.log(studentGrade == "80"); // true // does not check the data type
console.log(studentGrade !== 80); // false

let hasPaidFees = true; // boolean variable
//let attendaancePercentage = 90;  // number variable
// i. Logical AND (&&) -> Requires BOTH conditions to be true

//let canWriteExam = (hasPaidFees === true && attendaancePercentage=== 90); //false
//console.log(`Can the student write the exam? ${canWriteExam}`); // false
let schoolFeesPaid = prompt("Have you paid your fees?"); //
let punctual = prompt("Did you attend class 90% of the time?");
// ii. Logical OR (||) -> Requires AT LEAST ONE condition to be true

let hasScholarship = false;
let isAllowedInClass = hasScholarship || hasPaidFees; //false
console.log(isAllowedInClass); // false
// iii. Logical NOT (!) -> Flips a boolean state (true becomes false, false becomes true)



// TASK 4 & 6: IF ELSE STATEMENTS & INTERPOLATION POPUPS
// Syntax pattern: 
/*
    if (condition) { 
        code to run 
    } else { 
         backup code to run 
    }

*/
/*
let canWrite ="you can write the exam";
let cantWrite ="you cannot write the exam";
if (schoolFeesPaid === "yes" && punctual === "yes") {
    alert(`sinceyou have paid your fees and are punctual, ${canWrite}`);} else {
    alert(`since you haven't paid your fees or are not punctual, ${cannnotWrite}`);
}
*/


// TASK 5: SWITCH STATEMENTS (Optional Shorthand)
// Useful clean alternative to massive if-else chains when checking exact values.




