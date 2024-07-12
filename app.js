var activitiesList = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");
document.getElementById("button").onclick = click;
function click() {
  activitiesList.push(input.value);
  console.log(activitiesList);
  input.value = "";
  displayLi();
  }
function displayLi() {

  todolist.innerHTML = " ";
    activitiesList.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='modifyItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='removeItem(" +
      i +
      ")'>&times | </a></li>";
  });
}
function removeItem(i) {
  activitiesList.splice(i, 1);
  displayLi();
}

function modifyItem(i) {
  var newValue = prompt("new value");
  activitiesList.splice(i, 1, newValue);
  displayLi();
}
