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
  // display: block = rendre visible la modale en tant que bloc sur la page (utilisé pour afficher des éléments en mode boîte).
  modalbg.style.display = "block";
}

/****** Fermer la modal ******/

// Je récupére l'élément de la classe='close' dans la span
const closeBtn = document.querySelector(".close");

// J'ajoute un écouteur d'évenement au "clic" sur le bouton
closeBtn.addEventListener("click", closeModal);

// Avec la fonction je ferme la modale avec un display none
function closeModal() {
  modalbg.style.display = "none";
}

/****** Fonction vérification formulaire ******/
const reserve = document.getElementById('reserve')
reserve.addEventListener('submit', validateForm)

function validateForm(event) {
  event.preventDefault()
  // Récupérer les valeurs des champs
  const firstName = document.getElementById('first').value;
  const lastName = document.getElementById('last').value;
  const email = document.getElementById('email').value;
  const birthdate = document.getElementById('birthdate').value;
  const quantity = document.getElementById('quantity').value;
  const location = document.querySelector('input[name="location"]:checked');
  const checkbox1 = document.getElementById('checkbox1');

  const firstNameError = document.getElementById('firstNameError')
  const lastNameError = document.getElementById('lastNameError')
  const emailError = document.getElementById('emailError')

  if (firstName === '') {
    firstNameError.textContent = 'Prénom manquant';
  }
  console.log('firstName', firstName)

  if (lastName === '') {
    lastNameError.textContent = 'Nom manquant';
  }
  console.log('lastName', lastName)

  if (email === '') {
    emailError.textContent = 'e-mail manquant';
  }
  console.log('email', email)


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