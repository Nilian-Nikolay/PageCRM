// модальное окно
let modal = document.getElementById("contactModal");
let buttons = document.querySelectorAll(".contactButton");
let span = document.getElementsByClassName("close")[0];

buttons.forEach(button => {
    button.onclick = function() {
        modal.style.display = "block";
    };
});

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
};







let modal2 = document.getElementById("contactModal2");
let btn2 = document.getElementById("contactButton2");
let span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
    var nameInput = document.querySelector('.modal-content-form[type="text"]');
    var emailInput = document.querySelector('.modal-content-form[type="email"]');
    var agreementCheckbox = document.getElementById('agreementCheckbox');
    var agreementContainer = document.querySelector('.agreement-container');
    var agreementLink = document.querySelector('.agreement-link');

    // Сброс стилей 
    nameInput.style.border = "";
    emailInput.style.border = "";
    agreementContainer.style.color = "#fff";
    agreementLink.style.color = "#fff";

    if (nameInput.value.trim() === "") {
        nameInput.style.border = "2px solid red";
    }
    if (emailInput.value.trim() === "") {
        emailInput.style.border = "2px solid red";
    }
    if (!agreementCheckbox.checked) {
        agreementContainer.style.color = "red";
        agreementLink.style.color = "red";
    }

    if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "" && agreementCheckbox.checked) {
        modal.style.display = "none";
        modal2.style.display = "block";
    } else {
        alert("Пожалуйста, заполните все поля и подтвердите согласие с политикой конфиденциальности.");
    }
}



span2.onclick = function() {
  modal2.style.display = "none";
}



