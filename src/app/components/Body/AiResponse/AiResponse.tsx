'use client';
import classes from './AiResponse.module.scss';

export function AiResponse({ aiResponse }: { aiResponse: string }) {
  return <div className={classes.ai}>{aiResponse}</div>;
}
