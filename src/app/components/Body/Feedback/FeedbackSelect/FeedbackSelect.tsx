'use client';
import { useEffect, useState } from 'react';
import classes from './FeedbackSelect.module.scss';

import Select from 'react-select';

enum FeedbackScore {
  NOT_HELPFUL = 'NOT_HELPFUL',
  SOMEWHAT_HELPFUL = 'SOMEWHAT_HELPFUL',
  VERY_HELPFUL = 'VERY_HELPFUL',
}

export function FeedbackSelect({ aiResponse }: { aiResponse: string }) {
  const [scoreSelected, setScoreSelected] = useState<FeedbackScore | null>(
    null
  );
  const options = [
    { value: FeedbackScore.VERY_HELPFUL, label: 'Very Helpful' },
    { value: FeedbackScore.SOMEWHAT_HELPFUL, label: 'Somewhat Helpful' },
    { value: FeedbackScore.NOT_HELPFUL, label: 'Not Helpful' },
  ];

  useEffect(() => {
    setScoreSelected(null);
  }, [aiResponse]);
  const selectId = 'select-feedback-shortened-language';
  return (
    <div className={classes['feedback-select']}>
      <label htmlFor={selectId}>
        What do you think of the shortened version?
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
          console.log('optionChosen', optionChosen);
          setScoreSelected(optionChosen?.value || null);
        }}
        className={classes['feedback-select-box']}
        placeholder="Choose Feedback"
        id={selectId}
      />
    </div>
  );
}
