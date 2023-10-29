// const Store = ["*"];
// display = document.getElementsByClassName("display")[0];
// display.value = " ";
function calculator(input) {
  // let display = document.getElementsByClassName("display")[0];
  // if (display.value == "Enter Text Here") {
  //   // display.value = input;
  //   // display.innerHTML = input;
  //   document.getElementsByClassName("display")[0].innerHTML = input;
  // } else {
  //   // display.value += input;
  //   document.getElementsByClassName("display")[0].innerHTML =
  //     display.value + input;
  // }\
  let display = document.getElementsByClassName("display")[0];
  if (display.innerHTML === "Enter Text Here") {
    display.innerHTML = input;
    document.getElementsByClassName("display")[0].innerHTML = display.innerHTML;
  } else {
    display.innerHTML += input;
    document.getElementsByClassName("display")[0].innerHTML = display.innerHTML;
  }
  // let Store = ["*"];
  // if (input === "AC" || input === "DE") {
  //   document.getElementsByClassName("display")[0].innerHTML = "0";
  //   Store = [];
  // } else {
  //   if (
  //     ((input == "+" || input == "-" || input == "*" || input == "/") &&
  //       (Store[Store.length - 1] == "+" ||
  //         Store[Store.length - 1] == "-" ||
  //         Store[Store.length - 1] == "*" ||
  //         Store[Store.length - 1] == "/")) == false
  //   ) {
  //     document.getElementsByClassName("display")[0].innerHTML = input;
  //     Store.push(input);
  //   } else {
  //     Store = [];
  //     window.alert("Invalid Operation");
  //     // document.getElementsByClassName("display")[0].innerHTML =
  //     // ("invalid operation");
  //   }
  // }
}
function deleteone() {
  display = document.getElementsByClassName("display")[0];
  let newdisplay = display.value;
  document.getElementsByClassName("display")[0].innerHTML = newdisplay.value;
}

function deleteall() {
  display = document.getElementsByClassName("display")[0];
  display.innerHTML = "";
  document.getElementsByClassName("display")[0].innerHTML = display.innerHTML;
}

function result() {
  display = document.getElementsByClassName("display")[0];
  try {
    document.getElementsByClassName("display")[0].innerHTML = eval(
      display.innerHTML
    );
  } catch (error) {
    document.getElementsByClassName("display")[0].innerHTML = "Error";
  }
}
