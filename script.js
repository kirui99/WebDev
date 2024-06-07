const form = document.getElementById('form');
const firstNameInput = document.getElementById('firstName-Input');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const queryInput = document.getElementById('queryType');
const messageInput = document.getElementById('textarea');
const consentInput = document.getElementById('consentbtn');

const fNameError = document.getElementById('fNameErr');
const lNameError = document.getElementById('lNameErr');
const emailError = document.getElementById('emailErr');
const queryError = document.getElementById('queryErr');
const messageError = document.getElementById('messageErr');
const consentError = document.getElementById('consentErr');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    if (firstNameInput.value.trim() === '' || 
    lastNameInput.value.trim() === '' ||
    emailInput.value.trim() === "" ||
    /*queryInput.checked === false ||*/
    messageInput.value.trim() === "" ||
    consentInput.checked === false) {
        fNameError.style.display = 'block';
        fNameError.style.color = 'red';

        lNameError.style.display = 'block';
        lNameError.style.color = 'red';

        emailError.style.display = 'block';
        emailError.style.color = 'red';

        queryError.style.display = 'block';
        queryError.style.color = 'red';

        messageError.style.display = 'block';
        messageError.style.color = 'red';

        consentError.style.display = 'block';
        consentError.style.color = 'red';
    } else {
        firstNameInput.value = '';
        lastNameInput.value = '';
        messageInput.value = '';
        consentInput.checked = false;
        emailInput.value = '';
        alert("Message Sent! Thanks for completing the form. We'll be in touch soon!");
        

    }
});


