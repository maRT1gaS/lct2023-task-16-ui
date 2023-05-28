import { Container, Link, Title } from '@/ui';
import classes from './Tasks.module.css';

export const Tasks = () => {
	return (
		<Container>
			<div className={classes.box}>
				<Title headline='h3'>Задания стажировки: 1 месяц</Title>
				<ul className={classes.list}>
					<li className={classes.listItem}>
						<span>Познакомься с членами команды стажеров</span>
						<svg width='92' height='92' viewBox='0 0 92 92' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_633_1292)'>
								<path
									d='M66.2467 28.544L65.7341 25.7351C65.1656 22.6179 62.1282 20.4961 58.8692 20.9393L55.9327 21.3387C54.8145 21.4908 53.6862 21.1382 52.8745 20.3832L50.7428 18.4004C48.3771 16.1999 44.6229 16.1999 42.2573 18.4004L40.1257 20.3832C39.314 21.1382 38.1854 21.4908 37.0673 21.3387L34.1307 20.9393C30.8717 20.4961 27.8344 22.6179 27.2658 25.7351L26.7533 28.544C26.5582 29.6135 25.8607 30.5366 24.8632 31.0455L22.2433 32.3821C19.3358 33.8654 18.1756 37.2986 19.6211 40.1419L20.9236 42.7039C21.4195 43.6795 21.4195 44.8204 20.9236 45.7961L19.6211 48.3581C18.1756 51.2013 19.3358 54.6344 22.2433 56.1177L24.8632 57.4545C25.8607 57.9634 26.5582 58.8865 26.7533 59.9561L27.2658 62.7649C27.8344 65.882 30.8717 68.004 34.1307 67.5605L37.0673 67.1612C38.1854 67.0092 39.314 67.3618 40.1257 68.1166L42.2573 70.0996C44.6229 72.3001 48.3771 72.3001 50.7428 70.0996L52.8745 68.1166C53.6862 67.3618 54.8145 67.0092 55.9327 67.1612L58.8692 67.5605C62.1282 68.004 65.1656 65.882 65.7341 62.7649L66.2467 59.9561C66.4416 58.8865 67.1394 57.9634 68.1369 57.4545L70.7567 56.1177C73.6642 54.6344 74.8244 51.2013 73.3788 48.3581L72.0764 45.7961C71.5804 44.8204 71.5804 43.6795 72.0764 42.7039L73.3788 40.1419C74.8244 37.2986 73.6642 33.8654 70.7567 32.3821L68.1369 31.0455C67.1394 30.5366 66.4416 29.6135 66.2467 28.544Z'
									fill='#B390EC'
								/>
								<path
									d='M66.2467 28.544L65.0445 28.7467M66.2467 28.544L65.7341 25.7351C65.1656 22.6179 62.1282 20.4961 58.8692 20.9393L55.9327 21.3387C54.8145 21.4908 53.6862 21.1382 52.8745 20.3832L50.7428 18.4004C48.3771 16.1999 44.6229 16.1999 42.2573 18.4004L40.1257 20.3832C39.314 21.1382 38.1854 21.4908 37.0673 21.3387L34.1307 20.9393C30.8717 20.4961 27.8344 22.6179 27.2658 25.7351L26.7533 28.544C26.5582 29.6135 25.8607 30.5366 24.8632 31.0455L22.2433 32.3821C19.3358 33.8654 18.1756 37.2986 19.6211 40.1419L20.9236 42.7039C21.4195 43.6795 21.4195 44.8204 20.9236 45.7961L19.6211 48.3581C18.1756 51.2013 19.3358 54.6344 22.2433 56.1177L24.8632 57.4545C25.8607 57.9634 26.5582 58.8865 26.7533 59.9561L27.2658 62.7649C27.8344 65.882 30.8717 68.004 34.1307 67.5605L37.0673 67.1612C38.1854 67.0092 39.314 67.3618 40.1257 68.1166L42.2573 70.0996C44.6229 72.3001 48.3771 72.3001 50.7428 70.0996L52.8745 68.1166C53.6862 67.3618 54.8145 67.0092 55.9327 67.1612L58.8692 67.5605C62.1282 68.004 65.1656 65.882 65.7341 62.7649L66.2467 59.9561C66.4416 58.8865 67.1394 57.9634 68.1369 57.4545L70.7567 56.1177C73.6642 54.6344 74.8244 51.2013 73.3788 48.3581L72.0764 45.7961C71.5804 44.8204 71.5804 43.6795 72.0764 42.7039L73.3788 40.1419C74.8244 37.2986 73.6642 33.8654 70.7567 32.3821L68.1369 31.0455C67.1394 30.5366 66.4416 29.6135 66.2467 28.544Z'
									stroke='#663398'
									strokeWidth='2'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M60.5137 39.7758C61.2677 39.0989 61.2677 37.9984 60.5137 37.3215C59.7617 36.6428 58.5407 36.6428 57.7867 37.3215L44.1026 49.2058L37.7171 43.4605C36.965 42.7818 35.7422 42.7818 34.9901 43.4605C34.236 44.1391 34.236 45.2379 34.9901 45.9148L42.6427 52.8037C42.6735 52.8334 42.7025 52.8628 42.7352 52.8907C43.1113 53.2309 43.605 53.3992 44.0987 53.3992C44.1913 53.3992 44.2839 53.3941 44.3765 53.3818C44.7757 53.3314 45.1614 53.1682 45.468 52.8907C45.5008 52.8628 45.5317 52.8334 45.5606 52.8022L60.5137 39.7758Z'
									fill='#663398'
								/>
							</g>
							<defs>
								<clipPath id='clip0_633_1292'>
									<rect width='60' height='60' fill='white' transform='translate(16 16)' />
								</clipPath>
							</defs>
						</svg>
					</li>
					<li className={classes.listItem}>
						<div>
							<span>Ознакомься с документами:</span>
							<Link themeBorder='none' href=''>
								Доп. материалы
							</Link>
						</div>
						<svg width='92' height='92' viewBox='0 0 92 92' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_633_1292)'>
								<path
									d='M66.2467 28.544L65.7341 25.7351C65.1656 22.6179 62.1282 20.4961 58.8692 20.9393L55.9327 21.3387C54.8145 21.4908 53.6862 21.1382 52.8745 20.3832L50.7428 18.4004C48.3771 16.1999 44.6229 16.1999 42.2573 18.4004L40.1257 20.3832C39.314 21.1382 38.1854 21.4908 37.0673 21.3387L34.1307 20.9393C30.8717 20.4961 27.8344 22.6179 27.2658 25.7351L26.7533 28.544C26.5582 29.6135 25.8607 30.5366 24.8632 31.0455L22.2433 32.3821C19.3358 33.8654 18.1756 37.2986 19.6211 40.1419L20.9236 42.7039C21.4195 43.6795 21.4195 44.8204 20.9236 45.7961L19.6211 48.3581C18.1756 51.2013 19.3358 54.6344 22.2433 56.1177L24.8632 57.4545C25.8607 57.9634 26.5582 58.8865 26.7533 59.9561L27.2658 62.7649C27.8344 65.882 30.8717 68.004 34.1307 67.5605L37.0673 67.1612C38.1854 67.0092 39.314 67.3618 40.1257 68.1166L42.2573 70.0996C44.6229 72.3001 48.3771 72.3001 50.7428 70.0996L52.8745 68.1166C53.6862 67.3618 54.8145 67.0092 55.9327 67.1612L58.8692 67.5605C62.1282 68.004 65.1656 65.882 65.7341 62.7649L66.2467 59.9561C66.4416 58.8865 67.1394 57.9634 68.1369 57.4545L70.7567 56.1177C73.6642 54.6344 74.8244 51.2013 73.3788 48.3581L72.0764 45.7961C71.5804 44.8204 71.5804 43.6795 72.0764 42.7039L73.3788 40.1419C74.8244 37.2986 73.6642 33.8654 70.7567 32.3821L68.1369 31.0455C67.1394 30.5366 66.4416 29.6135 66.2467 28.544Z'
									fill='#B390EC'
								/>
								<path
									d='M66.2467 28.544L65.0445 28.7467M66.2467 28.544L65.7341 25.7351C65.1656 22.6179 62.1282 20.4961 58.8692 20.9393L55.9327 21.3387C54.8145 21.4908 53.6862 21.1382 52.8745 20.3832L50.7428 18.4004C48.3771 16.1999 44.6229 16.1999 42.2573 18.4004L40.1257 20.3832C39.314 21.1382 38.1854 21.4908 37.0673 21.3387L34.1307 20.9393C30.8717 20.4961 27.8344 22.6179 27.2658 25.7351L26.7533 28.544C26.5582 29.6135 25.8607 30.5366 24.8632 31.0455L22.2433 32.3821C19.3358 33.8654 18.1756 37.2986 19.6211 40.1419L20.9236 42.7039C21.4195 43.6795 21.4195 44.8204 20.9236 45.7961L19.6211 48.3581C18.1756 51.2013 19.3358 54.6344 22.2433 56.1177L24.8632 57.4545C25.8607 57.9634 26.5582 58.8865 26.7533 59.9561L27.2658 62.7649C27.8344 65.882 30.8717 68.004 34.1307 67.5605L37.0673 67.1612C38.1854 67.0092 39.314 67.3618 40.1257 68.1166L42.2573 70.0996C44.6229 72.3001 48.3771 72.3001 50.7428 70.0996L52.8745 68.1166C53.6862 67.3618 54.8145 67.0092 55.9327 67.1612L58.8692 67.5605C62.1282 68.004 65.1656 65.882 65.7341 62.7649L66.2467 59.9561C66.4416 58.8865 67.1394 57.9634 68.1369 57.4545L70.7567 56.1177C73.6642 54.6344 74.8244 51.2013 73.3788 48.3581L72.0764 45.7961C71.5804 44.8204 71.5804 43.6795 72.0764 42.7039L73.3788 40.1419C74.8244 37.2986 73.6642 33.8654 70.7567 32.3821L68.1369 31.0455C67.1394 30.5366 66.4416 29.6135 66.2467 28.544Z'
									stroke='#663398'
									strokeWidth='2'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M60.5137 39.7758C61.2677 39.0989 61.2677 37.9984 60.5137 37.3215C59.7617 36.6428 58.5407 36.6428 57.7867 37.3215L44.1026 49.2058L37.7171 43.4605C36.965 42.7818 35.7422 42.7818 34.9901 43.4605C34.236 44.1391 34.236 45.2379 34.9901 45.9148L42.6427 52.8037C42.6735 52.8334 42.7025 52.8628 42.7352 52.8907C43.1113 53.2309 43.605 53.3992 44.0987 53.3992C44.1913 53.3992 44.2839 53.3941 44.3765 53.3818C44.7757 53.3314 45.1614 53.1682 45.468 52.8907C45.5008 52.8628 45.5317 52.8334 45.5606 52.8022L60.5137 39.7758Z'
									fill='#663398'
								/>
							</g>
							<defs>
								<clipPath id='clip0_633_1292'>
									<rect width='60' height='60' fill='white' transform='translate(16 16)' />
								</clipPath>
							</defs>
						</svg>
					</li>
					<li className={classes.listItem}>
						<span>Пройди экскурсию по офису с наставником</span>
						<svg width='92' height='92' viewBox='0 0 92 92' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M66.2467 29.544L65.7341 26.7351C65.1656 23.6179 62.1282 21.4961 58.8692 21.9393L55.9327 22.3387C54.8145 22.4908 53.6862 22.1382 52.8745 21.3832L50.7428 19.4004C48.3771 17.1999 44.6229 17.1999 42.2573 19.4004L40.1257 21.3832C39.314 22.1382 38.1854 22.4908 37.0673 22.3387L34.1307 21.9393C30.8717 21.4961 27.8344 23.6179 27.2658 26.7351L26.7533 29.544C26.5582 30.6135 25.8607 31.5366 24.8632 32.0455L22.2433 33.3821C19.3358 34.8654 18.1756 38.2986 19.6211 41.1419L20.9236 43.7039C21.4195 44.6795 21.4195 45.8204 20.9236 46.7961L19.6211 49.3581C18.1756 52.2013 19.3358 55.6344 22.2433 57.1177L24.8632 58.4545C25.8607 58.9634 26.5582 59.8865 26.7533 60.9561L27.2658 63.7649C27.8344 66.882 30.8717 69.004 34.1307 68.5605L37.0673 68.1612C38.1854 68.0092 39.314 68.3618 40.1257 69.1166L42.2573 71.0996C44.6229 73.3001 48.3771 73.3001 50.7428 71.0996L52.8745 69.1166C53.6862 68.3618 54.8145 68.0092 55.9327 68.1612L58.8692 68.5605C62.1282 69.004 65.1656 66.882 65.7341 63.7649L66.2467 60.9561C66.4416 59.8865 67.1394 58.9634 68.1369 58.4545L70.7567 57.1177C73.6642 55.6344 74.8244 52.2013 73.3788 49.3581L72.0764 46.7961C71.5804 45.8204 71.5804 44.6795 72.0764 43.7039L73.3788 41.1419C74.8244 38.2986 73.6642 34.8654 70.7567 33.3821L68.1369 32.0455C67.1394 31.5366 66.4416 30.6135 66.2467 29.544Z'
								fill='#FFBE55'
							/>
							<path
								d='M66.2467 29.544L65.0445 29.7467M66.2467 29.544L65.7341 26.7351C65.1656 23.6179 62.1282 21.4961 58.8692 21.9393L55.9327 22.3387C54.8145 22.4908 53.6862 22.1382 52.8745 21.3832L50.7428 19.4004C48.3771 17.1999 44.6229 17.1999 42.2573 19.4004L40.1257 21.3832C39.314 22.1382 38.1854 22.4908 37.0673 22.3387L34.1307 21.9393C30.8717 21.4961 27.8344 23.6179 27.2658 26.7351L26.7533 29.544C26.5582 30.6135 25.8607 31.5366 24.8632 32.0455L22.2433 33.3821C19.3358 34.8654 18.1756 38.2986 19.6211 41.1419L20.9236 43.7039C21.4195 44.6795 21.4195 45.8204 20.9236 46.7961L19.6211 49.3581C18.1756 52.2013 19.3358 55.6344 22.2433 57.1177L24.8632 58.4545C25.8607 58.9634 26.5582 59.8865 26.7533 60.9561L27.2658 63.7649C27.8344 66.882 30.8717 69.004 34.1307 68.5605L37.0673 68.1612C38.1854 68.0092 39.314 68.3618 40.1257 69.1166L42.2573 71.0996C44.6229 73.3001 48.3771 73.3001 50.7428 71.0996L52.8745 69.1166C53.6862 68.3618 54.8145 68.0092 55.9327 68.1612L58.8692 68.5605C62.1282 69.004 65.1656 66.882 65.7341 63.7649L66.2467 60.9561C66.4416 59.8865 67.1394 58.9634 68.1369 58.4545L70.7567 57.1177C73.6642 55.6344 74.8244 52.2013 73.3788 49.3581L72.0764 46.7961C71.5804 45.8204 71.5804 44.6795 72.0764 43.7039L73.3788 41.1419C74.8244 38.2986 73.6642 34.8654 70.7567 33.3821L68.1369 32.0455C67.1394 31.5366 66.4416 30.6135 66.2467 29.544Z'
								stroke='#FF810B'
								strokeWidth='2'
							/>
						</svg>
					</li>
				</ul>
			</div>
		</Container>
	);
};
