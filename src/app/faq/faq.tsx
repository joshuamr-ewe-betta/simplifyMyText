import { TextBlockContent } from '../components/Body/TextBlock/TextBlockContent';
import classes from './faq.module.scss';

export function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className={classes.faq}>
      <p className={classes.question}>{question}</p>
      <TextBlockContent content={answer} />
    </div>
  );
}
