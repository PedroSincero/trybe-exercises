function sumOfTotal() {
  let total = 0;
  const catchaP = document.querySelector('p');
  const catchaCartItem = document.querySelectorAll('.cart__item');
  catchaCartItem.forEach((price) => {
    total += Number(price.innerHTML.split('$')[1]);
    catchaP.innerText = total;
  });
  // Math.round(total * 100) / 100
}
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  const item = event.target;
  const removeItemID = item.id;
  localStorage.removeItem(removeItemID);
  document.querySelector('.cart__items')
    .addEventListener('click', (event2) => event2.target.remove());
  item.remove();
  sumOfTotal();
}

// desafio 4
function saveLocalStorage(id, objItem) {
  localStorage.setItem(`${id}`, JSON.stringify(objItem));
}

function createCartItemElement({
  id: sku,
  title: name,
  price: salePrice,
}) {
  const ol = document.querySelector('ol');
  const li = document.createElement('li');
  li.id = `${localStorage.length}`;
  const liContainID = li.id;
  ol.appendChild(li);
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  saveLocalStorage(liContainID, { sku, name, salePrice });
  li.addEventListener('click', cartItemClickListener);
  sumOfTotal();
  return li;
}
// desafio 4
function createProductItemElement({
  id: sku,
  title: name,
  thumbnail: image,
}) {
  const section = document.createElement('section');
  section.className = 'item';
  const sectionItems = document.querySelector('.items');
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', () => {
      const API_ITENS = `https://api.mercadolibre.com/items/${sku}`;
      fetch(API_ITENS)
        .then((response) => response.json())
        .then((teste) => createCartItemElement(teste));
    });
  return sectionItems.appendChild(section);
}
// Desafio 4
function loadingLocalStorage() {
  for (let index = 0; index < localStorage.length; index += 1) {
    const ol = document.querySelector('ol');
    const value = JSON.parse(localStorage[index]);
    const li = document.createElement('li');
    li.innerText = `SKU: ${value.sku} | NAME: ${value.name} | PRICE: $${value.salePrice}`;
    li.addEventListener('click', cartItemClickListener);
    ol.appendChild(li);
    li.id = `${index}`;
    li.className = 'cart__item';
  }
}

function deleteButton() {
  const cartItem = document.querySelectorAll('.cart__item');
  localStorage.clear();
  cartItem.forEach((cont) => {
    cont.remove();
  });
}

window.onload = function onload() {
  const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((element) =>
        createProductItemElement(element));
    });
  loadingLocalStorage();

  document.querySelector('.empty-cart').addEventListener('click', deleteButton);
};

// 1° Desafio
// Baby Steps: 
// 1° informação
// 1.1 acessar a API do 'mercadolivre'
// 1.2 pega-la e transformar em .json para ser lido pelo javascript
// 2 Capturar as informações 
// 2.1 Apos capturada, percorrer as info contidas dentro
// 2.2 acionar o createProductItemElement
// 2.3 adicionar um destructuring no parametro do creatProductItemElement
// 2.4 colocar dentor do create o 'element' contendo as informações da API
// 3° o Parametro da API está desestruturado e fará a organização da pesquisa entrega-los para o crateProduction.
// 2°Desafio
// Baby Steps:
// 1° Criar evento no botão 'Adicionar ao carrinho" x
// 2° acessar as informações da API x
// 2.1 apos capturado, percorrer a info necessária
// 2.2 
// 4 °Desafio
// Baby Steps:
// 1° criar um local storage generico x
// 1.1 selecionar os item que será mandado ao localStorage x
// 1.2 mandar para o localStorage x
// 2° acessar as informações contidas no localStorage x
// 2.1 adicionar elas ao windows on load x
// 2.2 criar as div x
// 2.3 adicionar o texto no li x
// 2.4 adicionar id's x
// 3° excluir no click
// 3.1 selecionar a div pelo ID
// 3.2 excluir o ID
// 5° Desafio
// Baby Steps:
// 1° localizar o valor x
// 2° somar os valores x
// 3° Preparar o  ambiente para adicionar a soma  x
// 4° transformar a função em assincrona x

// Agradecimentos ao Alan Tanaka Turma 10 tribo B - Henrique Zozimo Turma 10 Tribo B - Daniel ROberto Turma 10 Tribo B - Thiago Marchini Turma 10 Tribo B por ter me auxiliado nos desafios.