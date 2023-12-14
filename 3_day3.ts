// type,interface, enums are written on pascal case

import { title } from "process";

enum LogType {
  ERROR, // ERROR ---> DEFAULT VALUE = 0
  INFO, // INFO ---> DEFAULT VALUE = 1
  WARNING, // WARNING ---> DEFAULT VALUE = 2
}

// console.log(LogType.ERROR); // 0
// console.log(LogType.INFO); // 1

enum Roles {
  admin = "admin",
  users = "users",
}

// Roles.admin will consist admin

class MatchScore {
  static score = 0;
  //   #getScore() {}
  public getscr() {
    return MatchScore.score;
  }
  public increase() {
    MatchScore.score++;
  }
}

let match1 = new MatchScore();
match1.increase();
console.log(match1.getscr()); //1
match1.increase();
// we increase from match1 instance and value will be same for other instance

let match2 = new MatchScore();
console.log(match1.getscr()); //2

// match1.getScore()// not available because it's private

// static _-->  it will share memory location and naya instance banauda ni tei memory location bata use garxa. jas karan euta matrai value change garda arko instance le use garda ni tyo value change vaako hunxa

//generics

// function swap(a: number, b: number) {
//   return [b, a];
// }

// function swap(a: string, b: string) {
//   return [b, a];
// }

function swap<T>(a: T, b: T): T[] {
  return [b, a];
}

swap<number>(1, 2);
swap<string>("1", "2");

//class generics
class Box<T> {
  constructor(data: T) {
    console.log(data);
  }
}

const newBox = new Box<number>(1);

// utility types --> used to modify, merge, select, define,... types so that it can be reused.

// most used utility types
// record // define key and types
// pick // takeout reuquired key
// omit // remove not reuired key
// partial //make optional

// --------------------Record----------------------------------
let info: Record<number, number> = {
  12: 12,
  122: 21,
};

let info1: Record<string, number> = {
  simon: 12,
  age: 21,
};

interface Todo {
  title: string;
  description: string;
}

// --------------------pick------------------------------------
type TodoSelect = Pick<Todo, "title">;
const todo2: TodoSelect = {
  title: "simon",
};
// --------------------Omit----------------------------------
type TodoRemove = Omit<Todo, "description" | "title">;
const todo3: TodoRemove = {}; // no error because we removed both key title and desrciption frmo Todo type to make new TodoRemove type alias

// --------------------Partial----------------------------------

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  //in fields to update we can make optional to send data
  // if we want we can send title or description or both or we can send nothing too because it's partial
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: "simon",
  description: "a mental boy",
};

updateTodo(todo1, {}); // we can send nothing too
updateTodo(todo1, { title: "hurry" }); //we can send only title
updateTodo(todo1, { description: "a physco boy" }); //we can send only decription
