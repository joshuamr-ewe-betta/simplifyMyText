import { ReactElement } from 'react';
import classes from './TextBlockContent.module.scss';

export function TextBlockContent({
  content,
}: {
  content: string | ReactElement;
}) {
  return <p className={classes['text-block-content']}>{content}</p>;
}
