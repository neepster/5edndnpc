export const RACES = ["Human", "Elf", "Dwarf", "Halfling", "Gnome", "Half-Orc", "Half-Elf", "Tiefling", "Dragonborn"];
export const CLASSES = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
const ALIGNMENTS = ["lawful good", "neutral good", "lawful neutral", "neutral", "chaotic neutral", "neutral evil"];
const NAMES_BY_RACE = {
  Human: [
    "Aldo",
    "Mira",
    "Lia",
    "Garen",
    "Elira",
    "Corin",
    "Janelle",
    "Bram",
    "Serra",
    "Tomas",
    "Elyse",
    "Calder",
    "Roland",
    "Maris",
    "Sabine",
    "Davin",
    "Iris",
    "Perrin",
    "Kessa",
    "Daria"
  ],
  Elf: [
    "Theren",
    "Leshanna",
    "Varis",
    "Sylvar",
    "Aelar",
    "Shava",
    "Caelynn",
    "Althaea",
    "Erevan",
    "Morthil",
    "Syllin",
    "Belanor",
    "Faelar",
    "Ielenia",
    "Laucian",
    "Naivara",
    "Rolen",
    "Thiala",
    "Eilistra",
    "Fenian"
  ],
  Dwarf: [
    "Thorin",
    "Dagnal",
    "Baern",
    "Einkil",
    "Gimbrin",
    "Vistra",
    "Hlin",
    "Torbera",
    "Barendd",
    "Oskar",
    "Rurik",
    "Harbek",
    "Morgran",
    "Eberk",
    "Ilde",
    "Audhild",
    "Gurdis",
    "Rangrim",
    "Kildi",
    "Tordek"
  ],
  Halfling: [
    "Lidda",
    "Milo",
    "Portia",
    "Roscoe",
    "Cade",
    "Seraphina",
    "Eldon",
    "Callie",
    "Corrin",
    "Merric",
    "Bree",
    "Dobb",
    "Fenna",
    "Jillian",
    "Nico",
    "Osborn",
    "Poppy",
    "Tegan",
    "Vasha",
    "Willa"
  ],
  Gnome: [
    "Boddynock",
    "Fizzwick",
    "Pilwick",
    "Zanna",
    "Orla",
    "Bimpnottin",
    "Fonkin",
    "Ellyjobell",
    "Loopmottin",
    "Wrenn",
    "Carlin",
    "Dalabas",
    "Jorfi",
    "Lilli",
    "Nyx",
    "Ormun",
    "Sprocket",
    "Trilli",
    "Wizzle",
    "Zook"
  ],
  "Half-Orc": [
    "Grog",
    "Ront",
    "Thokk",
    "Baggi",
    "Emen",
    "Engong",
    "Holg",
    "Imsh",
    "Keth",
    "Myev",
    "Druuk",
    "Sharn",
    "Vola",
    "Grima",
    "Varog",
    "Mugru",
    "Sutha",
    "Urbul",
    "Zogar",
    "Hruk"
  ],
  "Half-Elf": [
    "Arannis",
    "Lia",
    "Neriah",
    "Riven",
    "Soveliss",
    "Myrai",
    "Paela",
    "Thia",
    "Rolen",
    "Sariel",
    "Anastrianna",
    "Berrian",
    "Erevan",
    "Keyleth",
    "Laucian",
    "Mialee",
    "Nuala",
    "Sovel",
    "Taran",
    "Yasheira"
  ],
  Tiefling: [
    "Akta",
    "Leucis",
    "Zeth",
    "Akmenos",
    "Kairon",
    "Orianna",
    "Bryseis",
    "Melech",
    "Zevon",
    "Vorgath",
    "Azazel",
    "Belkas",
    "Cimris",
    "Damaia",
    "Exodus",
    "Iados",
    "Lilith",
    "Morthos",
    "Sevris",
    "Zanros"
  ],
  Dragonborn: [
    "Arjhan",
    "Balasar",
    "Donaar",
    "Kriv",
    "Medrash",
    "Nadarr",
    "Pandjed",
    "Rhogar",
    "Tarhun",
    "Surina",
    "Akra",
    "Biri",
    "Daar",
    "Ghesh",
    "Harann",
    "Jhank",
    "Korinn",
    "Mishann",
    "Nala",
    "Zorlan"
  ]
};

