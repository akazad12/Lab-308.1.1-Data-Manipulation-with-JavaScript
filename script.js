// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//Part 1
const divby5 = (n1%5==0) && (n2%5==0) && (n3%5==0) && (n4%5==0)
console.log (`Numbers are divisible by 5 : ${divby5}.`)
const firstBigLast = n1>n4
console.log (`First number is larger than the last: ${firstBigLast}.`)
const chain = ((n2-n1)*n3)/n4
console.log (`Remainder of the Chain: ${chain}.`)
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log (`Is under 25: ${isUnder25}.`)


// Part 2: Practical 
//How many gallons of fuel will you need for the entire trip?
total = 1500;
fbudget = 175;
fcost = 3;

//gallons for the entire trip:
//at 55mph
gallonsAt55 = total/30;
//at 60mph
gallonsAt60 = total/28;
//at 75mph
gallonsAt75 = total/23;
console.log( `Gallons of fuel needed at 55mph: ${gallonsAt55}\n`,
             `Gallons of fuel needed at 60mph: ${gallonsAt60}\n`,
             `Gallons of fuel needed at 75mph: ${gallonsAt75}\n`
)

//Will your budget be enough to cover the fuel expense?
budg55= (gallonsAt55*fcost)<=fbudget;
budg60= gallonsAt60*fcost<=fbudget;
budg75= gallonsAt75*fcost<=fbudget;



console.log(`budget to cover goin 55mph:${budg55}\n`,
    `budget to cover goin 60mph:${budg60}\n`,
    `budget to cover goin 75mph:${budg75}`)




