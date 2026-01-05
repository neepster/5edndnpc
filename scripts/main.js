import { generateRandomNpc, RACES, CLASSES } from "./npc-generator.js";

const MODULE_ID = "5edndnpc";

Hooks.once("init", () => {
  console.log(`${MODULE_ID} | Initializing 5e NPC Generator module`);

  // Register settings to remember last level range
  game.settings.register(MODULE_ID, "lastMinLevel", {
    name: "Last Minimum Level",
    scope: "client",
    config: false,
    type: Number,
    default: 1
  });

  game.settings.register(MODULE_ID, "lastMaxLevel", {
    name: "Last Maximum Level",
    scope: "client",
    config: false,
    type: Number,
    default: 5
  });
});

Hooks.once("ready", () => {
  if (game.system.id !== "dnd5e") {
    console.warn(`${MODULE_ID} | This module is intended for the dnd5e system.`);
    return;
  }

  console.log(`${MODULE_ID} | Module ready and dnd5e system detected`);
});

Hooks.on("renderActorDirectory", (app, html) => {
  if (game.system.id !== "dnd5e") return;

  const $html = html instanceof jQuery ? html : $(html);

  // Check if button already exists
  if ($html.find(`.npc-gen-button[data-module="${MODULE_ID}"]`).length) return;

  // Find or create footer action bar at the bottom
  let footer = $html.find(".directory-footer");
  if (!footer.length) {
    footer = $(`<footer class="directory-footer flexrow"></footer>`);
    $html.find(".directory-list").after(footer);
  }

  let actionBar = footer.find(".action-buttons");
  if (!actionBar.length) {
    actionBar = $(`<div class="action-buttons flexrow"></div>`);
    footer.append(actionBar);
  }

  const button = $(
    `<button type="button" class="npc-gen-button" data-module="${MODULE_ID}">
      <i class="fas fa-user-plus"></i> Generate 5e NPC
    </button>`
  );

  button.on("click", () => openNpcDialog());
  actionBar.append(button);
  console.debug(`${MODULE_ID} | Added 5e NPC button to Actor Directory footer`);
});

function openNpcDialog() {
  const raceOptions = ['<option value="random">Random Race</option>', ...RACES.map((race) => `<option value="${race}">${race}</option>`)].join("");
  const classOptions = ['<option value="random">Random Class</option>', ...CLASSES.map((cls) => `<option value="${cls}">${cls}</option>`)].join("");

  // Load last used level range from settings
  const lastMinLevel = game.settings.get(MODULE_ID, "lastMinLevel") || 1;
  const lastMaxLevel = game.settings.get(MODULE_ID, "lastMaxLevel") || 5;

  const content = `
    <form class="npc-generator-form">
      <div class="form-group level-range">
        <label>Level Range</label>
        <div class="level-inputs">
          <input type="number" name="minLevel" value="${lastMinLevel}" min="1" max="20" placeholder="Min">
          <span class="level-separator">to</span>
          <input type="number" name="maxLevel" value="${lastMaxLevel}" min="1" max="20" placeholder="Max">
        </div>
        <p class="hint">NPC will be assigned a random level within this range</p>
      </div>
      <div class="form-group">
        <label>Race</label>
        <select name="race">${raceOptions}</select>
      </div>
      <div class="form-group">
        <label>Class</label>
        <select name="role">${classOptions}</select>
      </div>
    </form>
  `;

  new Dialog({
    title: "Generate 5e NPC",
    content,
    buttons: {
      generate: {
        label: "Generate",
        callback: (html) => handleGenerateNpc(html)
      },
      cancel: {
        label: "Cancel"
      }
    },
    default: "generate"
  }).render(true);
}

async function handleGenerateNpc(html) {
  if (game.system.id !== "dnd5e") {
    ui.notifications?.warn("5edndnpc: This module only works with the dnd5e system.");
    return;
  }

  try {
    const $html = html instanceof jQuery ? html : $(html);

    // Get level range and randomize
    const minLevel = Math.max(1, Math.min(20, Number($html.find('input[name="minLevel"]').val()) || 1));
    const maxLevel = Math.max(1, Math.min(20, Number($html.find('input[name="maxLevel"]').val()) || 5));
    const levelRange = [Math.min(minLevel, maxLevel), Math.max(minLevel, maxLevel)];
    const level = levelRange[0] + Math.floor(Math.random() * (levelRange[1] - levelRange[0] + 1));

    // Save level range settings for next time
    await game.settings.set(MODULE_ID, "lastMinLevel", minLevel);
    await game.settings.set(MODULE_ID, "lastMaxLevel", maxLevel);

    const raceValue = $html.find('select[name="race"]').val();
    const roleValue = $html.find('select[name="role"]').val();

    const npcData = await generateRandomNpc({
      level,
      race: raceValue === "random" ? undefined : raceValue,
      role: roleValue === "random" ? undefined : roleValue
    });
    const actor = await Actor.create(npcData);
    ui.notifications?.info(`5edndnpc: Created level ${level} NPC "${actor.name}"`);
  } catch (error) {
    console.error(`${MODULE_ID} | Failed to create NPC`, error);
    ui.notifications?.error("5edndnpc: Failed to create NPC. Check console for details.");
  }
}
