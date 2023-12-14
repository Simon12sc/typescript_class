"use strict";
var LogType;
(function (LogType) {
    LogType[LogType["ERROR"] = 0] = "ERROR";
    LogType[LogType["INFO"] = 1] = "INFO";
    LogType[LogType["WARNING"] = 2] = "WARNING";
})(LogType || (LogType = {}));
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["users"] = "users";
})(Roles || (Roles = {}));
class MatchScore {
    getscr() {
        return MatchScore.score;
    }
    increase() {
        MatchScore.score++;
    }
}
MatchScore.score = 0;
let match1 = new MatchScore();
match1.increase();
console.log(match1.getscr());
match1.increase();
let match2 = new MatchScore();
console.log(match1.getscr());
function swap(a, b) {
    return [b, a];
}
swap(1, 2);
swap("1", "2");
class Box {
    constructor(data) {
        console.log(data);
    }
}
const newBox = new Box(1);
let info = {
    12: 12,
    122: 21,
};
let info1 = {
    simon: 12,
    age: 21,
};
