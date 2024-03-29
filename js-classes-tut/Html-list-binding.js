// ** HTML List Binding **

const myList = document.getElementById("myList");

class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = [];
  }

  // creates an <li>text<li> tag
  static createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  update() {
    // removes all existing <li> elements/tags

    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    // fill <ul> tags with <li>
    for (const text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
  }

  add(text) {
    this.textList.push(text);
    this.update();
  }

  remove(index) {
    this.textList.splice(index, 1);
    this.update();
  }
}

const list_binding = new ListBinding(myList);

const addBtn = document.getElementById("add-btn");

addBtn.onclick = () => {
  const listInput = document.getElementById("list-input");

  if (listInput.value == "") {
    addBtn.disabled;
  } else {
    list_binding.add(listInput.value);
    listInput.value = "";
  }
};
