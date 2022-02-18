const list = document.querySelector("#list");

const addItemToList = (item) => {
  const div = document.createElement("div");
  div.setAttribute("id", item.id);
  div.setAttribute("class", "item");
  const label = document.createElement("label");
  div.appendChild(label);
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  if (item.isCompleted) {
    label.classList.add("completed");
    input.checked = true;
  }
  label.appendChild(input);
  const i = document.createElement("i");
  i.setAttribute("class", "far fa-trash-alt text-danger");
  div.appendChild(i);
  const span = document.createElement("span");
  span.textContent = item.title;
  label.appendChild(span);
  list.append(div);
};
