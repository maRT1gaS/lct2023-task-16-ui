import classes from './Footer.module.css';

export const Footer = () => (
	<footer className={classes.DesktopFooter}>
		<div className={classes.FooterUp}>
			<div className={classes.FooterDivider}></div>
		</div>
		<div className={classes.FooterDown}>
			<div className={classes.FooterDownLeftSide} />

			<div className={classes.FooterDownRigthSide} />

			<div className={classes.FooterCopyright}>
				<span className={classes.CopyrightText}>© 2023 сделано с любовью командой победителей ЛЦТ</span>
			</div>
		</div>
	</footer>
);
