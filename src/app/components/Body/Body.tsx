import { AiResponse } from './AiResponse/AiResponse';
import classes from './Body.module.scss';
import { Feedback } from './Feedback/Feedback';
import { Score } from './Score/Score';
import { TextBlock } from './TextBlock';

export function Body({ aiResponse }: { aiResponse: string }) {
  return (
    <div className={classes.body}>
      <TextBlock
        title="Your Score"
        content="A score of 1-10 is calculated to assess your brevity.  See FAQ's for details."
        extraContent={aiResponse ? <Score /> : <></>}
      />
      <TextBlock
        title="Shortened Version"
        content="See new suggested text here."
        extraContent={
          aiResponse ? <AiResponse aiResponse={aiResponse} /> : <></>
        }
      />
      {aiResponse && <Feedback aiResponse={aiResponse} />}
      <TextBlock
        title="FAQ"
        subheader="Do you store any of my text or other data?"
        content="No, your data is not stored. It only present on our servers while processing, and then is discarded afterward."
      />
    </div>
  );
}
