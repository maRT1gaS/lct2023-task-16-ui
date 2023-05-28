import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

import { IDatepickerProps } from './Datepicker.d';
import { CalendarIcon, Input } from '@/ui';

export function Datepicker<R extends boolean = false>({
	isHiddenLabel = false,
	lableTitle,
	id,
	...props
}: IDatepickerProps<R>) {
	return (
		<DatePicker<never, R>
			id={id}
			customInput={<Input id={id} isHiddenLabel={isHiddenLabel} labelTitle={lableTitle} rightIcon={<CalendarIcon />} />}
			dateFormat='P'
			locale='ru'
			{...props}
		/>
	);
}
