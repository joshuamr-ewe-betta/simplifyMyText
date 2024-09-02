import classes from './Feedback.module.scss';

import { FeedbackSelect } from './FeedbackSelect/FeedbackSelect';
import { FeedbackWritten } from './FeedbackWritten/FeedbackWritten';

export function Feedback({ aiResponse }: { aiResponse: string }) {
  return (
    <div className={classes.feedback}>
      <FeedbackSelect aiResponse={aiResponse} />
      <FeedbackWritten aiResponse={aiResponse} />
    </div>
  );
}
