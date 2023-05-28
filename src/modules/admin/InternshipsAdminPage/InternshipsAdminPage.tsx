import { AdminLayout } from '@/layouts/AdminLayout/AdminLayout';
import { Button, Input, ListInput, RangeDatepicker, Select, Title, UploadImage } from '@/ui';
import { Field, Form } from 'react-final-form';
import { directionsTags } from '@/constants';
import classes from './InternshipsAdminPage.module.css';
import { createVacancies } from '@/api';
import dayjs from 'dayjs';

export const InternshipsAdminPage = () => {
	const onHandleOnSubmit = async (value: any) => {
		const copyValueData = { ...value };
		copyValueData.company = 1;
		copyValueData.status = -1;
		copyValueData.rating = 3;
		copyValueData.tag = copyValueData.tag.value;

		const [startOfSelection, endOfSelection] = copyValueData.dateOfSelection;
		delete copyValueData.dateOfSelection;

		copyValueData.startOfSelection = dayjs(startOfSelection).format('YYYY-MM-DD');
		copyValueData.endOfSelection = dayjs(endOfSelection).format('YYYY-MM-DD');

		const [startOfTheInternship, endOfInternship] = copyValueData.dateOfTheInternship;
		delete copyValueData.dateOfTheInternship;

		copyValueData.startOfTheInternship = dayjs(startOfTheInternship).format('YYYY-MM-DD');
		copyValueData.endOfInternship = dayjs(endOfInternship).format('YYYY-MM-DD');

		await createVacancies(copyValueData);
	};

	const options = directionsTags.map(({ id, title }) => ({ value: id, label: title }));

	return (
		<AdminLayout>
			<div className={classes.Section}>
				<Title headline='h3'>Создать стажировку</Title>

				<Form onSubmit={onHandleOnSubmit}>
					{(props) => {
						return (
							<form className={classes.Form} onSubmit={props.handleSubmit}>
								<fieldset className={classes.FormInputsGroup}>
									<legend className={classes.FormInputsGroupLegend}>Основная информация</legend>
									<div className={classes.FormInputRow}>
										<Field name='imagePreviewImg'>
											{(props) => <UploadImage className={classes.GridImg} accept={{ 'image/*': [] }} {...props.input} />}
										</Field>
										<Field name='nameJob'>
											{(props) => (
												<Input id='nameJob' className={classes.GridNameJob} labelTitle='Название вакансии' {...props.input} />
											)}
										</Field>
										<Field name='tag'>
											{(props) => (
												<Select instanceId='tag' options={options} id='tag' labelTitle='Выберите направление' {...props.input} />
											)}
										</Field>

										<Field name='adress'>
											{(props) => (
												<Input className={classes.GridAdress} id='adress' labelTitle='Адрес проведения' {...props.input} />
											)}
										</Field>
									</div>

									<div className={classes.DateControls}>
										<Field name='dateOfSelection'>
											{(props) => {
												return <RangeDatepicker id='dateOfSelection' lableTitle='Период отбора' {...props.input} />;
											}}
										</Field>

										<Field name='dateOfTheInternship'>
											{(props) => {
												return <RangeDatepicker id='dateOfTheInternship' lableTitle='Даты проведения' {...props.input} />;
											}}
										</Field>
									</div>
								</fieldset>

								<fieldset className={classes.FormInputsGroup}>
									<legend className={classes.FormInputsGroupLegend}>Подробное описание</legend>

									<Field name='responsibilities'>
										{(props) => (
											<ListInput
												uniquePrefixId='responsibilities'
												labelTitle='Обязанности'
												id='responsibilities'
												{...props.input}
											/>
										)}
									</Field>

									<Field name='requirements'>
										{(props) => (
											<ListInput uniquePrefixId='requirements' labelTitle='Требования' id='requirements' {...props.input} />
										)}
									</Field>

									<Field name='conditions'>
										{(props) => <ListInput uniquePrefixId='conditions' labelTitle='Условия' id='conditions' {...props.input} />}
									</Field>
								</fieldset>

								<Button themeBorder='black' type='submit'>
									Создать
								</Button>
							</form>
						);
					}}
				</Form>
			</div>
		</AdminLayout>
	);
};
