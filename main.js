const upload = document.querySelector(".icon-upload");
const bard = document.querySelector(".bard");
const input = document.querySelector("input");

bard.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

    case "icon-angry2 icon":
      eo.target.classList.add("dn");
      const amr = `<span class="icon-heart"></span>`;

      eo.target.parentElement.parentElement
        .getElementsByClassName("test")[0]
        .classList.add("finish");

      eo.target.parentElement.innerHTML += amr;
      break;
    case "icon-heart":
      eo.target.classList.add("dn");
      eo.target.parentElement.parentElement
        .getElementsByClassName("test")[0]
        .classList.remove("finish");
      const amor = `  <span class="icon-angry2 icon"></span>`;
      eo.target.parentElement.innerHTML += amor;
      break;
    case "icon-star icon":
      eo.target.classList.add("orange");
      bard.prepend(eo.target.parentElement);
      break;

    case "icon-star icon orange":
      eo.target.classList.remove("orange");

      break;

    default:
      break;
  }
});

upload.addEventListener("click", (eo) => {
  eo.preventDefault();
  if ((eo.target.className = "icon-upload")) {
    const conan = `<div class="task">
      <span class="icon-star icon"></span>
      <p class="test" lang="ar">${input.value}</p>
      <div>
        <span class="icon-trash icon"></span>
        <span class="icon-angry2 icon"></span>
      </div>
    </div>`;
    bard.innerHTML += conan;
    input.value = "";
  }
});
