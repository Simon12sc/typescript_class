//typescript is used to reduce bugs, save compile time / run-time erros which enhance developer experience.
//type script defines the type of data and every features of javascript are valid in typescript.
// it provides more features to.

//advantage of programming language.

// 1. on fly error and type checking

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// add(2, "simon");
//provide error because 2nd parameter is required number
//provide real time coding error so we are calling it on fly error.
add(2, 3); // this is correct

//2. code readabiliy and quality
// in function add() we can clearly see that the it recieves num1 and num2 as number parameter and return number.
// typescript makes it easier to read code and understand it.

function createLog(message: string) {
  //
  //
  return "data:" + message;
}

// createLog(undefined); // Argument of type undefined is not assignable to parameter of type "string"
createLog("started..");

//3. typescript support both static and dynamic type programming laguage.

// types of programming language

// a. static type programming language  need to define the data type at initialization of variable.
// eg : c, c++
// b. dynamic type programming language don't need to define the data type at initialization of variable.
// eg : javascript , python
// c. gradually type programming language supports both static and dynamic type programming language.
// eg: typescript, dart

function ignore(a: number, b: number) {
  return a + b;
}

// add(1, "simon"); show error
// after the use of //@ts-ignore

//@ts-ignore
add(1, "simon"); //no error produced

// we can ignore bottom line when we use //@ts-ignore

// 4. we can compile typescript to any version of javascript.
// --> if any user use old browser where javascript engine is not updated. old version browser won't support new code so, we can say that old browser will not gonna run your new updated code. we also call transpile if we convert ts file to js file.
