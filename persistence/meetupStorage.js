const meetups = [
  {
    id: 1,
    title: 'IT Zvornik Meetup #1',
    datetime: '2018-07-01T16:00:00.000Z',
    location: {
      name: 'Osnovna Škola Sveti Sava',
      address: 'Svetog Save 71A',
    },
    poster: null,
    thumbnail: null,
    summary: `
      Quisque aliquam sollicitudin nisi a vulputate. Aliquam lacinia nibh sed arcu
      elementum, et tincidunt ante feugiat. Pellentesque interdum nibh tristique
      luctus luctus. Mauris blandit imperdiet. Nam in commodo ipsum. Nulla malesuada
      blandit elementum. Nulla velit ante, posuere in nunc non, fringilla tincidunt
      ligula. Nulla interdum ante id orci condimentum porta. Maecenas euismod dui dolor,
      id tristique velit ullamcorper eget...
    `,
    details: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br>
      <br>
      Suspendisse maximus nibh sit amet mauris finibus gravida quis sit amet odio:
      <br>
      <br>
      - Quisque aliquam sollicitudin nisi a vulputate
      <br>
      - Aliquam lacinia nibh sed arcu elementum
      <br>
      <br>
      Et tincidunt ante feugiat. Pellentesque interdum nibh tristique luctus luctus.
      <br>
      <br>
      <strong>Mauris blandit imperdiet!</strong>`,
    attendees: [
      {
        email: 'hboadby1@dyndns.org',
        signUpTimestamp: '2018-06-23T13:00:00.000Z',
      },
      {
        email: 'oioria@goodreads.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'aeasen6@guardian.co.uk',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'preddin3@quantcast.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'oalesin4@tamu.edu',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'abogies5@csmonitor.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'gnevet2@europa.eu',
        signUpTimestamp: '2018-06-27T13:00:00.000Z',
      },
      {
        email: 'tneno0@gmpg.org',
        signUpTimestamp: '2018-06-27T13:00:00.000Z',
      },
    ],
    googleMapsEmbedLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425.7352399054885!2d19.102154657492402!3d44.382463002530436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759691175a795c1%3A0x2a92aa2366e582a2!2sOsnovna+%C5%A1kola+Sveti+Sava!5e0!3m2!1sen!2srs!4v1558435639684!5m2!1sen!2srs',
  },
  {
    id: 2,
    title: 'IT Zvornik Meetup #2',
    datetime: '2019-03-30T10:00:00.000Z',
    location: {
      name: 'Osnovna Škola Sveti Sava',
      address: 'Svetog Save 71A',
    },
    poster: null,
    thumbnail: null,
    summary: `
      Pellentesque interdum nibh tristique
      luctus luctus. Mauris blandit imperdiet. Nam in commodo ipsum. Nulla malesuada
      blandit elementum. Nulla velit ante, posuere in nunc non, fringilla tincidunt
      ligula. Nulla interdum ante id orci condimentum porta. Maecenas euismod dui dolor,
      id tristique velit ullamcorper eget...
    `,
    details: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br>
      <br>
      Suspendisse maximus nibh sit amet mauris finibus gravida quis sit amet odio:
      <br>
      <br>
      - Quisque aliquam sollicitudin nisi a vulputate
      <br>
      - Aliquam lacinia nibh sed arcu elementum
      <br>
      <br>
      Et tincidunt ante feugiat. Pellentesque interdum nibh tristique luctus luctus.
      <br>
      <br>
      <strong>Mauris blandit imperdiet!</strong>`,
    attendees: [
      {
        email: 'aeasen6@guardian.co.uk',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'preddin3@quantcast.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'oalesin4@tamu.edu',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'abogies5@csmonitor.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'gnevet2@europa.eu',
        signUpTimestamp: '2018-06-27T13:00:00.000Z',
      },
      {
        email: 'tneno0@gmpg.org',
        signUpTimestamp: '2018-06-27T13:00:00.000Z',
      },
      {
        email: 'hboadby1@dyndns.org',
        signUpTimestamp: '2018-06-23T13:00:00.000Z',
      },
    ],
    googleMapsEmbedLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425.7352399054885!2d19.102154657492402!3d44.382463002530436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759691175a795c1%3A0x2a92aa2366e582a2!2sOsnovna+%C5%A1kola+Sveti+Sava!5e0!3m2!1sen!2srs!4v1558435639684!5m2!1sen!2srs',
  },
  {
    id: 3,
    title: 'IT Zvornik Meetup #3',
    datetime: '2019-04-30T10:00:00.000Z',
    location: {
      name: 'Osnovna Škola Sveti Sava',
      address: 'Svetog Save 71A',
    },
    poster: '2019-04-30.png',
    thumbnail: '2019-04-30-thumbnail.jpg',
    summary: `
      Nulla interdum ante id orci condimentum porta. Maecenas euismod dui dolor, id
      tristique velit ullamcorper eget. Suspendisse libero ligula, mattis nec erat eget,
      ultricies blandit leo. Fusce venenatis, metus in interdum consectetur, arcu augue
      tristique eros, a molestie diam augue nec odio. Cras tortor felis, molestie in
      viverra in, convallis sed turpis. Proin dictum dictum est, ornare auctor sapien
      dictum sit amet...
    `,
    details: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br>
      <br>
      Suspendisse maximus nibh sit amet mauris finibus gravida quis sit amet odio:
      <br>
      <br>
      - Quisque aliquam sollicitudin nisi a vulputate
      <br>
      - Aliquam lacinia nibh sed arcu elementum
      <br>
      <br>
      Et tincidunt ante feugiat. Pellentesque interdum nibh tristique luctus luctus.
      <br>
      <br>
      <strong>Mauris blandit imperdiet!</strong>`,
    attendees: [
      {
        email: 'oioria@goodreads.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'aeasen6@guardian.co.uk',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'preddin3@quantcast.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'oalesin4@tamu.edu',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'abogies5@csmonitor.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'gnevet2@europa.eu',
        signUpTimestamp: '2018-06-27T13:00:00.000Z',
      },
      {
        email: 'tneno0@gmpg.org',
        signUpTimestamp: '2018-06-27T13:00:00.000Z',
      },
      {
        email: 'hboadby1@dyndns.org',
        signUpTimestamp: '2018-06-23T13:00:00.000Z',
      },
    ],
    googleMapsEmbedLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425.7352399054885!2d19.102154657492402!3d44.382463002530436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759691175a795c1%3A0x2a92aa2366e582a2!2sOsnovna+%C5%A1kola+Sveti+Sava!5e0!3m2!1sen!2srs!4v1558435639684!5m2!1sen!2srs',
  },
  {
    id: 4,
    title: 'IT Zvornik Meetup #4',
    datetime: '2019-06-01T10:00:00.000Z',
    location: {
      name: 'Osnovna Škola Sveti Sava',
      address: 'Svetog Save 71A',
    },
    poster: '2019-06-01.png',
    thumbnail: '2019-06-01-thumbnail.jpg',
    summary: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      maximus nibh sit amet mauris finibus gravida quis sit amet odio. Quisque
      aliquam sollicitudin nisi a vulputate. Aliquam lacinia nibh sed arcu elementum,
      et tincidunt ante feugiat. Pellentesque interdum nibh tristique luctus luctus.
      Mauris blandit imperdiet...
    `,
    details: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br>
      <br>
      Suspendisse maximus nibh sit amet mauris finibus gravida quis sit amet odio:
      <br>
      <br>
      - Quisque aliquam sollicitudin nisi a vulputate
      <br>
      - Aliquam lacinia nibh sed arcu elementum
      <br>
      <br>
      Et tincidunt ante feugiat. Pellentesque interdum nibh tristique luctus luctus.
      <br>
      <br>
      <strong>Mauris blandit imperdiet!</strong>`,
    attendees: [
      {
        email: 'tgabrielic@dedecms.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'aeasen6@guardian.co.uk',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'sgudgin7@altervista.org',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'rcicconetti8@ustream.tv',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'rerickson9@163.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'oioria@goodreads.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'aeasen6@guardian.co.uk',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'preddin3@quantcast.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'oalesin4@tamu.edu',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'abogies5@csmonitor.com',
        signUpTimestamp: '2018-06-29T16:00:00.000Z',
      },
      {
        email: 'gnevet2@europa.eu',
        signUpTimestamp: '2018-06-27T13:00:00.000Z',
      },
      {
        email: 'tneno0@gmpg.org',
        signUpTimestamp: '2018-06-27T13:00:00.000Z',
      },
      {
        email: 'hboadby1@dyndns.org',
        signUpTimestamp: '2018-06-27T13:00:00.000Z',
      },
    ],
    googleMapsEmbedLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425.7352399054885!2d19.102154657492402!3d44.382463002530436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759691175a795c1%3A0x2a92aa2366e582a2!2sOsnovna+%C5%A1kola+Sveti+Sava!5e0!3m2!1sen!2srs!4v1558435639684!5m2!1sen!2srs',
  },
]

module.exports = meetups