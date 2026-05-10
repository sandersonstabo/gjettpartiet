import { HashMap } from "effect";
import type { PartyTag } from "./parties.ts";
import image_HASABD from "$lib/assets/politicians/HASABD.avif";
import image_STIA from "$lib/assets/politicians/STIA.avif";
import image_GKAL from "$lib/assets/politicians/GKAL.avif";
import image_KONALV from "$lib/assets/politicians/KONALV.avif";
import image_PTA from "$lib/assets/politicians/PTA.avif";
import image_ALFAND from "$lib/assets/politicians/ALFAND.avif";
import image_HEA from "$lib/assets/politicians/HEA.avif";
import image_HANASK from "$lib/assets/politicians/HANASK.avif";
import image_NA from "$lib/assets/politicians/NA.avif";
import image_RONAUK from "$lib/assets/politicians/RONAUK.avif";
import image_AAUK from "$lib/assets/politicians/AAUK.avif";
import image_SEA from "$lib/assets/politicians/SEA.avif";
import image_FB from "$lib/assets/politicians/FB.avif";
import image_RUB from "$lib/assets/politicians/RUB.avif";
import image_SEKBAK from "$lib/assets/politicians/SEKBAK.avif";
import image_UAB from "$lib/assets/politicians/UAB.avif";
import image_BENBEN from "$lib/assets/politicians/BENBEN.avif";
import image_RAGBER from "$lib/assets/politicians/RAGBER.avif";
import image_KIB from "$lib/assets/politicians/KIB.avif";
import image_KARBJR from "$lib/assets/politicians/KARBJR.avif";
import image_JONBLI from "$lib/assets/politicians/JONBLI.avif";
import image_PAMB from "$lib/assets/politicians/PAMB.avif";
import image_TONB from "$lib/assets/politicians/TONB.avif";
import image_ISABUS from "$lib/assets/politicians/ISABUS.avif";
import image_ERLBE1 from "$lib/assets/politicians/ERLBE1.avif";
import image_MARDAL from "$lib/assets/politicians/MARDAL.avif";
import image_EBE from "$lib/assets/politicians/EBE.avif";
import image_SUNEID from "$lib/assets/politicians/SUNEID.avif";
import image_JULEIK from "$lib/assets/politicians/JULEIK.avif";
import image_KEI from "$lib/assets/politicians/KEI.avif";
import image_AE from "$lib/assets/politicians/AE.avif";
import image_JOEH from "$lib/assets/politicians/JOEH.avif";
import image_ANDERI from "$lib/assets/politicians/ANDERI.avif";
import image_EVEERI from "$lib/assets/politicians/EVEERI.avif";
import image_MHER from "$lib/assets/politicians/MHER.avif";
import image_BENEST from "$lib/assets/politicians/BENEST.avif";
import image_MAHF from "$lib/assets/politicians/MAHF.avif";
import image_BFA from "$lib/assets/politicians/BFA.avif";
import image_INF from "$lib/assets/politicians/INF.avif";
import image_NF from "$lib/assets/politicians/NF.avif";
import image_ANNFRE from "$lib/assets/politicians/ANNFRE.avif";
import image_PCF from "$lib/assets/politicians/PCF.avif";
import image_MASG from "$lib/assets/politicians/MASG.avif";
import image_TG from "$lib/assets/politicians/TG.avif";
import image_VEBGOR from "$lib/assets/politicians/VEBGOR.avif";
import image_BJAG from "$lib/assets/politicians/BJAG.avif";
import image_HILGRA from "$lib/assets/politicians/HILGRA.avif";
import image_JUNGRU from "$lib/assets/politicians/JUNGRU.avif";
import image_MARGRT from "$lib/assets/politicians/MARGRT.avif";
import image_HGU from "$lib/assets/politicians/HGU.avif";
import image_KAMGUN from "$lib/assets/politicians/KAMGUN.avif";
import image_AMAGUN from "$lib/assets/politicians/AMAGUN.avif";
import image_LIG from "$lib/assets/politicians/LIG.avif";
import image_ANNHAG from "$lib/assets/politicians/ANNHAG.avif";
import image_MAHAG from "$lib/assets/politicians/MAHAG.avif";
import image_LAHA from "$lib/assets/politicians/LAHA.avif";
import image_MARHAM from "$lib/assets/politicians/MARHAM.avif";
import image_AGHA from "$lib/assets/politicians/AGHA.avif";
import image_LINHAU from "$lib/assets/politicians/LINHAU.avif";
import image_TROH from "$lib/assets/politicians/TROH.avif";
import image_MATHEN from "$lib/assets/politicians/MATHEN.avif";
import image_ARIHER from "$lib/assets/politicians/ARIHER.avif";
import image_SIHJE from "$lib/assets/politicians/SIHJE.avif";
import image_BÅH from "$lib/assets/politicians/BÅH.avif";
import image_RUTHOP from "$lib/assets/politicians/RUTHOP.avif";
import image_MHU from "$lib/assets/politicians/MHU.avif";
import image_MAAH from "$lib/assets/politicians/MAAH.avif";
import image_MIREHB from "$lib/assets/politicians/MIREHB.avif";
import image_ODAIND from "$lib/assets/politicians/ODAIND.avif";
import image_FROJAC from "$lib/assets/politicians/FROJAC.avif";
import image_LBF from "$lib/assets/politicians/LBF.avif";
import image_BENJAK from "$lib/assets/politicians/BENJAK.avif";
import image_SIRJEN from "$lib/assets/politicians/SIRJEN.avif";
import image_TAJ from "$lib/assets/politicians/TAJ.avif";
import image_MARJON from "$lib/assets/politicians/MARJON.avif";
import image_GEIRAJ from "$lib/assets/politicians/GEIRAJ.avif";
import image_MUK from "$lib/assets/politicians/MUK.avif";
import image_TOMKAR from "$lib/assets/politicians/TOMKAR.avif";
import image_PERKJL from "$lib/assets/politicians/PERKJL.avif";
import image_MORKOL from "$lib/assets/politicians/MORKOL.avif";
import image_JRGKRI from "$lib/assets/politicians/JRGKRI.avif";
import image_MMIKRI from "$lib/assets/politicians/MMIKRI.avif";
import image_FINKRO from "$lib/assets/politicians/FINKRO.avif";
import image_MORL from "$lib/assets/politicians/MORL.avif";
import image_BLA from "$lib/assets/politicians/BLA.avif";
import image_ERLL from "$lib/assets/politicians/ERLL.avif";
import image_KATLIE from "$lib/assets/politicians/KATLIE.avif";
import image_GEL from "$lib/assets/politicians/GEL.avif";
import image_INGLIL from "$lib/assets/politicians/INGLIL.avif";
import image_STILIL from "$lib/assets/politicians/STILIL.avif";
import image_HLI from "$lib/assets/politicians/HLI.avif";
import image_TOBLIN from "$lib/assets/politicians/TOBLIN.avif";
import image_ALI from "$lib/assets/politicians/ALI.avif";
import image_SYL from "$lib/assets/politicians/SYL.avif";
import image_JLO from "$lib/assets/politicians/JLO.avif";
import image_MHL from "$lib/assets/politicians/MHL.avif";
import image_BJOL from "$lib/assets/politicians/BJOL.avif";
import image_SOFMAR from "$lib/assets/politicians/SOFMAR.avif";
import image_MARMAR from "$lib/assets/politicians/MARMAR.avif";
import image_YSTMAT from "$lib/assets/politicians/YSTMAT.avif";
import image_GME from "$lib/assets/politicians/GME.avif";
import image_LIM from "$lib/assets/politicians/LIM.avif";
import image_RUNMID from "$lib/assets/politicians/RUNMID.avif";
import image_TUMO from "$lib/assets/politicians/TUMO.avif";
import image_AIM from "$lib/assets/politicians/AIM.avif";
import image_MMO from "$lib/assets/politicians/MMO.avif";
import image_BJMO from "$lib/assets/politicians/BJMO.avif";
import image_SMY from "$lib/assets/politicians/SMY.avif";
import image_CTM from "$lib/assets/politicians/CTM.avif";
import image_TIM from "$lib/assets/politicians/TIM.avif";
import image_MONNIE from "$lib/assets/politicians/MONNIE.avif";
import image_MARNIL from "$lib/assets/politicians/MARNIL.avif";
import image_MONNIL from "$lib/assets/politicians/MONNIL.avif";
import image_HNJ from "$lib/assets/politicians/HNJ.avif";
import image_JSB from "$lib/assets/politicians/JSB.avif";
import image_KARNOR from "$lib/assets/politicians/KARNOR.avif";
import image_JONN from "$lib/assets/politicians/JONN.avif";
import image_HEGNYH from "$lib/assets/politicians/HEGNYH.avif";
import image_NSSMAR from "$lib/assets/politicians/NSSMAR.avif";
import image_DHO from "$lib/assets/politicians/DHO.avif";
import image_TAGP from "$lib/assets/politicians/TAGP.avif";
import image_GP from "$lib/assets/politicians/GP.avif";
import image_HSP from "$lib/assets/politicians/HSP.avif";
import image_FARQUR from "$lib/assets/politicians/FARQUR.avif";
import image_SIGRAF from "$lib/assets/politicians/SIGRAF.avif";
import image_ABIR from "$lib/assets/politicians/ABIR.avif";
import image_ANNREF from "$lib/assets/politicians/ANNREF.avif";
import image_LARREM from "$lib/assets/politicians/LARREM.avif";
import image_EVR from "$lib/assets/politicians/EVR.avif";
import image_IDARSE from "$lib/assets/politicians/IDARSE.avif";
import image_MORSAN from "$lib/assets/politicians/MORSAN.avif";
import image_LHS from "$lib/assets/politicians/LHS.avif";
import image_ESAN from "$lib/assets/politicians/ESAN.avif";
import image_KARSAN from "$lib/assets/politicians/KARSAN.avif";
import image_NKS from "$lib/assets/politicians/NKS.avif";
import image_TORSAN from "$lib/assets/politicians/TORSAN.avif";
import image_JONSAY from "$lib/assets/politicians/JONSAY.avif";
import image_LISSEL from "$lib/assets/politicians/LISSEL.avif";
import image_KRISIV from "$lib/assets/politicians/KRISIV.avif";
import image_FRYSJU from "$lib/assets/politicians/FRYSJU.avif";
import image_BJRSKJ from "$lib/assets/politicians/BJRSKJ.avif";
import image_ES from "$lib/assets/politicians/ES.avif";
import image_KRISOL from "$lib/assets/politicians/KRISOL.avif";
import image_RIKSPE from "$lib/assets/politicians/RIKSPE.avif";
import image_AICS from "$lib/assets/politicians/AICS.avif";
import image_KJSE from "$lib/assets/politicians/KJSE.avif";
import image_HANSTE from "$lib/assets/politicians/HANSTE.avif";
import image_ALES from "$lib/assets/politicians/ALES.avif";
import image_JES from "$lib/assets/politicians/JES.avif";
import image_STISTO from "$lib/assets/politicians/STISTO.avif";
import image_FMS from "$lib/assets/politicians/FMS.avif";
import image_BERST from "$lib/assets/politicians/BERST.avif";
import image_JULSTU from "$lib/assets/politicians/JULSTU.avif";
import image_JGS from "$lib/assets/politicians/JGS.avif";
import image_RUNSTS from "$lib/assets/politicians/RUNSTS.avif";
import image_TSTA from "$lib/assets/politicians/TSTA.avif";
import image_TRISUN from "$lib/assets/politicians/TRISUN.avif";
import image_FES from "$lib/assets/politicians/FES.avif";
import image_BSV from "$lib/assets/politicians/BSV.avif";
import image_REMSLV from "$lib/assets/politicians/REMSLV.avif";
import image_IME from "$lib/assets/politicians/IME.avif";
import image_JOATAN from "$lib/assets/politicians/JOATAN.avif";
import image_BRDTHO from "$lib/assets/politicians/BRDTHO.avif";
import image_KJT from "$lib/assets/politicians/KJT.avif";
import image_OBT from "$lib/assets/politicians/OBT.avif";
import image_TWT from "$lib/assets/politicians/TWT.avif";
import image_KAT from "$lib/assets/politicians/KAT.avif";
import image_MTY from "$lib/assets/politicians/MTY.avif";
import image_HARVAL from "$lib/assets/politicians/HARVAL.avif";
import image_TRV from "$lib/assets/politicians/TRV.avif";
import image_TMV from "$lib/assets/politicians/TMV.avif";
import image_SIMVEL from "$lib/assets/politicians/SIMVEL.avif";
import image_TVER from "$lib/assets/politicians/TVER.avif";
import image_SOLVES from "$lib/assets/politicians/SOLVES.avif";
import image_JANVES from "$lib/assets/politicians/JANVES.avif";
import image_SOLVIK from "$lib/assets/politicians/SOLVIK.avif";
import image_AGNVIL from "$lib/assets/politicians/AGNVIL.avif";
import image_SOLVIT from "$lib/assets/politicians/SOLVIT.avif";
import image_LVA from "$lib/assets/politicians/LVA.avif";
import image_TOWA from "$lib/assets/politicians/TOWA.avif";
import image_EW from "$lib/assets/politicians/EW.avif";
import image_MOW from "$lib/assets/politicians/MOW.avif";
import image_ELW from "$lib/assets/politicians/ELW.avif";
import image_JOEYST from "$lib/assets/politicians/JOEYST.avif";
import image_KOS from "$lib/assets/politicians/KOS.avif";
import image_ASTAAS from "$lib/assets/politicians/ASTAAS.avif";
import image_AASE from "$lib/assets/politicians/AASE.avif";
import image_SIGAAS from "$lib/assets/politicians/SIGAAS.avif";
import image_TELA from "$lib/assets/politicians/TELA.avif";

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

