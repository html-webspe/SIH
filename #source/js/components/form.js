const fileInput = document.querySelector('input[type="file"]');

if (fileInput) {
   fileInput.addEventListener('change', (e) => {
      let files = e.currentTarget.files;

      if (files.length) {
         fileInput.closest('label').querySelector('span').textContent = files[0].name;
      } else {
         fileInput.closest('label').querySelector('span').textContent = 'Загрузить фото';
      }
   });
}


let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let validateForms = function (selector, rules, successModal, yaGoal) {
   new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form) {
         let formData = new FormData(form);

         let xhr = new XMLHttpRequest();

         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
               if (xhr.status === 200) {
                  console.log('Отправлено');
               }
            }
         }

         xhr.open('POST', 'mail.php', true);
         xhr.send(formData);

         form.reset();
      }
   });
}

validateForms('.form',
   {
      email: { required: true, email: true },
      password: { required: true },
      passwordMore: { required: true },
      tel: { required: true },
      name: { required: true },
      firstName: { required: true },
      lastName: { required: true },
      check: { required: true },
      bankCode: { required: true },
      snils: { required: true },
      codeInn: { required: true },
      citizenship: { required: true },
      passport: { required: true }
   });
