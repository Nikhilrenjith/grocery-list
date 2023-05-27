//adding items in list
function addItem() {
  var input = document.getElementById("item");
  var item = input.value;
  if (item === "") {
    return;
  }

  var list = document.getElementById("list");
  var listItem = document.createElement("li");

  var itemText = document.createElement("span");
  itemText.innerHTML = item;
  listItem.appendChild(itemText);
  //editing item names
  var editButton = document.createElement("button");
  editButton.innerHTML = "<i class='fas fa-edit'></i>";
  editButton.classList.add("edit");
  editButton.addEventListener("click", function () {
    var newText = prompt("Enter new item text:", itemText.innerHTML);
    if (newText !== null) {
      itemText.innerHTML = newText;
    }
  });
  listItem.appendChild(editButton);
  //deleting items from list
  var removeButton = document.createElement("button");
  removeButton.innerHTML = "<i class='fas fa-trash-alt'></i>";
  removeButton.classList.add("remove");
  removeButton.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.appendChild(removeButton);

  list.insertBefore(listItem, list.firstChild);

  input.value = "";
}

//clearing all items
function clearItems() {
  var list = document.getElementById("list");
  list.innerHTML = "";
}