const NAME_SYLLABLES = {
  Human: [["al", "mar", "ro", "dar", "el", "ca", "ja", "li", "tor", "fin"], ["o", "en", "an", "is", "a", "on", "e", "ia"], ["n", "s", "r", "l", "th", ""] ],
  Elf: [["ae", "lae", "syl", "vae", "thi", "eli", "il", "yla", "myr", "rai"], ["la", "ri", "ne", "sa", "the", "lia", "re", "na"], ["n", "s", "l", "th", "r", ""] ],
  Dwarf: [["thor", "brom", "dur", "gar", "kor", "grim", "bar", "dun"], ["in", "ar", "ur", "im", "ar", "or", "a"], ["d", "n", "g", ""] ],
  Halfling: [["li", "po", "mi", "ca", "ro", "pi", "do", "wi"], ["da", "lo", "po", "ri", "si", "ta", "na"], ["", "e", "o", ""] ],
  Gnome: [["zip", "fiz", "pip", "tink", "wiz", "bim", "zor", "quill"], ["pi", "li", "ri", "na", "a", "e"], ["n", "x", "p", ""] ],
  "Half-Orc": [["gro", "zog", "mok", "krag", "garn", "thok", "ur"], ["gar", "ruk", "mok", "dur", "ash", "eth"], ["", "k", "g", ""] ],
  "Half-Elf": [["al", "sy", "ri", "thia", "na", "ya", "ari", "ev"], ["len", "ia", "or", "el", "is", "en", "a"], ["", "th", "l", "n"] ],
  Tiefling: [["aza", "bel", "zor", "me", "kae", "rhi", "va", "xan"], ["zel", "ios", "eth", "ira", "iel", "is"], ["", "th", "x", "s"] ],
  Dragonborn: [["arj", "bala", "rhog", "med", "nad", "tar", "zor"], ["han", "asar", "rid", "rash", "arr", "eth"], ["", "k", "th", "z"] ]
};

const ARMOR_OPTIONS = [
  { name: "None", ac: 10, dexCap: null, type: "unarmored" },
  { name: "Leather Armor", ac: 11, dexCap: null, type: "light" },
  { name: "Studded Leather Armor", ac: 12, dexCap: null, type: "light" },
  { name: "Hide Armor", ac: 12, dexCap: 2, type: "medium" },
  { name: "Scale Mail", ac: 14, dexCap: 2, type: "medium" },
  { name: "Chain Mail", ac: 16, dexCap: 0, type: "heavy" }
];

const WEAPON_OPTIONS = [
  { name: "Club", die: "1d4", damageType: "bludgeoning", ability: "str", range: "m" },
  { name: "Dagger", die: "1d4", damageType: "piercing", ability: "dex", range: "r" },
  { name: "Quarterstaff", die: "1d6", damageType: "bludgeoning", ability: "str", range: "m" },
  { name: "Mace", die: "1d6", damageType: "bludgeoning", ability: "str", range: "m" },
  { name: "Shortsword", die: "1d6", damageType: "piercing", ability: "dex", range: "m" },
  { name: "Spear", die: "1d6", damageType: "piercing", ability: "str", range: "m" },
  { name: "Handaxe", die: "1d6", damageType: "slashing", ability: "str", range: "m" },
  { name: "Greataxe", die: "1d12", damageType: "slashing", ability: "str", range: "m" },
  { name: "Longsword", die: "1d8", damageType: "slashing", ability: "str", range: "m" },
  { name: "Longbow", die: "1d8", damageType: "piercing", ability: "dex", range: "r" },
  { name: "Shortbow", die: "1d6", damageType: "piercing", ability: "dex", range: "r" },
  { name: "Light Crossbow", die: "1d8", damageType: "piercing", ability: "dex", range: "r" }
];

const GEAR_OPTIONS = [
  "Traveler's Clothes",
  "Explorer's Pack",
  "Priest's Pack",
  "Scholar's Pack",
  "Dungeoneer's Pack",
  "Cloak",
  "Hooded Lantern",
  "Rations (1 day)",
  "Waterskin",
  "Rope (50 feet)"
];

