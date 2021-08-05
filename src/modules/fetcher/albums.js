import { getRandomItems } from "../randomizer/randomizer.js";

const albumFetcher = () => {
  const url = "https://jsonplaceholder.typicode.com/albums";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const randomAlbums = getRandomItems(data, 6);

      const albumCards = document.querySelectorAll(".album-title");

      randomAlbums.forEach((item, index) => {
        albumCards[index].textContent = item.title;
        albumCards[index].closest(".viewer-tile").setAttribute("id", item.id);
      });
    })
    .catch((error) => {
      console.log(`error => ${error}`);
    });
};

export { albumFetcher };
