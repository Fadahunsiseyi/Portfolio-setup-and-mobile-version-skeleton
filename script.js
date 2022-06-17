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



  //FORM VALIDATION
  const contactForm = document.getElementById('contact-Form');
  const userName = document.getElementById('userName')
  const userEmail = document.getElementById('userEmail')
  const textArea = document.getElementById('textareaMessage')

  const _required = (value) => value !== '';
  const _between = (length, min, max) => !(length > min || length < max)
  const _emailValidation = (value) => {
    const _regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return  _regularExpression.test(value)
  }

  const showError = (input, message) => {
    const inputField = input.parentElement
    inputField.classList.remove('success')
    inputField.classList.add('failure')

    const errorText = inputField.querySelector('small')
    errorText.textContent = message
  }
  const showSuccess = (input) => {
    const inputField = input.parentElement
    inputField.classList.remove('failure')
    inputField.classList.add('success')

    const errorText = inputField.querySelector('small')
      errorText.textContent = '';
  }

  const validateUserName = () => {
    const username = userName.value.trim()
    const _min = 3
    const _max = 30
    var _valid = false
    if(!_required(username)) {
      showError(userName, 'User name must be filled with text')
    } else if (!_between(username.length, _max, _min)) {
      showError(userName, 'User name must have a minimum of 3 letters and a maximum of 30')
    } else {
      showSuccess(userName)
      _valid = true
    }
    return _valid
  }

  const validateEmail = () => {
    const useremail = userEmail.value.trim().toLowerCase()
    let valid = false
    const pattern = /[A-Z]/
    if(pattern.test(userEmail.value)) {
      showError(userEmail, 'Email has to be in lowercase')
    } else if (!_required(useremail)) {
      showError(userEmail, 'Please enter email')
    } else if (!_emailValidation(useremail)) {
      showError(userEmail, 'Please enter a valid email')
    }
    else {
      showSuccess(userEmail)
      valid = true
    }
    return valid
  }

  const validateMessage = () => {
    let valid = false
    const _min = 15;
    const _max = 500
    const textareaMessage = textArea.value.trim()

    if(!_required(textareaMessage)) {
      showError(textArea, 'Please enter a message')
    } else if (!_between(textareaMessage.length, _max, _min)) {
      showError(textArea, 'Message should at least 15 - 500 characters')
    } else {
      showSuccess(textArea)
      valid = true
    }
    return valid
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const _validateUserName = validateUserName()
    const _validateUserEmail = validateEmail()
    const _validateMessage = validateMessage()
    const allValidation = _validateMessage && _validateUserEmail && _validateUserName
    if(!allValidation) {
      document.querySelector('.btn-error').innerHTML = `<p>Please fill all required fields</p>`
    } else {
       contactForm.submit()
    }
  })

  contactForm.addEventListener('input', (e) => {
    switch (e.target.id) {
      case 'userName':
        validateUserName();
        break;
      case 'userEmail':
        validateEmail();
        break;
      case 'textareaMessage':
        validateMessage();
        break;
      default:
        validateUserName();
    }
  });