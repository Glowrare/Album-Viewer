import { getRandomItems } from "../randomizer/randomizer.js";

const photosFetcher = async (id) => {
  try {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const res = await fetch(url);
    const data = await res.json();
    const relatedPhotos = data.filter((x) => x.albumId == id);
    return relatedPhotos;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const dispalyRandomRelPhotos = async (selectedId) => {
  const relatedPhotos = await photosFetcher(selectedId);

  const randomRelPhotos = getRandomItems(relatedPhotos, 6);
  const viewBoxes = document.querySelectorAll(".viewer-tile");

  randomRelPhotos.forEach((item, index) => {
    const viewBox = viewBoxes[index];
    viewBox.innerHTML = `
    <img src=${item.url} class="album-photo" id=${item.id} title="${item.title}" />
    `;
    viewBox.setAttribute("id", item.id);
    viewBox.classList.remove("album-wrapper");
  });
};

export { dispalyRandomRelPhotos };
