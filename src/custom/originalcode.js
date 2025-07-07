
/**
 * Initialize datalists based on the list data here
 */
window.onload = function () {
  document.getElementById("boss-entity-type-API-Name").innerHTML =
    convertToDatalist(entityTypeAPINames);
  document.getElementById("boss-power-API-names").innerHTML = convertToDatalist(powerAPINames);
  document.getElementById("boss-trail-API-names").innerHTML = convertToDatalist(trailAPINames);
  document.getElementById("particle-API-names").innerHTML = convertToDatalist(particleAPINames);
  document.getElementById("material-API-names").innerHTML = convertToDatalist(materialAPINames);
  document.getElementById("chest-material-API-names").innerHTML =
    convertToDatalist(chestMaterialAPINames);
  document.getElementById("enchantments-API-name").innerHTML =
    convertToDatalist(enchantmentAPINames);
  document.getElementById("potion-effects-API-name").innerHTML =
    convertToDatalist(potionEffectsAPINames);
  document.getElementById("profession-API-names").innerHTML = convertToDatalist(professionAPINames);
  document.getElementById("interaction-type-API-names").innerHTML =
    convertToDatalist(interactionTypeAPINames);
  document.getElementById("biome-API-names").innerHTML = convertToDatalist(biomeAPINames);
};

//meme
let clicked = false;
let chug_jugging = Math.floor(Math.random() * 1000) === 1;

/**
 * 1 in 1000 chance to play Chug Jug
 */
window.onclick = function () {
  if (!chug_jugging || clicked) return;
  clicked = true;
  let chug_jug = new Audio("audio/chug_jug.mp3");
  chug_jug.play();
};

//Dynamic autofills
let itemFilenames = [];

/**
 * Updates the auto-suggested item filenames
 */
function updateItemFilenames() {
  itemFilenames = updateAnyFilenames("card-custom-item", "custom-item-filename-names");
}

let bossFilenames = [];

/**
 * Updates the auto-suggested boss filenames
 */
function updateBossFilenames() {
  bossFilenames = updateAnyFilenames("card-custom-boss", "custom-boss-filename-names");
}

let treasureChestFilenames = [];

/**
 * Updates the auto-suggested quest filenames
 */
function updateTreasureChestFilenames() {
  treasureChestFilenames = updateAnyFilenames(
    "card-treasure-chest",
    "treasure-chest-filename-names"
  );
}

let questFilenames = [];

/**
 * Updates the auto-suggested quest filenames
 */
function updateQuestFilenames() {
  questFilenames = updateAnyFilenames("card-quest", "custom-quest-filename-names");
}

let dungeonFilenames = [];

/**
 * Updates the auto-suggested quest filenames
 */
function updateDungeonFilenames() {
  dungeonFilenames = updateAnyFilenames("card-quest", "dungeon-filename-names");
}

let arenaFilenames = [];

/**
 * Updates the auto-suggested quest filenames
 */
function updateArenaFilenames() {
  arenaFilenames = updateAnyFilenames("card-quest", "arena-filename-names");
}

let customEventFilenames = [];

/**
 * Updates the auto-suggested quest filenames
 */
function updateCustomEventFilenames() {
  customEventFilenames = updateAnyFilenames("card-custom-event", "custom-event-filename-names");
}

let customSpawnFilenames = [];

/**
 * Updates the auto-suggested quest filenames
 */
function updateCustomSpawnFilenames() {
  customSpawnFilenames = updateAnyFilenames("card-custom-spawn", "custom-spawn-filename-names");
}

/**
 * Updates any auto-suggested field with an input, refreshes every time
 * @param cardType Class name of the card type to seek
 * @param datalistID ID of the data list associated to the input
 * @returns {*[]}
 */
