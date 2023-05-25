import dayjs from 'dayjs';

export const getFormatDatePeriod = (start: Date, end: Date) =>
	`${getFormatFullDate(start)} - ${getFormatFullDate(end)}`;

const getFormatFullDate = (date: Date) => dayjs(date).locale('ru').format('DD MMMM YYYY');
