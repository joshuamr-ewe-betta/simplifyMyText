'use client';
import classes from './NavBar.module.scss';
import Link from 'next/link';
import { signOut } from 'aws-amplify/auth';
import { useUser } from '../../hooks/useUser';

export function NavBar() {
  const { user } = useUser();
  return (
    <div className={classes.header}>
      <div className={classes.nav}>
        <Link href="/">
          <h1 className={classes.title}>Simplify My Text</h1>
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
            {user && (
              <li className={classes.link}>
                <button
                  className={classes.logout}
                  onClick={async () => {
                    await signOut();
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
