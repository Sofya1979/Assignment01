// Assignment 01
const currentTitle = document.title;
console.log('Sofya Sakhaeva:', currentTitle);
//Setting a new page title
document.title = "Sofya Sakhaeva M2Assignment:";
console.log(document.title);
//Ex1
//Convert the following highlighted identifiers to Camel Case notation:
//The string some_month in CamelCase notation: someMonth.
//The string the Month() in CamelCase notation: theMonth().
//The string the current-month in CamelCase notation: currentMonth.
//The string the summer_month in CamelCase notation:  summerMonth.
//The string the MyLibrary-function in CamelCase notation:  myLibraryFunction.
//Ex2
const SofyaNumber = 2025;// Numeric literal expression
const SofyaString = "Hello, JavaScript!";// String literal expression
const isTrue = true;// Boolean literal expression
const SofyaNullValue = null;// Null literal expression
//Ex3
//Ex3.1 Example Template literal: 
const myName = "Lida";
const age = 57;
// Example: combining functions into a formula:
const Greeting = `Hello, my name is ${myName} and I'm ${age} years old.`;
console.log(Greeting); // Output: Hello, my name is Lida and I'm 57 years old.
//Ex3.2 Example Logical operator:
let accessAllowed = age > 21 ? true : false; /* If age is greater than 18,
 access is allowed (true), otherwise, access is denied (false) */
//Ex4
let firstName;
let lastName;
let strAddress;
let strCity;
let strState;
let stringZipCode;
let intYourAge;
let strReferralSource;
let boolMayWeContactYou;
//Ex5
let strFirstName;
strFirstName = "Nina";
firstName = strFirstName;
lastName = "Pack";
console.log(firstName,  lastName);
boolMayWeContactYou = true;
boolPhoneNumberWeContactYou = false;
//Ex6
first_variable = 2025;
second_variable = "fashion TV";
//Ex7
//First variable: Boolean and a string
firstVariable = true + "! It's a sunny day today!";
console.log("Result of Boolean + String:", firstVariable);
console.log("Type of firstVariable:", typeof firstVariable);
secondVariable = 20 + false;
console.log("Result of Number + Boolean:", secondVariable);
console.log("Type of secondVariable:", typeof secondVariable);
//Ex8
/* Is the following string literal valid? If not, how would you fix it?

***********************************************************************
let someString = 'Who once said, "Only two things are infinite, 
the universe and human stupidity, and I'm not sure about the former."'
console.log(someString)
*********************************************************************** */

/* answer - The string literal is not valid in js.For the given example, backticks should be used to define the string, not single quotes as shown in the example. This will result in a SyntaxError. 
To fix the problem, replace the single quotes with backticks.*/

let someString = `Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."`;
console.log(someString);

//Ex9
// Create a variable that explicitly holds a null value
let nullVariable = null;

// Create a variable that is declared but not assigned a value, resulting in undefined:
let undefinedVariable;
//Display the values of both variables in the console:
console.log("Value of nullVariable:", nullVariable);
console.log("Value of undefinedVariable:", undefinedVariable);
//Ex10
console.log(typeof "Hello, classmate!"); // string
console.log(typeof 6); // number
console.log(typeof true); // Boolean
console.log(typeof { name: "Anna" }); // object
console.log(typeof [1, 2, 3]); // Arrays are also objects in JavaScript
console.log(typeof null); // Note: typeof null returns "object", which is a known quirk in JavaScript
console.log(typeof undefined); // undefined
//Ex11
let myfirstName = "Sofya";
let mylastName = "Sakhaeva";
let message1 = "welcome to the JavaScript class!"
alert("Hello, " + myfirstName + " " + mylastName + " "  + "," + message1);/*Concatenating strings
and variables directly */
//Ex12
const myname = "Sofya Sakhaeva";
alert(`You do exellent job, ${myname}!`);
//Ex13
let course = "JavaScript";
let message = "Welcome to the";
let notification = "class!";
let alertString = `${message} ${course} ${notification}`;/* Using template literals 
(backticks) for easy embedding */
alert(alertString);// Display the alert
//Ex1
const originalString = "Hello Sofya Sakhaeva! Welcome to the JavaScript class!";
const reworkedString = originalString.replace("Welcome", "\nWelcome");
alert(reworkedString);
//Ex15
const username = prompt("Please enter your name:");/* Replace the hard-coded value
with the username prompt */
console.log("Hello, " + username + "!");// Use the 'username' variable for output
//Ex16
const coursename = prompt("Please enter your course name:");/* Replace the hard-coded 
value with the coursename prompt*/
console.log("Hello, " + coursename + "!");// Use the 'coursename' variable for output
//Ex17
let x = 10; // Declares a variable named x and assigns it the value 10
let y = 20; // Declares a variable named y and assigns it the value 20
let sum = x + y; // Calculates the sum of x and y and stores it in a new variable called sum
console.log(sum); // Displays the value of sum in the console
//Ex18
let x1 = 20;
x1 += 20; // This is equivalent to x1 = x1 + 20;
console.log(x1); // Displays 40 in the console
//Ex19
let x2 = 20; // Declares a variable 'x2' and assigns it the value 20.
x2 *= 5;     // Multiplies the current value of 'x2' by 5 and assigns the result back to 'x2'.
console.log(x2); // Displays the final value of 'x2' in the console.
//Ex20
let x3 = 20 % 3; // Declares x3 and assigns the remainder of 20 divided by 3 (which is 2)
x3 /= 1;         // Divides x3 by 1 and assigns the result back to x (x remains 2)
console.log(x3); // Displays the value of x3 in the console
//Ex21
const num1 = 70;
const num2 = 45;
const text1 = "hello";
const text2 = "world";
const istrue = true;
const isfalse = false;
// Construct a complex boolean expression using comparison and logical operators
const result = (num1 > num2 && text1 == text2) || (istrue && !isfalse);
// Display the result in the console
console.log("The evaluated expression is:", result);
//Ex22
// Define some variables for comparison
const num3 = 10;
const num4 = 500;
const str1 = "hello";
const str2 = "world";
// Create an expression that evaluates to false using comparison and logical operators
const result1 = (num1 < num2) && (str1 === str2);
// Display the result in the console
console.log("The evaluation of the expression is:", result1);


