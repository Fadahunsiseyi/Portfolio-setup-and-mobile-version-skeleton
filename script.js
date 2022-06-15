const menuWrapper = document.getElementById('menuWrapper');

const menuMob = () => {
  menuWrapper.classList.toggle('open-menu');
}
// POPUP

const popupContainer = document.querySelector('.popup-container')

const PopUp  = (id) => {
    if(popupContainer.classList.contains('show')) {
        console.log('show')
    } else {
        popupContainer.classList.add('show')
    }
}
const closeBtn = () => {
    popupContainer.classList.remove('show');
  }
  
PopUp(1)
closeBtn()
// const body = document.querySelector('body')
// const section = document. createElement('section')

// body.appendChild(section)

// section.innerHTML = `<h1>Hello People</h1> <br/> <button type="button" class="see-more">See More</button>`

// const open = document.querySelector('.see-more')

// open.addEventListener('click', () => {
//    const body2 = document.createElement('div')
//    const section2 = document.createElement('div')
//    section2.innerHTML = `
//    <div class="pd-container" id="pdContainer">
//    <div class="pd-overlay" id="pdOverlay"></div>
//    <div class="pd-content" id="pdContent">
//      <div class="pd-head">
//        <h2 class="pd-title" id="pdTitle">Tonic</h2>
//        <span class="pd-close" id="pdClose" onclick="closeBtn();">
//        </span>
//      </div>
//      <div class="pd-subtitle" id="pdSubtitle">
//        <span id="pdCompany">Canopy</span>
//        <span id="pdRole">Back End Dev</span>
//        <span id="pdYear">2015</span>
//      </div>
//      <img class="pd-image" alt="work image" id="pdImage" src="./assets/img/work-details/details-img-1.png">
//      <div class="pd-bottom">
//        <div class="pd-left">
//          <p class="pd-description" id="pdDescription">
//            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//            industry's
//            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
//            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
//            typesetting, remaining essent.
//          </p>
//        </div>
//        <div class="pd-right">
//          <ul class="pd-technologies" id="pdTechnlogies">
//            <li>html</li>
//            <li>css</li>
//            <li>javascript</li>
//          </ul>
//          <hr>
//          <div class="pd-actions">
//            <button class="pd-action-btn" id="pdLive">See Live <i class="fa fa-external-link"
//                aria-hidden="true"></i></button>
//            <button class="pd-action-btn" id="pdSource">See Source <i class="fa fa-github"
//                aria-hidden="true"></i></button>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>


//     <button type="button" class="close">Close</button>
//     `
//    body2.append(section2)
//    body.appendChild(body2)

//    const close = document.querySelector('.close')
//    close.addEventListener('click', () => {
//     body.removeChild(body2)
//    })


// })