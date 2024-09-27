'use client';
import { useEffect, useState } from 'react';
import { useTextSubmission } from '../../../contexts/textSubmissionContext';
import classes from './Feedback.module.scss';

import { FeedbackSelect } from './FeedbackSelect/FeedbackSelect';
import { FeedbackWritten } from './FeedbackWritten/FeedbackWritten';
import {
  createSimplifiedVersionFeedbackSubmission,
  updateSimplifiedVersionFeedbackSubmission,
} from '../../../dbMethods';

export function Feedback() {
  const [writtenFeedback, setWrittenFeedback] = useState('');
  const [wasFeedbackSubmitted, setWasFeedbackSubmitted] = useState(false);

  const {
    simplifiedVersionId,
    simplifiedVersionFeedbackSubmissionId,
    onCreateFeedbackSubmission,
    resetSimplifiedVersionFeedbackSubmissionId,
    feedbackScoreSelected,
  } = useTextSubmission();

  const updateWrittenFeedback = (updatedFeedback: string) => {
    setWrittenFeedback(updatedFeedback);
    if (wasFeedbackSubmitted) {
      resetSimplifiedVersionFeedbackSubmissionId();
      setWasFeedbackSubmitted(false);
    }
  };

  const submitWrittenFeedback = async () => {
    if (simplifiedVersionId) {
      if (simplifiedVersionFeedbackSubmissionId) {
        await updateSimplifiedVersionFeedbackSubmission(
          simplifiedVersionFeedbackSubmissionId,
          {
            writtenFeedback: writtenFeedback.trim(),
            feedbackScore: feedbackScoreSelected,
          }
        );
      } else {
        const newFeedbackSubmission =
          await createSimplifiedVersionFeedbackSubmission({
            simplifiedVersionId,
            writtenFeedback,
            feedbackScore: feedbackScoreSelected,
          });

        if (newFeedbackSubmission) {
          onCreateFeedbackSubmission(newFeedbackSubmission.id);
        }
      }
    }
    setWasFeedbackSubmitted(true);
  };

  useEffect(() => {
    setWrittenFeedback('');
  }, [simplifiedVersionId]);

  return (
    <div className={classes.feedback}>
      <FeedbackSelect />
      <FeedbackWritten
        updateWrittenFeedback={updateWrittenFeedback}
        writtenFeedback={writtenFeedback}
      />
      <button
        className={classes['submit-feedback']}
        onClick={() => {
          submitWrittenFeedback();
        }}
        disabled={!writtenFeedback?.trim() || wasFeedbackSubmitted}
      >
        Submit
      </button>
      {wasFeedbackSubmitted && (
        <small className={classes.gratitude}>
          Thank you for your feedback!
        </small>
      )}
    </div>
  );
}
