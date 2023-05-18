let btn = document.getElementById('oblicz');

const sumaWyplat = (event) =>{
    let pracownicy = document.querySelectorAll('[id^="pracownik"]');
    

    event.preventDefault();


    for (let index = 0; index < pracownicy.length; index++) {
        const czas = pracownicy[index].querySelector('.czas').value;
        
        const stawka = pracownicy[index].querySelector('.stawka').value;

        let bacgroundColor = pracownicy[index].querySelector('.pracownik');
    
        let wyplata = 0;

        let nadgodziny = 0;


        if(czas>=160){
            nadgodziny = czas - 160;
        }else if(czas<=100){
            bacgroundColor.classList.add('redbg');
        };
        

        wyplata = (stawka*czas) + (nadgodziny*stawka);

        pracownicy[index].querySelector('.wyplata').innerText = wyplata;
    };

};


const najlepszyPracownik = (event) =>{
    
    let pracownicy = document.querySelectorAll('[id^="pracownik"]');

    event.preventDefault();

    let listaPracownikow = [];

    for (let index = 0; index < pracownicy.length; index++){
        let lista = new Array(pracownicy[index].querySelector('.wyplata').innerText + ' ' + pracownicy[index].querySelector('.pracownik').innerText);

        listaPracownikow.push(lista);

    };
    
    listaPracownikow.sort();
    listaPracownikow.reverse();


    let najlepsi = document.getElementById('najlepsi-pracownicy');

    najlepsi.innerHTML = `<p> 1.` + listaPracownikow[0] + `</p>` +  `<p> 2.` + listaPracownikow[1] + `</p>` + `<p> 3.` + listaPracownikow[2] + `</p>` ;
   
}

btn.addEventListener('click', sumaWyplat);
btn.addEventListener('click', najlepszyPracownik);