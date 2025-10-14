export function add(a: number, b: number): number      { return a + b; }
export function subtract(a: number, b: number): number { return a - b; }
export function multiply(a: number, b: number): number { return a * b; }
export function divide(a: number, b: number): number   { return a / b; }
const Math = {
  add,
  subtract,
  multiply,
  divide,
};
export default Math;
//Only one default export per module
//Consumers can name it however they like when : import MyMath from "./math"...