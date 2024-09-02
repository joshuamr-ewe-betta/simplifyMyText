'use client';
import classes from './Score.module.scss';

export function Score() {
  return (
    <div className={classes.score}>
      <div className={classes['score-out-of-ten']}>3 / 10</div>
      <p>The shortened version reduced your text by 70%.</p>
    </div>
  );
}
