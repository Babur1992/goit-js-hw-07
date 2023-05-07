import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
          <li class="gallery__item">
            <a
              class="gallery__link"
              href="${original}"
            >
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
          </li>
        `;
    })
    .join("");
}

let lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
