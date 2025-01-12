import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = document.querySelector('.snackbar-input');
const radioBtnResolve = document.querySelector('.radioBtnFulfilled');
const radioBtnReject = document.querySelector('.radioBtnRejected');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(delayInput.value);

  if (isNaN(delay) || delay <= 0) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a valid delay in milliseconds',
    });
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioBtnResolve.checked) {
        resolve(delay);
      } else if (radioBtnReject.checked) {
        reject(delay);
      } else {
        reject('No radio button selected');
      }
    }, delay);
  });

  promise
    .then(message => {
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