export async function generateRandomNpc({ level = 1, race, role } = {}) {
  const chosenRace = race ?? pick(RACES);
  const chosenClass = role ?? pick(CLASSES);
  const alignment = pick(ALIGNMENTS);
  const name = `${pickNameForRace(chosenRace)} the ${chosenClass}`;

  const abilities = buildAbilitiesForClass(chosenClass);
  const dexMod = abilityMod(abilities.dex.value);

  const { armor, weapon, shield } = chooseLoadout(chosenClass);

  const levelSafe = Math.max(1, Math.min(20, Number(level) || 1));
  const ac = calculateAc(armor, dexMod, shield);
  const hitDice = levelSafe;
  const conMod = abilityMod(abilities.con.value);
  const hp = Math.max(1, rollHp(hitDice, conMod));
  const hpFormula = `${hitDice}d8${formatModifier(hitDice * conMod)}`;
  const profBonus = proficiencyFromLevel(levelSafe);
  const spells = await buildSpellsForClass(chosenClass, levelSafe);
  const armorItems = await buildArmorItems(armor, shield);
  const weaponItem = await buildWeaponItem(weapon, abilities);
  const gearItems = await buildGearItems(2);
  const { weapon: finalWeapon, armorItems: finalArmorItems } = applyMagicUpgrades(
    levelSafe,
    weaponItem,
    armorItems
  );
  const biography = buildBackstory(chosenRace, chosenClass);
  const spellSlots = buildSpellSlots(chosenClass, levelSafe);
  const spellcastingAbility = SPELLCASTING_ABILITY[chosenClass] ?? "";

  return {
    name,
    type: "npc",
    img: "icons/svg/mystery-man.svg",
    system: {
      details: {
        type: { value: "humanoid" },
        alignment,
        race: chosenRace,
        cr: levelSafe,
        biography: { value: biography }
      },
      abilities,
      attributes: {
        ac: { flat: ac, calc: "flat" },
        hp: { value: hp, max: hp, formula: hpFormula },
        prof: profBonus,
        spellcasting: spellcastingAbility
      },
      traits: { size: "med" },
      spells: spellSlots
    },
    prototypeToken: {
      name,
      displayBars: 20,
      bar1: { attribute: "attributes.hp" }
    },
    items: [...finalArmorItems, finalWeapon, ...gearItems, ...spells]
  };
}

function buildAbilitiesForClass(cls) {
  const priority = CLASS_PRIORITIES[cls] ?? ["str", "dex", "con", "wis", "int", "cha"];
  const scores = [...STANDARD_ARRAY].sort((a, b) => b - a);
  const abilities = { str: {}, dex: {}, con: {}, int: {}, wis: {}, cha: {} };
  const remaining = [...scores];
  for (const ability of priority) {
    abilities[ability].value = remaining.shift() ?? randomScore();
  }
  const leftoverAbilities = Object.keys(abilities).filter((a) => abilities[a].value === undefined);
  for (const ability of leftoverAbilities) {
    abilities[ability].value = randomScore();
  }
  return abilities;
}

async function buildArmorItems(armor, shield) {
  const items = [];
  if (armor.name !== "None") {
    const packItem = await getPackItem(getItemsPackId(), armor.name);
    items.push(
      packItem ?? {
        name: armor.name,
        type: "equipment",
        system: {
          quantity: 1,
          equipped: true,
          attunement: 0,
          armor: { value: armor.ac, type: armor.type },
          type: { value: armor.type }
        }
      }
    );
  }

  if (shield) {
    const packItem = await getPackItem(getItemsPackId(), "Shield");
    items.push(
      packItem ?? {
        name: "Shield",
        type: "equipment",
        system: {
          quantity: 1,
          equipped: true,
          attunement: 0,
          armor: { value: 2, type: "shield" },
          type: { value: "shield" }
        }
      }
    );
  }

  return items;
}

async function buildWeaponItem(weapon, abilities) {
  const packItem = await getPackItem(getItemsPackId(), weapon.name);
  if (packItem) return packItem;

  const abilityScore = abilities[weapon.ability]?.value ?? 10;
  const abilityModifier = abilityMod(abilityScore);
  return {
    name: weapon.name,
    type: "weapon",
    system: {
      quantity: 1,
      equipped: true,
      attunement: 0,
      activation: { type: "action", cost: 1 },
      ability: weapon.ability,
      actionType: weapon.range === "r" ? "rwak" : "mwak",
      proficient: true,
      attackBonus: 0,
      damage: { parts: [[`${weapon.die}${formatModifier(abilityModifier)}`, weapon.damageType]], versatile: "" },
      properties: { fin: weapon.ability === "dex", thr: weapon.range === "r" }
    }
  };
}