function updateAnyFilenames(cardType, datalistID) {
  const allElements = document.getElementsByClassName(cardType);
  let newFilenames = [];
  for (let i = 0; i < allElements.length; i++) {
    const filenameRow = allElements[i].getElementsByClassName("config-filename");
    if (filenameRow === undefined || filenameRow[0] === undefined || filenameRow[0] === null)
      continue;
    let filename = filenameRow[0].querySelector("input").value;
    if (filename !== "") newFilenames.push(filename);
  }
  document.getElementById(datalistID).innerHTML = convertToDatalist(newFilenames);
  return newFilenames;
}

//Util
/**
 * Searches for a parent by class name and then gets the first child by class name
 * @param currentElement Current element whose parent we will look for
 * @param parentClassName Class name of the parent, use the '.class' format
 * @param targetClassName Class name of the first child, use the '.class' format
 * @returns {*} First child of the parent with the specified class
 */
function diagonalDOMTraversal(currentElement, parentClassName, targetClassName) {
  return currentElement.closest(parentClassName).querySelector(targetClassName);
}

/**
 * Gets full card, meaning the entirety of an entry, including the header with the navigation symbols
 * @param currentElement Element in the card
 * @returns {Element | SVGSymbolElement | SVGMetadataElement | SVGUseElement | SVGAnimateElement | SVGFEImageElement | SVGPathElement | SVGViewElement | SVGFEConvolveMatrixElement | SVGFECompositeElement | SVGEllipseElement | SVGFEOffsetElement | SVGTextElement | SVGDefsElement | SVGFETurbulenceElement | SVGImageElement | SVGFEFuncGElement | SVGMPathElement | SVGTSpanElement | SVGClipPathElement | SVGLinearGradientElement | SVGFEFuncRElement | SVGScriptElement | SVGFEColorMatrixElement | SVGFEComponentTransferElement | SVGStopElement | SVGMarkerElement | SVGFEMorphologyElement | SVGFEMergeElement | SVGFEPointLightElement | SVGForeignObjectElement | SVGFEDiffuseLightingElement | SVGStyleElement | SVGFEBlendElement | SVGCircleElement | SVGPolylineElement | SVGDescElement | SVGFESpecularLightingElement | SVGLineElement | SVGFESpotLightElement | SVGFETileElement | SVGPatternElement | SVGTitleElement | SVGSwitchElement | SVGRectElement | SVGFEDisplacementMapElement | SVGFEFuncAElement | SVGFEFuncBElement | SVGFEMergeNodeElement | SVGTextPathElement | SVGFEFloodElement | SVGMaskElement | SVGAElement | SVGAnimateTransformElement | SVGSetElement | SVGSVGElement | SVGAnimateMotionElement | SVGGElement | SVGFEDistantLightElement | SVGFEDropShadowElement | SVGRadialGradientElement | SVGFilterElement | SVGPolygonElement | SVGFEGaussianBlurElement | HTMLSelectElement | HTMLLegendElement | HTMLElement | HTMLTableCaptionElement | HTMLTextAreaElement | HTMLModElement | HTMLHRElement | HTMLOutputElement | HTMLEmbedElement | HTMLCanvasElement | HTMLFrameSetElement | HTMLMarqueeElement | HTMLScriptElement | HTMLInputElement | HTMLMetaElement | HTMLStyleElement | HTMLObjectElement | HTMLTemplateElement | HTMLBRElement | HTMLAudioElement | HTMLIFrameElement | HTMLMapElement | HTMLTableElement | HTMLAnchorElement | HTMLMenuElement | HTMLPictureElement | HTMLParagraphElement | HTMLTableCellElement | HTMLTableSectionElement | HTMLQuoteElement | HTMLProgressElement | HTMLLIElement | HTMLTableRowElement | HTMLFontElement | HTMLSpanElement | HTMLTableColElement | HTMLOptGroupElement | HTMLDataElement | HTMLDListElement | HTMLFieldSetElement | HTMLSourceElement | HTMLBodyElement | HTMLDirectoryElement | HTMLDivElement | HTMLUListElement | HTMLDetailsElement | HTMLHtmlElement | HTMLAreaElement | HTMLPreElement | HTMLMeterElement | HTMLFrameElement | HTMLOptionElement | HTMLImageElement | HTMLLinkElement | HTMLHeadingElement | HTMLSlotElement | HTMLVideoElement | HTMLTitleElement | HTMLButtonElement | HTMLHeadElement | HTMLDialogElement | HTMLParamElement | HTMLTrackElement | HTMLOListElement | HTMLDataListElement | HTMLLabelElement | HTMLFormElement | HTMLTimeElement | HTMLBaseElement}
 */
