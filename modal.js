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

/****** Fermer la modal ******/

// Je récupére l'élément de la classe='close' dans la span
const closeBtn = document.querySelector(".close");

// J'ajoute un écouteur d'évenement au "clic" sur le bouton
closeBtn.addEventListener("click", closeModal);

// Avec la fonction je ferme la modale en la masquant avec un display none
function closeModal() {
  modalbg.style.display = "none";
}

/****** Fonction vérification formulaire ******/

function validate() {
  // Récupérer les valeurs des champs
  const firstName = document.getElementById('first').value;
  const lastName = document.getElementById('last').value;
  const email = document.getElementById('email').value;
  const birthdate = document.getElementById('birthdate').value;
  const quantity = document.getElementById('quantity').value;
  const location = document.querySelector('input[name="location"]:checked');
  const checkbox1 = document.getElementById('checkbox1');

  if (firstName === '') {
    firstNameError.textContent = 'Prénom manquant';
    firstNameError.style.color = 'red';
    // return false;
  }

  // On vérifie si les champs obligatoires sont vides
  if (firstName === '' || lastName === '' || email === '' || birthdate === '' || quantity === '' || !location || !checkbox1.checked) {
    // Si les champs sont vides, on affiche un message d'erreur
    alert("Veuillez remplir tous les champs obligatoires et accepter les conditions d'utilisation.")
    // Empêcher le formulaire de se soumettre
    return false; 
  }

  // On vérifie si tout est valide, alors le formulaire peut être soumis
  return true;
}