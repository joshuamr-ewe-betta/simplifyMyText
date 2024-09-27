'use client';
import { useEffect, useState } from 'react';
import classes from './FeedbackSelect.module.scss';

import Select from 'react-select';
import { FeedbackScore } from '../../../../../../types/feedbackScore';
import { useTextSubmission } from '../../../../contexts/textSubmissionContext';
import {
  createSimplifiedVersionFeedbackSubmission,
  updateSimplifiedVersionFeedbackSubmission,
} from '../../../../dbMethods';

export function FeedbackSelect() {
  const {
    simplifiedVersionId,
    simplifiedVersionFeedbackSubmissionId,
    onCreateFeedbackSubmission,
  } = useTextSubmission();

  const [scoreSelected, setScoreSelected] = useState<FeedbackScore | null>(
    null
  );

  const selectScore = async (updatedScore: FeedbackScore | null) => {
    setScoreSelected(updatedScore);

    if (simplifiedVersionId) {
      if (simplifiedVersionFeedbackSubmissionId) {
        await updateSimplifiedVersionFeedbackSubmission(
          simplifiedVersionFeedbackSubmissionId,
          { feedbackScore: updatedScore }
        );
      } else {
        const newFeedbackSubmission =
          await createSimplifiedVersionFeedbackSubmission({
            simplifiedVersionId,
            feedbackScore: updatedScore,
          });

        if (newFeedbackSubmission) {
          onCreateFeedbackSubmission(newFeedbackSubmission.id);
        }
      }
    }
  };

  const options = [
    { value: FeedbackScore.VERY_HELPFUL, label: 'Very Helpful' },
    { value: FeedbackScore.SOMEWHAT_HELPFUL, label: 'Somewhat Helpful' },
    { value: FeedbackScore.NOT_HELPFUL, label: 'Not Helpful' },
  ];

  useEffect(() => {
    setScoreSelected(null);
  }, [simplifiedVersionId]);

  const selectId = 'select-feedback-simplified-language';
  return (
    <div className={classes['feedback-select']}>
      <label htmlFor={selectId}>
        What do you think of the simplified version?
      </label>
      <Select
        value={
          scoreSelected &&
          options.find((option) => option.value === scoreSelected)
        }
        options={options}
        onChange={(
          optionChosen: { value: FeedbackScore; label: string } | null
        ) => {
          selectScore(optionChosen?.value || null);
        }}
        className={classes['feedback-select-box']}
        placeholder="Choose Feedback"
        id={selectId}
      />
    </div>
  );
}
