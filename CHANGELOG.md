# Changelog

## 2026-01-04
- **Major expansion of name variety**: Increased first names from 20 to 60 per race (540 total), added surnames for Dwarf, Elf, Human, and Half-Elf (240 total)
- **Tripled backstory content**: Expanded from 10 to 30 options per category (120 total across upbringing, hooks, quirks, goals)
- **Level-appropriate ability scores**: Implemented Ability Score Improvements (ASI) based on character level following D&D 5e rules (levels 4/8/12/16/19, with Fighter and Rogue bonuses)
- **Essential class features**: Added signature abilities - Hunter's Mark for Rangers, Sneak Attack for Rogues (level-scaled), Unarmed Strike for Monks
- **Caster magical items**: Level-tiered magical items for spellcasters (5-10: +1, 10-15: +2, 15-20: +3) including staffs/wands/rods, protective gear, and accessories
- **Increased spell variety**: High-level casters now receive appropriate spell counts (level * 1.8 formula), with essential spells prioritized per class
- **Level range selector**: Added min/max level inputs with persistent client settings to remember last selection
- **Smart weapon loadouts**: Pure arcane casters (Wizard, Sorcerer) get magical focus + dagger; hybrid casters keep martial weapons
- **Compendium integration**: Magical items now properly link to SRD compendium items with fallback to custom items
- **Modular code structure**: Split data into separate files (first-names.js, last-names.js, name-syllables.js, backstories.js) for maintainability
- **UI improvements**: Moved generation button to Actor Directory footer, added styling via 5edndnpc.css

## 2024-12-04
- Expanded race-aware names with syllable synthesis; richer backstory generation.
- Added spell slot/casting ability setup and more robust SRD spell sourcing (2014/2024 compendia).
- Implemented level-based magic gear upgrades (+1/+2/+3) and extra adventuring gear.
- Updated docs (README, DEVELOPMENT, AI_NOTES) and ran `node --check` sanity.
