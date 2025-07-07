//Utility
function createCustomBossButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-custom-bosses-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}

//Templates
function commonHiddenFields(button){
    hideField(button, '.boss-enabled');
    hideField(button, '.boss-persistent');
    hideField(button, '.boss-baby');
    hideField(button, '.boss-frozen');
    hideField(button, '.boss-reinforcement');
    hideField(button, '.boss-on-death-commands');
    hideField(button, '.boss-on-spawn-commands');
    hideField(button, '.boss-on-combat-enter-commands');
    hideField(button, '.boss-on-combat-leave-commands');
    hideField(button, '.boss-trails');
    hideField(button, '.boss-mounted-entity');
    hideField(button, '.boss-escape-message');
    hideField(button, '.boss-disguise');
    hideField(button, '.boss-custom-disguise-data');
    hideField(button, '.boss-custom-model');
    hideField(button, '.boss-timeout');
    hideField(button, '.boss-cull-reinforcements');
    hideField(button, '.boss-normalized-combat');
    hideField(button, '.boss-on-damage-messages');
    hideField(button, '.boss-on-damaged-messages');
}


function lairBossButton(button){
    commonHiddenFields(button);
    presetField(button, '.boss-health-multiplier', 30.0);
    presetField(button, '.boss-damage-multiplier', 1.5);
    presetAndHideField(button, '.boss-drops-elitemobs-loot', 'true');
    presetAndHideField(button, '.boss-drops-vanilla-loot', false);
    presetField(button, '.boss-drops-random-loot', true);
    presetField(button, '.boss-announcement-priority', 3);
    presetField(button, '.boss-follow-distance', 30);
    presetField(button, '.boss-spawn-cooldown', 360);
    presetField(button, '.boss-leash-radius', 30);
    presetAndHideField(button, '.boss-is-regional-boss', 'true');
    revealItemFields(button);
    clearOldContent(button);
}

function minidungeonBossButton(button){
    commonHiddenFields(button);
    presetField(button, '.boss-health-multiplier', 5.0);
    presetField(button, '.boss-damage-multiplier', 2.0);
    presetAndHideField(button, '.boss-drops-elitemobs-loot', 'true');
    presetAndHideField(button, '.boss-drops-vanilla-loot', false);
    presetField(button, '.boss-drops-random-loot', true);
    presetField(button, '.boss-announcement-priority', 3);
    presetField(button, '.boss-follow-distance', 30);
    presetField(button, '.boss-spawn-cooldown', 120);
    presetField(button, '.boss-leash-radius', 30);
    presetAndHideField(button, '.boss-is-regional-boss', 'true');
    revealItemFields(button);
    clearOldContent(button);
}

function minidungeonMinibossButton(button){
    commonHiddenFields(button);
    presetField(button, '.boss-health-multiplier', 2.5);
    presetField(button, '.boss-damage-multiplier', 2.0);
    presetAndHideField(button, '.boss-drops-elitemobs-loot', 'true');
    presetAndHideField(button, '.boss-drops-vanilla-loot', false);
    presetField(button, '.boss-drops-random-loot', true);
    hideField(button, '.boss-announcement-priority');
    presetField(button, '.boss-follow-distance', 30);
    presetField(button, '.boss-spawn-cooldown', 30);
    presetField(button, '.boss-leash-radius', 30);
    presetAndHideField(button, '.boss-is-regional-boss', 'true');
    hideField(button, '.boss-death-messages');
    hideField(button, '.boss-spawn-message');
    hideField(button, '.boss-death-message');
    hideField(button, '.boss-location-message');
    revealItemFields(button);
    clearOldContent(button);
}

function minidungeonMobButton(button){
    commonHiddenFields(button);
    presetField(button, '.boss-health-multiplier', 1.0);
    presetField(button, '.boss-damage-multiplier', 1.0);
    presetAndHideField(button, '.boss-drops-elitemobs-loot', 'true');
    presetAndHideField(button, '.boss-drops-vanilla-loot', false);
    presetField(button, '.boss-drops-random-loot', true);
    hideField(button, '.boss-announcement-priority');
    presetField(button, '.boss-follow-distance', 30);
    presetField(button, '.boss-spawn-cooldown', 5);
    presetField(button, '.boss-leash-radius', 30);
    presetAndHideField(button, '.boss-is-regional-boss', 'true');
    hideField(button, '.boss-death-messages');
    hideField(button, '.boss-spawn-message');
    hideField(button, '.boss-death-message');
    hideField(button, '.boss-location-message');
    revealItemFields(button);
    clearOldContent(button);
}

function minidungeonTrashMobButton(button){
    commonHiddenFields(button);
    presetField(button, '.boss-health-multiplier', 0.75);
    presetField(button, '.boss-damage-multiplier', 0.5);
    presetAndHideField(button, '.boss-drops-elitemobs-loot', 'true');
    presetAndHideField(button, '.boss-drops-vanilla-loot', false);
    presetField(button, '.boss-drops-random-loot', false);
    hideField(button, '.boss-announcement-priority');
    presetField(button, '.boss-follow-distance', 30);
    presetField(button, '.boss-spawn-cooldown', 5);
    presetField(button, '.boss-leash-radius', 30);
    presetAndHideField(button, '.boss-is-regional-boss', 'true');
    hideField(button, '.boss-death-messages');
    hideField(button, '.boss-spawn-message');
    hideField(button, '.boss-death-message');
    hideField(button, '.boss-location-message');
    revealItemFields(button);
    clearOldContent(button);
}


function reinforcementMobButton(button){
    commonHiddenFields(button);
    presetField(button, '.boss-health-multiplier', 0.25);
    presetField(button, '.boss-damage-multiplier', 0.8);
    presetAndHideField(button, '.boss-drops-elitemobs-loot', false);
    presetAndHideField(button, '.boss-drops-vanilla-loot', false);
    presetField(button, '.boss-drops-random-loot', false);
    hideField(button, '.boss-announcement-priority');
    presetField(button, '.boss-follow-distance', 30);
    hideField(button, '.boss-spawn-cooldown');
    hideField(button, '.boss-leash-radius');
    hideField(button, '.boss-is-regional-boss');
    hideField(button, '.boss-death-messages');
    hideField(button, '.boss-spawn-message');
    hideField(button, '.boss-death-message');
    hideField(button, '.boss-location-message');
    revealItemFields(button);
    clearOldContent(button);
}

function eventBossButton(button){
    commonHiddenFields(button);
    presetField(button, '.boss-health-multiplier', 2.5);
    presetField(button, '.boss-damage-multiplier', 2.0);
    presetAndHideField(button, '.boss-drops-elitemobs-loot', true);
    presetAndHideField(button, '.boss-drops-vanilla-loot', false);
    presetField(button, '.boss-drops-random-loot', true);
    presetField(button, '.boss-announcement-priority', 2);
    presetField(button, '.boss-follow-distance', 100);
    hideField(button, '.boss-spawn-cooldown');
    hideField(button, '.boss-leash-radius');
    hideField(button, '.boss-is-regional-boss');
    revealItemFields(button);
    clearOldContent(button);
}

//Complex option fields
function simpleLootButton(button) {
    switchTemplates(button, 'template-custom-bosses-simple-loot', '.row');
}

function advancedLootButton(button) {
    switchTemplates(button, 'template-custom-bosses-advanced-loot', '.row');
}

function switchTemplates(button, newTemplate, parentClass) {
    const newContent = document.getElementById(newTemplate).content.cloneNode(true);
    let parent = button.closest(parentClass);
    parent.innerHTML = "";
    parent.appendChild(newContent);
}