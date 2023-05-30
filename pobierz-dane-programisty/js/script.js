$(document).ready(function(){

    $('#pobierz-dane').click(function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){
            $('#dane-programisty').append('<p> Imię: ' + data.imie + '</p>' );
            $('#dane-programisty').append('<p> Nazwisko: ' + data.nazwisko + '</p>' );
            $('#dane-programisty').append('<p> Zawód: ' + data.zawod + '</p>' );
            $('#dane-programisty').append('<p> Firma: ' + data.firma + '</p>' );
        });
    });


});