// DATE VARIABLES
let day = moment().format('dddd');
let monday = document.querySelector('#monday span');
let tuesday = document.querySelector('#tuesday span');
let wednesday = document.querySelector('#wednesday span');
let thursday = document.querySelector('#thursday span');
let friday = document.querySelector('#friday span');
let jobOneRate = 30;
let jobTwoRate = 30;

// TABLE VARIABLES
let thisWeek = document.querySelector('.this-week')
let msqMonHours = document.querySelector('#msq-mon-hours');
let msqTueHours = document.querySelector('#msq-tue-hours');
let msqWedHours = document.querySelector('#msq-wed-hours');
let msqThuHours = document.querySelector('#msq-thu-hours');
let msqFriHours = document.querySelector('#msq-fri-hours');


function addDate() {
    if(day === "Monday") {
        monday.innerHTML = moment().format('ll');
        tuesday.innerHTML = moment().add(1, 'days').format('ll');
        wednesday.innerHTML = moment().add(2, 'days').format('ll');
        thursday.innerHTML = moment().add(3, 'days').format('ll');
        friday.innerHTML = moment().add(4, 'days').format('ll');
    } else if (day === "Tuesday") {
        monday.innerHTML = moment().subtract(1, 'days').format('ll');
        tuesday.innerHTML = moment().format('ll');
        wednesday.innerHTML = moment().add(1, 'days').format('ll');
        thursday.innerHTML = moment().add(2, 'days').format('ll');
        friday.innerHTML = moment().add(3, 'days').format('ll');
    } else if (day === "Wednesday") {
        monday.innerHTML = moment().subtract(2, 'days').format('ll');
        tuesday.innerHTML = moment().subtract(1, 'days').format('ll');
        wednesday.innerHTML = moment().format('ll');
        thursday.innerHTML = moment().add(1, 'days').format('ll');
        friday.innerHTML = moment().add(2, 'days').format('ll');
    } else if (day === "Thursday") {
        monday.innerHTML = moment().subtract(3, 'days').format('ll');
        tuesday.innerHTML = moment().subtract(2, 'days').format('ll');
        wednesday.innerHTML = moment().subtract(1, 'days').format('ll');
        thursday.innerHTML = moment().format('ll');
        friday.innerHTML = moment().add(1, 'days').format('ll');
    } else if (day === "Friday") {
        monday.innerHTML = moment().subtract(4, 'days').format('ll');
        tuesday.innerHTML = moment().subtract(3, 'days').format('ll');
        wednesday.innerHTML = moment().subtract(2, 'days').format('ll');
        thursday.innerHTML = moment().subtract(1, 'days').format('ll');
        friday.innerHTML = moment().format('ll');
    } else if (day === "Saturday") {
        monday.innerHTML = moment().add(2, 'days').format('ll');
        tuesday.innerHTML = moment().add(3, 'days').format('ll');
        wednesday.innerHTML = moment().add(4, 'days').format('ll');
        thursday.innerHTML = moment().add(5, 'days').format('ll');
        friday.innerHTML = moment().add(6, 'days').format('ll');
    } else if (day === "Sunday") {
        monday.innerHTML = moment().add(1, 'days').format('ll');
        tuesday.innerHTML = moment().add(2, 'days').format('ll');
        wednesday.innerHTML = moment().add(3, 'days').format('ll');
        thursday.innerHTML = moment().add(4, 'days').format('ll');
        friday.innerHTML = moment().add(5, 'days').format('ll');
    }
}

function calcHours() {
    console.log('change');
}
console.log(msqMonHours)

addDate();
thisWeek.addEventListener('change', calcHours);