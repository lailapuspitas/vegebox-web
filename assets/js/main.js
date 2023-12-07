const animatedElements = document.querySelectorAll(".animated");
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function handleScroll() {
  animatedElements.forEach((element) => {
    if (isInView(element)) {
      element.classList.add("in-view");
    }
  });
}
window.addEventListener("scroll", handleScroll);
handleScroll();

function toggleImage() {
  var imageElement = document.getElementById("toggleImage");

  if (imageElement.classList.contains("active")) {
    imageElement.src = "assets/img/x.png";

    imageElement.classList.remove("active");
    imageElement.classList.add("close");
  } else {
    imageElement.src = "assets/img/menu.png";

    imageElement.classList.remove("close");
    imageElement.classList.add("active");
  }
}
