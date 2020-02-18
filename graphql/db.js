export const people = [
  {
    id: 0,
    name: 'Herman',
    age: '28',
    gender: 'female',
  },
  {
    id: 1,
    name: 'Jimenez',
    age: '19',
    gender: 'male',
  },
  {
    id: 2,
    name: 'Holland',
    age: '21',
    gender: 'male',
  },
  {
    id: 3,
    name: 'Eden',
    age: '27',
    gender: 'male',
  },
  {
    id: 4,
    name: 'Anna',
    age: '28',
    gender: 'female',
  },
  {
    id: 5,
    name: 'Heinze',
    age: '31',
    gender: 'female',
  },
  {
    id: 6,
    name: 'Herman',
    age: '28',
    gender: 'female',
  },
  {
    id: 7,
    name: 'Ella',
    age: '24',
    gender: 'female',
  },
];
export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0];
};
