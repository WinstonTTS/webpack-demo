function sayHello() {
  const header = document.querySelector("#greeting");
  const hello = ("<h1> hello world </h1>");

  header.innerHTML = hello;
}

module.exports = {
  sayHello: sayHello,
};
