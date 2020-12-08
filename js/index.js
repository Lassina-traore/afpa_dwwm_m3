
//verification des inputs

$(document).ready(function(){
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



var $identifiant  = $('#identifiant'),
    $pwd          = $('#pwd'),
    $envoi        = $('#submit'),
    $champ        = $('.input'),
    $erreur       = $('#erreur'),
    $erreur2      = $('#erreur2');


$champ.keyup(function(){

if ($(this).val().length < 5) {

  $(this).css({
    borderColor : 'red',
     color : 'red'
  })
$erreur.text('champs inférieure a 5');
}
else {
  $(this).css({
 	     borderColor : 'green',
 	     color : 'green'
 	 });
   $erreur.text('');
}
});

$envoi.click(function(e){
e.preventDefault();

verifier($identifiant);
verifier($pwd);
});


function verifier(champ){
  if (champ.val() == "") {
    $erreur2.text('champs vides');

    champ.css({
  borderColor : 'red',
  color : 'red'
});
  }
  else {
     $erreur2.text('');
  }
}

let villeChoisie = "Paris"
recevoirTemperature(villeChoisie);

 $('#changer').bind("click",() => {
   villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
   recevoirTemperature(villeChoisie);
 });

 function recevoirTemperature(ville){

  const url ="https://api.openweathermap.org/data/2.5/weather?q="+ ville +"&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

  $.ajax({

    url: url,

    dataType: "json",


    success: function (objData) {

      {
        var ville = objData.name;
        var temperature = objData.main.temp;
        $("#temperature_label").text(temperature);
        $("#ville").text(ville);

      }
    },
    error: function (jqXHR) {

      alert('Un problème est intervenu, merci de revenir plus tard.');

    }

  });
}




});