async function buildGearItems(count = 2) {
  const results = [];
  const picks = shuffle(GEAR_OPTIONS).slice(0, count);
  for (const itemName of picks) {
    const packItem = await getPackItem("dnd5e.items", itemName);
    results.push(
      packItem ?? {
        name: itemName,
        type: "equipment",
        system: {
          quantity: 1,
          equipped: false,
          attunement: 0,
          type: { value: "adventuringGear" }
        }
      }
    );
  }
  return results;
}

function calculateAc(armor, dexMod, shield) {
  const dexContribution = armor.dexCap === null ? dexMod : Math.min(dexMod, armor.dexCap);
  return armor.ac + dexContribution + (shield ? 2 : 0);
}

function abilityMod(score) {
  return Math.floor((score - 10) / 2);
}

function randomScore() {
  return 8 + Math.floor(Math.random() * 8);
}

function rollHp(hitDice, conMod) {
  const dieAvg = 4.5; // d8 average
  return Math.round(hitDice * (dieAvg + conMod));
}

function buildBackstory(race, cls) {
  const upbringing = pick(BACKSTORY_TABLE.upbringing);
  const hook = pick(BACKSTORY_TABLE.hooks);
  const quirk = pick(BACKSTORY_TABLE.quirks);
  const goal = pick(BACKSTORY_TABLE.goals);
  return `<p>${upbringing} ${hook}</p><p>${quirk} ${goal}</p><p>Race: ${race}, Class: ${cls}</p>`;
}

async function buildSpellsForClass(cls, level) {
  const casterType = SPELLCASTING[cls] ?? "none";
  if (casterType === "none") return [];

  const spellPackId = getSpellsPackId();
  const pack = spellPackId ? game.packs.get(spellPackId) : null;
  if (!pack) {
    console.warn("5edndnpc | No spell pack found, skipping spells");
    return [];
  }

  const maxSpellLevel = getMaxSpellLevel(level, casterType);
  const documents = await pack.getDocuments();
  const valid = documents.filter((spell) => {
    const spellLevel = spell.system?.level ?? 0;
    if (spellLevel > maxSpellLevel) return false;
    return spellHasClass(spell, cls);
  });

  const count = Math.min(8, Math.max(3, Math.ceil(level * 0.75)));
  return shuffle(valid).slice(0, count).map((spell) => {
    const data = spell.toObject();
    data.system.preparation = data.system.preparation || {};
    data.system.preparation.mode = "prepared";
    data.system.preparation.prepared = true;
    return data;
  });
}

function getMaxSpellLevel(level, casterType) {
  const clamped = Math.max(1, Math.min(20, level));
  if (casterType === "full") return Math.min(9, Math.ceil(clamped / 2));
  if (casterType === "half") return Math.max(1, Math.min(5, Math.ceil(clamped / 4)));
  if (casterType === "pact") return Math.max(1, Math.min(5, Math.ceil(clamped / 2)));
  return 0;
}

function spellHasClass(spell, cls) {
  const classes = spell.system?.classes;
  const key = cls.toLowerCase();
  if (classes && typeof classes === "object") {
    if (Array.isArray(classes.value)) return classes.value.map((c) => c?.toLowerCase?.() ?? c).includes(key);
    if (classes[key] !== undefined) return Boolean(classes[key]);
  }
  // 2024 data may use classIdentifier on the document or systems tags
  const identifier = spell.system?.identifier;
  if (identifier && typeof identifier === "string") {
    const idLower = identifier.toLowerCase();
    if (idLower.includes(key)) return true;
  }
  const tags = spell.system?.tags ?? [];
  if (Array.isArray(tags)) {
    const lower = tags.map((t) => (typeof t === "string" ? t.toLowerCase() : t));
    if (lower.some((t) => typeof t === "string" && t.includes(key))) return true;
  }
  // If no class info, allow it so casters always get spells
  return true;
}

