$(document).ready(function () {
  var $pseudo = $("#identifiant2"),
    $mdp = $("#pwd2"),
    $confirmation = $("#pwd_confirme"),
    $mail = $("#email"),
    $envoi = $("#submit2"),
    $erreur3 = $("#erreur3"),
    $erreur4 = $("#erreur4"),
    $erreur5 = $("#erreur5"),
    $champs2 = $(".input2");

  $champs2.keyup(function () {
    if ($(this).val().length < 5) {
      $(this).css({
        borderColor: "red",
        color: "red",
      });
      $erreur4.text("champs inférieure a 5");
    } else {
      $(this).css({
        borderColor: "green",
        color: "green",
      });
      $erreur4.text("");
    }
  });

  $confirmation.keyup(function () {
    if ($(this).val() != $mdp.val()) {
      $(this).css({
        borderColor: "red",
        color: "red",
      });
      $erreur5.text("Confirmation mot de passe incorrect");
    } else {
      $(this).css({
        borderColor: "green",
        color: "green",
      });
    }
    $erreur5.text("");
  });

  $envoi.click(function (e) {
    e.preventDefault();
    verifier($pseudo);
    verifier($mdp);
    verifier($confirmation);
    verifier($mail);
  });

  function verifier(champs2) {
    if (champs2.val() == "") {
      $erreur3.text("champs vides");

      champs2.css({
        borderColor: "red",
        color: "red",
      });
    } else {
      $erreur3.text("");
    }
  }
});
