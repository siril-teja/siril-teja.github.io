import type { ImageMetadata } from 'astro';

const researchModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/research/*.{png,jpg,jpeg,webp,gif}'
);

export async function researchImage(path?: string | null): Promise<ImageMetadata | undefined> {
  if (!path) return undefined;
  const loader = researchModules[path];
  if (!loader) return undefined;
  const mod = await loader();
  return mod.default;
}
