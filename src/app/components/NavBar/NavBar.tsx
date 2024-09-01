'use client';
import classes from './NavBar.module.scss';

export function NavBar() {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Brevity Check</h1>
      <nav>
        <ul className={classes.navigation}>
          <li
            className={classes.link}
            onClick={() => {
              document.getElementById('Simplified Language')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Simplify Language
          </li>
          <li
            className={classes.link}
            onClick={() => {
              document.getElementById('About')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            About
          </li>
          <li
            className={classes.link}
            onClick={() => {
              document.getElementById('FAQ')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            FAQ
          </li>
          <li className={classes.link}>Contact</li>
          <li className={classes.link}>Logout</li>
        </ul>
      </nav>
    </div>
  );
}
