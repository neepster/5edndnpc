import { generateRandomNpc, RACES, CLASSES } from "./npc-generator.js";

const MODULE_ID = "5edndnpc";

Hooks.once("init", () => {
  console.log(`${MODULE_ID} | Initializing 5e NPC Generator module`);
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
  const header = $html.find(".directory-header");
  let actionBar = header.find(".header-actions.action-buttons").first();
  if (!actionBar.length) actionBar = header.find(".header-actions").first();
  if (!actionBar.length) actionBar = header.find(".action-buttons").first();

  if (!actionBar?.length) {
    actionBar = $(`<div class="header-actions action-buttons flexrow"></div>`);
    header.append(actionBar);
    console.debug(`${MODULE_ID} | Created header action bar for Actor Directory`);
  }

  if (actionBar.find(`.npc-gen-button[data-module="${MODULE_ID}"]`).length) return;

  const button = $(
    `<button type="button" class="npc-gen-button" data-module="${MODULE_ID}">
      <i class="fas fa-user-plus"></i> 5e NPC
    </button>`
  );

  button.on("click", () => openNpcDialog());
  actionBar.append(button);
  console.debug(`${MODULE_ID} | Added 5e NPC button to Actor Directory`);
});

function openNpcDialog() {
  const raceOptions = ['<option value="random">Random Race</option>', ...RACES.map((race) => `<option value="${race}">${race}</option>`)].join("");
  const classOptions = ['<option value="random">Random Class</option>', ...CLASSES.map((cls) => `<option value="${cls}">${cls}</option>`)].join("");

  const content = `
    <form class="npc-generator-form">
      <div class="form-group">
        <label>Level</label>
        <input type="number" name="level" value="1" min="1" max="20">
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
    const level = Math.max(1, Math.min(20, Number($html.find('input[name="level"]').val()) || 1));
    const raceValue = $html.find('select[name="race"]').val();
    const roleValue = $html.find('select[name="role"]').val();

    const npcData = await generateRandomNpc({
      level,
      race: raceValue === "random" ? undefined : raceValue,
      role: roleValue === "random" ? undefined : roleValue
    });
    const actor = await Actor.create(npcData);
    ui.notifications?.info(`5edndnpc: Created NPC "${actor.name}"`);
  } catch (error) {
    console.error(`${MODULE_ID} | Failed to create NPC`, error);
    ui.notifications?.error("5edndnpc: Failed to create NPC. Check console for details.");
  }
}
