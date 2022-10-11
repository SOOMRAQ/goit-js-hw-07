import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// html-structure

const galleryEl = galleryItems
  .map(({ description, original, preview }) => {
    return `<a href="${original}" class="gallery__link">
                <img class="gallery__image" src="${preview}" alt="${description}">
            </a>`;
  })
  .join(" ");

gallery.insertAdjacentHTML("beforeend", galleryEl);

console.log(galleryEl);

// action

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.9,
  navText: ["⇜", "⇝"],
  closeText: "✗",
});
