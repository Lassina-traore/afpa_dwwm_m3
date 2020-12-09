
//fonction qui permet d'afficher une info-bulles en bootstrap
$(document).ready(function(){
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


// objet qui permet de verifier les inputes de la connection 
var $identifiant  = $('#identifiant'),
    $pwd          = $('#pwd'),
    $envoi        = $('#submit'),
    $champ        = $('.input'),
    $erreur       = $('#erreur'),
    $erreur2      = $('#erreur2');

// methode $champ me permet de verifier le nombre de caractere dans un input.
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
// methode $envoi appel la fonction verifier.
$envoi.click(function(e){
e.preventDefault();

verifier($identifiant);
verifier($pwd);
});

// la fonction verifier , verifie si un champs est vide.
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


//API METEO
let villeChoisie = "Paris"
recevoirTemperature(villeChoisie);

 $('#changer').bind("click",() => {
   villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
   recevoirTemperature(villeChoisie);
 });
//fonction qui me permet de récupere les données de l'objet meteo  selon la ville.
 function recevoirTemperature(ville){

  const url ="https://api.openweathermap.org/data/2.5/weather?q="+ ville +"&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

  $.ajax({

    url: url,

    dataType: "json",

// en cas de success 
    success: function (objData) {

      {
        var ville = objData.name;
        var temperature = objData.main.temp;
        $("#temperature_label").text(temperature);
        $("#ville").text(ville);

      }
    },
    //en cas d'erreur 
    error: function (jqXHR) {

      alert('Un problème est intervenu, merci de revenir plus tard.');

    }

  });
}




});
