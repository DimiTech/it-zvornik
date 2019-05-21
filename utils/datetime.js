function createLocalizedDateString(dateObject) {
  var dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }
  return dateObject.toLocaleDateString('sr-Latn-RS', dateOptions)
}

module.exports = {
  createLocalizedDateString,
}