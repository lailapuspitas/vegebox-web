const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5, // Ubah threshold sesuai kebutuhan Anda
});

elementsToAnimate.forEach((element) => {
  observer.observe(element);
});

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}

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
