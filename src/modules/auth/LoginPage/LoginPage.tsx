import { Form, Field } from 'react-final-form';
import { Button, Input, Link } from '@/ui';
import classes from './LoginPage.module.css';
import type { ILoginValue } from './LoginPage.d';
import { InternLayout } from '@/layouts';

export const LoginPage = () => {
	const handleOnSubmitForm = (values: ILoginValue) => {
		console.log(values);
	};

	return (
		<InternLayout>
			<div className={classes.FormWrap}>
				<Form<ILoginValue> onSubmit={handleOnSubmitForm}>
					{(props) => (
						<form className={classes.LoginForm} onSubmit={props.handleSubmit}>
							<div className={classes.LoginInput}>
								<Field name='email'>
									{(props) => <Input labelTitle='Email' className={classes.LoginInput} id='email' {...props.input} />}
								</Field>
							</div>

							<div className={classes.LoginInput}>
								<Field name='password'>
									{(props) => <Input labelTitle='Пароль' className={classes.LoginInput} id='password' {...props.input} />}
								</Field>
							</div>

							<div className={classes.LoginFormControls}>
								<Link themeBorder='red' href='/intern'>
									Войти
								</Link>

								<Link className={classes.additional} themeBorder='none' href='/'>
									Забыли пароль?
								</Link>
							</div>

							<div className={classes.LoginFormControls}>
								<span className={classes.additional}>Еще нет аккаунта?</span>

								<Link themeBorder='red' href='/auth/registration'>
									Зарегистрироваться
								</Link>
							</div>
						</form>
					)}
				</Form>
			</div>
		</InternLayout>
	);
};
