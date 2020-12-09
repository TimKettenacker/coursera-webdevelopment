// DOM manipulation
document.addEventListener("DOMContentLoaded",
function (event) {



function sayHello (event) {
console.log(event);

    this.textContent = "Said it!";
    var name =
     document.getElementById("name").value;
     var message = "<h2>Hello " + name + "!</h2>";

    document
      .getElementById("content")
      .innerHTML = message;
  
    if (name === "student") {
      var title = 
        document
          .querySelector("#title")
          .textContent;
      title += " & Lovin' it!";
      document
          .querySelector("#title")
          .textContent = title;
    }
  }

  //unobstrusive event binding

  document.querySelector("button")
  .addEventListener("click", sayHello);

});