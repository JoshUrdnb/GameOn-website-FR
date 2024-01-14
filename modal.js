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
  const reserve = document.getElementById('reserve')
  reserve.reset()

  /****************************************************/
  /****************************************************/
  /*** FAIRE UNE FONCTION POUR GERER LE EMPTY INPUT ***/
  /****************************************************/
  /****************************************************/

  // const firstName = document.getElementById('first')
  // firstName.value = ''

  const firstNameError = document.getElementById('firstNameError')
  firstNameError.textContent = ''

  const lastNameError = document.getElementById('lastNameError')
  lastNameError.textContent = ''

  const emailError = document.getElementById('emailError')
  emailError.textContent = ''

  const birthdateError = document.getElementById('birthdateError')
  birthdateError.textContent = ''

  const quantityError = document.getElementById('quantityError')
  quantityError.textContent = ''

  const selectedLocation = document.querySelector('input[name="location"]:checked');
  locationError.textContent = ''
}



/****** Fonction vérification formulaire ******/
function validateFirstName() {
  const firstName = document.getElementById('first').value
  const firstNameError = document.getElementById('firstNameError')

  if (firstName === '') {
      firstNameError.textContent = 'Prénom manquant';
    return false
  }
  console.log('firstName', firstName)
  return true
}

function validateLastName() {
  const lastName = document.getElementById('last').value
  const lastNameError = document.getElementById('lastNameError')

  if (lastName === '') {
      lastNameError.textContent = 'Nom manquant';
    return false
  }
  console.log('lastName', lastName)
  return true
}

function validateEmail() {
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError')

  if (email === '') {
      emailError.textContent = 'email manquant';
    return false
  }
  console.log('email', email)
  return true
}

function validateBirthdate() {
  const birthdate = document.getElementById('birthdate').value;
  const birthdateError = document.getElementById('birthdateError')

  if (birthdate === '') {
    birthdateError.textContent = 'Date de naissance manquante';
    return false
  }
  console.log('birthdate', birthdate)
  return true
}

function validateQuantity() {
  const quantity = document.getElementById('quantity').value;
  const quantityError = document.getElementById('quantityError')

  if (quantity === '') {
    quantityError.textContent = 'Quantitée manquante';
    return false
  }
  console.log('quantity', quantity)
  return true
}

function validateLocation() {
  const selectedLocation = document.querySelector('input[name="location"]:checked');
  const locationError = document.getElementById('locationError')

  if (selectedLocation === null) {
    locationError.textContent = 'Choisir lieux';
    return false
  }
  console.log('selectedLocation', selectedLocation.value)
  return true
}

function validateCheckbox1() {
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox1Error = document.getElementById('checkbox1Error')

  if (!checkbox1.checked) {
    checkbox1Error.textContent = 'Accepter les conditions';
    return false
  }
  console.log('checkbox1', !checkbox1.checked)
  return true
}



const reserve = document.getElementById('reserve')
reserve.addEventListener('submit', validateForm)



function validateForm(event) {
  event.preventDefault()
  // Récupérer les valeurs des champs
  // const firstName = document.getElementById('first').value;
  // const lastName = document.getElementById('last').value;
  // const email = document.getElementById('email').value;
  // const birthdate = document.getElementById('birthdate').value;
  // const quantity = document.getElementById('quantity').value;
  // const location = document.querySelector('input[name="location"]:checked');
  // const checkbox1 = document.getElementById('checkbox1');

  const isFirstNameValid = validateFirstName()
  console.log(isFirstNameValid)

  const isLastNameValid = validateLastName()
  console.log(isLastNameValid)

  const isEmailValid = validateEmail()
  console.log(isEmailValid)

  const isBirthdateValid = validateBirthdate()
  console.log(isBirthdateValid)

  const isQuantityValid = validateQuantity()
  console.log(isQuantityValid)

  const isLocationValid = validateLocation()
  console.log(isLocationValid)

  const isCheckbox1Valid = validateCheckbox1()
  console.log(isCheckbox1Valid)

  // const firstNameError = document.getElementById('firstNameError')
  // const lastNameError = document.getElementById('lastNameError')
  // const emailError = document.getElementById('emailError')

  // if (firstName === '') {
  //   firstNameError.textContent = 'Prénom manquant';
  // }
  // console.log('firstName', firstName)

  // if (lastName === '') {
  //   lastNameError.textContent = 'Nom manquant';
  // }
  // console.log('lastName', lastName)

  // if (email === '') {
  //   emailError.textContent = 'e-mail manquant';
  // }
  // console.log('email', email)

  // On vérifie si les champs obligatoires sont vides
  if (isFirstNameValid === true || isLastNameValid === true || isEmailValid === true || isBirthdateValid === true || 
      isQuantityValid === true || isLocationValid === true || isCheckbox1Valid === true) {
    // Si les champs sont vides, on affiche un message d'erreur
    alert("Veuillez remplir tous les champs obligatoires et accepter les conditions d'utilisation.")
    // Empêcher le formulaire de se soumettre
    return false; 
  }

  // On vérifie si tout est valide, alors le formulaire peut être soumis
  return true;
}