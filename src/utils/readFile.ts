import fs from 'fs';

export const readFile = async (path: string) => {
  if (!path) return;
  const content = await fs.promises.readFile(path, 'utf8');
  if (!content) return;
  return content;
};
