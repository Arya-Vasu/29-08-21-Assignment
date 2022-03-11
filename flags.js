const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.onload = function () {
  const country = JSON.parse(this.response);
  for (let i in country) {
    console.log(`\ncountry ${i} \n`);
    console.log("Flag : ", country[i].flags.svg);
  }
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();