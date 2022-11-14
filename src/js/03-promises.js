import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form')
form.addEventListener('submit', onCreatePromise)


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setInterval(() => {
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }
}, delay)
});

}

function onCreatePromise(evt) {
  evt.preventDefault()
  let delay = Number(evt.currentTarget.elements.delay.value);
  const step = Number(evt.currentTarget.elements.step.value);
  const amount = Number(evt.currentTarget.elements.amount.value);
  for (let i = 1; i <= Number(amount); i+=1) {
     createPromise(i, delay).then(onSuccess).catch(onError)
     delay += step
  }
}


function onSuccess({position, delay}) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({position,delay}) {
  Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`)
}