function getCard(currentElement) {
  return currentElement.closest(".container");
}

//Global scripts
/**
 * Shows all fields on a card when generating any type of file
 * @param button Blank slate button on the card
 */
function blankSlateButton(button) {
  revealItemFields(button);
  clearOldContent(button);
}

function initializeConfigLists(card) {
  const container = card.querySelector(".field-container");
  for (const child of container.getElementsByClassName("config-list")) {
    let div = document.createElement("div");
    div.classList.add("field-group");
    let parent = child.closest(".form-group").parentNode;
    parent.insertBefore(div, child.closest(".form-group"));
    div.appendChild(child.closest(".form-group"));
    div.appendChild(document.getElementById("template-plus-button").content.cloneNode(true));
  }
}

/**
 * TODO: This needs a new solution
 * @param id
 */
function customItemLinkFactory(id) {
  window.open("https://github.com/MagmaGuy/EliteMobs/wiki/[Guide]-Creating-custom-loot#" + id);
}

/**
 * Adds a new generic card
 */
function addEntry() {
  document
    .getElementById("add-entry")
    .before(document.getElementById("template-main-container").content.cloneNode(true));
}

function transitionContent(button, newTemplate) {
  let boxContents = button.parentNode.parentNode;
  boxContents.parentNode.append(document.getElementById(newTemplate).content.cloneNode(true));
  boxContents.remove();
}

function clearOldContent(button) {
  let boxContents = button.parentNode.parentNode;
  boxContents.remove();
}

function expandEntry(expandButton) {
  const collapsibleContents = diagonalDOMTraversal(expandButton, ".container", ".main-container");
  if (collapsibleContents.classList.contains("collapse"))
    collapsibleContents.classList.remove("collapse");
  else collapsibleContents.classList.add("collapse");
}

/**
 * Moves card down
 * @param downButton Button that does the moving
 */
function arrowDown(downButton) {
  const currentBox = getCard(downButton);
  const allChildren = document.body.getElementsByClassName("container");
  const currentBoxIndex = Array.prototype.indexOf.call(allChildren, currentBox);
  if (allChildren[currentBoxIndex + 1] === undefined) return;
  currentBox.parentNode.insertBefore(currentBox, allChildren[currentBoxIndex + 1].nextSibling);
}

/**
 * Moves card up
 * @param upButton Button that does the moving
 */
function arrowUp(upButton) {
  const currentBox = getCard(upButton);
  const allChildren = document.body.getElementsByClassName("container");
  const currentBoxIndex = Array.prototype.indexOf.call(allChildren, currentBox);
  if (allChildren[currentBoxIndex - 1] === undefined) return;
  currentBox.parentNode.insertBefore(currentBox, allChildren[currentBoxIndex - 1]);
}

/**
 * Updates the header title of any card
 * @param filenameForm Filename field with the value that will be used to update the title
 */
function updateCardTitle(filenameForm) {
  diagonalDOMTraversal(filenameForm, ".container", ".card-title").innerHTML = filenameForm.value;
}

/**
 * Slowly fades out a card then removes it
 * @param deleteButton Element to delete
 */
function deleteCardWithAnimation(deleteButton) {
  fadeAnimation(getCard(deleteButton));
}

/**
 * Slowly fades out any element and then removes it
 * @param element Element to fadeAnimation and delete
 */
function fadeAnimation(element) {
  let op = 1; // initial opacity
  const timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
      element.remove();
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.5;
  }, 50);
}

