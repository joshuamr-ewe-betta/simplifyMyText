'use client';
import classes from './NavBar.module.scss';

export function NavBar() {
  return (
    <div className={classes.header}>
      <div className={classes.nav}>
        <h1 className={classes.title}>Brevity Check</h1>
        <nav>
          <ul className={classes.navigation}>
            <li
              className={classes.link}
              onClick={() => {
                window.open('mailto:Lee Shainis<lee@simplifylanguage.com>');
              }}
            >
              Contact
            </li>
            <li className={classes.link}>Logout</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
