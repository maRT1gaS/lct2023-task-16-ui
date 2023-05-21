import { Link, Title } from '@/ui';
import classes from './Сandidates.module.css';
import { additionalСandidatesInfo } from './constants';

export const Сandidates = () => (
	<div className={classes.Сandidates}>
		<div className={classes.СandidatesReg}>
			<Title additionalClassName={classes.CandidatedTitle} headline='h3'>
				Кандидатам
			</Title>

			<span className={classes.СandidatesRegText}>
				Зарегистрируйтесь, как кандидат, чтобы получить возможность попасть на стажировку компании мечты
			</span>

			<Link href='/auth/registration' themeBorder='black'>
				Зарегистироваться
			</Link>
		</div>

		<ul className={classes.СandidatesAdditionalInfoList}>
			{additionalСandidatesInfo.map(({ id, icon, title }) => (
				<li key={id} className={classes.СandidatesAdditionalInfoItem}>
					{icon}

					<span className={classes.СandidatesAdditionalInfoText}>{title}</span>
				</li>
			))}
		</ul>
	</div>
);
