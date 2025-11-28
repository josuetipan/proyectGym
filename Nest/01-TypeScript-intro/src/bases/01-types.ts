export let name: string = "Josue";
export const age: number = 30;
export const isValid: boolean = true;

name = "Another Name"; // This will cause a TypeScript error because 'name' is a constant

export const templateString = `My name is ${name} and I am ${age} years old. Valid: ${isValid}`;

console.log(templateString);
