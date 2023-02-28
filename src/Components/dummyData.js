const dummyData = [
  // {
  //   id: 1,
  //   name: 'Dr. John Doe',
  //   specialization: 'Cardiologist',
  //   photo: 'https://example.com/doctors/1.jpg',
  //   contact: '+1-555-555-5555',
  //   availableDates: {
  //     '2023-07-07': {
  //       date: '2023-07-07',
  //       availableTimes: [
  //         '10:00 AM',
  //         '11:00 AM',
  //         '12:00 PM',
  //       ],
  //     },
  //     '2023-08-08': {
  //       date: '2023-08-08',
  //       availableTimes: [
  //         '11:00 AM',
  //         '1:00 PM',
  //         '3:00 PM',
  //       ],
  //     },
  //     '2023-05-05': {
  //       date: '2023-05-05',
  //       availableTimes: [
  //         '9:00 AM',
  //         '10:00 AM',
  //         '11:00 AM',
  //       ],
  //     },
  //   },
  // },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/2.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 44,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 33,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 10,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 11,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
  {
    id: 12,
    name: 'Dr. Kofi Smith',
    specialization: 'Dermatologist',
    photo: 'https://example.com/doctors/3.jpg',
    contact: '+1-555-555-5555',
    availableDates: [
      {
        date: '2023-09-09',
        availableTimes: [
          '9:00 AM',
          '11:00 AM',
          '2:00 PM',
        ],
      },
      {
        date: '2023-06-05',
        availableTimes: [
          '10:00 AM',
          '12:00 PM',
          '4:00 PM',
        ],
      },
      {
        date: '2023-07-07',
        availableTimes: [
          '11:00 AM',
          '2:00 PM',
          '3:00 PM',
        ],
      },
    ],
  },
];

export default dummyData;
// import dummyData from './dummyData';
