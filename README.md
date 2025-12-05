# 5e D&D NPC Generator (Foundry VTT v13, dnd5e)

Generates quick, system-valid dnd5e NPCs from the Actor Directory with class/race-aware stats, SRD gear/spells, and mix-and-match backstories.

## Installation (Linux, manual)

1. Download or clone this repo.
2. Copy the folder into `~/.local/share/FoundryVTT/Data/modules/5edndnpc` (create the `modules` dir if needed).
3. Launch Foundry, go to **Setup > Add-on Modules**, and enable **5e D&D NPC Generator** for your world.

## Usage

- Open the **Actor Directory**; a **“5e NPC”** button appears in the header.
- Choose level, race, and class (or leave random) in the dialog and click **Generate**.
- The module will create an NPC Actor with:
  - Standard-array abilities prioritized per class
  - Level-based HP/AC, gear from the dnd5e compendia, and higher-level magic bonuses
  - Prepared spells pulled from the dnd5e spell compendia (casters only)
  - A stitched backstory and race-aware name

## Requirements

- Foundry VTT v13
- dnd5e system (2024 data supported; falls back to 2014 compendia)
- No build step; plain ES modules loaded via `module.json`
