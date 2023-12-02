const daysSelect = document.getElementById("day");

daysSelect.innerHTML = "";
for (let i = 1; i <= 31; i++) {
   daysSelect.innerHTML += `<option value="${i}">${i}</option>`;
}





const yearSelect = document.getElementById("year");

yearSelect.innerHTML = "";
for (let i = 1995; i <= 2023; i++) {
    yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
}
