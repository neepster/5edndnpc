# AI Notes

## Project Overview
Plain ES-module Foundry v13 add-on that adds a “5e NPC” button to the Actor Directory for the dnd5e system. It builds race/class-aware NPC actors with standard-array abilities, level-scaling HP/AC, SRD gear pulled from dnd5e compendia, prepared spells for casters, magic upgrades at higher levels, and stitched backstories.

## Architecture / Design
- Entry: `module.json` -> `scripts/main.js` registers `init`, `ready`, and `renderActorDirectory` hooks. The directory hook injects the button in the footer and opens a dialog to choose level range/race/class (with persistent client settings), then calls the generator.
- Core logic: `scripts/npc-generator.js` (async). Generates abilities via standard array by class priority with level-based ASI improvements, picks names from expanded race pools or syllable synthesis (with surnames for select races), builds gear/loadout per class with essential features, fetches SRD items/spells from compendia (`dnd5e.equipment24`/`dnd5e.items` and `dnd5e.spells24`/`dnd5e.spells`), applies magic bonuses by level tier, assigns spell slots and spellcasting ability, and stitches a backstory from expanded tables.
- Data organization: Name and backstory data split into separate modules (`scripts/data/first-names.js`, `last-names.js`, `name-syllables.js`, `backstories.js`) for maintainability.
- Data quirks: Spells class matching tolerates both 2014 and 2024 compendium schemas (classes array, identifier, tags). Gear lookouts fall back to stub items if compendia missing. Magic items try compendium fetch with alternate names before creating custom items. Pure arcane casters (Wizard, Sorcerer) get magical focus + dagger; hybrid casters keep martial weapons.

## Session Log (2026-01-04)
- **Massive content expansion**: Tripled name variety (60 first names per race, surnames for 4 races) and backstory content (30 options per category)
- **Level-appropriate scaling**: Implemented ASI progression following D&D 5e rules (4/8/12/16/19) with Fighter/Rogue bonuses; high-level NPCs now have 19-20 in primary stats
- **Essential class features**: Added Hunter's Mark for Rangers, level-scaled Sneak Attack for Rogues, Unarmed Strike for Monks, class-appropriate starting items
- **Caster magical items**: Created tiered magical item system (5-10: +1, 10-15: +2, 15-20: +3) with staffs/wands/rods, protective gear (robes/cloaks), and accessories (rings/amulets)
- **Compendium integration**: Magical items now fetch from compendium with fallback to alternates, ensuring proper icons and stats
- **Smart weapon loadouts**: Differentiated pure arcane casters (Wizard/Sorcerer get focus + dagger) from hybrid casters (keep martial weapons + magical items)
- **Spell improvements**: Increased spell counts for high-level casters (level * 1.8), prioritized essential spells per class (e.g., Hunter's Mark for Rangers)
- **UI enhancements**: Level range selector with min/max inputs, persistent client settings, button moved to footer, custom CSS styling
- **Code organization**: Split data into modular files (first-names.js, last-names.js, name-syllables.js, backstories.js)
- **Bug fixes**: Fixed levelSafe initialization order, prevented stacking bonuses on same item, corrected weapon assignments for hybrid casters

### Design Decisions (2026-01-04)
- ASI allocation prioritizes maxing primary stats to 20, then secondary, ensuring high-level NPCs feel appropriately powerful
- Pure arcane vs hybrid caster distinction prevents Rangers/Paladins from losing martial weapons while still benefiting from magical items
- Compendium fetching with alternate names (e.g., "Quarterstaff" → "Staff") improves compatibility across different item packs
- Essential spells added first, then random spells fill remaining slots, ensuring class identity (Rangers always have Hunter's Mark)
- Level range persists via client settings for better UX when generating multiple NPCs

## Session Log (2024-12-04)
- Added race-aware syllable name synthesis and expanded name pools; backstory tables greatly expanded and assembled procedurally.
- Improved spell attachment (handles 2014/2024 compendia, sets slots/casting ability, more prepared spells) and gear sourcing across equipment compendia.
- Implemented level-based magic upgrades (+1/+2/+3) across weapon/armor/shield; added adventuring gear; kept dialog/UI wiring intact.
- Docs added: README, DEVELOPMENT guide, AI notes, and changelog entry; sanity checks via `node --check`.

### Design Decisions (2024-12-04)
- Spell class matching kept permissive to ensure casters always receive some spells even if compendium metadata varies.
- Magic upgrades apply greedily to weapon/armor/shield in descending bonus order to avoid overloading one slot.
- Name synthesis uses race-specific syllable buckets with a randomness gate to retain hand-picked names.

### Known Bugs / Limitations
- No automation for on-use activities; items/spells rely on compendium data fidelity.
- Backstories are simple stitched paragraphs; no localization.
- No tests or CI; only `node --check` sanity.
- Gear/spell sourcing depends on dnd5e compendia availability; falls back to stubs without user notification beyond console warning for spells.

### TODO (next session)
1) Add basic unit/logic tests or linting to guard generator outputs.
2) Support configurable item/spell pack IDs in module settings.
3) Enrich backstories with traits/bonds/flaws alignment to dnd5e fields; consider localization.
4) Improve spell loadouts per class archetype and cantrip guarantees.
5) Add UI polish or settings to toggle magic upgrades and gear density.
