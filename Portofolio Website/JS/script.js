var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 5000);

// Form

const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");

const button = document.getElementById("tombol-kirim");

button.addEventListener("click", function () {
  let nama = inputName.value;
  let email = inputEmail.value;

  if (!nama) {
    const nameError = document.getElementById("name-error");
    nameError.classList.add("error-message");

    nameError.innerText = "Must be Filled!";
  }

  if (!email) {
    const emailError = document.getElementById("email-error");
    emailError.classList.add("error-message");

    emailError.innerText = "Must be Filled!";
  }
});
