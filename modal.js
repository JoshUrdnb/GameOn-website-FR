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
const btnClose = document.querySelector(".btn-signout");
btnClose.addEventListener("click", closeModal);

// Je récupére l'élément de la classe='close' dans la span
const closeBtn = document.querySelector(".close");
// J'ajoute un écouteur d'évenement au "clic" sur le bouton
closeBtn.addEventListener("click", closeModal);

function clearError(id) {
  const errorElement = document.getElementById(id)
  if (errorElement) {
    errorElement.textContent = ''
  }
}

// Avec la fonction je ferme la modale avec un display none
function closeModal() {
  modalbg.style.display = "none";
  const reserve = document.getElementById('reserve')
  reserve.reset()

  clearError('firstNameError')
  clearError('lastNameError')
  clearError('emailError')
  clearError('birthdateError')
  clearError('quantityError')
  clearError('locationError')
  clearError('checkbox1Error')
}

/****** Fonction vérification formulaire ******/
function validateFirstName() {
  const firstName = document.getElementById('first').value
  const firstNameError = document.getElementById('firstNameError')
  
  // Le regex verifie qu'il y est au moins 2 caractères
  const regex = /.{2,}/;

  if (firstName === '') {
      firstNameError.textContent = 'Veuillez renseigner votre prénom.'
    return false
  } else if (!regex.test(firstName)){
      // console.log("minimum 2 charactères")
    firstNameError.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    return false
  }
  console.log('firstName', firstName)
  return true
}

function validateLastName() {
  const lastName = document.getElementById('last').value
  const lastNameError = document.getElementById('lastNameError')

  const regex = /.{2,}/;

  if (lastName === '') {
      lastNameError.textContent = 'Veuillez renseigner votre nom.';
    return false
  } else if (!regex.test(lastName)){
    // console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    lastNameError.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    return false
}
  console.log('lastName', lastName)
  return true
}

function validateEmail() {
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError')

  if (email === '') {
      emailError.textContent = 'Veuillez renseigner votre email';
    return false
  } else if (!email.includes("@")){ // Le type=email dans index.html semble bloqué la verification en JS.
    emailError.textContent = "Ce n'est pas le bon format d'adresse email.";
    return false
}

  console.log('email', email)
  return true
}

function validateBirthdate() {
  const birthdate = document.getElementById('birthdate').value;
  const birthdateError = document.getElementById('birthdateError')

  // const regex = /^(0[1-9]|[12][0-9]|3[01])\-(0[1-9]|1[0-2])\-\d{4}$/

  if (birthdate === '') {
    birthdateError.textContent = 'Vous devez entrer votre date de naissance.';
    return false
  } //else if (!regex.test(birthdate)) {
  // birthdateError.textContent = 'Le format de la date est invalide.'
  // }
  console.log('birthdate', birthdate)
  return true
}

function validateQuantity() {
  const quantity = document.getElementById('quantity').value;
  const quantityError = document.getElementById('quantityError')

  const regex = /^\d+$/;

  if (quantity === '') {
    quantityError.textContent = 'Parcitipation(s) manquante(s)';
    return false
  } else if (!regex.test(quantity)) { // Le type=number dans index.html semble bloqué la verification en JS.
    quantityError.textContent = 'Veuillez saisir une valeur numérique valide';
    return false
  }
  console.log('quantity', quantity)
  return true
}

function validateLocation() {
  const selectedLocation = document.querySelector('input[name="location"]:checked');
  const locationError = document.getElementById('locationError')

  if (selectedLocation === null) {
    locationError.textContent = 'Vous devez choisir une option.';
    return false
  }
  console.log('selectedLocation', selectedLocation.value)
  return true
}

function validateCheckbox1() {
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox1Error = document.getElementById('checkbox1Error')

  if (!checkbox1.checked) {
    checkbox1Error.textContent = 'Vous devez vérifier que vous acceptez les termes et conditions.';
    return false
  }
  console.log('checkbox1', checkbox1.checked)
  return true
}

function validateCheckbox2() {
  const checkbox2 = document.getElementById('checkbox2');
  // const checkbox2Error = document.getElementById('checkbox2Error')

  // if (!checkbox2.checked) {
  //   checkbox2Error.textContent = 'Champs non obligatoire.';
  //   return false
  // }
  console.log('checkbox2', checkbox2.checked)
  return true
}

const reserve = document.getElementById('reserve')
reserve.addEventListener('submit', validateForm)

function validateForm(event) {
  event.preventDefault()
  
  const isFirstNameValid = validateFirstName()
  // console.log(isFirstNameValid)

  const isLastNameValid = validateLastName()
  // console.log(isLastNameValid)

  const isEmailValid = validateEmail()
  // console.log(isEmailValid)

  const isBirthdateValid = validateBirthdate()
  // console.log(isBirthdateValid)

  const isQuantityValid = validateQuantity()
  // console.log(isQuantityValid)

  const isLocationValid = validateLocation()
  // console.log(isLocationValid)

  const isCheckbox1Valid = validateCheckbox1()
  // console.log(isCheckbox1Valid)

  const isCheckbox2Valid = validateCheckbox2()
  // console.log(isCheckbox1Valid)

  // On vérifie si les champs obligatoires sont vides
  if (isFirstNameValid === false || isLastNameValid === false || isEmailValid === false || isBirthdateValid === false || 
      isQuantityValid === false || isLocationValid === false || isCheckbox1Valid === false || isCheckbox2Valid === false) {
    return false; 
  } else {
    const displayValidation = document.getElementById('displayValidation')
    displayValidation.classList.add('show');

    reserve.classList.remove('show');
    reserve.classList.add('hide');
  }
  // On vérifie si tout est valide, alors le formulaire peut être soumis
  return true;
}