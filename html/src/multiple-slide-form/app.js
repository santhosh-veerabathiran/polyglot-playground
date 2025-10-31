const form = document.querySelector('form');
const steps = Array.from(document.querySelectorAll('form .step'));
const buttons = {
    next: document.querySelectorAll('form .next-btn'),
    previous: document.querySelectorAll('form .previous-btn'),
};

function changeStep(button) {
    const active = document.querySelector('.active');

    const index = steps.indexOf(active);
    const step = button === 'next' ? 1 : -1;

    steps[index].classList.remove('active');
    steps[index + step].classList.add('active');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = Array.from(form.querySelectorAll('input')).map((input) => ({ name: input.name, value: input.value }));
    console.log(inputs);
    form.reset();
});

Object.entries(buttons).map(([key, buttons]) => {
    for (const button of buttons) button.addEventListener('click', () => changeStep(key));
});
