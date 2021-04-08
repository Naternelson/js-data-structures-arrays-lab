// Write your solution here!
const drivers = "Milo Otis Garfield".split(' ');

function destructivelyAppendDriver(name){
    drivers.push(name);
};

function destructivelyPrependDriver(name){
    drivers.unshift(name);
};

let destructivelyRemoveLastDriver = () => drivers.pop();
let destructivelyRemoveFirstDriver = () => drivers.shift();
let appendDriver = name => [...drivers, name];
let prependDriver = name => [name, ...drivers];
let removeLastDriver = name => drivers.slice(0, drivers.length - 1);
let removeFirstDriver = name => drivers.slice(1);