const name = prompt("Lütfen İsminizi Yazınız");

const nameDom = document.querySelector("#myName");
nameDom.innerHTML = name;
const clockDOM = document.getElementById("myClock");

const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

setInterval(function () {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var hourShow = hour < 10 ? "0" + hour : hour;
  var minuteShow = minute < 10 ? "0" + minute : minute;
  var secondShow = second < 10 ? "0" + second : second;
  var dayShow = days[date.getDay()];

  var timeDay = `${hourShow}:${minuteShow}:${secondShow} ${dayShow}`;
  clockDOM.innerText = `${timeDay}`;
}, 1000);
