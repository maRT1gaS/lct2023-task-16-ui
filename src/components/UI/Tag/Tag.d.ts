interface ICommonTagProps {
	title: string;
}

export interface ITagLinkProps extends ICommonTagProps {
	to: string;
}

export interface ITagButtonProps extends ICommonTagProps {
	onClick: (value: string) => void;
	value: string;
	isActive?: boolean;
}
