import classes from './FeedbackWritten.module.scss';
import dynamic from 'next/dynamic';

import 'react-quill/dist/quill.snow.css';
const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export function FeedbackWritten({
  writtenFeedback,
  updateWrittenFeedback,
}: {
  writtenFeedback: string;
  updateWrittenFeedback: (updatedFeedback: string) => void;
}) {
  return (
    <div className={classes['feedback-written']}>
      <QuillEditor
        value={writtenFeedback}
        modules={{ toolbar: false }}
        className={classes['feedback-written-textarea']}
        onChange={updateWrittenFeedback}
        placeholder="What did you like or what would you change?"
      />
    </div>
  );
}
