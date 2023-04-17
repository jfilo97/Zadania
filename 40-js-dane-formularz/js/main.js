let wyswietlBtn = document.getElementById("wyswietl-btn");

wyswietlBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let name = document.getElementById("imie").value;
    let surname = document.getElementById("nazwisko").value;
    let phone = document.getElementById("telefon").value;

    document.getElementById("name").textContent = "Imię: " + name;
    document.getElementById("surname").textContent = "Nazwisko: " + surname;
    document.getElementById("phone").textContent = "Telefon: " + phone;
});