const inputEmail = document.querySelector('input[type="email"]');
const buttonSubmit = document.querySelector('button[type="submit"]');
const errorMessages = document.querySelector('.error-message');
const cardContainer = document.querySelector('#card-container');
const cardSuccessContainer = document.querySelector('#card-success');
const buttonDismiss = document.querySelector('.button-container button');
const sendedEmail = document.querySelector('.email-sended');
const card = document.querySelector('#card');


const emails = [];


window.onload = cleanField;

function cleanField() {
    inputEmail.value = '';
}


buttonSubmit.addEventListener('click', (e) => {


    e.preventDefault();
    if (!inputEmail.checkValidity()) {
        if (inputEmail.validity.valueMissing) {

            errorMessages.style.display = 'inline';
            errorMessages.textContent = 'This field is required';
            inputEmail.classList.add('error-input');

        } else if (inputEmail.validity.typeMismatch) {

            errorMessages.style.display = 'inline';
            errorMessages.textContent = 'Valid email required';
            inputEmail.classList.add('error-input');

        }
    } else if (inputEmail.checkValidity()) {

        //charge in the array and show email
        emails.push(inputEmail.value);

        sendedEmail.textContent = `${emails[emails.length - 1]}`;

        //clean error inputs
        inputEmail.value = '';

        errorMessages.style.display = 'none';

        inputEmail.classList.remove('error-input');

        //show success component
        card.classList.add('show');

        cardSuccessContainer.classList.remove('show');

    }

});

buttonDismiss.addEventListener('click', () => {

    cardSuccessContainer.classList.add('show');
    card.classList.remove('show');

});







