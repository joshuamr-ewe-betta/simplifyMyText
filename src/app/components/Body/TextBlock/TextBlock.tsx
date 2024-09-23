import { ReactElement } from 'react';
import classes from './TextBlock.module.scss';
import { TextBlockTitle } from './TextBlockTitle';
import { TextBlockContent } from './TextBlockContent';

export function TextBlock({
  title,
  content,
  extraContent,
}: {
  title: string;
  content: string | ReactElement;
  extraContent?: ReactElement;
}) {
  return (
    <div className={classes['text-block']} id={title}>
      <TextBlockTitle title={title} />
      <TextBlockContent content={content} />
      {extraContent}
    </div>
  );
}
