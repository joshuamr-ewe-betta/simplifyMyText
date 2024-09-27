'use client';
import classes from './AiResponse.module.scss';

import sanitizeHtml from 'sanitize-html';

export function AiResponse({ aiResponse }: { aiResponse: string }) {
  return (
    <div className={classes.ai}>
      <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(aiResponse) }}></div>
    </div>
  );
}
