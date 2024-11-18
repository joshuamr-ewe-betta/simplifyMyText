'use client';
import { PropsWithChildren } from 'react';
import classes from './Score.module.scss';

function getScore(reduction: number): number {
  if (reduction >= 100) return 0;
  if (reduction >= 90 && reduction < 100) return 1;
  if (reduction >= 80 && reduction < 90) return 2;
  if (reduction >= 70 && reduction < 80) return 3;
  if (reduction >= 60 && reduction < 70) return 4;
  if (reduction >= 50 && reduction < 60) return 5;
  if (reduction >= 40 && reduction < 50) return 6;
  if (reduction >= 30 && reduction < 40) return 7;
  if (reduction >= 20 && reduction < 30) return 8;
  if (reduction >= 10 && reduction < 20) return 9;
  return 10;
}

export function Score({
  simplificationData,
}: PropsWithChildren<{
  simplificationData: {
    numberOfCharactersForSimplifiedVersion: number;
    numberOfCharactersForOriginalVersion: number;
  };
}>) {
  const {
    numberOfCharactersForSimplifiedVersion,
    numberOfCharactersForOriginalVersion,
  } = simplificationData;

  const reduction = numberOfCharactersForOriginalVersion
    ? Math.round(
        (100 *
          (numberOfCharactersForOriginalVersion -
            numberOfCharactersForSimplifiedVersion)) /
          numberOfCharactersForOriginalVersion
      )
    : 0;

  const score = getScore(reduction);
  return (
    <div className={classes.score}>
      <div className={classes['score-out-of-ten']}>{score} / 10</div>
      <p>The simplified version reduced your text by {reduction}%.</p>
    </div>
  );
}
