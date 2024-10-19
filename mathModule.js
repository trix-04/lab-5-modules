export function add(a, b) { 
    return a + b;
 }

export function subtract(a, b) { 
    return a - b;
}

export default function multiply (a,b){
    return a * b;
}

import { toUpperCase } from "./stringModule.js";

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log("After adding two numbers together and then converting the result to upper case yields " + toUpperCase(result.toString()));
}