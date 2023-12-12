// primitive types

//number type
let num: number;
//string
let str: string;
//boolean
let bool: boolean;

//end of primitive types

//array of number
let arr: number[];

//array of string
let arr1: string[];

//array--> number or string with union
let arr2: (number | string)[];

//tuples
// fixed data types and should be in order
type tup = [number, string, number];
let tup1: tup = [12, "simon", 12]; //correct
// let tup2:tup=["simon",12,12] //wrong because first value of array should be number and then string then number

// "simon" is a literal type
let gender: number | string | "simon";

let a: any;
let b: unknown;

a.ok = "simon";
a[0] = 33;

// b.ok="d" //not available
// b[23]=33 //not available

//narrowing
b = 23; //unkonown
if (typeof b === "string") {
  b; //string
}

//function returning number and accepting a,b params as number
function findArea(l: number, b: number): number {
  return l * b;
}

// function returning string and accepting name as string, age as number
function greet(name: string, age?: number): string {
  return "hello " + name;
}

// never types is used in throwing error
function throwError(): never {
  throw Error("bye");
}

// custom types
type gender = "male" | "female";
type num1OrStr = number | string;
type area = `${number}x${number}`; // we have to provide 3x3, 4x5 as value or argument for area type

//type of object
type employee = {
  name: string;
  department: string;
  age?: number; //optional
  greet: (name: string) => string; //  method call signatures defining function
  area: area;
};

let emp1: employee = {
  name: "simon",
  department: "it",
  area: "3x3",
  greet: (name: string) => {
    return "hello " + name + "it's me simon";
  },
};
//using intersection--> all property of employee type is required as well as new type workTime is required.
type combineNewProperty = employee & { workTime: number };
let emp2: combineNewProperty = {
  name: "simon",
  department: "it",
  area: "3x3",
  greet: (name: string) => {
    return "hello " + name + "it's me simon";
  },
  workTime: 12,
};

//interface
interface greet {
  name: string;
  fav: string;
  age: number;
}

const greets: greet = {
  name: "simon",
  age: 23,
  fav: "anime",
};

interface simon extends greet {
  food: "fish" | "grass";
}

let dataa: simon = {
  name: "simon",
  fav: "sdfd",
  age: 23,
  food: "fish",
};
