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

var array = new Array();
array[0] = "Tim";
array[1] = 3;
console.log(array[0]);

var array1 = ["3", 3, 44]

for (var i = 0; i < array1.length; i++) {
    console.log(array1[i])
}

var myObj = {
    name: "Tim",
    course: "Coursera"
};

for (var prop in myObj){
    console.log(myObj[prop])
}

//IIFE
(function (name) {
    console.log("Hello " + name);
})("Tim");