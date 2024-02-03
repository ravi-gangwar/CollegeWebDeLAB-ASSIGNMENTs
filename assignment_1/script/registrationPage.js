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


document.addEventListener("DOMContentLoaded", function() {
    function validateForm() {
      var name = document.getElementById("name");
      var password = document.getElementById("password");
      var email = document.getElementById("email");
      var phone = document.getElementById("phone");
      var day = document.getElementById("day");
      var month = document.getElementById("month");
      var year = document.getElementById("year");


      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let phoneRegex = /^\d{10}$/;

      if (name.value.trim() === "") {
        alert("Please enter your name");
        return false;
      }else if(name.value.length < 6){
        alert("Name Should not be less than 6 character.")
      }else if (password.value.trim() === "") {
        alert("Please enter your password");
        return false;
      }else if(password.value.length < 6){
        alert("Password Should not be less than 6 character.")

      }else if (!emailRegex.test(email.value.trim())) {
        alert("Please enter a valid email address");
        return false;
      }else if (!phoneRegex.test(phone.value.trim())) {
        alert("Please enter a valid 10-digit phone number");
        return false;
      }else if (day.value === "" || month.value === "" || year.value === "") {
        alert("Please enter your complete date of birth");
        return false;
      }else{
        alert("Your form is Submited!!")
        name.value = ""
        password.value = ""
        email.value = ""
        phone.value = ""
        return true;
      }
    }

    document.getElementById("myForm").onsubmit = validateForm;
  });