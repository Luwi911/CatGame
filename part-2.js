/* Assignment 03 Part 2: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const taskListID = "task-list";
const exampleTaskContents = "This is an example task";

// DOM Elements
let taskList = document.getElementById("task-list");

//
// Functions
//
// This function adds a single, hardcoded task to the list of tasks
// I added this to give you something to start with
// When you submit your assignment, you shouldn't include this function
// (I expect tasks to only be added when you click the "add task" button)
function create_example_task(){
  // Create example list item element
  const newTask = document.createElement("li");

  // Set the inner HTML of the new task
  newTask.innerHTML = `
    <div class="task" id="0">
      <span class="description"></span>
      <span class="status-indicator">Incomplete</span>
      <button class="toggle-btn">Toggle</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  // Set text content of the task
  newTask.querySelector(".description").textContent = exampleTaskContents;

  // Append the new task to the task list
  taskList.appendChild(newTask);
}

//
// Inits & Event Listeners
//
create_example_task();