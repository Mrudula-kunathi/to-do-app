var taskArray = [];
var userInput = document.getElementById("input");
var taskListElement = document.getElementById("todolist");

document.getElementById("button").onclick = click;

function click() {
  taskArray.push(userInput.value);
  console.log(taskArray);
  userInput.value = "";
  displayLi();
}

function displayLi() {
  taskListElement.innerHTML = "";
  taskArray.forEach(function (task, index) {
    taskListElement.innerHTML +=
      "<li>" +
      task +
      "<a onclick='modifyItem(" +
      index +
      ")'>Edit</a>" +
      "<a onclick='removeItem(" +
      index +
      ")'>&times | </a></li>";
  });
}

function removeItem(index) {
  taskArray.splice(index, 1);
  displayLi();
}

function modifyItem(index) {
  var newTaskValue = prompt("new value");
  taskArray.splice(index, 1, newTaskValue);
  displayLi();
}