async function getPackItem(packId, name) {
  const pack = game.packs.get(packId);
  if (!pack) return null;

  const index = await pack.getIndex({ fields: ["name"] });
  const entry = index.find((e) => e.name === name);
  if (!entry) return null;

  const doc = await pack.getDocument(entry._id);
  return doc?.toObject() ?? null;
}

function proficiencyFromLevel(level) {
  const clamped = Math.max(1, Math.min(20, level));
  return 2 + Math.floor((clamped - 1) / 4);
}

function pickNameForRace(race) {
  const names = NAMES_BY_RACE[race] ?? Object.values(NAMES_BY_RACE).flat();
  if (Math.random() < 0.3) {
    return generateNameFromSyllables(race);
  }
  return pick(names);
}

function formatModifier(mod) {
  if (mod === 0) return "";
  return mod > 0 ? `+${mod}` : `${mod}`;
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function chooseLoadout(cls) {
  const loadout = CLASS_LOADOUTS[cls];
  if (!loadout) {
    return { armor: pick(ARMOR_OPTIONS), weapon: pick(WEAPON_OPTIONS), shield: false };
  }

  const armor = ARMOR_OPTIONS.find((a) => a.name === loadout.armor) ?? pick(ARMOR_OPTIONS);
  const weapon = WEAPON_OPTIONS.find((w) => w.name === loadout.weapon) ?? pick(WEAPON_OPTIONS);
  return { armor, weapon, shield: Boolean(loadout.shield) };
}

const CLASS_LOADOUTS = {
  Barbarian: { armor: "Hide Armor", weapon: "Greataxe", shield: false },
  Bard: { armor: "Leather Armor", weapon: "Shortsword", shield: false },
  Cleric: { armor: "Scale Mail", weapon: "Mace", shield: true },
  Druid: { armor: "Leather Armor", weapon: "Spear", shield: true },
  Fighter: { armor: "Chain Mail", weapon: "Longsword", shield: true },
  Monk: { armor: "None", weapon: "Quarterstaff", shield: false },
  Paladin: { armor: "Chain Mail", weapon: "Longsword", shield: true },
  Ranger: { armor: "Studded Leather Armor", weapon: "Longbow", shield: false },
  Rogue: { armor: "Leather Armor", weapon: "Shortsword", shield: false },
  Sorcerer: { armor: "None", weapon: "Dagger", shield: false },
  Warlock: { armor: "Leather Armor", weapon: "Light Crossbow", shield: false },
  Wizard: { armor: "None", weapon: "Quarterstaff", shield: false }
};

const CLASS_PRIORITIES = {
  Barbarian: ["str", "con", "dex", "wis", "cha", "int"],
  Bard: ["cha", "dex", "con", "wis", "int", "str"],
  Cleric: ["wis", "con", "str", "dex", "cha", "int"],
  Druid: ["wis", "con", "dex", "int", "cha", "str"],
  Fighter: ["str", "con", "dex", "wis", "cha", "int"],
  Monk: ["dex", "wis", "con", "str", "int", "cha"],
  Paladin: ["str", "cha", "con", "wis", "dex", "int"],
  Ranger: ["dex", "wis", "con", "str", "int", "cha"],
  Rogue: ["dex", "con", "int", "wis", "cha", "str"],
  Sorcerer: ["cha", "con", "dex", "wis", "int", "str"],
  Warlock: ["cha", "con", "dex", "wis", "int", "str"],
  Wizard: ["int", "con", "dex", "wis", "cha", "str"]
};

const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];

const SPELLCASTING = {
  Barbarian: "none",
  Bard: "full",
  Cleric: "full",
  Druid: "full",
  Fighter: "none",
  Monk: "none",
  Paladin: "half",
  Ranger: "half",
  Rogue: "none",
  Sorcerer: "full",
  Warlock: "pact",
  Wizard: "full"
};

const SPELLCASTING_ABILITY = {
  Bard: "cha",
  Cleric: "wis",
  Druid: "wis",
  Paladin: "cha",
  Ranger: "wis",
  Sorcerer: "cha",
  Warlock: "cha",
  Wizard: "int"
};

function getItemsPackId() {
  const preferred = ["dnd5e.equipment24", "dnd5e.items"];
  return preferred.find((id) => game.packs.has(id)) ?? null;
}

