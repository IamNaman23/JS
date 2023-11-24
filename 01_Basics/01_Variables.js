//  A const is a constant that cannot be changed once declared
const accountId=144553

// A let is a variable with scoping
let accountEmail="naman@yopmail.com"

/*
A var is a variable without block scope and functional scope.
NEVER USE IT
*/
var accountPasscode="12345"

/*
A variable can also be declared without any keyword.
DO NOT FOLLOW THIS
*/
accountCity="Moradabad"

/*
When a variable is declared but not assigned a value,
by default it has undefined value
*/

let accountState;

// Trying to change above variables and constants
// accountId=2 not allowed

accountEmail="naag@naag.com"    // got changed
accountPasscode="09876"         // got changed
accountCity="Ahmedabad"         // got changed

//console.log(accountId);

console.table([accountId,accountEmail,accountPasscode,accountCity,accountState])