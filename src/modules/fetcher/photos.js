// import { getRandomItems } from "../randomizer";

let photosArray = [];
// const photosFetcher = () => {
//   const url = "https://jsonplaceholder.typicode.com/photos";

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data);
//       photosArray = data.filter((x) => x.albumId === 3);
//     })
//     .catch((error) => {
//       console.log(`error => ${error}`);
//     });

//   return photosArray;
// };

async function photosFetcher(id) {
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
}

export { photosArray, photosFetcher };
