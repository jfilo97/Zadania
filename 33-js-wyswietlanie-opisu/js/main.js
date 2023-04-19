let paragrafOpis = document.getElementById("opis");

let buttonOpis = document.querySelector("button");
console.log(buttonOpis);

buttonOpis.onclick = function() {
    paragrafOpis.innerText = "Opis produktu: Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
}
