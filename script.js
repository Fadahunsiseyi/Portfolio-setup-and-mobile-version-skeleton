const menuWrapper = document.getElementById('menuWrapper');

const menuMob = () => {
  menuWrapper.classList.toggle('open-menu');
}
// POPUP

const popupContainer = document.querySelector('.popup-container')

const PopUp = () => {
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


const portfolio = [
  {
    id: 1,
    img: ['work-1-cover.png', 'work-2-cover.png'],
    title: "Tonic",
    subtitle: ['Canopy', 'Back End Dev', 2015],
    details: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ['html', 'css', 'javascript'],
    btn: "See project"
  },
  {
    id: 2,
    img: ['work-2-cover.png'],
    title: "Tonic",
    subtitle: ['Canopy', 'Back End Dev', 2015],
    details: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ['html', 'css', 'javascript'],
    btn: "See project"
  },
  {
    id: 3,
    img: ['work-3-cover.png'],
    title: "Tonic",
    subtitle: ['Canopy', 'Back End Dev', 2015],
    details: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ['html', 'css', 'javascript'],
    btn: "See project"
  },
  {
    id: 4,
    img: ['work-4-cover.png'],
    title: "Tonic",
    subtitle: ['Canopy', 'Back End Dev', 2015],
    details: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ['html', 'css', 'javascript'],
    btn: "See project"
  },
]

const popupData = [
  {
    title: 'Tonic',
    span: ['Canopy', 'Back End Dev', 2015],
    img: ['Snapshoot Portfolio.png'],
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    technologies: ['html', 'css', 'javascript'],
    btnLive: "See Live",
    btnSource: "See Source",
    live: 'https://fadahunsiseyi.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    source: 'https://github.com/Fadahunsiseyi/Portfolio-setup-and-mobile-version-skeleton'
  }
]

document.getElementById('myWork').innerHTML = portfolio.map(port =>
`<div class="work-item " id="workItem">
<div class="top">
  <img alt="work-item-img" src= './img/work/${port.img[0]}'/>
</div>
<div class="bottom">
  <h3 class="work-title">${port.title}</h3>
  <div class="work-subtitle">
    <span>${port.subtitle[0]}</span>
    <span>${port.subtitle[1]}</span>
    <span>${port.subtitle[2]}</span>
  </div>
  <p class="work-details">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
  <ul class="work-technologies">
    <li class="technology-tag">${port.skills[0]}</li>
    <li class="technology-tag">${port.skills[1]}</li>
    <li class="technology-tag">${port.skills[2]}</li>
  </ul>
  <button id="seeMore" class="view-work-btn" onclick="PopUp()">${port.btn}</button>
</div>
</div>`
).join("");



document.getElementById('popupContainer').innerHTML = popupData.map(popup =>
  `
  <div class="popup-overlay" id="popupOverlay"></div>
  <div class="popup-content" id="popupContent">
    <div class="popup-head">
      <h2 class="popup-title" id="popupTitle">${popup.title}</h2>
      <span class="popup-close" id="popupClose" onclick="closeBtn()"></span>
    </div>
    <div class="popup-subtitle" id="popupSubtitle">
      <span id="popupCompany">${popup.span[0]}</span>
      <span id="popupRole">${popup.span[1]}</span>
      <span id="popupYear">${popup.span[2]}</span>
    </div>
    <img class="popup-image" alt="work image" id="popupImage" src="./img/${popup.img[0]}">
    <div class="popup-bottom">
      <div class="popup-left">
        <p class="popup-description" id="popupDescription">
         ${popup.description}
        </p>
      </div>
      <div class="popup-right">
        <ul class="popup-technologies" id="popupTechnlogies">
          <li>${popup.technologies[0]}</li>
          <li>${popup.technologies[1]}</li>
          <li>${popup.technologies[2]}</li>
        </ul>
        <hr>
        <div class="popup-actions">
        <a href=${popup.live}>
          <button class="popup-action-btn" id="popupLive">
          ${popup.btnLive} <i class="fa fa-external-link" aria-hidden="true"></i>
          </button>
              </a>
              <a href=${popup.source}>
          <button class="popup-action-btn" id="popupSource" >${popup.btnSource} <i class="fa fa-github"
              aria-hidden="true"></i></button>
              </a>
        </div>
      </div>
    </div>
  </div>
  `
  ).join("");
