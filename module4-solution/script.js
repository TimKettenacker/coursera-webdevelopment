var x;
console.log(x);

if (x == undefined) {
    console.log("x is undefined")
}

var string = "Hello";
string += "World";
console.log(string);

var x = 4, y = 4;
if (x == y) {
    console.log("s gleiche")
}

x = "4";
if (x == y) {
    console.log("s gleiche")
}

//strict equality
x = "4";
if (x === y) {
    console.log("s gleiche")
} else {
    console.log("jetzt nimmer")
}