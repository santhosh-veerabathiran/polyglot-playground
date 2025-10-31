const button = document.getElementById('btn');
const randomNumber = document.getElementById('randnum');

const high = document.getElementById('low');
const low = document.getElementById('high');

button.onclick = function () {
    const min = Number.parseInt(low.value || 0);
    const max = Number.parseInt(high.value || 100);

    randomNumber.innerHTML = Math.floor(Math.random() * (max - min)) + min;
};
