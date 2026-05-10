type StortingetPartyId =
  | "A"
  | "FrP"
  | "H"
  | "KrF"
  | "MDG"
  | "R"
  | "Sp"
  | "SV"
  | "V";
type PartyTag = "ap" | "frp" | "h" | "krf" | "mdg" | "r" | "sp" | "sv" | "v";

type StortingetCommittee = {
  id: string;
  navn: string;
};

type StortingetRepresentative = {
  id: string;
  fornavn: string;
  etternavn: string;
  fylke: {
    id: string;
    navn: string;
  };
  parti: {
    id: StortingetPartyId;
    navn: string;
  };
  komiteer_liste?: StortingetCommittee[];
};

type StortingetRepresentativesResponse = {
  dagensrepresentanter_liste: StortingetRepresentative[];
};

type StortingetGovernmentMember = {
  id: string;
  fornavn: string;
  etternavn: string;
  departement: string;
  parti: {
    id: StortingetPartyId;
    navn: string;
  };
  tittel?: string;
};

type StortingetGovernmentResponse = {
  regjeringsmedlemmer_liste: StortingetGovernmentMember[];
};

type Politician = {
  id: string;
  first_name: string;
  last_name: string;
  party: PartyTag;
  area: {
    id: string;
    name: string;
  };
  image: string;
  committees: {
    id: string;
    name: string;
  }[];
  title?: string;
};

const representatives_url =
  "https://data.stortinget.no/eksport/dagensrepresentanter?format=json";
const government_url =
  "https://data.stortinget.no/eksport/regjering?format=json";

const output_path = new URL("../src/lib/data/politicians.ts", import.meta.url);

const party_id_to_tag = {
  A: "ap",
  FrP: "frp",
  H: "h",
  KrF: "krf",
  MDG: "mdg",
  R: "r",
  Sp: "sp",
  SV: "sv",
  V: "v",
} satisfies Record<StortingetPartyId, PartyTag>;

const fetch_json = async <Data>(url: string): Promise<Data> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${url}: ${response.status} ${response.statusText}`,
    );
  }

  return await response.json() as Data;
};

const to_politician = (
  representative: StortingetRepresentative,
  titles_by_id: Map<string, string>,
): Politician => ({
  id: representative.id,
  first_name: representative.fornavn,
  last_name: representative.etternavn,
  party: party_id_to_tag[representative.parti.id],
  area: {
    id: representative.fylke.id,
    name: representative.fylke.navn,
  },
  image: `image_${representative.id}`,
  committees: (representative.komiteer_liste ?? []).map((committee) => ({
    id: committee.id,
    name: committee.navn,
  })),
  ...(titles_by_id.has(representative.id)
    ? { title: titles_by_id.get(representative.id) }
    : {}),
});

const government_member_to_politician = (
  member: StortingetGovernmentMember,
): Politician => ({
  id: member.id,
  first_name: member.fornavn,
  last_name: member.etternavn,
  party: party_id_to_tag[member.parti.id],
  area: {
    id: "REGJERING",
    name: member.departement,
  },
  image: `image_${member.id}`,
  committees: [],
  ...(member.tittel ? { title: member.tittel } : {}),
});

const quote = (value: string) => JSON.stringify(value);

const object_literal = (value: unknown, indent = 0): string => {
  const tab = "    ";
  const pad = tab.repeat(indent);
  const child_pad = tab.repeat(indent + 1);

  if (typeof value === "string") {
    return quote(value);
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "[]";
    }

    return `[\n${
      value.map((item) => `${child_pad}${object_literal(item, indent + 1)}`)
        .join(",\n")
    },\n${pad}]`;
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value);

    if (entries.length === 0) {
      return "{}";
    }

    return `{\n${
      entries
        .map(([key, item]) =>
          `${child_pad}${key}: ${object_literal(item, indent + 1)}`
        )
        .join(",\n")
    },\n${pad}}`;
  }

  return String(value);
};

const data = await fetch_json<StortingetRepresentativesResponse>(
  representatives_url,
);
const government = await fetch_json<StortingetGovernmentResponse>(
  government_url,
);
const titles_by_id = new Map(
  government.regjeringsmedlemmer_liste.flatMap((member) =>
    member.tittel ? [[member.id, member.tittel] as const] : []
  ),
);

const politicians_by_id = new Map(
  data.dagensrepresentanter_liste.map((representative) => {
    const politician = to_politician(representative, titles_by_id);
    return [politician.id, politician] as const;
  }),
);

for (const member of government.regjeringsmedlemmer_liste) {
  if (!politicians_by_id.has(member.id)) {
    const politician = government_member_to_politician(member);
    politicians_by_id.set(politician.id, politician);
  }
}

const politicians = Array.from(politicians_by_id.values())
  .sort((a, b) =>
    a.last_name.localeCompare(b.last_name, "nb") ||
    a.first_name.localeCompare(b.first_name, "nb")
  );

const politician_ids = politicians.map((politician) => politician.id);
const politician_entries = politicians.map((
  politician,
): readonly [string, Politician] => [politician.id, politician]);
const image_imports = politicians
  .map((politician) =>
    `import image_${politician.id} from "$lib/assets/politicians/${politician.id}.avif";`
  )
  .join("\n");

const generated = `import { HashMap } from "effect";
import type { PartyTag } from "./parties.ts";
${image_imports}

export type Politician = {
    id: string;
    first_name: string;
    last_name: string;
    party: PartyTag;
    area: {
        id: string;
        name: string;
    };
    image: string;
    committees: readonly {
        id: string;
        name: string;
    }[];
    title?: string;
};

export const PoliticianIds = ${object_literal(politician_ids)} as const;

export type PoliticianId = (typeof PoliticianIds)[number];

export const Politicians = HashMap.make(
${
  politician_entries.map(([id, politician]) =>
    `    [${quote(id)}, ${
      object_literal(politician, 1).replace(`"image_${id}"`, `image_${id}`)
    }] as const`
  ).join(",\n")
}
);
`;

await Deno.writeTextFile(output_path, generated);

console.log(
  `Wrote ${politicians.length} politicians to ${output_path.pathname}`,
);
