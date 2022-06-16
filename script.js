const menuWrapper = document.getElementById('menuWrapper');

const menuMob = () => {
  menuWrapper.classList.toggle('open-menu');
}
// POPUP

const popupContainer = document.querySelector('.popup-container')

const PopUp  = () => {
    if(popupContainer.classList.contains('show')) {
        console.log('show')
    } else {
        popupContainer.classList.add('show')
    }
}
const closeBtn = () => {
    popupContainer.classList.remove('show');
  }
  
PopUp();
closeBtn();
