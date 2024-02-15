let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
    let date = new Date();
    let hour = date.getHours() * 30;
    let minute = date.getMinutes() * 6;
    let second = date.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hour + minute / 12}deg)`;
    min.style.transform = `rotateZ(${minute}deg)`;
    sec.style.transform = `rotateZ(${second}deg)`;
}, 1000);