// Obliczanie średniej i ustawianie kolorów
function obliczSrednie() {
  let uczniowie = document.querySelectorAll("#pracownicy > div[id^='uczen']");

  uczniowie.forEach(function (uczen) {
    let oceny = uczen.querySelectorAll("input[type='number']");
    let sredniaElement = uczen.querySelector(".srednia");
    let suma = 0;
    let iloscOcen = 0;
    let maZajeciaDodatkowe = uczen.querySelectorAll(".zajecia-dodatkowe")[0].value.split(",").filter((element) => {
      return element !== ""
    });
    console.log(uczen.querySelectorAll(".zajecia-dodatkowe"))
    oceny.forEach(function (ocena) {
      let wartosc = parseFloat(ocena.value);

      maZajeciaDodatkowe.forEach((element) => {
        if (ocena.className === element && wartosc < 6) {
         suma += 0.5;
        }
      })

      suma += wartosc;
      iloscOcen++;

    });

    let srednia = suma / iloscOcen;
    sredniaElement.textContent = srednia.toFixed(2);

    if (srednia >= 4.75) {
      uczen.style.backgroundColor = "lightgreen";
    } else {
      uczen.style.backgroundColor = "";
    }

    let maNiedostateczna = Array.from(oceny).some(function (ocena) {
      let wartosc = parseFloat(ocena.value);
      return wartosc < 2;
    });

    if (maNiedostateczna) {
      uczen.style.backgroundColor = "red";
    }
  });
}
let btn = document.querySelector("#oblicz")


btn.addEventListener('click', obliczSrednie);


const obliczButton = document.getElementById('oblicz');
