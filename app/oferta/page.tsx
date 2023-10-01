import path from 'path';
import { promises as fs } from 'fs';

import Hero from '@/components/Hero';
import Logos from '@/components/Logos';

interface HeroType {
  id: number;
  title: string;
  points: string[];
  imageUrl: string;
}

const OfertaPage = async () => {
  const jsonDir = path.join(process.cwd(), 'data', '');
  const resHero = await fs.readFile(path.join(jsonDir, 'hero.json'), 'utf8');
  const hero: HeroType[] = JSON.parse(resHero);

  return (
    <>
      <Hero title={hero[5].title} points={hero[5].points} imageUrl={hero[5].imageUrl} />
      <Logos />
    </>
  );
};

export default OfertaPage;
