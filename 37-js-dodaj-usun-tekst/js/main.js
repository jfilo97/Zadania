const dodajButton = document.getElementById("dodaj");
const usunButton = document.getElementById("usun");
const tekst = document.getElementById("tekst");

dodajButton.addEventListener("click", function() {
  tekst.innerText = "Witaj u nas na stronie.";
});

usunButton.addEventListener("click", function() {
  tekst.innerText = "";
});