//Utility
function createArenasButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-arenas-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}