'use strict';
{
  function checkLetters(name) {
    let regexp = /^[a-zа-яё]+$/i;
    return regexp.test(name);
  }

  function checkNumbers(value, min, max) {
    let number = value.trim();
    if (number && isFinite(number)) {
      if (min === undefined || max === undefined) {
        return true;
      }
      else if ((+number >= min) && (+number <= max)) {
        return true;
      } else {
        return false;
      }
    } else return false;
  }

  function checkregexp(value, regexp) {
    return regexp.test(value);
  }

  function isEmty(value) {
    return value.trim() === '' ? true : false;
  }

  function checkInputs(elem, formVerify) {
    let value = elem.value;
    let required = elem.dataset.hasOwnProperty('required');
    let typeValid = elem.dataset.validator;

    let statusInput;
    //checking that the input is empty
    if (isEmty(value)) {
      statusInput = !required;
    }
    else if (typeValid === 'letters') {
      statusInput = checkLetters(value);
    }
    else if (typeValid === 'number') {
      let min = elem.dataset.validatorMin;
      let max = elem.dataset.validatorMax;
      statusInput = checkNumbers(value, min, max);
    }
    else if (typeValid === 'regexp') {
      let regexp = new RegExp(elem.dataset.validatorPattern);
      statusInput = checkregexp(value, regexp);
    }

    if (!statusInput) {
      elem.classList.add(formVerify['inputErrorClass']);
    }
    return statusInput;
  }

  // Код валидации формы
  window.validateForm = function (formVerify) {
    let form = document.getElementById(formVerify['formId']);

    form.addEventListener("focus", function (event) {
      let elem = event.target;
      if (elem.tagName === 'INPUT') {
        elem.classList.remove(formVerify['inputErrorClass']);
      }
    }, true)

    form.addEventListener("blur", function (event) {
      let elem = event.target;
      if (elem.tagName === 'INPUT'); {
        checkInputs(elem, formVerify);
      }
    }, true);

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let inputs = form.getElementsByTagName("input");

      form.classList.remove(formVerify['formInvalidClass']);
      form.classList.remove(formVerify['formValidClass']);

      let statusForm = [...inputs]
        .map(item => checkInputs(item, formVerify))
        .find(item => item === false);
      if (statusForm === false) {
        form.classList.add(formVerify['formInvalidClass']);
      } else {
        form.classList.add(formVerify['formValidClass']);
      }
    });
  }
}




