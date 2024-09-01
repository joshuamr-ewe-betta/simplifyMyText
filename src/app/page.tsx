import { Body } from './components/Body/Body';
import { TextEntry } from './components/TextEntry/TextEntry';
import classes from './page.module.scss';

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes['main-mobile-protection']}>
        Brevity Check is not available on mobile devices
      </div>
      <div className={classes['main-content']}>
        <TextEntry />
        <Body />
      </div>
    </main>
  );
}
