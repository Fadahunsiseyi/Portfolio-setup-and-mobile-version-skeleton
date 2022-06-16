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

const portfolioData = [
    {
        id: 1,
        image: './img/work/work-1-cover.png',
        title: 'Tonic',
        subtitle: ['Canopy', 'Back End Dev', 2015],
        details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
        technologies: ['html', 'css', 'javascript'],
        btn: 'See Project'
    }
]

document.getElementById('workItem').innerHTML = portfolioData.map(portfolio => 
    console.log(portfolio)
   `<div class="top">
   <img alt="work-item-img" src=${portfolio.image}/>
 </div>
 <div class="bottom">
 <h3 class="work-title">${portfolio.title}</h3>
 <div class="work-subtitle">
   <span>Canopy</span>
   <span>Back End Dev</span>
   <span>2015</span>
 </div>
 <p class="work-details">
   A daily selection of privately personalized reads; no accounts or sign-ups required.
 </p>
 <ul class="work-technologies">
   <li class="technology-tag">html</li>
   <li class="technology-tag">css</li>
   <li class="technology-tag">javascript</li>
 </ul>
 <button class="view-work-btn" onclick="PopUp()">See Project</button>
</div>`
).join('')