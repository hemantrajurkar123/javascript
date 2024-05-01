/* async function test() {
  return "Hello, World";
}
test().then((result) => {
  console.log(result);
}); */

/* async function hello() {
  return "hello";
}
hello().then((result) => {
  console.log(result);
}); */
/* console.log(hello());
 */

async function test() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?&_limit=12"
    );
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
  }
}
test().then((res) => {
  /*   console.log(res);
   */
  res.forEach((element) => {
    console.log(element);
    const images = document.createElement("img");
    images.classList.add("result-images");
    images.src = element.url;
    document.querySelector("div").appendChild(images);
  });
});
