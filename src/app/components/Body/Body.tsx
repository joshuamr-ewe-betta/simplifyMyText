import classes from './Body.module.scss';
import { TextBlock } from './TextBlock';

export function Body() {
  return (
    <div className={classes.body}>
      <TextBlock
        title="Simplified Language"
        content="Simplify language above in order to receive your updated text."
      />
      <TextBlock
        title="Your Score"
        content="Simplify language above in order to receive your score."
      />
      <TextBlock title="About" content="Lots of good stuff." />
      <TextBlock
        title="FAQ"
        subheader="Do you store any of my text or other data?"
        content="No, your data is not stored. It only present on our servers while processing, and then is discarded afterward."
      />
    </div>
  );
}
