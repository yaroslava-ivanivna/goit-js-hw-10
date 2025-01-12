import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate = null;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      userSelectedDate = null;
      document.querySelector('.start-timer-btn').disabled = true;
    } else {
      userSelectedDate = selectedDate;
      document.querySelector('.start-timer-btn').disabled = false;
    }
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const startBtn = document.querySelector('.start-timer-btn');
const timerDisplay = document.querySelector('.timer');
const datetimePicker = document.getElementById('datetime-picker');

let intervalId = null;

startBtn.addEventListener('click', () => {
  if (!userSelectedDate) return;

  startBtn.disabled = true;
  datetimePicker.disabled = true;

  timerDisplay.classList.add('active');

  intervalId = setInterval(() => {
    const currentTime = new Date();
    const remainingTime = userSelectedDate - currentTime;

    if (remainingTime <= 0) {
      clearInterval(intervalId);
      iziToast.success({ title: 'Success', message: 'Time is up!' });
      timerDisplay.classList.remove('active');
      startBtn.disabled = true;
      datetimePicker.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainingTime);

    timerDisplay.innerHTML = `
    <span class="wrapper"><span id="days">${addLeadingZero(days)}</span>:
      <span class="label">Days</span></span>
    <span class="wrapper"> <span id="hours">${addLeadingZero(hours)}</span>:
      <span class="label">Hours</span></span>
    <span class="wrapper"><span id="minutes">${addLeadingZero(minutes)}</span>:
      <span class="label">Minutes</span></span>
    <span class="wrapper"><span id="seconds">${addLeadingZero(seconds)}</span>
      <span class="label">Seconds</span></span>
    `;
  }, 1000);
});
