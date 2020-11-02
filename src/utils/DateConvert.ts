/* eslint-disable radix */
export const convertToDate = (date: string) => {
  const birthdayArray = date.split('/');
  const day = parseInt(birthdayArray[0]);
  const month = parseInt(birthdayArray[1]) - 1;
  const year = parseInt(birthdayArray[2]);

  if (
    birthdayArray[2].length < 2 ||
    birthdayArray[2].length === 3 ||
    birthdayArray[2].length > 4
  ) {
    throw new Error('Ano inválido');
  }

  if (month < 0 || month > 11) {
    throw new Error('Mês inválido');
  }

  if (day < 1 || day > 31) {
    throw new Error('Dia inválido');
  }

  const mountedDate = new Date(year, month, day);
  return mountedDate;
};

export const formattedDate = (date: Date) => {
  const dateString = date.toString();
  const birthdayArray = dateString.split('-');
  const day = parseInt(birthdayArray[2]);
  const month = parseInt(birthdayArray[1]);
  const year = parseInt(birthdayArray[0]);
  const mountedDate = day + '/' + month + '/' + year;

  return mountedDate;
};

export const age = (date: Date) => {
  const today = new Date();
  const birthdayString = date.toString();

  const birthdayArray = birthdayString.split('-');
  const birthdayDay = parseInt(birthdayArray[2]);
  const birthdayMonth = parseInt(birthdayArray[1]);
  const birthdayYear = parseInt(birthdayArray[0]);
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  if (todayMonth > birthdayMonth) {
    return todayYear - birthdayYear;
  } else {
    if (todayMonth === birthdayMonth) {
      if (todayDay >= birthdayDay) {
        return todayYear - birthdayYear;
      }
    }
    return todayYear - birthdayYear - 1;
  }
};
