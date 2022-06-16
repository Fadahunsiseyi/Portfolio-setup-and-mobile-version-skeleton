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
    title: "Tonic",
    subtitle: ['Canopy', 'Back End Dev', 2015],
    details: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ['html', 'css', 'javascript'],
    btn: "See project"
  },
]

document.getElementById('workItem').innerHTML = portfolio.map(port =>
`<div class="top">
  <img alt="work-item-img" src="./img/work/work-1-cover.png"/>
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
  <button id="seeMore" class="view-work-btn" onclick="PopUp()">See Project</button>
</div>`
).join("");