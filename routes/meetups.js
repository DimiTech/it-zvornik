const createError = require('http-errors')
const express = require('express')
const router = express.Router()

const meetups = require('../persistence/meetupStorage')
const { createLocalizedDateString } = require('../utils/datetime')

router.post('/:id/attendees', (req, res, next) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) {
    throw new Error('Invalid meetup ID')
  }
  const meetup = meetups.find(m => m.id === id)
  if (!meetup) {
    return next(createError(404))
  }

  const body = req.body
  if (!req.body.email) {
    return next(createError(422))
  }
  const newAttendee = {
    email: body.email,
    signUpTimestamp: (new Date()).toISOString()
  }
  meetups.map(m => {
    if (m.id !== id) {
      return m
    }
    else {
      m.attendees.push(newAttendee)
    }
  })
  return res.redirect(`/meetups/${id}`)
})

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id)) {
    throw new Error('Invalid meetup ID')
  }
  const meetup = meetups.find(m => m.id === id)
  if (!meetup) {
    return next(createError(404))
  }
  const viewModel = {
    title: 'IT Zvornik | ' + meetup.title,
    meetup: {
      ...meetup,
      upcoming      : +(new Date(meetup.datetime)) > Date.now(),
      date          : new Date(meetup.datetime).toISOString().split('T')[0],
      dateFormatted : new Date(meetup.datetime).toDateString().split(' ').slice(1).join(' '),
      time          : new Date(meetup.datetime).toISOString().split('T')[1].replace(/\:\d{2}\.\d+Z$/, ''),
      attendeeCount : meetup.attendees.length,
      attendees     : meetup.attendees
        .sort((a1, a2) => +(new Date(a1.datetime)) < +(new Date(a2.datetime)))
        .map(a => {
          a.signUpDate = createLocalizedDateString(new Date(a.signUpTimestamp))
          return a
        })
    }
  }
  res.render('meetup', viewModel)
})

module.exports = router
