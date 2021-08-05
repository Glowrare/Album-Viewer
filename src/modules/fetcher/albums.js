import { getRandomItems } from "../randomizer.js";

const albumFetcher = () => {
  const url = "https://jsonplaceholder.typicode.com/albums";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)

      const newArray = getRandomItems(data, 6);
      // console.log(newArray);

      const albumCards = document.querySelectorAll(".album-title");

      newArray.forEach((item, index) => {
        albumCards[index].textContent = item.title;
        albumCards[index].closest(".viewer-tile").setAttribute("id", item.id);
      });
    })
    .catch((error) => {
      console.log(`error => ${error}`);
    });
};

export { albumFetcher };
