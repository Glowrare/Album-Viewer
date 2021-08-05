import { albumFetcher } from "./modules/fetcher/albums.js";
import { dispalyRandomRelPhotos } from "./modules/fetcher/photos.js";

albumFetcher();

const viewerTiles = document.querySelectorAll(".viewer-tile");
let savedID = null;
viewerTiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (tile.classList.contains("album-wrapper")) {
      const selectedId = tile.getAttribute("id");
      savedID = selectedId;
      console.log(selectedId);
      dispalyRandomRelPhotos(selectedId);
    }
  });
});

// Refresh display - by album or related photos
document.getElementById("refresh-display").addEventListener("click", () => {
  if (viewerTiles[0].classList.contains("album-wrapper")) {
    albumFetcher();
  } else {
    dispalyRandomRelPhotos(savedID);
  }
});
