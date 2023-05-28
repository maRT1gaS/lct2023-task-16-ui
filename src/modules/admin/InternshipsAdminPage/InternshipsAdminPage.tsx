import { AdminLayout } from '@/layouts/AdminLayout/AdminLayout';
import { Button, Input, ListInput, RangeDatepicker, Select, Title, UploadImage } from '@/ui';
import { Field, Form } from 'react-final-form';
import { directionsTags } from '@/constants';
import classes from './InternshipsAdminPage.module.css';

export const InternshipsAdminPage = () => {
	const onHandleOnSubmit = (value: any) => {
		console.log(value);
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
										<Field name='previewImgSrc'>
											{(props) => <UploadImage className={classes.GridImg} accept={{ 'image/*': [] }} {...props.input} />}
										</Field>
										<Field name='nameJob'>
											{(props) => (
												<Input id='nameJob' className={classes.GridNameJob} labelTitle='Название вакансии' {...props.input} />
											)}
										</Field>
										<Field name='direction'>
											{(props) => (
												<Select
													instanceId='direction'
													options={options}
													id='direction'
													labelTitle='Выберите направление'
													{...props.input}
												/>
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