/**
 * Adds the plus button that allows the creation of more lines in string list fields. Can be added to any field.
 * String lists require multiple lines of text to work correctly. In this implementation, those lines are added to the form
 * via a plus button. The values get copied from the template and get added and bound to the container.
 * @param button
 */
function addNewField(button) {
  const templateContainer = button.closest(".field-group");
  console.log(templateContainer);
  const contentsToClone = templateContainer.children[0];
  console.log(contentsToClone);
  //deep clone of the previous line
  let clonedLine = contentsToClone.cloneNode(true);
  console.log(clonedLine);
  let lastChild = button.closest(".row");
  //Sometimes just cloning the previous line isn't enough for complex inputs, in which case data-template="" stores the template that should get used
  if (clonedLine.dataset.template !== undefined && clonedLine.dataset.template !== "") {
    let documentFragment = document
      .getElementById(clonedLine.dataset.template)
      .content.cloneNode(true);
    lastChild.before(documentFragment);
    clonedLine = templateContainer.children[templateContainer.length - 2];
  } else lastChild.before(clonedLine);
  if (!clonedLine.classList.contains("cloned")) {
    clonedLine.classList.add("cloned");
    let trash = document.getElementById("template-trash-button").content.cloneNode(true);
    clonedLine.replaceChild(trash, clonedLine.firstElementChild);
    clonedLine.style.textAlign = "right";
  }

  let forms = clonedLine.getElementsByClassName("form-control");
  for (let i = 0; i < forms.length; i++) {
    forms[i].value = "";
  }
}

/**
 * Removes a string list entry
 * @param button Button that is next to the entry that needs to be removed
 */
function removeField(button) {
  fadeAnimation(button.parentNode);
}

/**
 * Used for advanced fields, this hides them from sight until the advanced settings button is pressed.
 * @param className Field to hide
 */
function hideField(button, className) {
  const card = getCard(button);
  let field = card.querySelector(className);
  if (field.closest(".field-group") !== null) field = field.closest(".field-group");
  field.classList.add("advanced-collapse");
  field.classList.add("collapse");
}

/**
 * Used to preset fields with a specific value and then hide them when using templates
 * @param className
 * @param value
 */
function presetAndHideField(button, className, value) {
  presetField(button, className, value);
  hideField(button, className);
}

/**
 * Used to preset a field but still leave the option exposed for customization
 * @param container
 * @param className
 * @param value
 */
function presetField(button, className, value) {
  console.log("getting card");
  const card = getCard(button);
  const field = card.querySelector(className);
  const form = field.querySelector(".form-control");
  form.value = value;
  console.log(form);
}

/**
 * Collapses advanced classes in a card. Can't use the default bootstrap method because it affects all classes, not just
 * the ones contained in a card.
 * @param button The advanced button
 */
function advancedButton(button) {
  const boxContents = button.parentNode.parentNode;
  const validChildren = boxContents.getElementsByClassName("advanced-collapse");
  for (let i = 0; i < validChildren.length; i++) {
    const child = validChildren[i];
    if (child.classList.contains("collapse")) child.classList.remove("collapse");
    else child.classList.add("collapse");
  }
}

//Form to yml file generation
function generate() {
  let requiredFields = document.getElementsByClassName("required-field");
  for (let i = 0; i < requiredFields.length; i++)
    if (requiredFields[i].value === "") {
      alert("You have not filled all required fields!");
      return;
    }

  let customItems = document.getElementsByClassName("card-custom-item");
  for (let i = 0; i < customItems.length; i++) generateYMLText(customItems[i]);
  let customBosses = document.getElementsByClassName("card-custom-boss");
  for (let i = 0; i < customBosses.length; i++) generateYMLText(customBosses[i]);
  let treasureChests = document.getElementsByClassName("card-treasure-chest");
  for (let i = 0; i < treasureChests.length; i++) generateYMLText(treasureChests[i]);
  let npcs = document.getElementsByClassName("card-npc");
  for (let i = 0; i < npcs.length; i++) generateYMLText(npcs[i]);
  let dungeons = document.getElementsByClassName("card-dungeon");
  for (let i = 0; i < dungeons.length; i++) generateYMLText(dungeons[i]);
  let customEvents = document.getElementsByClassName("card-custom-event");
  for (let i = 0; i < customEvents.length; i++) generateYMLText(customEvents[i]);
  let customSpawns = document.getElementsByClassName("card-custom-spawn");
  for (let i = 0; i < customSpawns.length; i++) generateYMLText(customSpawns[i]);
}

