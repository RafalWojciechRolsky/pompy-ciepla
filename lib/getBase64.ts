import { getPlaiceholder } from 'plaiceholder';
import { promises as fs } from 'fs';
import path from 'path';

export const getBase64 = async (imageName: string) => {
  try {
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    const buffer = await fs.readFile(path.join(imagesDir, imageName));
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
};
