// Define an array to store activities
let listOfActivities = [];

// Get references to DOM elements
const input = document.getElementById("input");
const todolist = document.getElementById("todolist");
const button = document.getElementById("button");

// Assign event listener to button click
button.addEventListener("click", handleClick);

// Function to handle button click
function handleClick() {
  // Push the input value to the array
  listOfActivities.push(input.value.trim());
  
  // Clear input field
  input.value = "";
  
  // Update the displayed list
  showList();
}

// Function to display the list
function showList() {
  // Clear the current list
  todolist.innerHTML = "";
  
  // Loop through the array and create list items
  listOfActivities.forEach((activity, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = activity;
    
    // Create "Edit" link
    const editLink = document.createElement("a");
    editLink.textContent = "Edit";
    editLink.href = "#";
    editLink.onclick = () => editItem(index);
    
    // Create "Delete" link
    const deleteLink = document.createElement("a");
    deleteLink.textContent = " ❌";
    deleteLink.href = "#";
    deleteLink.onclick = () => deleteItem(index);
    
    // Append links to list item
    listItem.appendChild(editLink);
    listItem.appendChild(deleteLink);
    
    // Append list item to the list
    todolist.appendChild(listItem);
  });
}

// Function to delete an item
function deleteItem(index) {
  listOfActivities.splice(index, 1);
  showList();
}

// Function to edit an item
function editItem(index) {
  const newValue = prompt("Please insert your new value", listOfActivities[index]);
  if (newValue !== null) {
    listOfActivities[index] = newValue.trim();
    showList();
  }
}
