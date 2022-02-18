//   axios.get('/api/items')
//   .then(response => response.data)
//   .then(data => console.log(data))

axios.get("/api/items").then((response) => {
  const items = response.data;
  items.forEach((item) => addItemToList(item));
});

const input = document.querySelector("input");

input.addEventListener("keypress", (e) => {
  if (input.value && e.key === "Enter") {
    e.preventDefault();
    axios
      .post("/api/items", { title: e.target.value })
      .then((response) => {
        const item = response.data;
        addItemToList(item);
        input.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

list.addEventListener("click", (e) => {
  if (e.target.matches("input[type='checkbox']")) {
    const label = e.target.parentNode;
    const id = label.parentNode.id;
    const completed = label.classList.contains("completed");
    axios.put(`/api/items/${id}`, { isCompleted: !completed });
  }
});

list.addEventListener("click", (e) => {
  if (e.target.matches("i")) {
    const item = e.target.parentNode;
    const id = item.id;
    axios
      .delete(`/api/items/${id}`)
      .then(() => {
        item.remove();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
});
