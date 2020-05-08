import { firebaseApp } from "./base";

const isLoggedIn = () => firebaseApp.auth().currentUser !== null;
export { isLoggedIn };

export function parseDate(monthAsString, year) {
  let dateAsInt = Date.parse(`${monthAsString} ${year}`);
  return new Date(dateAsInt);
}

export function getCurrentMonth() {
  return getMonth(new Date());
}
export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getMonth(date) {
  let month = "";

  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "January";
  }
  return month;
}
