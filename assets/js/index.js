const button = document.querySelector('#convert-button');
const inputConvert = document.querySelector('#input-real');
const convertResultValue = document.querySelector("#convert-result-value");
const valueToConvert = document.querySelector("#value-for-convert");
const select = document.querySelector("#select-coin");
const convertCoinName = document.querySelector("#convert-result-coin");
const changeImage = document.querySelector("#change-image");

let dolar = 5.81;
let euro = 6.61;
let bitcoin = 491247.35;

// Eventos
button.addEventListener('click', convertValues);
select.addEventListener('change', changeCoinToOnSelect);


// Funções
function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}

function convertValues() {
  const real = Number(inputConvert.value);

  valueToConvert.innerHTML = formatCurrency(real, 'pt-BR', 'BRL');

  const conversions = {
    dolar: { rate: dolar, locale: 'en-US', currency: 'USD' },
    euro: { rate: euro, locale: 'de-DE', currency: 'EUR' },
    bitcoin: { rate: bitcoin, locale: 'en-US', currency: 'BTC' },
  };

  const selected = conversions[select.value];

  if (selected) {
    const convertedValue = real / selected.rate;

    if (select.value === 'bitcoin') {
      convertResultValue.innerHTML = convertedValue.toFixed(6) + ' BTC';
    } else {
      convertResultValue.innerHTML = formatCurrency(convertedValue, selected.locale, selected.currency);
    }
  }
}


function changeCoinToOnSelect() {
  
  if(select.value === 'euro') {
    convertCoinName.innerHTML = 'Euro';
    changeImage.src = "./assets/images/euro.svg";
    changeImage.alt = 'icone da moeda euro';
  } 

  if(select.value === 'dolar') {
    convertCoinName.innerHTML = 'U$ Dolar americano';
    changeImage.src = "./assets/images/eua.svg";
    changeImage.alt = 'icone da moeda dolar';
  }
  
  if(select.value === 'bitcoin') {
    convertCoinName.innerHTML = 'Bitcoin';
    changeImage.src = "./assets/images/bitcoin.png";
    changeImage.alt = 'icone do bitcoin';
  }

  convertValues();
}

function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}