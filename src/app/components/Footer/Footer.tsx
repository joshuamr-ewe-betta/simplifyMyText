import classes from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes['footer-text']}>© 2024 Simplify Language</p>
    </footer>
  );
}
