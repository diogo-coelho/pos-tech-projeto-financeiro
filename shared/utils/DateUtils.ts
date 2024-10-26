export const formatDateToStringDate = (date: Date): string => {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${year}`
}

export const formatDateToFullStringDate = (date: Date): string => {
  const day = String(date.getDate() + 1).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`
}

export const getNameOfDayOfTheWeek = (n: number): string => {
  switch (n) {
    case 0:
      return 'Domingo';
    case 1:
      return 'Segunda-Feira';
    case 2:
      return 'Terça-Feira';
    case 3:
      return 'Quarta-Feira';
    case 4:
      return 'Quinta-Feira';
    case 5:
      return 'Sexta-Feira';
    case 6:
      return 'Sábado';
    default:
      return ''
  }
}