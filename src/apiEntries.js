export const TIME_ENTRIES = [
  {
    id: 1,
    date: '2017-11-20',
    categoryId: 1,
    notes: 'some example notes',
    minutesTracked: 180,
  },
  {
    id: 3,
    date: '2017-11-21',
    categoryId: 2,
    notes: 'some more notes...',
    minutesTracked: 120,
  },
  {
    id: 2,
    date: '2017-11-20',
    categoryId: 3,
    notes: null,
    minutesTracked: 90,
  },
  {
    id: 4,
    date: '2017-11-21',
    categoryId: 2,
    notes: 'it was amazing',
    minutesTracked: 45,
  },
  {
    id: 5,
    date: '2017-11-21',
    categoryId: 1,
    notes: null,
    minutesTracked: 30,
  }
]

export const fetchEntries = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(TIME_ENTRIES);
    }, 1000);
  });