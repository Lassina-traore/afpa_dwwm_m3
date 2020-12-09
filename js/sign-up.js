$(document).ready(function () {
//..................................................//
// groupe NBL composé de Nada , benoit et Lassina //
//testé sur le navigateur chrome //
// page faite par Lassina //
//..................................................//
  // objet qui permet de verifier les inputes de la page "sign-up.html"
  var $pseudo = $("#identifiant2"),
    $mdp = $("#pwd2"),
    $confirmation = $("#pwd_confirme"),
    $mail = $("#email"),
    $envoi = $("#submit2"),
    $erreur3 = $("#erreur3"),
    $erreur4 = $("#erreur4"),
    $erreur5 = $("#erreur5"),
    $champs2 = $(".input2");
// methode $champ2 me permet de verifier le nombre de caractere dans un input.
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
// la methode $confirmation permet de verifier que la saisie des deux inputs mot de passe et confirmation sont les même.
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
// methode $envoi appel la fonction verifier.
  $envoi.click(function (e) {
    e.preventDefault();
    verifier($pseudo);
    verifier($mdp);
    verifier($confirmation);
    verifier($mail);
  });
// la fonction verifier , verifie si un champs est vide.
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
  // test QUnit qui test les fonction et methode de la page html.
  QUnit.test("test", function (assert) {


    assert.ok(verifier);
    assert.ok($confirmation);
    assert.ok($envoi);
    assert.ok($champs2);

  });
});