/**
 * This gets called on a card-by-card basis
 * @param entry The full contents of the card box
 */
function generateYMLText(entry) {
  const configFields = entry.getElementsByClassName("config-entry");
  let fieldsObject = {};
  for (let i = 0; i < configFields.length; i++) {
    let individualEntries = configFields[i].getElementsByClassName("form-control");
    const key = configFields[i].dataset.configKey;
    if (individualEntries.length === 1) {
      //Case for simple config strings that do not have additional options, the normal case
      if (individualEntries[0].value !== undefined && individualEntries[0].value !== "")
        if (fieldsObject[key] === undefined || fieldsObject[key] === "")
          //Handles case where this is the first entry
          fieldsObject[key] = convertToConfigFormat(
            configFields[i],
            individualEntries[0].value,
            true
          );
        else
          //Handles case where this is not the first entry, required for string lists
          fieldsObject[key] += convertToConfigFormat(
            configFields[i],
            individualEntries[0].value,
            true
          );
    } else {
      //Case for config strings that are made up of individual settings, resulting in lines with multiple form elements
      let completeRowString = "";
      for (let j = 0; j < individualEntries.length; j++) {
        let value = individualEntries[j].value;
        if (value !== undefined && value !== "")
          if (completeRowString === "") {
            //Case for this being the first value registered to the row
            completeRowString = convertToConfigFormat(configFields[i], value, true);
          } else if (configFields[i].classList.contains("config-comma-separator"))
            //This is the way some old separators do string line separations
            completeRowString += "," + convertToConfigFormat(configFields[i], value, false);
          else
            //This is the new and more correct way of doing separations
            completeRowString += ":" + convertToConfigFormat(configFields[i], value, false);
      }

      if (completeRowString === "") continue;
      //Close the string formatting, all lists are fundamentally string lists
      completeRowString = completeRowString.replaceAll('"', "");
      completeRowString =
        completeRowString.slice(0, 3) +
        '"' +
        completeRowString.slice(3, completeRowString.length) +
        '"';
      if (fieldsObject[key] === undefined) fieldsObject[key] = completeRowString;
      else fieldsObject[key] += completeRowString;
    }
  }

  let finalString = "";
  for (const key in fieldsObject) {
    if (key !== "filename") finalString += key + ": " + fieldsObject[key] + "\n";
  }

  console.log(finalString);
  download(fieldsObject.filename, finalString);
}

function convertToConfigFormat(valueContainer, entry, firstElementInLine) {
  if (valueContainer.classList.contains("config-string")) {
    //Handles string values
    return '"' + entry + '"';
  } else if (valueContainer.classList.contains("config-boolean")) {
    //Handles boolean values
    return entry;
  } else if (valueContainer.classList.contains("config-number")) {
    //Handle integers, floats and doubles
    return entry;
  } else if (valueContainer.classList.contains("config-filename")) {
    //Handle integers, floats and doubles
    return entry;
  } else if (valueContainer.classList.contains("config-enum")) {
    //Handles enum values
    return entry.toUpperCase();
  } else if (valueContainer.classList.contains("config-list")) {
    //Handles all lists
    if (firstElementInLine) return '\n- "' + entry + '"';
    else return entry;
  } else {
    console.log("Entry " + entry + " is missing a valid configuration data format!");
  }
}
