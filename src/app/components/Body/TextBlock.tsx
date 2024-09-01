import classes from './TextBlock.module.scss';

export function TextBlock({
  title,
  subheader,
  content,
}: {
  title: string;
  content: string;
  subheader?: string;
}) {
  return (
    <div className={classes['text-block']} id={title}>
      <h6 className={classes['text-block-title']}>{title}</h6>
      {subheader && (
        <p className={classes['text-block-subheader']}>{subheader}</p>
      )}
      <p className={classes['text-block-content']}>{content}</p>
    </div>
  );
}
