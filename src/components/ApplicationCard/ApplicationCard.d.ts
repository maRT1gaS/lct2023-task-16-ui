export interface IApplicationProps {
	title: string;
	dates: string;
	time: string;
	status: 'На рассмотрении' | 'Одобрено' | 'Отклонено';
}
