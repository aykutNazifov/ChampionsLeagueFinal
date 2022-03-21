const daysid = document.getElementById("days");
const hoursid = document.getElementById("hours");
const minsid = document.getElementById("mins");
const secondsid = document.getElementById("secs");

const final = "28 May 2022";

function countDown() {
  const curentDate = new Date();
  const finalDate = new Date(final);

  const titalSeconds = (finalDate - curentDate) / 1000;
  const seconds = Math.floor(titalSeconds % 60);
  const days = Math.floor(titalSeconds / 3600 / 24);
  const hours = Math.floor(titalSeconds / 3600) % 24;
  const mins = Math.floor(titalSeconds / 60) % 60;

  daysid.innerHTML = days;
  hoursid.innerHTML = hours;
  minsid.innerHTML = mins;
  secondsid.innerHTML = seconds;
}

/* setInterval(() => {
    countDown();
}, 1000); */

setInterval(countDown, 1000);
