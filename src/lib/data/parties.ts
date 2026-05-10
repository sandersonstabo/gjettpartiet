import frp from "$lib/assets/parties/frp.svg";
import h from "$lib/assets/parties/h.svg";
import krf from "$lib/assets/parties/krf.png";
import v from "$lib/assets/parties/v.svg";
import sp from "$lib/assets/parties/sp.svg";
import ap from "$lib/assets/parties/ap.png";
import mdg from "$lib/assets/parties/mdg.svg";
import sv from "$lib/assets/parties/sv.png";
import r from "$lib/assets/parties/r.svg";

export const party_tags = [
    "frp",
    "h",
    "v",
    "krf",
    "sp",
    "mdg",
    "ap",
    "sv",
    "r",
] as const;

export const Parties = {
    frp: {
        tag: "frp",
        name: "Fremskrittspartiet",
        colors: {
            text: "#fff",
            background: "#004F80",
        },
        image: frp,
    },
    h: {
        tag: "h",
        name: "Høyre",
        colors: {
            text: "#fff",
            background: "#0065F1",
        },
        image: h,
    },
    v: {
        tag: "v",
        name: "Venstre",
        colors: {
            text: "#fff",
            background: "#006666",
        },
        image: v,
    },
    krf: {
        tag: "krf",
        name: "Kristelig Folkeparti",
        colors: {
            text: "#111513",
            background: "#FEEE35",
        },
        image: krf,
    },
    sp: {
        tag: "sp",
        name: "Senterpartiet",
        colors: {
            text: "#fff",
            background: "#00843D",
        },
        image: sp,
    },
    mdg: {
        tag: "mdg",
        name: "Miljøpartiet De Grønne",
        colors: {
            text: "#fff",
            background: "#337102",
        },
        image: mdg,
    },
    ap: {
        tag: "ap",
        name: "Arbeiderpartiet",
        colors: {
            text: "#fff",
            background: "#E31C28",
        },
        image: ap,
    },
    sv: {
        tag: "sv",
        name: "Sosialistisk Venstreparti",
        colors: {
            text: "#fff",
            background: "#440C1A",
        },
        image: sv,
    },
    r: {
        tag: "r",
        name: "Rødt",
        colors: {
            text: "#fff",
            background: "#E90302",
        },
        image: r,
    },
} satisfies Record<(typeof party_tags)[number], PartyData>;

type PartyData = {
    tag: string;
    name: string;
    colors: {
        text: string;
        background: string;
    };
    image: string;
};

export type PartyTag = (typeof party_tags)[number];
export type Party = (typeof Parties)[PartyTag];
