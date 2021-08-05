import { albumFetcher } from "./modules/fetcher/albums.js";
import { photosArray, photosFetcher } from "./modules/fetcher/photos.js";
import { getRandomItems } from "./modules/randomizer.js";
albumFetcher();
const viewerTiles = document.querySelectorAll(".viewer-tile");

viewerTiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (tile.classList.contains("album-wrapper")) {
      const selectedId = tile.getAttribute("id");
      console.log("I was pressed -> " + tile.getAttribute("id"));

      const fetchRelPhotos = async () => {
        const relatedPhotos = await photosFetcher(selectedId);
        console.log(relatedPhotos);

        const newArray = getRandomItems(relatedPhotos, 6);

        newArray.forEach((item, index) => {
          const el = viewerTiles[index];
          el.innerHTML = `
          <img src=${item.url} class="album-photo" id=${item.id} title="${item.title}" />
          `;
          el.setAttribute("id", item.id);
          el.classList.remove("album-wrapper");
        });
      };
      fetchRelPhotos();
    }
  });
});
