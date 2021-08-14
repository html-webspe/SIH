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


