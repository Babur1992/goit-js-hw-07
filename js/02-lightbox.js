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
                // data-source="${original}"
                alt="${description}"/>
            </a>
          </li>
        `;
    })
    .join("");
}

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const { nodeName, dataset, href } = event.target;
  if (nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${dataset.source}" width="${dataset.width}" height="${dataset.height}">
  `);
  instance.show();
  // Додаємо обробник подій на клавішу Escape
  document.addEventListener("keydown", onEscKeyPress);
  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
      // Видаляємо обробник подій, коли модальне вікно закрито
      document.removeEventListener("keydown", onEscKeyPress);
    }
  }
}
let lightbox = new SimpleLightbox(".gallery a", {
  /* options */
},250);
