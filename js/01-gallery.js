import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

// html-structure

const galleryEl = galleryItems
  .map(({ description, original, preview }) => {
    return `<div class="gallery__item">
            <a href="${original}" class="gallery__link">
                <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
            </a>
        </div>`;
  })
  .join(" ");

gallery.insertAdjacentHTML("beforeend", galleryEl);

console.log(galleryEl);

// listener

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const {
    nodeName,
    dataset: { source },
  } = event.target;

  if (nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`);

  instance.show();
});
