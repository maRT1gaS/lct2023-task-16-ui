export interface IDirectionTag {
	id: number;
	title: string;
}

export type DirectionTagsType = IDirectionTag[];

export interface ILinkTag {
	id: number;
	title: string;
	to: string;
}

export type LinkTagsType = ILinkTag[];

export interface IButtonTag {
	id: number;
	title: string;
	onClick: (value: string | number) => void;
	value: string;
}

export type ButtonTagsType = IButtonTag[];
