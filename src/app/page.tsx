'use client';
import { useState } from 'react';
import { Body } from './components/Body/Body';
import { TextEntry } from './components/TextEntry/TextEntry';
import classes from './page.module.scss';

export default function Home() {
  const [aiResponse, setAiResponse] = useState('');
  const [counter, setCounter] = useState(1);

  const submitText = () => {
    setAiResponse('The shortened version' + counter);
    setCounter(counter + 1);
  };
  return (
    <main className={classes.main}>
      <div className={classes['main-mobile-protection']}>
        Brevity Check is not available on mobile devices
      </div>
      <div className={classes['main-content']}>
        <TextEntry submitText={submitText} />
        <Body aiResponse={aiResponse} />
      </div>
    </main>
  );
}
