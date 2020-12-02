// 'use strict';

var inputName = document.getElementById('profile-name');
var inputAge = document.getElementById('profile-age');
var inputPhone = document.getElementById('profile-phone');
var inputNumber = document.getElementById('profile-number');
var form = document.getElementById('profile');

inputName.addEventListener('blur', () => {
    let regexpletters = new RegExp('^[a-zа-яё]+$', 'i');
    if (inputName.value.search(regexpletters) == -1)
    {
        inputName.classList.add("input_error");
        
    }
}, true);

inputName.addEventListener('focus', () => {
    inputName.classList.remove("input_error");
   
    
}, true)

inputAge.addEventListener('blur', () => {
    let zerotohundred = new RegExp(/^[0-9][0-9]?$|^100$/);
    if (inputAge.value.search(zerotohundred) == -1)
    {
        inputAge.classList.add("input_error");
        
    }
    if (inputAge.value == "")
    {
        inputAge.classList.remove("input_error");
        
    }
}, true)

inputAge.addEventListener('focus', () => {
    inputAge.classList.remove("input_error");
}, true)

inputPhone.addEventListener('blur', () => {
    let phonenumber = new RegExp(/^\+7\d{10}$/);
    if (inputPhone.value.search(phonenumber) == -1)
    {
        
        inputPhone.classList.add("input_error");
    }
    if (inputPhone.value == "")
    {
        inputPhone.classList.remove("input_error");
        
    }
}, true)

inputPhone.addEventListener('focus', () => {
    inputPhone.classList.remove("input_error");
    
}, true)

inputNumber.addEventListener('blur', () => {
    let exp = new RegExp(/\d+/);
    if (inputNumber.value.search(exp) == -1)
    {
        inputNumber.classList.add("input_error")
        
    }
    if (inputNumber.value == "")
    {
        inputNumber.classList.remove("input_error");
        
    }
}, true)

window.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.remove("form_invalid");
    form.classList.remove("form_valid");

    if (inputName.value == "")
    {
        inputName.classList.add("input_error");
    }

    let regexpletters = new RegExp('^[a-zа-яё]+$', 'i');
    if (inputName.value.search(regexpletters) == -1)
    {
        inputName.classList.add("input_error");
        
    }

    let zerotohundred = new RegExp(/^[0-9][0-9]?$|^100$/);
    if (inputAge.value.search(zerotohundred) == -1)
    {
        inputAge.classList.add("input_error");
        
    }
    if (inputAge.value == "")
    {
        inputAge.classList.remove("input_error");
        
    }

    let phonenumber = new RegExp(/^\+7\d{10}$/);
    if (inputPhone.value.search(phonenumber) == -1)
    {
       
        inputPhone.classList.add("input_error");
    }
    if (inputPhone.value == "")
    {
        inputPhone.classList.remove("input_error");
      
    }

    let exp = new RegExp(/\d+/);
    if (inputNumber.value.search(exp) == -1)
    {
        inputNumber.classList.add("input_error")
        
    }
    if (inputNumber.value == "")
    {
        inputNumber.classList.remove("input_error");
        
    }

    let a = inputName.classList.contains("input_error");
    let b = inputAge.classList.contains("input_error");
    let c = inputPhone.classList.contains("input_error");
    let d = inputNumber.classList.contains("input_error");

    

    if (a || b || c || d) // если есть ошибка - форма ошибочна
    {
        form.classList.add("form_invalid");
    }
    else
    {
        form.classList.add("form_valid");
    }


    
})





function validateForm() {
   
}