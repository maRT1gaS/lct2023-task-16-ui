export interface ILinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
	themeBorder: 'black' | 'red' | 'none';
	href: string;
	scroll?: boolean;
}
