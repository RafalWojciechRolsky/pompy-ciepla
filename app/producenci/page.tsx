import path from 'path';
import { promises as fs } from 'fs';

import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Haier from '@/components/Producers/Haier/Haier';
import Rosento from '@/components/Producers/Rosento/Rosento';
import Gree from '@/components/Producers/Gree/Gree';
import Panasonic from '@/components/Producers/Panasonic/Panasonic';
import Neoheat from '@/components/Producers/Neoheat/Neoheat';

interface HeroType {
  id: number;
  title: string;
  points: string[];
  imageUrl: string;
}

const ProducenciPage = async () => {
  const jsonDir = path.join(process.cwd(), 'data', '');
  const resHero = await fs.readFile(path.join(jsonDir, 'hero.json'), 'utf8');
  const hero: HeroType[] = JSON.parse(resHero);

  return (
    <>
      <Hero title={hero[2].title} points={hero[2].points} imageUrl={hero[2].imageUrl} />
      <Logos />
      <section className="producers">
        <Neoheat />
        <Haier />
        <Gree />
        <Rosento />
        <Panasonic />
      </section>
    </>
  );
};

export default ProducenciPage;
