
const monthEl = document.querySelector(".month h1");
const fullDateEl = document.querySelector(".month p");
const dayEl = document.getElementById("days");



const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;




const months = [
    "January",
    "February",
    "March",
    "April",
    "may",
    "june",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
 monthEl.innerHTML =  months[monthInx]; 
fullDateEl.innerHTML = new Date().toDateString();
fullDateEl.style.color = "green"

console.log(months[monthInx]);

let days = "";
for (let i = firstDay; i > -1; i--) {
    days += `<div class="empty"></div>`
}

for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="bg-red-500 py-2 text-white  sm:w-full w-10">${i}</div>`;
    }else{
        days += `<div>${i}</div>`;
    }
    
}
dayEl.innerHTML = days;