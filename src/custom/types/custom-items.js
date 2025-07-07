//Utility

//Converts into a valid format for input suggestions
function convertToDatalist(arrayList) {
    let convertedString = '';
    arrayList.forEach(element => {
        convertedString += '<option value="' + element + '" />';
    })
    return convertedString;
}

function createCustomItemButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-custom-items-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}

function revealItemFields(button) {
    let customItemContainer = button.parentNode.parentNode.parentNode;
    customItemContainer.getElementsByClassName('field-container')[0].style.display = 'block';
}

//Templates
function uniqueDropButton(button) {
    hideField(button, '.item-enabled');
    hideField(button, '.item-drop-weight');
    hideField(button, '.item-scalability');
    presetAndHideField(button, '.item-type', 'unique');
    hideField(button, '.item-custom-model-id');
    hideField(button, '.item-permission');
    transitionContent(button, 'template-custom-items-amount');
}

function charmButton(button) {
    hideField(button, '.item-enabled');
    presetField(button, '.item-drop-weight', 1);
    hideField(button, '.item-scalability');
    hideField(button, '.item-type');
    hideField(button, '.item-custom-model-id');
    hideField(button, '.item-permission');
    transitionContent(button, 'template-custom-items-amount');
}

function fetchQuestItem(button) {
    hideField(button, '.item-enabled');
    hideField(button, '.item-drop-weight');
    hideField(button, '.item-scalability');
    hideField(button, '.item-type');
    hideField(button, '.item-custom-model-id');
    revealItemFields(button);
    clearOldContent(button);
}

//Amount

function simpleItemButton(button) {
    revealItemFields(button);
    clearOldContent(button);
}

function fullSetButton(button) {
    revealItemFields(button);
    let boxContents = button.parentNode.parentNode.parentNode.parentNode;
    clearOldContent(button);
    for (let i = 0; i < 4; i++) {
        let divClone = boxContents.cloneNode(true);
        boxContents.after(divClone);
    }
}

