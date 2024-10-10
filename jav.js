function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.getElementById('second-hand');
    const minuteHand = document.getElementById('minute-hand');
    const hourHand = document.getElementById('hour-hand');

    const secondDegree = (seconds / 60) * 360;
    const minuteDegree = (minutes / 60) * 360;
    const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30;

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setClock, 1000);
setClock();

const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
