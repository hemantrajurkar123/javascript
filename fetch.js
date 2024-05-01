//From Yahoo Baba

/* fetch("readme.txt")
  .then(function (response) {
    console.log(response);
    return response.text();
  })
  .then(function (result) {
    console.log(result);
  }); */

/* fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    for (var x in data) {
      document.write(`${data[x].name}<br>`);
    }
  }); */

async function logUserData() {
  let res = fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

logUserData();
