//Utility
function createCustomEventsButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-custom-events-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}