"use strict";document.addEventListener("DOMContentLoaded",function(){var r=document.querySelector('input[type="file"]');r&&r.addEventListener("change",function(e){var t=e.currentTarget.files;t.length?r.closest("label").querySelector("span").textContent=t[0].name:r.closest("label").querySelector("span").textContent="Загрузить фото"});var e=document.querySelectorAll('input[type="tel"]');new Inputmask("+7 (999) 999-99-99").mask(e);var t,n;t=".form",n={email:{required:!0,email:!0},password:{required:!0},passwordMore:{required:!0},tel:{required:!0},name:{required:!0},firstName:{required:!0},lastName:{required:!0},check:{required:!0},bankCode:{required:!0},snils:{required:!0},codeInn:{required:!0},citizenship:{required:!0},passport:{required:!0}},new window.JustValidate(t,{rules:n,submitHandler:function(e){var t=new FormData(e),r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&200===r.status&&console.log("Отправлено")},r.open("POST","mail.php",!0),r.send(t),e.reset()}});var a,i,s,d;a="header-menu__icon",i="header-menu",s=document.getElementById(a),d=document.getElementById(i),s&&d&&s.addEventListener("click",function(){d.classList.toggle("show-menu"),s.classList.toggle("active")})});