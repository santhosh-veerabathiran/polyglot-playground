const keys = [
    'Ashok',
    'Bharath',
    'Dinesh',
    'Kamesh',
    'Kishore',
    'Naveen Raj',
    'Jidhush',
    'Ranjith',
    'Santhosh',
    'Saravanan',
    'Sharan',
    'Venkitaramanan',
    'Ganesh Kumar',
];

const input = document.getElementById('input-box');
const results = document.querySelector('.result-box');

input.oninput = function () {
    const value = input.value;

    if (value.length) {
        const matches = keys.filter((key) => key.toLowerCase().includes(value.toLowerCase()));

        if (matches.length) {
            const regex = new RegExp(value, 'gi');
            const list = matches.map((match) => {
                return `<li class="list" data-value=${match} onclick=select(this)>${match.replaceAll(regex, (match) => `<strong>${match}</strong>`)}</li>`;
            });

            results.innerHTML = `<ul>${list.join('')}</ul>`;
            return;
        }

        results.innerHTML = '<ul><li>No Result Found</li></ul>';
        return;
    }

    select();
};

input.onkeydown = function (e) {
    if (e.key === 'Escape') {
        select();
        return;
    }

    const lists = Array.from(document.querySelectorAll('li.list'));
    if (lists.length) {
        let index = lists.findIndex((list) => list.classList.contains('active'));

        if (e.key === 'Enter' && index > -1) {
            select(lists[index]);
            return;
        }

        if (e.key === 'ArrowDown') {
            lists[index]?.classList.remove('active');

            if (index >= lists.length - 1) index = -1;
            index++;
            lists[index].classList.add('active');
            return;
        }

        if (e.key === 'ArrowUp') {
            lists[index]?.classList.remove('active');

            if (index <= 0) index = lists.length;
            index--;
            lists[index].classList.add('active');
        }
    }
};

document.addEventListener('click', function (e) {
    select();
});

function select(list) {
    if (list) input.value = list.dataset.value;
    results.innerHTML = '';
}
