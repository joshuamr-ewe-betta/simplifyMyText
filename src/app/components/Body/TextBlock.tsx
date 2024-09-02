import { ReactElement } from 'react';
import classes from './TextBlock.module.scss';

export function TextBlock({
  title,
  subheader,
  content,
  extraContent,
}: {
  title: string;
  content: string;
  subheader?: string;
  extraContent?: ReactElement;
}) {
  return (
    <div className={classes['text-block']} id={title}>
      <h6 className={classes['text-block-title']}>{title}</h6>
      {subheader && (
        <p className={classes['text-block-subheader']}>{subheader}</p>
      )}
      <p className={classes['text-block-content']}>{content}</p>
      {extraContent}
    </div>
  );
}
