const day0 = document.querySelectorAll('.day-2')
const day1 = document.querySelectorAll('.day-3')
const day2 = document.querySelectorAll('.day-4')
const day3 = document.querySelectorAll('.day-5')
const day4 = document.querySelectorAll('.day-6')
const day5 = document.querySelectorAll('.day-7')
const day6 = document.querySelectorAll('.day-1')


const date = new Date()
const day = date.getDay()






switch (day) {
    case 0:
        day0.forEach(element => {
            element.classList.add('date-new')
        });
        day1.forEach(element => {
            element.classList.add('new-date')
        });
        break;
    case 1:
        day1.forEach(element => {
            element.classList.add('date-new')
        });
        day2.forEach(element => {
            element.classList.add('new-date')
        });
        break;
    case 2:
        day2.forEach(element => {
            element.classList.add('date-new')
        });
        day3.forEach(element => {
            element.classList.add('new-date')
        });
        break;
    case 3:
        day3.forEach(element => {
            element.classList.add('date-new')
        });
        day4.forEach(element => {
            element.classList.add('new-date')
        });
        break;
    case 4:
        day4.forEach(element => {
            element.classList.add('date-new')
        });
        day5.forEach(element => {
            element.classList.add('new-date')
        });
        break;
    case 5:
        day5.forEach(element => {
            element.classList.add('date-new')
        });
        day6.forEach(element => {
            element.classList.add('new-date')
        });
        break;
    case 6:
        day6.forEach(element => {
            element.classList.add('date-new')
        });
        day0.forEach(element => {
            element.classList.add('new-date')
        });
        break;
    default:
        break;
}