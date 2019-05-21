const express = require('express')
const router = express.Router()

const meetups = require('../persistence/meetupStorage')

router.get('/', (req, res) => {
  const meetupsViewModels = meetups
    .map(meetup => {
      return {
        ...meetup,
        upcoming      : +(new Date(meetup.datetime)) > Date.now(),
        date          : new Date(meetup.datetime).toISOString().split('T')[0],
        dateFormatted : new Date(meetup.datetime).toDateString().split(' ').slice(1).join(' '),
        time          : new Date(meetup.datetime).toISOString().split('T')[1].replace(/\:\d{2}\.\d+Z$/, ''),
        attendeeCount : meetup.attendees.length,
      }
    })
    .sort((m1, m2) => +(new Date(m1.datetime)) < +(new Date(m2.datetime)))
  const viewModel = {
    title: 'IT Zvornik | Meetups',
    meetups: {
      upcoming : meetupsViewModels.filter(m => m.upcoming === true),
      past     : meetupsViewModels.filter(m => m.upcoming === false),
    },
  }
  res.render('index', viewModel)
})

module.exports = router
