const inputEmail = document.querySelector('#user-email-phone');
const btnEnviar = document.querySelector('#button-login');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const p2 = document.createElement('p');
const getName = document.getElementById('firstname');
const getLastN = document.getElementById('lastname');
const getEmail = document.getElementById('phone_email');
const getData = document.getElementById('birthdate');

function alertEmail() {
  alert(inputEmail.value);
}

btnEnviar.addEventListener('click', alertEmail);

const getButton = document.getElementById('facebook-register');

function insertOnForm() {
  const getSex = document.querySelector('input[type="radio"]:checked').value;
  const getPai = document.querySelector('.right-content');
  const getFilho2 = document.querySelector('.formContato');
  getPai.removeChild(getFilho2);
  const addDiv = document.createElement('div');
  addDiv.className = 'teste5';
  getPai.appendChild(addDiv);
  const getDiv5 = document.querySelector('.teste5');
  getDiv5.appendChild(h1).innerHTML = `Olá, ${getName.value} ${getLastN.value}`;
  getDiv5.appendChild(h3).innerHTML = `${getEmail.value}`;
  getDiv5.appendChild(p).innerHTML = `${getData.value}`;
  getDiv5.appendChild(p2).innerHTML = `${getSex}`;
}

const getFormPai = document.querySelector('.formContato');
const getFormFilho = getFormPai.getElementsByTagName('input');

function camposInvalidos() {
  const getCamposInvalidos = document.getElementById('camposInvalidos');
  for (let i = 0; i < getFormFilho.length; i += 1) {
    if (getFormFilho[i].value === '') {
      getCamposInvalidos.innerText = 'Campos inválidos';
      getFormFilho[i].addEventListener('keydown', () => {
        getCamposInvalidos.innerText = '';
      });
      break;
    }
  }
  if (getCamposInvalidos.innerText !== 'Campos inválidos') {
    insertOnForm();
  }
}

getButton.addEventListener('click', camposInvalidos);

const genderOptional = document.createElement('input');
genderOptional.name = 'gender-custom';
genderOptional.placeholder = 'Gênero (opcional)';
genderOptional.id = 'gender-optional';
genderOptional.className = 'selected';
const getDivFlexForm = document.querySelector('.flex-form2');
const customRadio = document.querySelector('#personalizado');
const femaleRadio = document.querySelector('#feminino');
const maleRadio = document.querySelector('#masculino');

customRadio.addEventListener('click', () => {
  getDivFlexForm.appendChild(genderOptional);
});

femaleRadio.addEventListener('click', () => {
  const elemento = document.querySelector('.selected');
  if (elemento) {
    elemento.parentNode.removeChild(elemento);
  }
});

maleRadio.addEventListener('click', () => {
  const elemento2 = document.querySelector('.selected');
  if (elemento2) {
    elemento2.parentNode.removeChild(elemento2);
  }
});
