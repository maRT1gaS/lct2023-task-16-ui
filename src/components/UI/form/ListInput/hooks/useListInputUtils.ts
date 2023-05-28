import { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from 'react';
import { Action, KeyboardCode } from '../enums';

interface IHandleOnChange {
	event: ChangeEvent<HTMLTextAreaElement>;
	index: number;
}

interface IUseListInputUtilsProps {
	uniquePrefixId: string;
	value: string;
	onChange: (value: string) => void;
}

export const useListInputUtils = ({ uniquePrefixId, value, onChange }: IUseListInputUtilsProps) => {
	const getArrayValue = (values: string): string[] => {
		if (values === '') {
			return [''];
		}

		const arrValue = values.split('\n');

		const arrValueWithoutEmptyString: string[] = [];
		let i = 0;
		const lengthArrValues = arrValue.length - 1;

		for (; i <= lengthArrValues; i++) {
			if (i === lengthArrValues && arrValue[i] === '') {
				break;
			}

			if (arrValue[i][0] === '&') {
				arrValueWithoutEmptyString.push(arrValue[i].substring(1).trim());
			} else {
				arrValueWithoutEmptyString.push(arrValue[i].trim());
			}
		}

		return arrValueWithoutEmptyString;
	};

	const [isFocus, setIsFocus] = useState<{ [key: number]: boolean } | null>(null);
	const [arrValue, setArrValue] = useState<string[]>(getArrayValue(value));

	const action = useRef<Action | null>(null);
	const indexFocus = useRef<number | null>(null);

	useEffect(() => {
		if (typeof indexFocus.current === 'number') {
			const nextFocusInput = document.getElementById(getIdPoint(indexFocus.current));

			if (nextFocusInput && action.current === Action.Delete) {
				nextFocusInput.focus();
				// @ts-ignore
				nextFocusInput.selectionStart = arrValue[indexFocus.current].length;
			}

			if (nextFocusInput && action.current === Action.Add) {
				nextFocusInput.focus();
			}
		}

		action.current = null;
		indexFocus.current = null;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [arrValue.length]);

	const getIdPoint = (index: number) => `${uniquePrefixId}-point${index}`;

	const handleOnChangeValue = (arrayVal: string[]) => {
		const valueWithSeparator: string[] = arrayVal.map((val, index) => {
			const trimVal = val.trim();
			if (arrayVal.length === 1 && !trimVal) {
				return '';
			}
			if (index === arrayVal.length - 1) {
				return `& ${trimVal}`;
			}

			return `& ${trimVal}\n`;
		});

		const valueForm = valueWithSeparator.join('');

		onChange(valueForm);
	};

	const handleOnKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>, index: number) => {
		switch (event.code) {
			case KeyboardCode.Enter:
				event.preventDefault();
				if (arrValue[index].trim().length !== 0 && !arrValue.includes('')) {
					const firstPartArr = arrValue.slice(0, index + 1);
					const secondPartArr = arrValue.slice(index + 1);
					const newArr = [...firstPartArr, '', ...secondPartArr];
					setArrValue(newArr);
					handleOnChangeValue(newArr);
					action.current = Action.Add;
					indexFocus.current = index + 1;
				}
				break;
			case KeyboardCode.Backspace:
				if (arrValue[index].length === 0 && arrValue.length > 1) {
					event.preventDefault();
					const firstPartArr = arrValue.slice(0, index);
					const secondPartArr = arrValue.slice(index + 1);
					const newArr = [...firstPartArr, ...secondPartArr];
					setArrValue(newArr);
					handleOnChangeValue(newArr);
					action.current = Action.Delete;
					if (index !== 0) {
						indexFocus.current = index - 1;
					} else {
						indexFocus.current = 0;
					}
				}
				break;
			case KeyboardCode.ArrowUp:
				focusNextField(event, index - 1);
				break;
			case KeyboardCode.ArrowDown:
				focusNextField(event, index + 1);
				break;
		}
	};

	const focusNextField = (event: KeyboardEvent<HTMLTextAreaElement>, index: number) => {
		if (event.shiftKey) {
			return;
		}

		event.preventDefault();
		const nextField = document.getElementById(getIdPoint(index));

		if (nextField) {
			nextField.focus();
		}
	};

	const handleOnChange = ({ event, index: indexChange }: IHandleOnChange) => {
		const arrayVal = arrValue.reduce<string[]>((acc, val, index) => {
			acc.push(index === indexChange ? event.target.value : val);
			return acc;
		}, []);

		handleOnChangeValue(arrayVal);
		return arrayVal;
	};

	const getIsActivePointList = (index: number) => {
		return (
			(isFocus && Object.keys(isFocus).includes(String(index)) && !isFocus[index]) ||
			(arrValue.length === 1 && !arrValue[0])
		);
	};

	const handleOnBlur = (index: number) => {
		setIsFocus(null);
		if (arrValue[index]) {
			const validateValue = arrValue.reduce<string[]>((acc, val, indexReduce) => {
				acc.push(indexReduce === index ? val.trim() : val);
				return acc;
			}, []);

			setArrValue(validateValue);
		}
	};

	const handleOnFocus = (index: number) => {
		setIsFocus({ [index]: false });
	};

	const handleOnChangeTextarea = ({ event, index }: IHandleOnChange) => {
		setArrValue(handleOnChange({ event, index }));
	};

	return {
		getIsActivePointList,
		handleOnKeyDown,
		arrValue,
		handleOnBlur,
		getIdPoint,
		handleOnFocus,
		handleOnChangeTextarea,
	};
};
