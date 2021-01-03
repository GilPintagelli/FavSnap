// VARAIBLES
var SignIn = document.querySelector(".showcase-content a");
var modal = document.querySelector(".modal");

// EVENTS
// open the modal
SignIn.addEventListener('click', openModal);
// close the modal
window.addEventListener('click', closeModal);


// FUNCTIONS
function openModal(){
    modal.style.display = 'block';
}

function closeModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    };
}