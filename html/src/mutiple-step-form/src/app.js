const form = document.querySelector('form');
const slidePage = document.querySelector('.slidepage');
const bullets = document.querySelectorAll('.step .bullet');
const progressTexts = document.querySelectorAll('.step p');
const progressChecks = document.querySelectorAll('.step .check');
const submitButton = document.querySelector('.submit');

Array.from({ length: 3 }, (_, i) => {
    const buttons = {
        next: document.querySelector(`.next-${i + 1}`),
        previous: document.querySelector(`.prev-${i + 1}`),
    };

    buttons.next.addEventListener('click', () => {
        slidePage.style.marginLeft = `-${(i + 1) * 25}%`;
        [bullets, progressTexts, progressChecks].map((element) => element[i].classList.add('active'));
    });

    buttons.previous.addEventListener('click', () => {
        slidePage.style.marginLeft = `-${i * 25}%`;
        [bullets, progressTexts, progressChecks].map((element) => element[i].classList.remove('active'));
    });
});

submitButton.addEventListener('click', () => {
    slidePage.style.marginLeft = '-100%';
    [bullets, progressTexts, progressChecks].map((element) => element[3].classList.add('active'));

    const inputs = Array.from(form.querySelectorAll('input')).map((input) => ({ name: input.name, value: input.value }));
    console.log(inputs);

    setTimeout(() => {
        alert("You're successfully signed up");
    }, 800);
});
