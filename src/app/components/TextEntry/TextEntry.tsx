'use client';
import { useState } from 'react';
import classes from './TextEntry.module.scss';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export function TextEntry({
  submitText,
}: {
  submitText: (newText: string) => void;
}) {
  const [textEntered, setTextEntered] = useState('');
  return (
    <div className={classes['text-entry']}>
      <div className={classes['text-entry-content']}>
        <div className={classes['text-entry-header']}>
          <h6 className={classes.directions}>
            Write or paste in your text (no more than 2000 characters)
          </h6>
          <button
            type="button"
            className={classes['text-entry-button']}
            onClick={() => {
              setTextEntered('');
            }}
          >
            Clear
          </button>
        </div>
        <QuillEditor
          value={textEntered}
          onChange={setTextEntered}
          className={classes['text-entry-quill']}
        />
      </div>

      <button
        type="button"
        className={classes['simplify-language-button']}
        onClick={() => {
          submitText(textEntered);
        }}
        disabled={textEntered.length > 2000}
      >
        Score and Shorten
      </button>
      {textEntered.length > 2000 && (
        <p className={classes.invalid}>
          Please limit your input to less than 2000 characters
        </p>
      )}
      <p className={classes.disclaimer}>
        Your text is not stored, and is discarded after processing.
      </p>
    </div>
  );
}