function buildSpellSlots(cls, level) {
  const casterType = SPELLCASTING[cls] ?? "none";
  if (casterType === "none") return defaultSpellSlots();
  if (casterType === "pact") return pactSpellSlots(level);
  return fullOrHalfCasterSlots(level, casterType === "half");
}

function defaultSpellSlots() {
  return {
    spell1: { value: 0, max: 0 },
    spell2: { value: 0, max: 0 },
    spell3: { value: 0, max: 0 },
    spell4: { value: 0, max: 0 },
    spell5: { value: 0, max: 0 },
    spell6: { value: 0, max: 0 },
    spell7: { value: 0, max: 0 },
    spell8: { value: 0, max: 0 },
    spell9: { value: 0, max: 0 },
    pact: { value: 0, max: 0 }
  };
}

function pactSpellSlots(level) {
  // Rough warlock progression
  const pactLevel = Math.min(5, Math.ceil(level / 2));
  const slots = level < 11 ? 2 : level < 17 ? 3 : 4;
  const data = defaultSpellSlots();
  data.pact = { value: slots, max: slots, level: pactLevel };
  return data;
}

function fullOrHalfCasterSlots(level, isHalf) {
  const clamped = Math.max(1, Math.min(20, level));
  const casterLevel = isHalf ? Math.max(1, Math.floor(clamped / 2)) : clamped;
  // Minimal slot table; good enough for stub NPCs
  const table = [
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 2, 0, 0, 0, 0, 0, 0, 0],
    [4, 3, 0, 0, 0, 0, 0, 0, 0],
    [4, 3, 2, 0, 0, 0, 0, 0, 0],
    [4, 3, 3, 0, 0, 0, 0, 0, 0],
    [4, 3, 3, 1, 0, 0, 0, 0, 0],
    [4, 3, 3, 2, 0, 0, 0, 0, 0],
    [4, 3, 3, 3, 1, 0, 0, 0, 0],
    [4, 3, 3, 3, 2, 0, 0, 0, 0],
    [4, 3, 3, 3, 2, 1, 0, 0, 0],
    [4, 3, 3, 3, 2, 1, 0, 0, 0],
    [4, 3, 3, 3, 2, 1, 1, 0, 0],
    [4, 3, 3, 3, 2, 1, 1, 0, 0],
    [4, 3, 3, 3, 2, 1, 1, 1, 0],
    [4, 3, 3, 3, 2, 1, 1, 1, 0],
    [4, 3, 3, 3, 2, 1, 1, 1, 1],
    [4, 3, 3, 3, 2, 1, 1, 1, 1],
    [4, 3, 3, 3, 2, 1, 1, 1, 1],
    [4, 3, 3, 3, 2, 1, 1, 1, 1]
  ];
  const slots = table[Math.min(casterLevel, table.length) - 1];
  const data = defaultSpellSlots();
  slots.forEach((v, i) => {
    data[`spell${i + 1}`] = { value: v, max: v };
  });
  return data;
}

function getSpellsPackId() {
  const preferred = ["dnd5e.spells24", "dnd5e.spells"];
  return preferred.find((id) => game.packs.has(id)) ?? null;
}

function applyMagicUpgrades(level, weaponItem, armorItems) {
  const bonuses = [];
  if (level >= 8 && level <= 12) bonuses.push(1);
  if (level >= 13 && level <= 16) bonuses.push(2, 1);
  if (level >= 17) bonuses.push(3, 2, 1);

  if (!bonuses.length) return { weapon: weaponItem, armorItems };

  const armorIdx = armorItems.findIndex((i) => !isShield(i));
  const shieldIdx = armorItems.findIndex((i, idx) => idx !== armorIdx && isShield(i));

  const used = new Set();
  const upgradedArmor = [...armorItems];
  let upgradedWeapon = weaponItem;

  const slots = [
    { key: "weapon", item: () => upgradedWeapon, apply: (bonus) => (upgradedWeapon = upgradeItem(upgradedWeapon, bonus)) },
    {
      key: "armor",
      item: () => (armorIdx >= 0 ? upgradedArmor[armorIdx] : null),
      apply: (bonus) => {
        if (armorIdx >= 0) upgradedArmor[armorIdx] = upgradeItem(upgradedArmor[armorIdx], bonus);
      }
    },
    {
      key: "shield",
      item: () => (shieldIdx >= 0 ? upgradedArmor[shieldIdx] : null),
      apply: (bonus) => {
        if (shieldIdx >= 0) upgradedArmor[shieldIdx] = upgradeItem(upgradedArmor[shieldIdx], bonus);
      }
    }
  ];

  for (const bonus of bonuses.sort((a, b) => b - a)) {
    let applied = false;
    for (const slot of slots) {
      if (used.has(slot.key)) continue;
      const item = slot.item();
      if (!item) continue;
      slot.apply(bonus);
      used.add(slot.key);
      applied = true;
      break;
    }
    if (!applied && upgradedWeapon) {
      upgradedWeapon = upgradeItem(upgradedWeapon, bonus);
    }
  }

  return { weapon: upgradedWeapon, armorItems: upgradedArmor };
}

