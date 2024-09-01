'use client';
import { useWindowSize } from '../hooks/useWindowSize';
import { Body } from './components/Body/Body';
import { TextEntry } from './components/TextEntry/TextEntry';
import classes from './page.module.scss';

export default function Home() {
  const { width } = useWindowSize();

  console.log('width', width);
  return (
    <main className={classes.main}>
      {width !== undefined && width < 500 && (
        <div className={classes.invalid}>
          <h2 className={classes['invalid-text']}>
            Simplify Language is not available on mobile devices
          </h2>
        </div>
      )}
      {width === undefined ||
        (width >= 500 && (
          <>
            <TextEntry />
            <Body />
          </>
        ))}
    </main>
  );
}
