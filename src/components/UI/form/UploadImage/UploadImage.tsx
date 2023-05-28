import Dropzone from 'react-dropzone';
import classes from './UploadImage.module.css';
import type { IUploadImageProps } from './UploadImage.d';
import { useState } from 'react';
import { NextImage, Button } from '@/ui';
import cn from 'classnames';

export const UploadImage = ({ onChange, accept, initImg = '', className }: IUploadImageProps) => {
	const [previewImg, setPreviewImg] = useState<string>(initImg);

	const setImagePreview = (file: File) => {
		const FReader: FileReader = new FileReader();
		FReader.onload = () => {
			if (FReader.result) {
				setPreviewImg(String(FReader.result));
			}
		};
		FReader.readAsDataURL(file);
	};

	const handleOnDrop = (files: File[]) => {
		onChange(files?.[0]);
		setImagePreview(files?.[0]);
	};

	return (
		<Dropzone multiple={false} accept={accept} onDrop={handleOnDrop}>
			{({ getRootProps, getInputProps }) => (
				<div {...getRootProps({ className: cn(classes.UploadImage, className) })}>
					{previewImg !== '' && (
						<NextImage format='rectangular' sizes='cover' src={previewImg} height={230} width={258} alt='preview-img' />
					)}
					<input {...getInputProps()} />
					<Button className={classes.LoadImg} themeBorder='red' type='button'>
						{previewImg !== '' ? 'Изменить обложку' : 'Загрузить обложку'}
					</Button>
				</div>
			)}
		</Dropzone>
	);
};