export const PoliticianIds = [
    "HASABD",
    "STIA",
    "GKAL",
    "KONALV",
    "PTA",
    "ALFAND",
    "HEA",
    "HANASK",
    "NA",
    "RONAUK",
    "AAUK",
    "SEA",
    "FB",
    "RUB",
    "SEKBAK",
    "UAB",
    "BENBEN",
    "RAGBER",
    "KIB",
    "KARBJR",
    "JONBLI",
    "PAMB",
    "TONB",
    "ISABUS",
    "ERLBE1",
    "MARDAL",
    "EBE",
    "SUNEID",
    "JULEIK",
    "KEI",
    "AE",
    "JOEH",
    "ANDERI",
    "EVEERI",
    "MHER",
    "BENEST",
    "MAHF",
    "BFA",
    "INF",
    "NF",
    "ANNFRE",
    "PCF",
    "MASG",
    "TG",
    "VEBGOR",
    "BJAG",
    "HILGRA",
    "JUNGRU",
    "MARGRT",
    "HGU",
    "KAMGUN",
    "AMAGUN",
    "LIG",
    "ANNHAG",
    "MAHAG",
    "LAHA",
    "MARHAM",
    "AGHA",
    "LINHAU",
    "TROH",
    "MATHEN",
    "ARIHER",
    "SIHJE",
    "BÅH",
    "RUTHOP",
    "MHU",
    "MAAH",
    "MIREHB",
    "ODAIND",
    "FROJAC",
    "LBF",
    "BENJAK",
    "SIRJEN",
    "TAJ",
    "MARJON",
    "GEIRAJ",
    "MUK",
    "TOMKAR",
    "PERKJL",
    "MORKOL",
    "JRGKRI",
    "MMIKRI",
    "FINKRO",
    "MORL",
    "BLA",
    "ERLL",
    "KATLIE",
    "GEL",
    "INGLIL",
    "STILIL",
    "HLI",
    "TOBLIN",
    "ALI",
    "SYL",
    "JLO",
    "MHL",
    "BJOL",
    "SOFMAR",
    "MARMAR",
    "YSTMAT",
    "GME",
    "LIM",
    "RUNMID",
    "TUMO",
    "AIM",
    "MMO",
    "BJMO",
    "SMY",
    "CTM",
    "TIM",
    "MONNIE",
    "MARNIL",
    "MONNIL",
    "HNJ",
    "JSB",
    "KARNOR",
    "JONN",
    "HEGNYH",
    "NSSMAR",
    "DHO",
    "TAGP",
    "GP",
    "HSP",
    "FARQUR",
    "SIGRAF",
    "ABIR",
    "ANNREF",
    "LARREM",
    "EVR",
    "IDARSE",
    "MORSAN",
    "LHS",
    "ESAN",
    "KARSAN",
    "NKS",
    "TORSAN",
    "JONSAY",
    "LISSEL",
    "KRISIV",
    "FRYSJU",
    "BJRSKJ",
    "ES",
    "KRISOL",
    "RIKSPE",
    "AICS",
    "KJSE",
    "HANSTE",
    "ALES",
    "JES",
    "STISTO",
    "FMS",
    "BERST",
    "JULSTU",
    "JGS",
    "RUNSTS",
    "TSTA",
    "TRISUN",
    "FES",
    "BSV",
    "REMSLV",
    "IME",
    "JOATAN",
    "BRDTHO",
    "KJT",
    "OBT",
    "TWT",
    "KAT",
    "MTY",
    "HARVAL",
    "TRV",
    "TMV",
    "SIMVEL",
    "TVER",
    "SOLVES",
    "JANVES",
    "SOLVIK",
    "AGNVIL",
    "SOLVIT",
    "LVA",
    "TOWA",
    "EW",
    "MOW",
    "ELW",
    "JOEYST",
    "KOS",
    "ASTAAS",
    "AASE",
    "SIGAAS",
    "TELA",
] as const;

