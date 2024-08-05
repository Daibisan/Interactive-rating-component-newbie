const buttons = document.querySelectorAll('.rating-btn')
const submit = document.querySelector('.submit-btn')
let rating = ''

function refreshClasses() {
  buttons.forEach((button) => {
    if (button.classList.contains('actived')) {
      button.classList.remove('actived')
    }

    if (!button.classList.contains('hoverable')) {
      button.classList.add('hoverable')
    }
  })
}

function hideMainState() {
  const mainState = document.querySelector('.main-state')
  mainState.setAttribute('hidden', true);  
}

function showThankState() {
  const thankState = document.querySelector('.thanks-state')
  thankState.removeAttribute('hidden')
}

// each button logic
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    refreshClasses()
    e.target.classList.add('actived') //set button to active color
    e.target.classList.remove('hoverable') //remove hoverable from the button
    rating = e.target.dataset.value //set user-rating
  })
})

// submit button logic
submit.addEventListener('click', () => {
  if (rating !== '') {
    refreshClasses()
    hideMainState()
  
    const rateElm = document.querySelector('.rate')
    rateElm.innerHTML = rating
    
    showThankState()

  } else {
    alert('rating should be filled')
  }
})