import { Form, Field } from 'react-final-form';
import { Button, Input, Link } from '@/ui';
import classes from './LoginPage.module.css';
import type { ILoginFormProps, ILoginValue } from './LoginPage.d';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().required('Required'),
});

export const LoginPage = ({ handleOnSubmitForm }: ILoginFormProps) => {

	return (
		<Form<ILoginValue> onSubmit={handleOnSubmitForm} validate={(values) => validationSchema.validateSync(values, { abortEarly: false })}>
			{(props) => (
				<form className={classes.LoginForm} onSubmit={props.handleSubmit}>
					<div className={classes.LoginInput}>
						<Field name='email'>
							{(props) => (
								<Input
									labelTitle='Email'
									className={classes.LoginInput}
									id='email'
									{...props.input}
								/>
							)}
						</Field>
						<Field name="email">
							{({ meta }) => (meta.error && meta.touched ? <span className={classes.error}>{meta.error}</span> : null)}
						</Field>
					</div>

					<div className={classes.LoginInput}>
						<Field name='password'>
							{(props) => (
								<Input
									labelTitle='Пароль'
									className={classes.LoginInput}
									id='password'
									{...props.input}
								/>
							)}
						</Field>
						<Field name="password" >
							{({ meta }) => (meta.error && meta.touched ? <span className={classes.error}>{meta.error}</span> : null)}
						</Field>
					</div>


					<div className={classes.LoginFormControls}>
						<Button themeBorder='red' type='submit'>
							Войти
						</Button>

						<Link className={classes.additional} themeBorder='none' href='/'>
							Забыли пароль?
						</Link>
					</div>

					<div className={classes.LoginFormControls}>
						<span className={classes.additional}>
							Еще нет аккаунта?
						</span>

						<Link themeBorder='red' href='/auth/registration'>
							Зарегистрироваться
						</Link>
					</div>
				</form>
			)}
		</Form>
	)
}
