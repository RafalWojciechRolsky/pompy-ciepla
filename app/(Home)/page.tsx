import path from 'path';
import { promises as fs } from 'fs';

import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Question from '@/components/Question';

interface QuestionType {
  id: number;
  title: string;
  body: string[];
  links: boolean;
  textOnLeft: boolean;
  backgroundColor: string;
  imageUrl: string;
}

const HomePage = async () => {
  const jsonDir = path.join(process.cwd(), 'data', '');
  const data = await fs.readFile(path.join(jsonDir, 'questions.json'), 'utf8');
  const questions: QuestionType[] = JSON.parse(data);

  return (
    <>
      <Hero />
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
    </>
  );
};

export default HomePage;
