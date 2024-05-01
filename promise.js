// Source: Procoderr Prmise video
// For this JS created a promise.html file
// Adding the learned points code later to this file

const resolveBtn = document.querySelector("#resolve-button");
const rejectBtn = document.querySelector("#reject-button");

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise is resolved");
  });
  rejectBtn.addEventListener("click", () => {
    reject("Promise is rejected");
  });
});

p.then((data) => {
  console.log("promise Data is",data);
}).catch(()=>{
  console.log("Promise Rejected")
})
