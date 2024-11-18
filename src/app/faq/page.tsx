import classes from './page.module.scss';
import { TextBlockTitle } from '../components/Body/TextBlock/TextBlockTitle';
import { Faq } from './faq';

export default function FAQ() {
  return (
    <main className={classes.main}>
      <div className={classes['main-mobile-protection']}>
        <div className={classes['main-mobile-protection-content']}>
          Simplify My Text is not available on mobile devices
        </div>
      </div>
      <div className={classes['main-content']}>
        <TextBlockTitle title="FAQ" />
        <Faq
          question="What is the brevity score?"
          answer="The score is calculated according to how many characters are removed, without removing important content or significantly changing the tone. If it removes less than 10% of text, score = 10. 20-29% reduction = 8. 40-49% = 6. 60-69%= 4, and so on. You should aim for a score of 9-10."
        />

        <Faq
          question="Why is this free?"
          answer="It’s in testing mode. It won’t be free for long! But it will be reasonably priced and accessible to all."
        />
        <Faq
          question="How is this different from regular AI tools like ChatGPT?"
          answer="It’s more user friendly, consistent, and provides a score you can compare to other organizations or departments. We provided very specific criteria and thousands of real-life examples. Some suggestions you receive may be similar to what you’d receive from ChatGPT, and some will be significantly better 😊."
        />
        <Faq
          question="Who are you and what else do you do?"
          answer="Simplify Language created this tool. We provide practical, custom training for hundreds of organizations to simplify written and spoken communication for any audience. We recommend using effective AI and building the awareness and skills to simplify communication without AI. The trainings are fun, shocking, and immediately actionable."
        />
      </div>
    </main>
  );
}
