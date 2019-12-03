// variables that link with our HTML
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
      // renders to p tags
      messageOne.textContent = 'Loading...'
      messageTwo.textContent = ''

      // Setup call to fetch weather data using parse JSON response with conditional 
      // to print error or location and forecast data
      fetch('/weather?address=' + location).then((response) => {
      response.json().then((data) => {
          if (data.error) {
            messageOne.textContent = data.error
          } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
          }
      })
  })
})