export type PoliticianId = (typeof PoliticianIds)[number];

export const Politicians = HashMap.make(
    ["HASABD", {
        id: "HASABD",
        first_name: "Hashim",
        last_name: "Abdi",
        party: "ap",
        area: {
            id: "Øs",
            name: "Østfold",
        },
        image: image_HASABD,
        committees: [
            {
                id: "FAMKULT",
                name: "Familie- og kulturkomiteen",
            },
        ],
    }] as const,
    ["STIA", {
        id: "STIA",
        first_name: "Stig Atle",
        last_name: "Abrahamsen",
        party: "frp",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_STIA,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["GKAL", {
        id: "GKAL",
        first_name: "Grunde",
        last_name: "Almeland",
        party: "v",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_GKAL,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["KONALV", {
        id: "KONALV",
        first_name: "Konstanse Marie",
        last_name: "Alvær",
        party: "ap",
        area: {
            id: "Te",
            name: "Telemark",
        },
        image: image_KONALV,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["PTA", {
        id: "PTA",
        first_name: "Per-Willy",
        last_name: "Amundsen",
        party: "frp",
        area: {
            id: "Tr",
            name: "Troms",
        },
        image: image_PTA,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
        ],
    }] as const,
    ["ALFAND", {
        id: "ALFAND",
        first_name: "Alf Erik",
        last_name: "Andersen",
        party: "frp",
        area: {
            id: "VA",
            name: "Vest-Agder",
        },
        image: image_ALFAND,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["HEA", {
        id: "HEA",
        first_name: "Henrik",
        last_name: "Asheim",
        party: "h",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_HEA,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["HANASK", {
        id: "HANASK",
        first_name: "Hans Edvard",
        last_name: "Askjer",
        party: "krf",
        area: {
            id: "Te",
            name: "Telemark",
        },
        image: image_HANASK,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["NA", {
        id: "NA",
        first_name: "Nikolai",
        last_name: "Astrup",
        party: "h",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_NA,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["RONAUK", {
        id: "RONAUK",
        first_name: "Ronny",
        last_name: "Aukrust",
        party: "ap",
        area: {
            id: "Øs",
            name: "Østfold",
        },
        image: image_RONAUK,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
        ],
    }] as const,
    ["AAUK", {
        id: "AAUK",
        first_name: "Åsmund",
        last_name: "Aukrust",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Utenriksdepartementet, utviklingssaker",
        },
        image: image_AAUK,
        committees: [],
        title: "Utviklingsminister",
    }] as const,
    ["SEA", {
        id: "SEA",
        first_name: "Seher",
        last_name: "Aydar",
        party: "r",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_SEA,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["FB", {
        id: "FB",
        first_name: "Farahnaz",
        last_name: "Bahrami",
        party: "ap",
        area: {
            id: "He",
            name: "Hedmark",
        },
        image: image_FB,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["RUB", {
        id: "RUB",
        first_name: "Rune",
        last_name: "Bakervik",
        party: "ap",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_RUB,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["SEKBAK", {
        id: "SEKBAK",
        first_name: "Åse Kristin Ask",
        last_name: "Bakke",
        party: "ap",
        area: {
            id: "MR",
            name: "Møre og Romsdal",
        },
        image: image_SEKBAK,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["UAB", {
        id: "UAB",
        first_name: "Une",
        last_name: "Bastholm",
        party: "mdg",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_UAB,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["BENBEN", {
        id: "BENBEN",
        first_name: "Bent-Joacim",
        last_name: "Bentzen",
        party: "sp",
        area: {
            id: "No",
            name: "Nordland",
        },
        image: image_BENBEN,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["RAGBER", {
        id: "RAGBER",
        first_name: "Ragnhild",
        last_name: "Bergheim",
        party: "ap",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_RAGBER,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["KIB", {
        id: "KIB",
        first_name: "Kirsti",
        last_name: "Bergstø",
        party: "sv",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_KIB,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["KARBJR", {
        id: "KARBJR",
        first_name: "Kari Sofie",
        last_name: "Bjørnsen",
        party: "h",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_KARBJR,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["JONBLI", {
        id: "JONBLI",
        first_name: "Jone",
        last_name: "Blikra",
        party: "ap",
        area: {
            id: "Te",
            name: "Telemark",
        },
        image: image_JONBLI,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["PAMB", {
        id: "PAMB",
        first_name: "Pål Morten",
        last_name: "Borgli",
        party: "frp",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_PAMB,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
        ],
    }] as const,
    ["TONB", {
        id: "TONB",
        first_name: "Tonje",
        last_name: "Brenna",
        party: "ap",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_TONB,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["ISABUS", {
        id: "ISABUS",
        first_name: "Isak Veierud",
        last_name: "Busch",
        party: "ap",
        area: {
            id: "ST",
            name: "Sør-Trøndelag",
        },
        image: image_ISABUS,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["ERLBE1", {
        id: "ERLBE1",
        first_name: "Erlend Svardal",
        last_name: "Bøe",
        party: "h",
        area: {
            id: "Tr",
            name: "Troms",
        },
        image: image_ERLBE1,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["MARDAL", {
        id: "MARDAL",
        first_name: "Marius Langballe",
        last_name: "Dalin",
        party: "mdg",
        area: {
            id: "SF",
            name: "Sogn og Fjordane",
        },
        image: image_MARDAL,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["EBE", {
        id: "EBE",
        first_name: "Espen Barth",
        last_name: "Eide",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Utenriksdepartementet",
        },
        image: image_EBE,
        committees: [],
        title: "Utenriksminister",
    }] as const,
    ["SUNEID", {
        id: "SUNEID",
        first_name: "Sunniva Holmås",
        last_name: "Eidsvoll",
        party: "sv",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_SUNEID,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["JULEIK", {
        id: "JULEIK",
        first_name: "Julia",
        last_name: "Eikeland",
        party: "ap",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_JULEIK,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["KEI", {
        id: "KEI",
        first_name: "Kristian August",
        last_name: "Eilertsen",
        party: "frp",
        area: {
            id: "Tr",
            name: "Troms",
        },
        image: image_KEI,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["AE", {
        id: "AE",
        first_name: "Anette Carnarius",
        last_name: "Elseth",
        party: "frp",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_AE,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["JOEH", {
        id: "JOEH",
        first_name: "Jon",
        last_name: "Engen-Helgheim",
        party: "frp",
        area: {
            id: "Bu",
            name: "Buskerud",
        },
        image: image_JOEH,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["ANDERI", {
        id: "ANDERI",
        first_name: "Andreas Bjelland",
        last_name: "Eriksen",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Klima- og miljødepartementet",
        },
        image: image_ANDERI,
        committees: [],
        title: "Klima- og miljøminister",
    }] as const,
    ["EVEERI", {
        id: "EVEERI",
        first_name: "Even H.",
        last_name: "Eriksen",
        party: "ap",
        area: {
            id: "He",
            name: "Hedmark",
        },
        image: image_EVEERI,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["MHER", {
        id: "MHER",
        first_name: "May Helen Hetland",
        last_name: "Ervik",
        party: "frp",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_MHER,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["BENEST", {
        id: "BENEST",
        first_name: "Bente",
        last_name: "Estil",
        party: "ap",
        area: {
            id: "NT",
            name: "Nord-Trøndelag",
        },
        image: image_BENEST,
        committees: [
            {
                id: "FAMKULT",
                name: "Familie- og kulturkomiteen",
            },
        ],
    }] as const,
    ["MAHF", {
        id: "MAHF",
        first_name: "Mahmoud",
        last_name: "Farahmand",
        party: "h",
        area: {
            id: "Te",
            name: "Telemark",
        },
        image: image_MAHF,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["BFA", {
        id: "BFA",
        first_name: "Bengt",
        last_name: "Fasteraune",
        party: "sp",
        area: {
            id: "Op",
            name: "Oppland",
        },
        image: image_BFA,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["INF", {
        id: "INF",
        first_name: "Ingrid",
        last_name: "Fiskaa",
        party: "sv",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_INF,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["NF", {
        id: "NF",
        first_name: "Nils-Ole",
        last_name: "Foshaug",
        party: "ap",
        area: {
            id: "Tr",
            name: "Troms",
        },
        image: image_NF,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["ANNFRE", {
        id: "ANNFRE",
        first_name: "Anne Lise Gjerstad",
        last_name: "Fredlund",
        party: "sv",
        area: {
            id: "Op",
            name: "Oppland",
        },
        image: image_ANNFRE,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["PCF", {
        id: "PCF",
        first_name: "Peter",
        last_name: "Frølich",
        party: "h",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_PCF,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["MASG", {
        id: "MASG",
        first_name: "Masud",
        last_name: "Gharahkhani",
        party: "ap",
        area: {
            id: "Bu",
            name: "Buskerud",
        },
        image: image_MASG,
        committees: [],
    }] as const,
    ["TG", {
        id: "TG",
        first_name: "Trond",
        last_name: "Giske",
        party: "ap",
        area: {
            id: "ST",
            name: "Sør-Trøndelag",
        },
        image: image_TG,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["VEBGOR", {
        id: "VEBGOR",
        first_name: "Vebjørn",
        last_name: "Gorseth",
        party: "ap",
        area: {
            id: "NT",
            name: "Nord-Trøndelag",
        },
        image: image_VEBGOR,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["BJAG", {
        id: "BJAG",
        first_name: "Bjørn Arild",
        last_name: "Gram",
        party: "sp",
        area: {
            id: "NT",
            name: "Nord-Trøndelag",
        },
        image: image_BJAG,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["HILGRA", {
        id: "HILGRA",
        first_name: "Hilde",
        last_name: "Grande",
        party: "frp",
        area: {
            id: "No",
            name: "Nordland",
        },
        image: image_HILGRA,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["JUNGRU", {
        id: "JUNGRU",
        first_name: "June Trengereid",
        last_name: "Gruer",
        party: "ap",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_JUNGRU,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["MARGRT", {
        id: "MARGRT",
        first_name: "Maren",
        last_name: "Grøthe",
        party: "sp",
        area: {
            id: "ST",
            name: "Sør-Trøndelag",
        },
        image: image_MARGRT,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["HGU", {
        id: "HGU",
        first_name: "Himanshu",
        last_name: "Gulati",
        party: "frp",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_HGU,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["KAMGUN", {
        id: "KAMGUN",
        first_name: "Kamzy",
        last_name: "Gunaratnam",
        party: "ap",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_KAMGUN,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["AMAGUN", {
        id: "AMAGUN",
        first_name: "Amalie",
        last_name: "Gunnufsen",
        party: "h",
        area: {
            id: "VA",
            name: "Vest-Agder",
        },
        image: image_AMAGUN,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["LIG", {
        id: "LIG",
        first_name: "Liv",
        last_name: "Gustavsen",
        party: "frp",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_LIG,
        committees: [
            {
                id: "FAMKULT",
                name: "Familie- og kulturkomiteen",
            },
        ],
    }] as const,
    ["ANNHAG", {
        id: "ANNHAG",
        first_name: "Anne",
        last_name: "Hagenborg",
        party: "ap",
        area: {
            id: "Op",
            name: "Oppland",
        },
        image: image_ANNHAG,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["MAHAG", {
        id: "MAHAG",
        first_name: "Margret",
        last_name: "Hagerup",
        party: "h",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_MAHAG,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["LAHA", {
        id: "LAHA",
        first_name: "Lars",
        last_name: "Haltbrekken",
        party: "sv",
        area: {
            id: "ST",
            name: "Sør-Trøndelag",
        },
        image: image_LAHA,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["MARHAM", {
        id: "MARHAM",
        first_name: "Marthe",
        last_name: "Hammer",
        party: "sv",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_MARHAM,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["AGHA", {
        id: "AGHA",
        first_name: "Anne Grethe",
        last_name: "Hauan",
        party: "frp",
        area: {
            id: "Ve",
            name: "Vestfold",
        },
        image: image_AGHA,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["LINHAU", {
        id: "LINHAU",
        first_name: "Line Marlene",
        last_name: "Haugen",
        party: "frp",
        area: {
            id: "Te",
            name: "Telemark",
        },
        image: image_LINHAU,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["TROH", {
        id: "TROH",
        first_name: "Trond",
        last_name: "Helleland",
        party: "h",
        area: {
            id: "Bu",
            name: "Buskerud",
        },
        image: image_TROH,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["MATHEN", {
        id: "MATHEN",
        first_name: "Mats",
        last_name: "Henriksen",
        party: "frp",
        area: {
            id: "NT",
            name: "Nord-Trøndelag",
        },
        image: image_MATHEN,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["ARIHER", {
        id: "ARIHER",
        first_name: "Arild",
        last_name: "Hermstad",
        party: "mdg",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_ARIHER,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["SIHJE", {
        id: "SIHJE",
        first_name: "Silje",
        last_name: "Hjemdal",
        party: "frp",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_SIHJE,
        committees: [
            {
                id: "FAMKULT",
                name: "Familie- og kulturkomiteen",
            },
        ],
    }] as const,
    ["BÅH", {
        id: "BÅH",
        first_name: "Bård",
        last_name: "Hoksrud",
        party: "frp",
        area: {
            id: "Te",
            name: "Telemark",
        },
        image: image_BÅH,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["RUTHOP", {
        id: "RUTHOP",
        first_name: "Ruth Mariann",
        last_name: "Hop",
        party: "ap",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_RUTHOP,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["MHU", {
        id: "MHU",
        first_name: "Mani",
        last_name: "Hussaini",
        party: "ap",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_MHU,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["MAAH", {
        id: "MAAH",
        first_name: "Marian",
        last_name: "Hussein",
        party: "sv",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_MAAH,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["MIREHB", {
        id: "MIREHB",
        first_name: "Mirell",
        last_name: "Høyer-Berntsen",
        party: "sv",
        area: {
            id: "VA",
            name: "Vest-Agder",
        },
        image: image_MIREHB,
        committees: [
            {
                id: "FAMKULT",
                name: "Familie- og kulturkomiteen",
            },
        ],
    }] as const,
    ["ODAIND", {
        id: "ODAIND",
        first_name: "Oda",
        last_name: "Indgaard",
        party: "mdg",
        area: {
            id: "NT",
            name: "Nord-Trøndelag",
        },
        image: image_ODAIND,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["FROJAC", {
        id: "FROJAC",
        first_name: "Frode",
        last_name: "Jacobsen",
        party: "ap",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_FROJAC,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["LBF", {
        id: "LBF",
        first_name: "Lubna Boby",
        last_name: "Jaffery",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Kultur- og likestillingsdepartementet",
        },
        image: image_LBF,
        committees: [],
        title: "Kultur- og likestillingsminister",
    }] as const,
    ["BENJAK", {
        id: "BENJAK",
        first_name: "Benjamin",
        last_name: "Jakobsen",
        party: "ap",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_BENJAK,
        committees: [
            {
                id: "FAMKULT",
                name: "Familie- og kulturkomiteen",
            },
        ],
    }] as const,
    ["SIRJEN", {
        id: "SIRJEN",
        first_name: "Siren Julianne",
        last_name: "Jensen",
        party: "mdg",
        area: {
            id: "Fi",
            name: "Finnmark",
        },
        image: image_SIRJEN,
        committees: [
            {
                id: "FAMKULT",
                name: "Familie- og kulturkomiteen",
            },
        ],
    }] as const,
    ["TAJ", {
        id: "TAJ",
        first_name: "Tor André",
        last_name: "Johnsen",
        party: "frp",
        area: {
            id: "He",
            name: "Hedmark",
        },
        image: image_TAJ,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["MARJON", {
        id: "MARJON",
        first_name: "Martin Virkesdal",
        last_name: "Jonsterhaug",
        party: "frp",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_MARJON,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["GEIRAJ", {
        id: "GEIRAJ",
        first_name: "Geir",
        last_name: "Jørgensen",
        party: "r",
        area: {
            id: "No",
            name: "Nordland",
        },
        image: image_GEIRAJ,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["MUK", {
        id: "MUK",
        first_name: "Mudassar",
        last_name: "Kapur",
        party: "h",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_MUK,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["TOMKAR", {
        id: "TOMKAR",
        first_name: "Tom Einar",
        last_name: "Karlsen",
        party: "ap",
        area: {
            id: "Tr",
            name: "Troms",
        },
        image: image_TOMKAR,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["PERKJL", {
        id: "PERKJL",
        first_name: "Per Vidar",
        last_name: "Kjølmoen",
        party: "ap",
        area: {
            id: "MR",
            name: "Møre og Romsdal",
        },
        image: image_PERKJL,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["MORKOL", {
        id: "MORKOL",
        first_name: "Morten",
        last_name: "Kolbjørnsen",
        party: "frp",
        area: {
            id: "He",
            name: "Hedmark",
        },
        image: image_MORKOL,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["JRGKRI", {
        id: "JRGKRI",
        first_name: "Jørgen H.",
        last_name: "Kristiansen",
        party: "krf",
        area: {
            id: "AA",
            name: "Aust-Agder",
        },
        image: image_JRGKRI,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["MMIKRI", {
        id: "MMIKRI",
        first_name: "Mímir",
        last_name: "Kristjánsson",
        party: "r",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_MMIKRI,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["FINKRO", {
        id: "FINKRO",
        first_name: "Finn",
        last_name: "Krokeide",
        party: "frp",
        area: {
            id: "Op",
            name: "Oppland",
        },
        image: image_FINKRO,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["MORL", {
        id: "MORL",
        first_name: "Morgan",
        last_name: "Langfeldt",
        party: "frp",
        area: {
            id: "Bu",
            name: "Buskerud",
        },
        image: image_MORL,
        committees: [
            {
                id: "FAMKULT",
                name: "Familie- og kulturkomiteen",
            },
        ],
    }] as const,
    ["BLA", {
        id: "BLA",
        first_name: "Bjørn",
        last_name: "Larsen",
        party: "frp",
        area: {
            id: "No",
            name: "Nordland",
        },
        image: image_BLA,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["ERLL", {
        id: "ERLL",
        first_name: "Erlend",
        last_name: "Larsen",
        party: "h",
        area: {
            id: "Ve",
            name: "Vestfold",
        },
        image: image_ERLL,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["KATLIE", {
        id: "KATLIE",
        first_name: "Kathy",
        last_name: "Lie",
        party: "sv",
        area: {
            id: "Bu",
            name: "Buskerud",
        },
        image: image_KATLIE,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["GEL", {
        id: "GEL",
        first_name: "Geir Inge",
        last_name: "Lien",
        party: "sp",
        area: {
            id: "MR",
            name: "Møre og Romsdal",
        },
        image: image_GEL,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["INGLIL", {
        id: "INGLIL",
        first_name: "Ingrid",
        last_name: "Liland",
        party: "mdg",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_INGLIL,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["STILIL", {
        id: "STILIL",
        first_name: "Stig Even",
        last_name: "Lillestøl",
        party: "frp",
        area: {
            id: "SF",
            name: "Sogn og Fjordane",
        },
        image: image_STILIL,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["HLI", {
        id: "HLI",
        first_name: "Hans Andreas",
        last_name: "Limi",
        party: "frp",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_HLI,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["TOBLIN", {
        id: "TOBLIN",
        first_name: "Tobias Hangaard",
        last_name: "Linge",
        party: "ap",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_TOBLIN,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["ALI", {
        id: "ALI",
        first_name: "Anne Kristine",
        last_name: "Linnestad",
        party: "h",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_ALI,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["SYL", {
        id: "SYL",
        first_name: "Sylvi",
        last_name: "Listhaug",
        party: "frp",
        area: {
            id: "MR",
            name: "Møre og Romsdal",
        },
        image: image_SYL,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["JLO", {
        id: "JLO",
        first_name: "Jorunn Gleditsch",
        last_name: "Lossius",
        party: "krf",
        area: {
            id: "VA",
            name: "Vest-Agder",
        },
        image: image_JLO,
        committees: [
            {
                id: "FAMKULT",
                name: "Familie- og kulturkomiteen",
            },
        ],
    }] as const,
    ["MHL", {
        id: "MHL",
        first_name: "Mari Holm",
        last_name: "Lønseth",
        party: "h",
        area: {
            id: "ST",
            name: "Sør-Trøndelag",
        },
        image: image_MHL,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["BJOL", {
        id: "BJOL",
        first_name: "Bjørnar",
        last_name: "Laabak",
        party: "frp",
        area: {
            id: "Øs",
            name: "Østfold",
        },
        image: image_BJOL,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["SOFMAR", {
        id: "SOFMAR",
        first_name: "Sofie",
        last_name: "Marhaug",
        party: "r",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_SOFMAR,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["MARMAR", {
        id: "MARMAR",
        first_name: "Marie Sneve",
        last_name: "Martinussen",
        party: "r",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_MARMAR,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["YSTMAT", {
        id: "YSTMAT",
        first_name: "Øystein",
        last_name: "Mathisen",
        party: "ap",
        area: {
            id: "No",
            name: "Nordland",
        },
        image: image_YSTMAT,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["GME", {
        id: "GME",
        first_name: "Guri",
        last_name: "Melby",
        party: "v",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_GME,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["LIM", {
        id: "LIM",
        first_name: "Linda Monsen",
        last_name: "Merkesdal",
        party: "ap",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_LIM,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["RUNMID", {
        id: "RUNMID",
        first_name: "Rune",
        last_name: "Midtun",
        party: "frp",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_RUNMID,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["TUMO", {
        id: "TUMO",
        first_name: "Tuva",
        last_name: "Moflag",
        party: "ap",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_TUMO,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["AIM", {
        id: "AIM",
        first_name: "Anna",
        last_name: "Molberg",
        party: "h",
        area: {
            id: "He",
            name: "Hedmark",
        },
        image: image_AIM,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["MMO", {
        id: "MMO",
        first_name: "Monica",
        last_name: "Molvær",
        party: "h",
        area: {
            id: "MR",
            name: "Møre og Romsdal",
        },
        image: image_MMO,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["BJMO", {
        id: "BJMO",
        first_name: "Bjørnar",
        last_name: "Moxnes",
        party: "r",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_BJMO,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["SMY", {
        id: "SMY",
        first_name: "Sverre",
        last_name: "Myrli",
        party: "ap",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_SMY,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
        ],
    }] as const,
    ["CTM", {
        id: "CTM",
        first_name: "Cecilie",
        last_name: "Myrseth",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Nærings- og fiskeridepartementet",
        },
        image: image_CTM,
        committees: [],
        title: "Næringsminister",
    }] as const,
    ["TIM", {
        id: "TIM",
        first_name: "Tellef Inge",
        last_name: "Mørland",
        party: "ap",
        area: {
            id: "AA",
            name: "Aust-Agder",
        },
        image: image_TIM,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["MONNIE", {
        id: "MONNIE",
        first_name: "Monica",
        last_name: "Nielsen",
        party: "ap",
        area: {
            id: "Fi",
            name: "Finnmark",
        },
        image: image_MONNIE,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["MARNIL", {
        id: "MARNIL",
        first_name: "Marius Arion",
        last_name: "Nilsen",
        party: "frp",
        area: {
            id: "AA",
            name: "Aust-Agder",
        },
        image: image_MARNIL,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["MONNIL", {
        id: "MONNIL",
        first_name: "Mona",
        last_name: "Nilsen",
        party: "ap",
        area: {
            id: "No",
            name: "Nordland",
        },
        image: image_MONNIL,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["HNJ", {
        id: "HNJ",
        first_name: "Helge André",
        last_name: "Njåstad",
        party: "frp",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_HNJ,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["JSB", {
        id: "JSB",
        first_name: "Julia Brännström",
        last_name: "Nordtug",
        party: "frp",
        area: {
            id: "Øs",
            name: "Østfold",
        },
        image: image_JSB,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["KARNOR", {
        id: "KARNOR",
        first_name: "Kari Nessa",
        last_name: "Nordtun",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Kunnskapsdepartementet",
        },
        image: image_KARNOR,
        committees: [],
        title: "Kunnskapsminister",
    }] as const,
    ["JONN", {
        id: "JONN",
        first_name: "Jon-Ivar",
        last_name: "Nygård",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Samferdselsdepartementet",
        },
        image: image_JONN,
        committees: [],
        title: "Samferdselsminister",
    }] as const,
    ["HEGNYH", {
        id: "HEGNYH",
        first_name: "Hege Bae",
        last_name: "Nyholt",
        party: "r",
        area: {
            id: "ST",
            name: "Sør-Trøndelag",
        },
        image: image_HEGNYH,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["NSSMAR", {
        id: "NSSMAR",
        first_name: "Marianne Sivertsen",
        last_name: "Næss",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Nærings- og fiskeridepartementet",
        },
        image: image_NSSMAR,
        committees: [],
        title: "Fiskeri- og havminister",
    }] as const,
    ["DHO", {
        id: "DHO",
        first_name: "Dagfinn Henrik",
        last_name: "Olsen",
        party: "frp",
        area: {
            id: "No",
            name: "Nordland",
        },
        image: image_DHO,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["TAGP", {
        id: "TAGP",
        first_name: "Tage",
        last_name: "Pettersen",
        party: "h",
        area: {
            id: "Øs",
            name: "Østfold",
        },
        image: image_TAGP,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["GP", {
        id: "GP",
        first_name: "Geir",
        last_name: "Pollestad",
        party: "sp",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_GP,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["HSP", {
        id: "HSP",
        first_name: "Haagen",
        last_name: "Poppe",
        party: "h",
        area: {
            id: "AA",
            name: "Aust-Agder",
        },
        image: image_HSP,
        committees: [
            {
                id: "FAMKULT",
                name: "Familie- og kulturkomiteen",
            },
        ],
    }] as const,
    ["FARQUR", {
        id: "FARQUR",
        first_name: "Farukh",
        last_name: "Qureshi",
        party: "ap",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_FARQUR,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["SIGRAF", {
        id: "SIGRAF",
        first_name: "Sigurd Kvammen",
        last_name: "Rafaelsen",
        party: "ap",
        area: {
            id: "Fi",
            name: "Finnmark",
        },
        image: image_SIGRAF,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["ABIR", {
        id: "ABIR",
        first_name: "Abid",
        last_name: "Raja",
        party: "v",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_ABIR,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["ANNREF", {
        id: "ANNREF",
        first_name: "Anniken",
        last_name: "Refseth",
        party: "ap",
        area: {
            id: "ST",
            name: "Sør-Trøndelag",
        },
        image: image_ANNREF,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["LARREM", {
        id: "LARREM",
        first_name: "Lars",
        last_name: "Rem",
        party: "frp",
        area: {
            id: "Op",
            name: "Oppland",
        },
        image: image_LARREM,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
        ],
    }] as const,
    ["EVR", {
        id: "EVR",
        first_name: "Even A.",
        last_name: "Røed",
        party: "ap",
        area: {
            id: "Bu",
            name: "Buskerud",
        },
        image: image_EVR,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["IDARSE", {
        id: "IDARSE",
        first_name: "Ida Lindtveit",
        last_name: "Røse",
        party: "krf",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_IDARSE,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["MORSAN", {
        id: "MORSAN",
        first_name: "Morten",
        last_name: "Sandanger",
        party: "ap",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_MORSAN,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["LHS", {
        id: "LHS",
        first_name: "Lill Harriet",
        last_name: "Sandaune",
        party: "frp",
        area: {
            id: "ST",
            name: "Sør-Trøndelag",
        },
        image: image_LHS,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["ESAN", {
        id: "ESAN",
        first_name: "Erling",
        last_name: "Sande",
        party: "sp",
        area: {
            id: "SF",
            name: "Sogn og Fjordane",
        },
        image: image_ESAN,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["KARSAN", {
        id: "KARSAN",
        first_name: "Kari Baadstrand",
        last_name: "Sandnes",
        party: "ap",
        area: {
            id: "No",
            name: "Nordland",
        },
        image: image_KARSAN,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
        ],
    }] as const,
    ["NKS", {
        id: "NKS",
        first_name: "Nils Kristen",
        last_name: "Sandtrøen",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Landbruks- og matdepartementet",
        },
        image: image_NKS,
        committees: [],
        title: "Landbruks- og matminister",
    }] as const,
    ["TORSAN", {
        id: "TORSAN",
        first_name: "Tore Onshuus",
        last_name: "Sandvik",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Forsvarsdepartementet",
        },
        image: image_TORSAN,
        committees: [],
        title: "Forsvarsminister",
    }] as const,
    ["JONSAY", {
        id: "JONSAY",
        first_name: "Jonas Andersen",
        last_name: "Sayed",
        party: "krf",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_JONSAY,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["LISSEL", {
        id: "LISSEL",
        first_name: "Lise",
        last_name: "Selnes",
        party: "ap",
        area: {
            id: "He",
            name: "Hedmark",
        },
        image: image_LISSEL,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
        ],
    }] as const,
    ["KRISIV", {
        id: "KRISIV",
        first_name: "Kristoffer",
        last_name: "Sivertsen",
        party: "frp",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_KRISIV,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["FRYSJU", {
        id: "FRYSJU",
        first_name: "Frøya Skjold",
        last_name: "Sjursæther",
        party: "mdg",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_FRYSJU,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["BJRSKJ", {
        id: "BJRSKJ",
        first_name: "Bjørnar",
        last_name: "Skjæran",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Kommunal- og distriktsdepartementet",
        },
        image: image_BJRSKJ,
        committees: [],
        title: "Kommunal- og distriktsminister",
    }] as const,
    ["ES", {
        id: "ES",
        first_name: "Erna",
        last_name: "Solberg",
        party: "h",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_ES,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["KRISOL", {
        id: "KRISOL",
        first_name: "Kristine Løfshus",
        last_name: "Solli",
        party: "ap",
        area: {
            id: "ST",
            name: "Sør-Trøndelag",
        },
        image: image_KRISOL,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["RIKSPE", {
        id: "RIKSPE",
        first_name: "Rikard",
        last_name: "Spets",
        party: "frp",
        area: {
            id: "ST",
            name: "Sør-Trøndelag",
        },
        image: image_RIKSPE,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["AICS", {
        id: "AICS",
        first_name: "Aina",
        last_name: "Stenersen",
        party: "frp",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_AICS,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
        ],
    }] as const,
    ["KJSE", {
        id: "KJSE",
        first_name: "Kjersti",
        last_name: "Stenseng",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Arbeids- og inkluderingsdepartementet",
        },
        image: image_KJSE,
        committees: [],
        title: "Arbeids- og inkluderingsminister",
    }] as const,
    ["HANSTE", {
        id: "HANSTE",
        first_name: "Hanne Beate",
        last_name: "Stenvaag",
        party: "r",
        area: {
            id: "Tr",
            name: "Troms",
        },
        image: image_HANSTE,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["ALES", {
        id: "ALES",
        first_name: "Aleksander",
        last_name: "Stokkebø",
        party: "h",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_ALES,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["JES", {
        id: "JES",
        first_name: "Jens",
        last_name: "Stoltenberg",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Finansdepartementet",
        },
        image: image_JES,
        committees: [],
        title: "Finansminister",
    }] as const,
    ["STISTO", {
        id: "STISTO",
        first_name: "Stian",
        last_name: "Storbukås",
        party: "frp",
        area: {
            id: "VA",
            name: "Vest-Agder",
        },
        image: image_STISTO,
        committees: [
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["FMS", {
        id: "FMS",
        first_name: "Morten",
        last_name: "Stordalen",
        party: "frp",
        area: {
            id: "Ve",
            name: "Vestfold",
        },
        image: image_FMS,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["BERST", {
        id: "BERST",
        first_name: "Bengt Rune",
        last_name: "Strifeldt",
        party: "frp",
        area: {
            id: "Fi",
            name: "Finnmark",
        },
        image: image_BERST,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["JULSTU", {
        id: "JULSTU",
        first_name: "Julie E.",
        last_name: "Stuestøl",
        party: "mdg",
        area: {
            id: "Ve",
            name: "Vestfold",
        },
        image: image_JULSTU,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
            {
                id: "JUSTIS",
                name: "Justiskomiteen",
            },
        ],
    }] as const,
    ["JGS", {
        id: "JGS",
        first_name: "Jonas Gahr",
        last_name: "Støre",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Statsministerens kontor",
        },
        image: image_JGS,
        committees: [],
        title: "Statsminister",
    }] as const,
    ["RUNSTS", {
        id: "RUNSTS",
        first_name: "Rune",
        last_name: "Støstad",
        party: "ap",
        area: {
            id: "Op",
            name: "Oppland",
        },
        image: image_RUNSTS,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["TSTA", {
        id: "TSTA",
        first_name: "Tom",
        last_name: "Staahle",
        party: "frp",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_TSTA,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["TRISUN", {
        id: "TRISUN",
        first_name: "Trine Lise",
        last_name: "Sundnes",
        party: "ap",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_TRISUN,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["FES", {
        id: "FES",
        first_name: "Frank Edvard",
        last_name: "Sve",
        party: "frp",
        area: {
            id: "MR",
            name: "Møre og Romsdal",
        },
        image: image_FES,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["BSV", {
        id: "BSV",
        first_name: "Bjørn-Kristian",
        last_name: "Svendsrud",
        party: "frp",
        area: {
            id: "Ve",
            name: "Vestfold",
        },
        image: image_BSV,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["REMSLV", {
        id: "REMSLV",
        first_name: "Remi",
        last_name: "Sølvberg",
        party: "r",
        area: {
            id: "Øs",
            name: "Østfold",
        },
        image: image_REMSLV,
        committees: [
            {
                id: "TRANSKOM",
                name: "Transport- og kommunikasjonskomiteen",
            },
        ],
    }] as const,
    ["IME", {
        id: "IME",
        first_name: "Ine Eriksen",
        last_name: "Søreide",
        party: "h",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_IME,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["JOATAN", {
        id: "JOATAN",
        first_name: "Joakim Myklebost",
        last_name: "Tangen",
        party: "frp",
        area: {
            id: "MR",
            name: "Møre og Romsdal",
        },
        image: image_JOATAN,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["BRDTHO", {
        id: "BRDTHO",
        first_name: "Bård Ludvig",
        last_name: "Thorheim",
        party: "h",
        area: {
            id: "No",
            name: "Nordland",
        },
        image: image_BRDTHO,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["KJT", {
        id: "KJT",
        first_name: "Kjersti",
        last_name: "Toppe",
        party: "sp",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_KJT,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["OBT", {
        id: "OBT",
        first_name: "Ove",
        last_name: "Trellevik",
        party: "h",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_OBT,
        committees: [
            {
                id: "KONTROLL",
                name: "Kontroll- og konstitusjonskomiteen",
            },
        ],
    }] as const,
    ["TWT", {
        id: "TWT",
        first_name: "Tone Wilhelmsen",
        last_name: "Trøen",
        party: "h",
        area: {
            id: "Ak",
            name: "Akershus",
        },
        image: image_TWT,
        committees: [
            {
                id: "FAMKULT",
                name: "Familie- og kulturkomiteen",
            },
        ],
    }] as const,
    ["KAT", {
        id: "KAT",
        first_name: "Karianne O.",
        last_name: "Tung",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Digitaliserings- og forvaltningsdepartementet",
        },
        image: image_KAT,
        committees: [],
        title: "Digitaliserings- og forvaltningsminister",
    }] as const,
    ["MTY", {
        id: "MTY",
        first_name: "Mathilde",
        last_name: "Tybring-Gjedde",
        party: "h",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_MTY,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["HARVAL", {
        id: "HARVAL",
        first_name: "Harry",
        last_name: "Valderhaug",
        party: "krf",
        area: {
            id: "MR",
            name: "Møre og Romsdal",
        },
        image: image_HARVAL,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["TRV", {
        id: "TRV",
        first_name: "Truls",
        last_name: "Vasvik",
        party: "ap",
        area: {
            id: "Ve",
            name: "Vestfold",
        },
        image: image_TRV,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["TMV", {
        id: "TMV",
        first_name: "Trygve Slagsvold",
        last_name: "Vedum",
        party: "sp",
        area: {
            id: "He",
            name: "Hedmark",
        },
        image: image_TMV,
        committees: [
            {
                id: "UFK",
                name: "Utenriks- og forsvarskomiteen",
            },
        ],
    }] as const,
    ["SIMVEL", {
        id: "SIMVEL",
        first_name: "Simen",
        last_name: "Velle",
        party: "frp",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_SIMVEL,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["TVER", {
        id: "TVER",
        first_name: "Torbjørn",
        last_name: "Vereide",
        party: "ap",
        area: {
            id: "SF",
            name: "Sogn og Fjordane",
        },
        image: image_TVER,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["SOLVES", {
        id: "SOLVES",
        first_name: "Solveig",
        last_name: "Vestenfor",
        party: "ap",
        area: {
            id: "Bu",
            name: "Buskerud",
        },
        image: image_SOLVES,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["JANVES", {
        id: "JANVES",
        first_name: "Jan Christian",
        last_name: "Vestre",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Helse- og omsorgsdepartementet",
        },
        image: image_JANVES,
        committees: [],
        title: "Helse- og omsorgsminister",
    }] as const,
    ["SOLVIK", {
        id: "SOLVIK",
        first_name: "Solveig",
        last_name: "Vik",
        party: "ap",
        area: {
            id: "Ro",
            name: "Rogaland",
        },
        image: image_SOLVIK,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["AGNVIL", {
        id: "AGNVIL",
        first_name: "Agnes Nærland",
        last_name: "Viljugrein",
        party: "ap",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_AGNVIL,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["SOLVIT", {
        id: "SOLVIT",
        first_name: "Solveig",
        last_name: "Vitanza",
        party: "ap",
        area: {
            id: "Øs",
            name: "Østfold",
        },
        image: image_SOLVIT,
        committees: [
            {
                id: "NÆRING",
                name: "Næringskomiteen",
            },
        ],
    }] as const,
    ["LVA", {
        id: "LVA",
        first_name: "Lene",
        last_name: "Vågslid",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Barne- og familiedepartementet",
        },
        image: image_LVA,
        committees: [],
        title: "Barne- og familieminister",
    }] as const,
    ["TOWA", {
        id: "TOWA",
        first_name: "Tor Mikkel",
        last_name: "Wara",
        party: "frp",
        area: {
            id: "Os",
            name: "Oslo",
        },
        image: image_TOWA,
        committees: [
            {
                id: "ENERGI",
                name: "Energi- og miljøkomiteen",
            },
        ],
    }] as const,
    ["EW", {
        id: "EW",
        first_name: "Erlend",
        last_name: "Wiborg",
        party: "frp",
        area: {
            id: "Øs",
            name: "Østfold",
        },
        image: image_EW,
        committees: [
            {
                id: "KOMMFORV",
                name: "Kommunal- og forvaltningskomiteen",
            },
        ],
    }] as const,
    ["MOW", {
        id: "MOW",
        first_name: "Morten",
        last_name: "Wold",
        party: "frp",
        area: {
            id: "Bu",
            name: "Buskerud",
        },
        image: image_MOW,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["ELW", {
        id: "ELW",
        first_name: "Elise",
        last_name: "Waagen",
        party: "ap",
        area: {
            id: "Øs",
            name: "Østfold",
        },
        image: image_ELW,
        committees: [
            {
                id: "ARBSOS",
                name: "Arbeids- og sosialkomiteen",
            },
        ],
    }] as const,
    ["JOEYST", {
        id: "JOEYST",
        first_name: "Joel",
        last_name: "Ystebø",
        party: "krf",
        area: {
            id: "Ho",
            name: "Hordaland",
        },
        image: image_JOEYST,
        committees: [
            {
                id: "UFO",
                name: "Utdannings- og forskningskomiteen",
            },
        ],
    }] as const,
    ["KOS", {
        id: "KOS",
        first_name: "Kai Steffen",
        last_name: "Østensen",
        party: "ap",
        area: {
            id: "VA",
            name: "Vest-Agder",
        },
        image: image_KOS,
        committees: [
            {
                id: "HELSEOMS",
                name: "Helse- og omsorgskomiteen",
            },
        ],
    }] as const,
    ["ASTAAS", {
        id: "ASTAAS",
        first_name: "Astri",
        last_name: "Aas-Hansen",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Justis- og beredskapsdepartementet",
        },
        image: image_ASTAAS,
        committees: [],
        title: "Justis- og beredskapsminister",
    }] as const,
    ["AASE", {
        id: "AASE",
        first_name: "Maria",
        last_name: "Aasen-Svensrud",
        party: "ap",
        area: {
            id: "Ve",
            name: "Vestfold",
        },
        image: image_AASE,
        committees: [
            {
                id: "FINANS",
                name: "Finanskomiteen",
            },
        ],
    }] as const,
    ["SIGAAS", {
        id: "SIGAAS",
        first_name: "Sigrun",
        last_name: "Aasland",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Kunnskapsdepartementet",
        },
        image: image_SIGAAS,
        committees: [],
        title: "Forsknings- og høyere utdanningsminister",
    }] as const,
    ["TELA", {
        id: "TELA",
        first_name: "Terje",
        last_name: "Aasland",
        party: "ap",
        area: {
            id: "REGJERING",
            name: "Energidepartementet",
        },
        image: image_TELA,
        committees: [],
        title: "Energiminister",
    }] as const
);