function isShield(item) {
  const typeVal = item?.system?.type?.value || item?.system?.armor?.type;
  if (typeVal && `${typeVal}`.toLowerCase() === "shield") return true;
  const name = item?.name?.toLowerCase?.() ?? "";
  return name.includes("shield");
}

function upgradeItem(item, bonus) {
  if (!item) return item;
  const clone = structuredClone(item);
  clone.name = `${clone.name} +${bonus}`;
  const rarity = bonus === 1 ? "uncommon" : bonus === 2 ? "rare" : "veryRare";
  if (!clone.system) clone.system = {};
  clone.system.rarity = clone.system.rarity || rarity;
  clone.system.magicalBonus = bonus;
  return clone;
}

const BACKSTORY_TABLE = {
  upbringing: [
    "Grew up in a bustling trade city, learning to read people before they spoke.",
    "Raised by traveling artisans, never staying in one town for long.",
    "Spent youth in a secluded monastery tucked into the mountains.",
    "Served on caravans that crossed war-torn borders as a runner and scout.",
    "Grew up in a fishing village, toughened by storms and scarce harvests.",
    "Learned survival in deep forests, guided by patient rangers.",
    "Apprenticed in a crumbling library, copying old maps for coin.",
    "Lived on river barges, bartering stories and goods at every port.",
    "Helped run a small shrine, mending wounds and spirits alike.",
    "Was sheltered in a noble house, but listened more than they spoke."
  ],
  hooks: [
    "They fled after witnessing a crime they shouldn't have.",
    "They owe a debt to a mysterious patron who once saved them.",
    "They seek a family heirloom stolen generations ago.",
    "They carry a sealed letter from a dying mentor, still undelivered.",
    "They want to prove a prophecy about them is either true—or false.",
    "They hunt the bandits who razed their first home.",
    "They chase rumors of a lost sibling thought dead.",
    "They promised to return a relic to a forgotten temple.",
    "They are haunted by dreams of an approaching calamity.",
    "They were framed for a crime and need to clear their name."
  ],
  quirks: [
    "Keeps a small journal of every new person they meet.",
    "Refuses to sleep without a lit candle nearby.",
    "Collects odd trinkets and ties them to their belt.",
    "Talks to themselves quietly when they think no one listens.",
    "Always tastes local water before trusting it.",
    "Starts each day with a quiet meditation or prayer.",
    "Cannot stand to see a door left ajar.",
    "Insists on brewing their own tea, regardless of situation.",
    "Carries a token of every town they've visited.",
    "Has a habit of humming marching tunes when nervous."
  ],
  goals: [
    "Hopes to earn a name that will echo in bardic tales.",
    "Wants to found a safe haven for outcasts and misfits.",
    "Plans to map an ancient ruin rumored to hold forbidden lore.",
    "Seeks redemption for a past failure that cost innocent lives.",
    "Dreams of mastering magic beyond what their teachers allowed.",
    "Aims to mentor someone and break a cycle of violence.",
    "Wants to recover knowledge lost in a great library fire.",
    "Strives to unite feuding factions before war erupts.",
    "Seeks to bargain with a fey or fiend that marked their family.",
    "Plans to retire with enough wealth to rebuild their hometown."
  ]
};

function generateNameFromSyllables(race) {
  const buckets = NAME_SYLLABLES[race] ?? NAME_SYLLABLES.Human;
  const [start, mid, end] = buckets;
  const pieces = [pick(start), pick(mid), pick(end)];
  const name = pieces.join("");
  return name.charAt(0).toUpperCase() + name.slice(1);
}
