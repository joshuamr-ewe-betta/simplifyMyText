import classes from './TextBlockContent.module.scss';

export function TextBlockContent({ content }: { content: string }) {
  return <p className={classes['text-block-content']}>{content}</p>;
}
