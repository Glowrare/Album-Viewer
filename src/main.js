import { getRandomItems } from "./modules/randomizer.js";

const url = "https://jsonplaceholder.typicode.com/albums";
// const url = "https://jsonplaceholder.typicode.com/photos"

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)

    const newArray = getRandomItems(data, 6);
    console.log(newArray);

    const albumCards = document.querySelectorAll(".album-title");

    newArray.forEach((item, index) => {
      albumCards[index].textContent = item.title;
    });
  })
  .catch((error) => {
    console.log(`error => ${error}`);
  });
