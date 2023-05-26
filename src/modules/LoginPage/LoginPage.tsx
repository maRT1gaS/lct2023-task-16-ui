import { Form, Field } from 'react-final-form';
import { Button, Input, Link } from '@/ui';
import classes from './LoginPage.module.css';
import type { ILoginFormProps, ILoginValue } from './LoginPage.d';

export const LoginPage = ({ handleOnSubmitForm }: ILoginFormProps) => {

	return (
		<Form<ILoginValue> onSubmit={handleOnSubmitForm}>
			{(props) => (
				<form className={classes.LoginForm} onSubmit={props.handleSubmit}>
					<Field name='email'>
						{(props) => (
							<Input
								labelTitle='Email'
								className={classes.LoginInput}
								disabled
								id='email'
								{...props.input}
							/>
						)}
					</Field>
					<Field name='password'>
						{(props) => (
							<Input
								labelTitle='Пароль'
								className={classes.LoginInput}
								disabled
								id='password'
								{...props.input}
							/>
						)}
					</Field>

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
