# AI Notes

## Project Overview
Plain ES-module Foundry v13 add-on that adds a “5e NPC” button to the Actor Directory for the dnd5e system. It builds race/class-aware NPC actors with standard-array abilities, level-scaling HP/AC, SRD gear pulled from dnd5e compendia, prepared spells for casters, magic upgrades at higher levels, and stitched backstories.

## Architecture / Design
- Entry: `module.json` -> `scripts/main.js` registers `init`, `ready`, and `renderActorDirectory` hooks. The directory hook injects the button and opens a dialog to choose level/race/class, then calls the generator.
- Core logic: `scripts/npc-generator.js` (async). Generates abilities via standard array by class priority, picks names from race pools or syllable synthesis, builds gear/loadout per class, fetches SRD items/spells from compendia (`dnd5e.equipment24`/`dnd5e.items` and `dnd5e.spells24`/`dnd5e.spells`), applies magic bonuses by level tier, assigns spell slots and spellcasting ability, and stitches a backstory.
- Data quirks: Spells class matching tolerates both 2014 and 2024 compendium schemas (classes array, identifier, tags). Gear lookups fall back to stub items if compendia missing. Magic bonus assignment prefers weapon, then armor, then shield.

## Session Log (2024-12-04)
- Added race-aware syllable name synthesis and expanded name pools; backstory tables greatly expanded and assembled procedurally.
- Improved spell attachment (handles 2014/2024 compendia, sets slots/casting ability, more prepared spells) and gear sourcing across equipment compendia.
- Implemented level-based magic upgrades (+1/+2/+3) across weapon/armor/shield; added adventuring gear; kept dialog/UI wiring intact.
- Docs added: README, DEVELOPMENT guide, AI notes, and changelog entry; sanity checks via `node --check`.

### Design Decisions
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
