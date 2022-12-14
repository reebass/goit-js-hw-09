import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  daysTimer: document.querySelector('[data-days]'),
  hoursTimer: document.querySelector('[data-hours]'),
  minutesTimer: document.querySelector('[data-minutes]'),
  secondsTimer: document.querySelector('[data-seconds]'),
}

refs.btnStart.classList.add('btn-start')


refs.btnStart.disabled = true;
let differenceDete;
let idInterval = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
        if(Date.parse(selectedDates[0]) >= Date.parse(options.defaultDate)){
          differenceDete = selectedDates[0]
          refs.btnStart.disabled = false;
        //  differenceDete = Date.parse(selectedDates[0]) - Date.parse(options.defaultDate);
        //  refs.daysTimer.textContent = convertMs(differenceDete).days.toString().padStart(2, '0');
        //  refs.hoursTimer.textContent = convertMs(differenceDete).hours.toString().padStart(2, '0');
        //  refs.minutesTimer.textContent = convertMs(differenceDete).minutes.toString().padStart(2, '0');
        //  refs.secondsTimer.textContent = convertMs(differenceDete).seconds.toString().padStart(2, '0');
      } else {
        refs.btnStart.disabled = true;
        Notify.warning('Please choose a date in the future');
        // refs.daysTimer.textContent = "00";
        //  refs.hoursTimer.textContent = "00";
        //  refs.minutesTimer.textContent = "00";
        //  refs.secondsTimer.textContent = "00";
      }
    },
  };
  flatpickr(refs.input, options)

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

  refs.btnStart.addEventListener('click', onStartTimer);

  function onStartTimer() {
    idInterval = setInterval(()=>{
        let deltaDete = Date.parse(differenceDete) - Date.now();
        if(deltaDete <= 1000) {
          clearInterval(idInterval);
          refs.btnStart.disabled = true;
        }
          refs.daysTimer.textContent = convertMs(deltaDete).days.toString().padStart(2, '0');
         refs.hoursTimer.textContent = convertMs(deltaDete).hours.toString().padStart(2, '0');
         refs.minutesTimer.textContent = convertMs(deltaDete).minutes.toString().padStart(2, '0');
         refs.secondsTimer.textContent = convertMs(deltaDete).seconds.toString().padStart(2, '0');
    }, 1000)
  }





