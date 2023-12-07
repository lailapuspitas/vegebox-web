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

  // Periksa apakah kelas .active ada pada elemen gambar
  if (imageElement.classList.contains("active")) {
    // Ganti atribut src dengan gambar dari kelas .close
    imageElement.src = "assets/img/x.png";
    // Hapus kelas .active dan tambahkan kelas .close pada elemen gambar
    imageElement.classList.remove("active");
    imageElement.classList.add("close");
  } else {
    // Jika kelas .active tidak ada, kembalikan ke gambar dari kelas .active
    imageElement.src = "assets/img/menu.png";
    // Hapus kelas .close dan tambahkan kelas .active pada elemen gambar
    imageElement.classList.remove("close");
    imageElement.classList.add("active");
  }
}
