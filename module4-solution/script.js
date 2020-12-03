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

var sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(sum);

var company = new Object();
company.name = "Amazon";
company["stock price"] = 1456;
console.log(company);

function multiply(x, y) {
    return x*y;
}

console.log(multiply(7,2));