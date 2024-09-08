import classes from './TextBlockTitle.module.scss';

export function TextBlockTitle({ title }: { title: string }) {
  return <h6 className={classes['title']}>{title}</h6>;
}
