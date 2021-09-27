/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)

   // Validate that variables exist
   if (toggle && nav) {
      toggle.addEventListener('click', () => {
         // We add the show-menu class to the div tag with the nav__menu class
         nav.classList.toggle('show-menu');
         toggle.classList.toggle('active');
      })
   }
}
showMenu('header-menu__icon', 'header-menu')


const windowInnerHeight = window.innerHeight;
const authColForm = document.querySelector('.auth-col__form');
const authBlock = document.querySelector('.auth-block');
const аа = window.screen.availHeight;


if (windowInnerHeight < 1084) {
   authBlock.style.minHeight = (аа - 249) + 'px';
   authColForm.style.paddingTop = "30px";
   authColForm.style.paddingBottom = "30px";
} else {
   authBlock.style.minHeight = '916px'
}
