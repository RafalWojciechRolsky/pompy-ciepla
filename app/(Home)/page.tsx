import path from 'path';
import { promises as fs } from 'fs';

import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Question from '@/components/Question';
import Services from '@/components/Services/Services';
import Movies from '@/components/Movies';

interface QuestionType {
  id: number;
  title: string;
  body: string[];
  links: boolean;
  textOnLeft: boolean;
  backgroundColor: string;
  imageUrl: string;
}
interface HeroType {
  id: number;
  title: string;
  points: string[];
  imageUrl: string;
}

const HomePage = async () => {
  const jsonDir = path.join(process.cwd(), 'data', '');
  const resQuestions = await fs.readFile(path.join(jsonDir, 'questions.json'), 'utf8');
  const resHero = await fs.readFile(path.join(jsonDir, 'hero.json'), 'utf8');
  const questions: QuestionType[] = JSON.parse(resQuestions);
  const hero: HeroType[] = JSON.parse(resHero);

  return (
    <>
      <Hero title={hero[0].title} points={hero[0].points} imageUrl={hero[0].imageUrl} />
      <Logos />
      {questions.map((question) => (
        <Question
          key={question.id}
          title={question.title}
          body={question.body}
          links={question.links}
          textOnLeft={question.textOnLeft}
          backgroundColor={question.backgroundColor}
          imageUrl={question.imageUrl}
        />
      ))}
      <Movies />
      <Services />
    </>
  );
};

export default HomePage;
