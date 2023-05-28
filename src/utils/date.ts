import dayjs from 'dayjs';

export const getFormatDatePeriod = (start: Date | null, end: Date | null) => {
	if (!start || !end) {
		return '';
	}

	return `${getFormatFullDate(start)} - ${getFormatFullDate(end)}`;
};

const getFormatFullDate = (date: Date) => dayjs(date).locale('ru').format('DD MMMM YYYY');
