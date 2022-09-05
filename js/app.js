window.addEventListener("load", function () {
  baguetteBox.run(".gallery");

  const myList = document.querySelectorAll(".gallery a");
  const search = document.getElementById("search");

  search.addEventListener("input", function (event) {
    const userString = event.target.value;

    myList.forEach((imageWrapper, i) => {
      if (imageWrapper.dataset.caption.toUpperCase().search(userString.toUpperCase()) < 0) {
        imageWrapper.style.display = "none";
      } else {
        imageWrapper.style.display = "block";
      }
    });
  });
});
