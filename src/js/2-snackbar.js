import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const submitBtnRef = document.querySelector('[type="submit"]');
const delayInputRef = document.querySelector('[name="delay"]');
const fieldsetRef = document.querySelector('fieldset');

submitBtnRef.addEventListener('click', onSubmitBtnRefClick);
delayInputRef.addEventListener('input', onDelayInputRefInput);
fieldsetRef.addEventListener('change', onfieldsetRefChange);

let delay = 0;
let selectedField = '';

function onDelayInputRefInput(e) {
  if (e.target.value < 0) {
    e.target.value = 0;
  }
  delay = e.target.value;
}

function onfieldsetRefChange(e) {
  selectedField = e.target.value;
}

function onSubmitBtnRefClick(evt) {
  evt.preventDefault();
  const successOptions = {
    title: 'OK',
    message: `Fulfilled promise in ${delay}ms`,
    position: 'topRight',
    backgroundColor: '#59A10D',
    messageColor: '#FFFFFF',
    messageSize: '16px',
    messageLineHeight: '1.5',
    titleColor: '#FFFFFF',
    titleSize: '16px',
    titleLineHeight: '1.5',
    iconUrl: '../img/icon-check.svg',
  };

  const errorOptions = {
    title: 'Error',
    message: `Rejected promise in ${delay} ms`,
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageColor: '#FFFFFF',
    messageSize: '16px',
    messageLineHeight: '1.5',
    titleColor: '#FFFFFF',
    titleSize: '16px',
    titleLineHeight: '1.5',
    iconUrl: '../img/icon-x-octagon.svg',
  };
  const p = new Promise((resolve, reject) => {
    if (selectedField === 'fulfilled') {
      resolve(`✅ Fulfilled promise in ${delay}ms`);
    }
    {
      reject(`❌ Rejected promise in ${delay} ms`);
    }
  });
  p.then(result => {
    setTimeout(() => {
      iziToast.success(successOptions);
      console.log(result);
    }, delay);
  }).catch(er => {
    setTimeout(() => {
      iziToast.error(errorOptions);
      console.log(er);
    }, delay);
  });
}