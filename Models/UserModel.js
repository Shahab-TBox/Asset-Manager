const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
// This arrangement can be altered based on how we want the date's format to appear.

export const UserModel = {
  username: 'Shahab',
  password: '123',
};
