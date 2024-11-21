import classes from './TextEntry.module.scss';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export function TextEntry({
  submitText,
  inputText,
  htmlEntered,
  isSubmittingText,
}: {
  submitText: () => void;
  inputText: (updatedText: string) => void;
  htmlEntered: string;
  isSubmittingText: boolean;
}) {
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
              inputText('');
            }}
          >
            Clear
          </button>
        </div>
        <QuillEditor
          value={htmlEntered}
          onChange={(content, delta, source, editor) => {
            inputText(editor.getText().trim() ? content : '');
          }}
          className={classes['text-entry-quill']}
        />

        {htmlEntered.length > 2000 && (
          <p className={classes.invalid}>
            Please limit your input to less than 2000 characters
          </p>
        )}
      </div>

      <button
        type="button"
        className={classes['simplify-language-button']}
        onClick={() => {
          submitText();
        }}
        disabled={
          htmlEntered.length > 2000 || !htmlEntered.length || isSubmittingText
        }
      >
        {isSubmittingText ? (
          <div className={classes.loading}>
            <LoadingSpinner size={30} />
            <span className={classes['loading-text']}>Simplifying...</span>
          </div>
        ) : (
          'Score and Simplify'
        )}
      </button>
      <div className={classes.info}>
        <p className={classes['info-title']}>Simplify My Text</p>
        <ul className={classes.bullets}>
          <li>
            Makes written communication more concise, understandable,
            translatable, and readable without impacting content or tone.
          </li>
          <li>
            Addresses common weaknesses that regular AI has when simplifying
            text.
          </li>
          <li>
            Uses hundreds of guidelines and examples so you spend less time
            getting what you need. You still need to add a human touch, but
            hopefully less human touch with this!
          </li>
        </ul>
      </div>
    </div>
  );
}
