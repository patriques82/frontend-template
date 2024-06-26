// Asynchronous function to create user in server
async function createUser(name, age) {
  // Make server POST call to server (we will learn more about this later)
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      age,
    }),
  });
  const createdUser = await response.json();
  return createdUser;
}

async function getAllUsers() {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();
  return users;
}

function appendToList(ul, user) {
  const a = document.createElement("a");
  a.setAttribute("href", `profile.html?id=${user.ID}`);
  const text = document.createTextNode(`${user.ID}: ${user.Name}, ${user.Age}`);
  a.appendChild(text);
  const li = document.createElement("li");
  li.appendChild(a);
  ul.appendChild(li);
}

// Retrieve form from DOM
const form = document.querySelector("form");

// Add eventListener to form so that when user press "Save User"
// button we call the server with form data to save the user
form.addEventListener("submit", async function (event) {
  event.preventDefault(); // stop page from reloading!
  const name = form.querySelector("#name").value;
  const age = form.querySelector("#age").value;
  const createdUser = await createUser(name, Number(age)); // user with id
  const ul = document.querySelector("#users");
  appendToList(ul, createdUser);
});

// 2 TODO: when loading page we should retrieve all existing users
// and display them in list
async function populateListWithUsers() {
  const users = await getAllUsers();
  console.log(users);
  const ul = document.querySelector("#users");
  users.forEach((user) => appendToList(ul, user));
}
populateListWithUsers();
