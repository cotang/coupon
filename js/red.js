/* 11. валидация формы */
var modalForm = document.querySelector('.modal__form');
var personName = document.querySelector('.input__name');
var tel = document.querySelector('.input__phone');
var email = document.querySelector('.input__mail');

function updateStatus(el, isValid, message){  
  var currentMessage = el.closest('.modal__line').querySelector('.message__error');
  if (currentMessage != null ){
    el.parentNode.removeChild(currentMessage)
  }
  if (!isValid){
    el.style.borderColor = 'initial';
    var messageError = document.createElement('p');
    messageError.classList.add('message__error');
    messageError.innerHTML = message;
    el.parentNode.appendChild(messageError);
  } else {
    el.style.borderColor = '#3cca30';
  }
};


personName.addEventListener('change', function(){
  var nameRegExp = /^.+$/;
  var isValid = nameRegExp.test(personName.value);
  var messageText = "Заполните поле";
  updateStatus(personName, isValid, messageText);
});
tel.addEventListener('change', function(){
  var telRegExp = /^.+$/;
  var isValid = telRegExp.test(tel.value);
  var messageText = "Заполните поле";
  updateStatus(tel, isValid, messageText);
});
email.addEventListener('change', function(){
  var emailRegExp = /^.+@.+\..+$/;
  var isValid = emailRegExp.test(email.value);
  var messageText = "Email должен содержать символы @ и .";
  updateStatus(email, isValid, messageText);
});








/* 12. отправка формы */
var modalOrder = document.querySelector('.modal_order');
var modalSuccess = document.querySelector('.modal_success');
var modalUnderlay = document.querySelector('.modal_underlay');
var modalBtn = document.querySelector('.modal .btn');
var loader = document.querySelector('.loader');

modalBtn.addEventListener('click', showResult);

function showResult(e){
  e.preventDefault();
  modalOrder.style.display = 'none';
  loader.style.display = 'block';
  loader.style.top = '150px';
  /* */
  if (true){
    setTimeout(hideLoader, 1000);    
  }
}
function hideLoader() {
  loader.style.display = 'none';
  modalSuccess.style.display = 'block';
  setTimeout(hideSuccess, 1500);
}
function hideSuccess() {
  modalSuccess.style.display = 'none';
  modalUnderlay.style.display = 'none';
}



/* 13. scroll */
window.addEventListener('scroll', function(){
  console.log('scroll')
});