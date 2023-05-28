import { Accept } from 'react-dropzone';

export interface IUploadImageProps {
	onChange: (val: File) => void;
	initImg?: string;
	accept?: Accept;
	className?: string;
}
