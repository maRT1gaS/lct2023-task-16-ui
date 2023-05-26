export interface ILoginFormProps {
	handleOnSubmitForm: (values: ILoginValue) => void;
}

export interface ILoginValue {
	email: string;
	password: string
}