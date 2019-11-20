console.log('Задание 10')

import users from "./users.js";

const getSortedUniqueSkills = users =>
  users
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .sort((a, b) => a.localeCompare(b), "en")
    .filter((ex, i, arr) => arr.indexOf(ex) === i);

console.log(getSortedUniqueSkills(users));
