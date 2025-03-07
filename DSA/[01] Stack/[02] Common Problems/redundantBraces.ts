import { isValidEquation } from "./parseEquation";

const OPEN_BRACKETS = ["[", "(", "{"];
const OPERATORS = ["+", "-", "*", "/"];

// V1: Applied Technique => Create Simple version of problems to solve complex problems, solve only '(' then solved all type of brackets
function redundantBraces(equation: string) {
  if (!isValidEquation(equation))
    throw new Error("Given Equation are not valid");

  const stack = [];
  let hasOperator;

  for (const symbol of equation) {
    if (symbol !== ")") {
      stack.push(symbol);
      continue;
    }

    hasOperator = false;

    // Is has Operator between braces ?
    while (stack.at(-1) !== "(") hasOperator = OPERATORS.includes(stack.pop()!);

    if (!hasOperator) return true;
    stack.pop();
  }

  return false;
}

console.log(redundantBraces("((b)+(a+b))"));
console.log("end");

// function redundantBraces(equation: string) {
//   if (!isValidEquation(equation))
//     throw new Error("Given Equation are not valid");

//   const stack = [];
//   for (const symbol of equation) {
//     if (!OPEN_BRACKETS.includes(symbol)) {
//       stack.push(symbol);
//       continue;
//     }

//     // if we encounter a "[ , ( , {" symbol, we need to check if the previous symbol is an redundant bracket
//     if (stack.at(-1) === symbol) {
//       return true;
//     }

//     stack.push(symbol);
//   }

//   return false;
// }

// V1: Applied Technique => Create Simple version of problems to solve complex problems, solve only '(' then solved all type of brackets
// function redundantBraces(equation: string) {
//     if (!isValidEquation(equation))
//       throw new Error("Given Equation are not valid");

//     const stack = [];
//     for (const symbol of equation) {
//       if (symbol !== "(") {
//         stack.push(symbol);
//         continue;
//       }

//       // if we encounter a "(" symbol, we need to check if the previous symbol is an operator
//       if (stack.at(-1) === "(") {
//         return true;
//       }

//       stack.push("(");
//     }

//     return false;
//   }
