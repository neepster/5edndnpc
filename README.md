# 5e D&D NPC Generator (Foundry VTT v13, dnd5e)

Generates quick, system-valid dnd5e NPCs from the Actor Directory with class/race-aware stats, SRD gear/spells, and mix-and-match backstories.

## Installation (Linux, manual)

1. Download or clone this repo.
2. Copy the folder into `~/.local/share/FoundryVTT/Data/modules/5edndnpc` (create the `modules` dir if needed).
3. Launch Foundry, go to **Setup > Add-on Modules**, and enable **5e D&D NPC Generator** for your world.

## Usage

- Open the **Actor Directory**; a **"Generate 5e NPC"** button appears in the footer.
- Choose level range (min/max), race, and class (or leave random) in the dialog and click **Generate**.
- The module will create an NPC Actor with:
  - **Level-appropriate ability scores** with Ability Score Improvements (ASI) based on D&D 5e rules
  - **Varied names** from expanded pools (60+ per race) with surnames for Dwarf, Elf, Human, Half-Elf
  - **Rich backstories** assembled from 120+ options across upbringing, hooks, quirks, and goals
  - **Class-specific features** like Hunter's Mark (Rangers), Sneak Attack (Rogues), Unarmed Strike (Monks)
  - **Level-scaled equipment** including magical items for casters (+1/+2/+3 staffs, robes, rings based on level tier)
  - **Appropriate spell loadouts** with essential spells and increased variety for high-level casters
  - **Smart weapon choices** - pure arcane casters get magical focus + dagger, hybrid casters keep martial weapons
  - Level-based HP/AC and gear linked to dnd5e compendia

## Requirements

- Foundry VTT v13
- dnd5e system (2024 data supported; falls back to 2014 compendia)
- No build step; plain ES modules loaded via `module.json`
