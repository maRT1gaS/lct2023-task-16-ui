import { Backdrop, Button, CrossIcon, Input, Select, Title } from '@/ui';
import type { IModalProps } from './Modal.d';
import classes from './Modal.module.css';
import { Form, Field } from 'react-final-form';
import type { IValueForm } from '../../types';

export const Modal = ({ onClose, initialValue, handleOnSubmitForm }: IModalProps) => {
	const handleOnReset = () => {
		onClose();
	};

	return (
		<Backdrop onClick={onClose}>
			<div className={classes.InternshipApplicationModal}>
				<div className={classes.InternshipApplicationModalFormWrap}>
					<Title headline='h4'>Заявка на стажировку</Title>
					<Form<IValueForm> initialValues={initialValue} onSubmit={handleOnSubmitForm}>
						{(props) => (
							<form className={classes.InternshipApplicationForm} onReset={handleOnReset} onSubmit={props.handleSubmit}>
								<Field name='direction'>
									{(props) => <Select labelTitle='Выберите направление' isDisabled id='direction' {...props.input} />}
								</Field>

								<Field name='nameJob'>
									{(props) => (
										<Input
											labelTitle='Название вакансии'
											className={classes.InternshipApplicationInput}
											disabled
											id='nameJob'
											{...props.input}
										/>
									)}
								</Field>

								<Field name='cameFrom'>
									{(props) => (
										<Input
											labelTitle='Откуда ты узнал(а) о стажировке?'
											className={classes.InternshipApplicationInput}
											id='cameFrom'
											{...props.input}
										/>
									)}
								</Field>

								<div className={classes.InternshipApplicationFormControls}>
									<Button themeBorder='black' type='submit'>
										Отправить
									</Button>

									<Button className={classes.InternshipApplicationFormResetBtn} themeBorder='none' type='reset'>
										<CrossIcon /> Отменить
									</Button>
								</div>
							</form>
						)}
					</Form>
				</div>
			</div>
		</Backdrop>
	);
};
