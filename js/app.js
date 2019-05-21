var form = document.getElementById('attendance-form')
var emailInput = document.getElementById('email')
var tBody = document
  .getElementById('attendees')
  .getElementsByTagName('table')[0]
  .getElementsByTagName('tbody')[0]

form.onsubmit = function(event) {
  var tr = document.createElement('tr')
  var tdEmail = document.createElement('td')
  tdEmail.textContent = emailInput.value
  emailInput.value = ''
  tr.appendChild(tdEmail)

  var tdTimestamp = document.createElement('td')
  var dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }
  tdTimestamp.textContent = (new Date()).toLocaleDateString('sr-Latn-RS', dateOptions)

  tr.appendChild(tdTimestamp)
  tBody.prepend(tr)

  window.location.hash = ''
  window.location.hash = 'attendees'
  return false;
}
