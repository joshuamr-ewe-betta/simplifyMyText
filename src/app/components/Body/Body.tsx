import Link from 'next/link';
import { AiResponse } from './AiResponse/AiResponse';
import classes from './Body.module.scss';
import { Feedback } from './Feedback/Feedback';
import { Score } from './Score/Score';
import { TextBlock } from './TextBlock/TextBlock';
import { SimplificationData } from '../../contexts/textSubmissionContext';

export function Body({
  aiResponseHtml,
  simplificationData,
  simplifiedVersionId,
}: {
  aiResponseHtml: string | undefined;
  simplificationData: SimplificationData | undefined;
  simplifiedVersionId: string | undefined;
}) {
  return (
    <div className={classes.body}>
      {simplificationData ? (
        <TextBlock
          title="Your Score"
          content=""
          extraContent={<Score simplificationData={simplificationData} />}
        />
      ) : (
        <TextBlock
          title="Your Score"
          content={
            <span>
              A score of 1-10 is calculated to assess your brevity. See{' '}
              <Link href="/faq" className={classes.link}>
                FAQ&apos;s
              </Link>{' '}
              for details.
            </span>
          }
        />
      )}
      {aiResponseHtml ? (
        <TextBlock
          title="Simplified Version"
          content=""
          extraContent={<AiResponse aiResponse={aiResponseHtml} />}
        />
      ) : (
        <TextBlock
          title="Simplified Version"
          content="See new suggested text here."
        />
      )}
      {simplifiedVersionId && <Feedback />}
    </div>
  );
}
