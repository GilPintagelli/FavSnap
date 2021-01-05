// VARAIBLES
// MODAL
const SignIn = document.querySelector(".showcase-content a");
const modal = document.querySelector(".modal");
// FORM
const form = document.querySelector('form');
const firstName = document.getElementById('firstName');
const email = document.getElementById('email');
const password = document.getElementById('password');



// EVENTS
// MODAL
// open the modal
SignIn.addEventListener('click', openModal);
// close the modal
window.addEventListener('click', closeModal);

// FORM
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(firstName.value === ''){
        showError(firstName, 'First name is required');
    } else {
        showSuccess(firstName);
    }

    if(email.value === ''){
        showError(email, 'Email is required');
    } else {
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }
});


// FUNCTIONS
// MODAL
function openModal(){
    modal.style.display = 'block';
}

function closeModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    };
}

// FORM
function showError(input, message){
    // grab the .form-group class trough input
    const formGroup = input.parentElement;
    // add the .error class to .form-group class
    formGroup.className = 'form-group error';
    // display a message in "small" tag
    const small = formGroup.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}