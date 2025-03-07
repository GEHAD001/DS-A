import StackArray from "../[01] Implementations/StackArray";

interface BracketsMapperType {
  [key: string]: string;
}

const bracketsMap: BracketsMapperType = {
  ")": "(",
  "}": "{",
  "]": "[",
};

export function isValidEquation(equation: string) {
  // Track bracket pairs using stack
  const stack = new StackArray<string>();

  // Use Sets for O(1) lookup of brackets
  const openBrackets = new Set(Object.values(bracketsMap));
  const closeBrackets = new Set(Object.keys(bracketsMap));

  for (const symbol of equation) {
    // Push opening brackets to stack
    if (openBrackets.has(symbol)) {
      stack.push(symbol);
    }
    // Process closing brackets
    else if (closeBrackets.has(symbol)) {
      // Validate bracket pairing: stack must not be empty and brackets must match
      if (!stack.length || stack.pop() !== bracketsMap[symbol]) {
        throw new Error(`Mismatched closing bracket: ${symbol}`);
      }
    }
  }

  return stack.length === 0;
}

//! Deprecated Method
// function parseEquation(eq: string): boolean | Error {
//   let stack: string[] = [];

//   for (let i = 0; i < eq.length; i++) {
//     if (["(", "[", "{"].includes(eq[i])) {
//       stack.push(eq[i]);
//       continue;
//     }

//     if ([")", "]", "}"].includes(eq[i])) {
//       if (stack.length === 0) throw new Error(`${eq[i]} in Empty Stack`);

//       if (eq[i] === ")" && stack.at(-1) === "(") {
//         stack.pop();
//         continue;
//       }

//       if (eq[i] === "]" && stack.at(-1) === "[") {
//         stack.pop();
//         continue;
//       }

//       if (eq[i] === "}" && stack.at(-1) === "{") {
//         stack.pop();
//         continue;
//       }

//       throw new Error(`${eq[i]} are not closed with ${stack.at(-1)}`);
//     }
//   }

//   return true;
// }

// export { parseEquation };
