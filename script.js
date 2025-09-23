let info = document.querySelector(".icon-info h3");

const hoverTexts = {
  instagram: "View My Instagram Profile",
  github: "View Projects",
  linkedin: "View Linkedin Profile",
};

Object.keys(hoverTexts).forEach(id => {
  let element = document.querySelector(`#${id}`);
  element.addEventListener("mouseenter", () => {
    info.textContent = hoverTexts[id];
  });
  element.addEventListener("mouseleave", () => {
    info.textContent = "View Details";
  });
});
