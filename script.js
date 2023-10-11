const submitBtn = document.getElementById("submitBtn");
const cardRating = document.getElementById("card");
const submittedCard = document.getElementById("submittedCard");

let buttonList = document.querySelectorAll("button.circle");
let userRating = "";
buttonList.forEach(function (i) {
  i.addEventListener("click", function (e) {
    userRating = e.target.innerHTML;
    console.log(userRating);
  });
});

submitBtn.addEventListener("click", function () {
  cardRating.classList.toggle("is-hidden");
  submittedCard.classList.toggle("is-showing");
  selectedNumber = document.getElementById("selectedRating");
  selectedNumber.innerHTML = userRating;
});
