import { ServiceCardColorEnum } from './enum';

export interface IServiceCardProps {
	color: ServiceCardColorEnum;
	title: string;
	description: string;
	additionalClassName?: string;
	explanationBottom?: string;
}
