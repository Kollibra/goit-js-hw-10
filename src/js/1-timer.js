import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let currentTime = Date.now();
let userSelectedDate = '';

const btnRef = document.querySelector('.btn');
const inputRef = document.querySelector('.input');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');

const errorOptions = {
  class: 'iziToast-alert',
  title: 'Error',
  message: 'Please choose a date in the future',
  position: 'topRight',
  backgroundColor: '#EF4040',
  messageColor: '#FFFFFF',
  messageSize: '16px',
  messageLineHeight: '1.5',
  titleColor: '#FFFFFF',
  titleSize: '16px',
  titleLineHeight: '1.5',
  iconUrl: './img/icon-x-octagon.svg',
};
const formatStr = 'l';

const options = {
  locale: {
    firstDayOfWeek: 1,
  },
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate.getTime() < currentTime) {
      iziToast.error(errorOptions);

      // window.alert('Please choose a date in the future');

      btnRef.disabled = true;
    } else {
      btnRef.disabled = false;
    }

    // console.log(selectedDates[0]);
  },
};

const fp = flatpickr(inputRef, options); // flatpickr

inputRef.addEventListener('focus', () => {
  fp.config.defaultDate = new Date();
});

btnRef.addEventListener('click', onbtnRefClick);

function onbtnRefClick(event) {
  const intervalId = setInterval(timer, 1000);
  function timer() {
    currentTime = Date.now();
    const selectedTime = userSelectedDate.getTime();
    const deltaTime = selectedTime - currentTime;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    daysRef.textContent = `${days}`;
    hoursRef.textContent = `${hours}`;
    minutesRef.textContent = `${minutes}`;
    secondsRef.textContent = `${seconds}`;
    if (deltaTime <= 1000) {
      clearInterval(intervalId);
    }
    // console.log(`${days}:${hours}:${minutes}:${seconds}`);
  }

  btnRef.disabled = true;
  inputRef.disabled = true;
}

// console.log(time);
// console.log(userSelectedDate);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}