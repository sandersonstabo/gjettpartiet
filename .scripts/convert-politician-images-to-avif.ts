import sharp from "npm:sharp";
import { fileURLToPath } from "node:url";

const image_directory = new URL(
  "../src/lib/assets/politicians/",
  import.meta.url,
);
const avif_quality = 72;

const is_jpg = (entry: Deno.DirEntry): boolean =>
  entry.isFile && /\.jpe?g$/i.test(entry.name);

const output_name = (input_name: string): string =>
  input_name.replace(/\.jpe?g$/i, ".avif");

const should_convert = async (
  input_path: URL,
  output_path: URL,
): Promise<boolean> => {
  try {
    const [input, output] = await Promise.all([
      Deno.stat(input_path),
      Deno.stat(output_path),
    ]);

    return input.mtime !== null && output.mtime !== null &&
      input.mtime > output.mtime;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return true;
    }

    throw error;
  }
};

let converted = 0;
let skipped = 0;

for await (const entry of Deno.readDir(image_directory)) {
  if (!is_jpg(entry)) {
    continue;
  }

  const input_path = new URL(entry.name, image_directory);
  const avif_name = output_name(entry.name);
  const output_path = new URL(avif_name, image_directory);

  if (!(await should_convert(input_path, output_path))) {
    skipped += 1;
    console.log(`Skipped ${avif_name}`);
    continue;
  }

  await sharp(fileURLToPath(input_path))
    .rotate()
    .avif({ quality: avif_quality, effort: 6 })
    .toFile(fileURLToPath(output_path));

  converted += 1;
  console.log(`Wrote ${avif_name}`);
}

console.log(
  `Converted ${converted} politician images to AVIF, skipped ${skipped}.`,
);
