function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* */


function validate() {
  // Récupérer les valeurs des champs
  const firstName = document.getElementById('first').value;
  const lastName = document.getElementById('last').value;
  const email = document.getElementById('email').value;
  const birthdate = document.getElementById('birthdate').value;
  const quantity = document.getElementById('quantity').value;
  const location = document.querySelector('input[name="location"]:checked');
  const checkbox1 = document.getElementById('checkbox1');

  // Vérifier si les champs obligatoires sont vides
  if (firstName === '' || lastName === '' || email === '' || birthdate === '' || quantity === '' || !location || !checkbox1.checked) {
    // Afficher un message d'erreur
    alert("Veuillez remplir tous les champs obligatoires et accepter les conditions d'utilisation.");
    return false; // Empêcher le formulaire de se soumettre
  }

  // Si tout est valide, le formulaire peut être soumis
  return true;
}
