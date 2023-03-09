inputField = document.querySelector(".input");
list = document.querySelector(".list");
addBtn = document.querySelector(".add");

function toDo(e) {
  e.preventDefault();

  const newLi = document.createElement("li");
  const writing = inputField.value;
  newLi.appendChild(document.createTextNode(writing));
  newLi.classList.add("li");
  list.appendChild(newLi);
  inputField.value = "";

  function done() {
    newLi.classList.add("done");
    // newLi.classlist.toggle("done");
  }
  newLi.addEventListener("click", done);

  const deleteBtn = document.createElement("button");
  list.appendChild(deleteBtn);
  deleteBtn.classList.add("deleteBtn");
  // Make a "X" button at the end of the todo.
  deleteBtn.appendChild(document.createTextNode("X"));
  deleteBtn.addEventListener("click", deleteTodo);

  function deleteTodo() {
    //Make sure that nothing is shown while deleting
    newLi.classList.add("delete");
    newLi.style.display = "none";
    deleteBtn.style.display = "none";
  }
}

function createTodo(e) {
  if (inputField.value.length > 0) {
    toDo(e);
  }
}

addBtn.addEventListener("click", createTodo);

//add todo while pressing enter
inputField.addEventListener("keypress", function (e) {
  const key = e.which;
  if (inputField.value.length > 0 && e.which === 13) {
    toDo(e);
  }
});
