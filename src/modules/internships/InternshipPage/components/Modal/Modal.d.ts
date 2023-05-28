import { IValueForm } from '../../types';

export interface IModalProps {
	onClose: () => void;
	initialValue: IInitialValueForm;
	handleOnSubmitForm: (values: IValueForm) => void;
}

interface IInitialValueForm {
	direction: string;
	nameJob: string;
}
