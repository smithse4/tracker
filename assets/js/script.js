let day = moment().format('dddd');
let monday = document.querySelector('#monday span');
let tuesday = document.querySelector('#tuesday span');
let wednesday = document.querySelector('#wednesday span');
let thursday = document.querySelector('#thursday span');
let friday = document.querySelector('#friday span');

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

addDate();