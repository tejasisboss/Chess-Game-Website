const form = document.querySelector("form[name='registration-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const collegeInput = document.querySelector("input[name='college']");
const branchInput = document.querySelector("input[name='branch']");
const stateInput = document.querySelector("input[name='state']");
const addressInput = document.querySelector("textarea[name='address']");
const ageInput = document.querySelector("input[name='age']");
const phoneInput = document.querySelector("input[name='phone']");
const usernameInput = document.querySelector("input[name='username']");
const passwordInput = document.querySelector("input[name='password']");


nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
collegeInput.isValid = () => !!collegeInput.value;
branchInput.isValid = () => !!branchInput.value;
stateInput.isValid = () => !!stateInput.value;
addressInput.isValid = () => !!addressInput.value;
ageInput.isValid = () => isValidAge(ageInput.value) && !!ageInput.value;
phoneInput.isValid = () => isValidPhone(phoneInput.value);
usernameInput.isValid = () => isValidUsername(usernameInput.value) && !!usernameInput.value;
//passwordInput.isValid = () => !!passwordInput.value;

const inputFields = [nameInput, emailInput, collegeInput, branchInput, stateInput, addressInput, ageInput, phoneInput, usernameInput, passwordInput];

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidUsername = (username) => {
    if(username.charAt(0) === username.charAt(0).toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}

const isValidAge = (age) => {
    if(age.value < 0){
        return false;
    }
    else{
        return true;
    }
}
  
const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
    console.log("we are here");
    if (!shouldValidate) return;
  
    isFormValid = true;
    inputFields.forEach((input) => {
      input.classList.remove("invalid");
      input.nextElementSibling.classList.add("hide");
  
      if (!input.isValid()) {
        input.classList.add("invalid");
        isFormValid = false;
        input.nextElementSibling.classList.remove("hide");
      }
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    shouldValidate = true;
    validateInputs();
    if (isFormValid) {
      // TODO: DO AJAX REQUEST
    }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));