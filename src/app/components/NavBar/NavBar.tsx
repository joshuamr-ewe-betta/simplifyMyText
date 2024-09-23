'use client';
import classes from './NavBar.module.scss';
import Link from 'next/link';

export function NavBar() {
  return (
    <div className={classes.header}>
      <div className={classes.nav}>
        <Link href="/">
          <h1 className={classes.title}>Brevity Check</h1>
        </Link>
        <nav>
          <ul className={classes.navigation}>
            <li className={classes.link}>
              <Link href="/faq">FAQ</Link>
            </li>
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
