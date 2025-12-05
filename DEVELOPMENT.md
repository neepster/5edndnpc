# Development Guide

## Prerequisites (Fedora)

- Node.js 18+ (for sanity checks): `sudo dnf install nodejs`
- Git
- Foundry VTT installed locally with the dnd5e system

## Link the module into Foundry

```bash
MODULE_PATH="$HOME/.local/share/FoundryVTT/Data/modules/5edndnpc"
mkdir -p "$(dirname "$MODULE_PATH")"
ln -sfn "$(pwd)" "$MODULE_PATH"
```

If you prefer copying instead of linking:

```bash
MODULE_PATH="$HOME/.local/share/FoundryVTT/Data/modules/5edndnpc"
mkdir -p "$(dirname "$MODULE_PATH")"
rsync -av --delete ./ "$MODULE_PATH"/
```

## Running checks

There is no build step. For quick syntax sanity:

```bash
node --check scripts/main.js
node --check scripts/npc-generator.js
```

Launch Foundry, enable the module in **Add-on Modules**, open a dnd5e world, and test via the Actor Directory “5e NPC” button.
