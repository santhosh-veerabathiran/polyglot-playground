const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua &amp; Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia &amp; Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central Arfrican Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D Ivoire',
    'Croatia',
    'Cuba',
    'Curacao',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'French West Indies',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauro',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Pierre &amp; Miquelon',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'St Kitts &amp; Nevis',
    'St Lucia',
    'St Vincent',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    "Timor L'Este",
    'Togo',
    'Tonga',
    'Trinidad &amp; Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks &amp; Caicos',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (US)',
    'Yemen',
    'Zambia',
    'Zimbabwe',
];

let current = -1;

const input = document.getElementById('myInput');

input.addEventListener('input', function (e) {
    const value = this.value;

    closeAllLists();
    if (!value) {
        return;
    }

    current = -1;

    const items = document.createElement('DIV');
    items.setAttribute('id', this.id + 'autocomplete-list');
    items.setAttribute('class', 'autocomplete-items');

    this.parentNode.appendChild(items);

    for (const country of countries) {
        const key = country.substring(0, value.length);

        if (key.toUpperCase() == value.toUpperCase()) {
            const list = document.createElement('div');

            const html = `<strong>${key}</strong>${country.substring(value.length)}<input type="hidden" value="${country}">`;
            list.innerHTML = html;

            list.addEventListener('click', function (e) {
                input.value = this.getElementsByTagName('input')[0].value;
                closeAllLists();
            });

            items.appendChild(list);
        }
    }
});

input.addEventListener('keydown', function (e) {
    const items = document.getElementById(this.id + 'autocomplete-list')?.getElementsByTagName('div');
    if (!items) return;

    if (e.keyCode == 40) {
        current++;
        setActive(items);
        return;
    }

    if (e.keyCode == 38) {
        current--;
        setActive(items);
        return;
    }

    if (e.keyCode == 13) {
        e.preventDefault();
        if (current >= 0) items[current].click();
    }

    if (e.keyCode == 27) closeAllLists();
});

document.addEventListener('click', function (e) {
    closeAllLists();
});

function setActive(items) {
    if (!items) return false;

    for (const item of items) item.classList.remove('autocomplete-active');

    if (current >= items.length) current = 0;
    if (current < 0) current = items.length - 1;

    items[current].classList.add('autocomplete-active');
}

function closeAllLists() {
    document.getElementById(input.id + 'autocomplete-list')?.remove();
}
