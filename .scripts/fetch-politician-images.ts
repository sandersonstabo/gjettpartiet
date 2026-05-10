type StortingetRepresentative = {
  id: string;
};

type StortingetRepresentativesResponse = {
  dagensrepresentanter_liste: StortingetRepresentative[];
};

type StortingetGovernmentResponse = {
  regjeringsmedlemmer_liste: StortingetRepresentative[];
};

const representatives_url =
  "https://data.stortinget.no/eksport/dagensrepresentanter?format=json";
const government_url =
  "https://data.stortinget.no/eksport/regjering?format=json";

const image_directory = new URL(
  "../src/lib/assets/politicians/",
  import.meta.url,
);

const image_url = (id: string) =>
  `https://data.stortinget.no/eksport/personbilde?personid=${
    encodeURIComponent(id)
  }&storrelse=stort&erstatningsbilde=true`;

const fetch_json = async <Data>(url: string): Promise<Data> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${url}: ${response.status} ${response.statusText}`,
    );
  }

  return await response.json() as Data;
};

const fetch_image = async (id: string): Promise<Uint8Array> => {
  const response = await fetch(image_url(id));

  if (!response.ok) {
    throw new Error(
      `Failed to fetch image for ${id}: ${response.status} ${response.statusText}`,
    );
  }

  return new Uint8Array(await response.arrayBuffer());
};

const write_image = async (id: string): Promise<void> => {
  const path = new URL(`${id}.jpg`, image_directory);

  try {
    await Deno.stat(path);
    console.log(`Skipped ${id}.jpg`);
    return;
  } catch (error) {
    if (!(error instanceof Deno.errors.NotFound)) {
      throw error;
    }
  }

  const image = await fetch_image(id);
  await Deno.writeFile(path, image);
  console.log(`Wrote ${id}.jpg`);
};

await Deno.mkdir(image_directory, { recursive: true });

const data = await fetch_json<StortingetRepresentativesResponse>(
  representatives_url,
);
const government = await fetch_json<StortingetGovernmentResponse>(
  government_url,
);
const ids = Array.from(
  new Set([
    ...data.dagensrepresentanter_liste.map((representative) =>
      representative.id
    ),
    ...government.regjeringsmedlemmer_liste.map((member) => member.id),
  ]),
)
  .sort((a, b) => a.localeCompare(b, "nb"));

for (const id of ids) {
  await write_image(id);
}

console.log(
  `Fetched ${ids.length} politician images to ${image_directory.pathname}`,
);
