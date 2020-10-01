// Menu Elements
var button_menu_journal = document.getElementById("button_menu_journal");
var button_menu_oracle = document.getElementById("button_menu_oracle");
var button_menu_dungeon = document.getElementById("button_menu_dungeon");
var button_menu_wilderness = document.getElementById("button_menu_wilderness");
var button_menu_combat = document.getElementById("button_menu_combat");
var button_menu_about = document.getElementById("button_menu_about");


// Sidebars
var div_sidebar_journal = document.getElementById("div_sidebar_journal");
var div_sidebar_oracle = document.getElementById("div_sidebar_oracle");
var div_sidebar_dungeon = document.getElementById("div_sidebar_dungeon");
var div_sidebar_wilderness = document.getElementById("div_sidebar_wilderness");
var div_sidebar_combat = document.getElementById("div_sidebar_combat");
var div_sidebar_about = document.getElementById("div_sidebar_about");


// Shared Elements
var div_active_feature = document.getElementById("div_active_feature");
var div_hidden_features = document.getElementById("div_hidden_features");
var div_active_sidebar = document.getElementById("div_active_sidebar");
var div_hidden_sidebars = document.getElementById("div_hidden_sidebars");


// Journal Elements
var button_journal_append = document.getElementById("button_journal_append");
var button_feature_journal_write = document.getElementById("button_feature_journal_write");
var button_journal_entry_erase = document.getElementById("button_journal_entry_erase");
var button_feature_journal_read = document.getElementById("button_feature_journal_read");
var button_journal_undo = document.getElementById("button_journal_undo");
var button_journal_copy = document.getElementById("button_journal_copy");
var button_journal_clear = document.getElementById("button_journal_clear");

var div_feature_journal_write = document.getElementById("div_feature_journal_write");
var div_feature_journal_read = document.getElementById("div_feature_journal_read");
var div_journal_log = document.getElementById("div_journal_log");

var input_journal_entry_textarea = document.getElementById("input_journal_entry_textarea");


// Oracle Elements
var button_feature_question = document.getElementById("button_feature_question");
var button_feature_portent = document.getElementById("button_feature_portent");
var button_feature_event = document.getElementById("button_feature_event");
var button_ask_question = document.getElementById("button_ask_question");
var button_receive_portent = document.getElementById("button_receive_portent");
var button_initiate_event = document.getElementById("button_initiate_event");

var div_feature_question = document.getElementById("div_feature_question");
var div_feature_portent = document.getElementById("div_feature_portent");
var div_feature_event = document.getElementById("div_feature_event");

var input_oracle_question = document.getElementById("input_oracle_question");
var input_question_likelihood = document.getElementById("input_question_likelihood");
var input_portent_number = document.getElementById("input_portent_number");


// Dungeon Elements
var button_feature_dungeon_design = document.getElementById("button_feature_dungeon_design");
var button_feature_dungeon_room = document.getElementById("button_feature_dungeon_room");
var button_feature_dungeon_passage = document.getElementById("button_feature_dungeon_passage");
var button_feature_dungeon_door = document.getElementById("button_feature_dungeon_door");
var button_generate_dungeon = document.getElementById("button_generate_dungeon");

var div_feature_dungeon_design = document.getElementById("div_feature_dungeon_design");
var div_feature_dungeon_room = document.getElementById("div_feature_dungeon_room");
var div_feature_dungeon_passage = document.getElementById("div_feature_dungeon_passage");
var div_feature_dungeon_door = document.getElementById("div_feature_dungeon_door");



// Wilderness Elements
var button_feature_wilderness_terrain  = document.getElementById("button_feature_wilderness_terrain");
var button_feature_wilderness_feature  = document.getElementById("button_feature_wilderness_feature");
var button_feature_wilderness_encounter  = document.getElementById("button_feature_wilderness_encounter");
var button_feature_wilderness_complication  = document.getElementById("button_feature_wilderness_complication");

var div_feature_wilderness_terrain = document.getElementById("div_feature_wilderness_terrain");
var div_feature_wilderness_feature = document.getElementById("div_feature_wilderness_feature");
var div_feature_wilderness_encounter = document.getElementById("div_feature_wilderness_encounter");
var div_feature_wilderness_complication = document.getElementById("div_feature_wilderness_complication");


// Combat Elements
var button_feature_combat_difficulty  = document.getElementById("button_feature_combat_difficulty");
var button_feature_combat_intention  = document.getElementById("button_feature_combat_intention");
var button_feature_combat_reaction  = document.getElementById("button_feature_combat_reaction");
var button_feature_combat_complication  = document.getElementById("button_feature_combat_complication");

var div_feature_combat_difficulty = document.getElementById("div_feature_combat_difficulty");
var div_feature_combat_feature = document.getElementById("div_feature_combat_feature");
var div_feature_combat_reaction = document.getElementById("div_feature_combat_reaction");
var div_feature_combat_complication = document.getElementById("div_feature_combat_complication");



// About Elements
var button_feature_about_general = document.getElementById("button_feature_about_general");
var button_feature_about_journal = document.getElementById("button_feature_about_journal");
var button_feature_about_oracle = document.getElementById("button_feature_about_oracle");
var button_feature_about_dungeon = document.getElementById("button_feature_about_dungeon");
var button_feature_about_wilderness = document.getElementById("button_feature_about_wilderness");
var button_feature_about_combat = document.getElementById("button_feature_about_combat");

var div_feature_about_general = document.getElementById("div_feature_about_general");
var div_feature_about_journal = document.getElementById("div_feature_about_journal");
var div_feature_about_oracle = document.getElementById("div_feature_about_oracle");
var div_feature_about_dungeon = document.getElementById("div_feature_about_dungeon");
var div_feature_about_wilderness = document.getElementById("div_feature_about_wilderness");
var div_feature_about_combat = document.getElementById("div_feature_about_combat");



// Menu Navigation
button_menu_journal.onclick = function () {
    showFeatureSetSidebar(div_sidebar_journal);
    applyActiveStyleToMenuButton(this);
};

button_menu_oracle.onclick = function () {
    showFeatureSetSidebar(div_sidebar_oracle);
    applyActiveStyleToMenuButton(this);
};

button_menu_dungeon.onclick = function () {
    showFeatureSetSidebar(div_sidebar_dungeon);
    applyActiveStyleToMenuButton(this);
};

button_menu_wilderness.onclick = function () {
    showFeatureSetSidebar(div_sidebar_wilderness);
    applyActiveStyleToMenuButton(this);
};

button_menu_combat.onclick = function () {
    showFeatureSetSidebar(div_sidebar_combat);
    applyActiveStyleToMenuButton(this);
};

button_menu_about.onclick = function () {
    showFeatureSetSidebar(div_sidebar_about);
    applyActiveStyleToMenuButton(this);
};



// Journal Functions
button_feature_journal_write.onclick = function () {
    showFeatureDiv(div_feature_journal_write);
    applyActiveStyleToFeatureButton(this);
};

button_journal_append.onclick = function () {
    appendJournalTextToLog();
};

button_feature_journal_read.onclick = function () {
    showFeatureDiv(div_feature_journal_read);
    applyActiveStyleToFeatureButton(this);
};

button_journal_undo.onclick = function () {
    undoLastJournalEntry();
};

button_journal_entry_erase.onclick = function () {
    eraseJournalEntryTextArea();
};

button_journal_copy.onclick = function () {
    copyJournalLog();
};

button_journal_clear.onclick = function () {
    clearJournalLog();
};

function appendJournalTextToLog() {
    var journalText = input_journal_entry_textarea.value;
    journalText = journalText.replace(/(?:\r\n|\r|\n)/g, '<br>');
    var journalTextHTML = document.createElement("p");
    journalTextHTML.innerHTML = journalText;
    div_journal_log.appendChild(journalTextHTML);
    input_journal_entry_textarea.value = "";
    div_journal_log.scrollTop = div_journal_log.scrollHeight;
}

function eraseJournalEntryTextArea() {
    input_journal_entry_textarea.value = "";
}

function copyJournalLog() {
    var range = document.createRange();
    range.selectNode(div_journal_log);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

function clearJournalLog() {
    div_journal_log.innerHTML = "";
}

function undoLastJournalEntry() {
    var lastJournalEntry = div_journal_log.lastChild;

    if (lastJournalEntry !== null) {
        lastJournalEntry.remove();
    }
}



// Oracle Functions
button_ask_question.onclick = function () {
    askquestion();
};

input_oracle_question.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        askquestion();
    }
});

button_feature_question.onclick = function () {
    showFeatureDiv(div_feature_question);
    applyActiveStyleToFeatureButton(this);
};

button_feature_portent.onclick = function () {
    showFeatureDiv(div_feature_portent);
    applyActiveStyleToFeatureButton(this);
};

button_feature_event.onclick = function () {
    showFeatureDiv(div_feature_event);
    applyActiveStyleToFeatureButton(this);
};

button_receive_portent.onclick = function () {
    receivePortent();
};

button_initiate_event.onclick = function () {
    var randomEvent = getRandomEvent();
    setRandomEvent(randomEvent);
};

function askquestion() {

    var question = input_oracle_question.value;
    var questionResult = getquestionResult();
    setQuestionOutput(questionResult, question);
    resetquestionInputs();
    return;
}

function setQuestionOutput(questionResult, question) {

    //var questionOutput = question;
    var questionOutput = (question === "") ? "" : question + "<br />";
    questionOutput += "Likelihood: " + questionResult.likelihood;
    questionOutput += "<br />Roll: " + questionResult.firstRoll;

    if (questionResult.likelihood !== "50/50") {
        questionOutput += " & " + questionResult.secondRoll;
    }

    questionOutput += "<br />Answer: " + questionResult.answer;

    var result_node = document.createElement('p');
    result_node.innerHTML = questionOutput;
    div_journal_log.appendChild(result_node);
    div_journal_log.scrollTop = div_journal_log.scrollHeight;

}

function getquestionResult() {
    var question_likelihood = input_question_likelihood.options[input_question_likelihood.selectedIndex].text;
    var firstRoll = getRandomInt(1, table_question_count);
    var secondRoll = getRandomInt(1, table_question_count);

    var rollResult;

    // Determine result
    switch (question_likelihood) {
        case "Likely":
            rollResult = (firstRoll > secondRoll) ? firstRoll : secondRoll;
            break;
        case "Unlikely":
            rollResult = (firstRoll > secondRoll) ? secondRoll : firstRoll;
            break;
        default:
            rollResult = firstRoll;
            break;
    }

    var answer = table_question[rollResult].answer;

    return {
        answer: answer,
        firstRoll: firstRoll,
        secondRoll: secondRoll,
        likelihood: question_likelihood
    };
}

function resetquestionInputs() {
    input_oracle_question.value = "";
    input_question_likelihood.value = "50/50";
}

function receivePortent() {
    var portentResult = getPortentResult();
    setPortentResult(portentResult);
}

function getPortentResult() {
    var portentResult = [];
    var portentTableRolls = input_portent_number.options[input_portent_number.selectedIndex].text;

    portentTableRolls = parseInt(portentTableRolls);

    for (var i = 1; i <= portentTableRolls; i++) {

        var verb = table_verb[getRandomInt(1, table_verb_count)].verb;
        portentResult.push(verb);
    }
    return portentResult;
}

function setPortentResult(portentResult) {
    var portentOutput = "Portent: ";
    for (var i = 0; i < portentResult.length; i++) {
        portentOutput += portentResult[i];
        portentOutput += (i !== portentResult.length - 1) ? ", " : "";
    }
    
    var result_node = document.createElement('p');
    result_node.innerHTML = portentOutput;
    div_journal_log.appendChild(result_node);
    div_journal_log.scrollTop = div_journal_log.scrollHeight;
}

function getRandomEvent() {
    
    var randomEvent = {
        focus : table_event_focus[getRandomInt(1,table_event_focus_count)].focus,
        subject : table_event_subject[getRandomInt(1,table_event_subject_count)].subject,
        action : table_verb[getRandomInt(1, table_verb_count)].verb
    };
    
    return randomEvent;
}

function setRandomEvent(randomEvent) {
    var eventResult = "Random Event";
    eventResult += "<br />Focus: " + randomEvent.focus;
    eventResult += "<br />Subject: " + randomEvent.subject;
    eventResult += "<br />Action: " + randomEvent.action;

    writeToJournal(eventResult);
}



// Dungeon Features
button_feature_dungeon_design.onclick = function() {
    showFeatureDiv(div_feature_dungeon_design);
    applyActiveStyleToFeatureButton(this);
}

button_feature_dungeon_room.onclick = function() {
    showFeatureDiv(div_feature_dungeon_room);
    applyActiveStyleToFeatureButton(this);
}

button_feature_dungeon_passage.onclick = function() {
    showFeatureDiv(div_feature_dungeon_passage);
    applyActiveStyleToFeatureButton(this);
}

button_feature_dungeon_door.onclick = function() {
    showFeatureDiv(div_feature_dungeon_door);
    applyActiveStyleToFeatureButton(this);
}

button_generate_dungeon.onclick = function() {
    var dungeonDesign = getDungeonDesign();
    setDungeonDesign(dungeonDesign);
}


function getDungeonDesign() {
    
    var dungeonDesign = {};
    dungeonDesign.location = table_dungeon_locations[getRandomInt(1, table_dungeon_locations_count)].location;
    dungeonDesign.creator = table_dungeon_creator[getRandomInt(1, table_dungeon_creator_count)].creator;
    dungeonDesign.purpose = table_dungeon_purpose[getRandomInt(1, table_dungeon_purpose_count)].purpose;
    dungeonDesign.history = table_dungeon_history[getRandomInt(1, table_dungeon_history_count)].history;
    dungeonDesign.size = table_dungeon_size[getRandomInt(1, table_dungeon_size_count)];
    dungeonDesign.dominantCreatureType = table_creature_type[getRandomInt(1, table_creature_type_count)].creature_type;
    dungeonDesign.start_area = table_dungeon_start_area[getRandomInt(1, table_dungeon_start_area_count)];
    

    var exits = ""; // Think below should be refactored into a standalone funciotn then can be re-used for dungeon rooms other than the start area
    (dungeonDesign.start_area.exit_left !== "FALSE") ? exits += dungeonDesign.start_area.exit_left + " left, " : "";
    (dungeonDesign.start_area.exit_opposite !== "FALSE") ? exits += dungeonDesign.start_area.exit_opposite + " opposite, " : "";
    (dungeonDesign.start_area.exit_right !== "FALSE") ? exits += dungeonDesign.start_area.exit_right + " right, " : "";
    exits = (exits.length > 0) ? exits.substring(0, exits.length - 2) : "";
    exits = exits.charAt(0).toUpperCase() + exits.slice(1);
    dungeonDesign.start_area.exits = exits;
    return dungeonDesign;
}


function setDungeonDesign(dungeonObject) {
    var dungeonDesign = "Dungeon Design";
    dungeonDesign += "<br />Location: " + dungeonObject.location;
    dungeonDesign += "<br />Created By: " + dungeonObject.creator;
    dungeonDesign += "<br />Purpose: " + dungeonObject.purpose;
    dungeonDesign += "<br />History: " + dungeonObject.history;
    dungeonDesign += "<br />Size: " + dungeonObject.size.size + " (" + dungeonObject.size.rooms + ")";
    dungeonDesign += "<br />Dominant Creatue Type: " + dungeonObject.dominantCreatureType;
    dungeonDesign += "<br />Starting Area: " + dungeonObject.start_area.size + " " + dungeonObject.start_area.configuration;

    /*if(dungeonObject.start_area.exits.length > 0) {
        dungeonDesign += ", " + dungeonObject.start_area.exits;
    }*/

    if(dungeonObject.start_area.exits.length > 0) {
        
        dungeonDesign += "<br />Starting Area Exits: " + dungeonObject.start_area.exits
    }

    writeToJournal(dungeonDesign);
}




// Wilderness Functions
button_feature_wilderness_terrain.onclick = function() {
    showFeatureDiv(div_feature_wilderness_terrain);
    applyActiveStyleToFeatureButton(this);
}

button_feature_wilderness_feature.onclick = function() {
    showFeatureDiv(div_feature_wilderness_feature);
    applyActiveStyleToFeatureButton(this);
}

button_feature_wilderness_encounter.onclick = function() {
    showFeatureDiv(div_feature_wilderness_encounter);
    applyActiveStyleToFeatureButton(this);
}

button_feature_wilderness_complication.onclick = function() {
    showFeatureDiv(div_feature_wilderness_complication);
    applyActiveStyleToFeatureButton(this);
}



// Combat Functions
button_feature_combat_difficulty.onclick = function() {
    showFeatureDiv(div_feature_combat_difficulty);
    applyActiveStyleToFeatureButton(this);
}

button_feature_combat_intention.onclick = function() {
    showFeatureDiv(div_feature_combat_intention);
    applyActiveStyleToFeatureButton(this);
}

button_feature_combat_reaction.onclick = function() {
    showFeatureDiv(div_feature_combat_reaction);
    applyActiveStyleToFeatureButton(this);
}

button_feature_combat_complication.onclick = function() {
    showFeatureDiv(div_feature_combat_complication);
    applyActiveStyleToFeatureButton(this);
}



// About Functions
button_feature_about_general.onclick = function () {
    showFeatureDiv(div_feature_about_general);
    applyActiveStyleToFeatureButton(this);
};

button_feature_about_journal.onclick = function () {
    showFeatureDiv(div_feature_about_journal);
    applyActiveStyleToFeatureButton(this);
};

button_feature_about_oracle.onclick = function () {
    showFeatureDiv(div_feature_about_oracle);
    applyActiveStyleToFeatureButton(this);
};

button_feature_about_dungeon.onclick = function () {
    showFeatureDiv(div_feature_about_dungeon);
    applyActiveStyleToFeatureButton(this);
};

button_feature_about_wilderness.onclick = function () {
    showFeatureDiv(div_feature_about_wilderness);
    applyActiveStyleToFeatureButton(this);
};

button_feature_about_combat.onclick = function () {
    showFeatureDiv(div_feature_about_combat);
    applyActiveStyleToFeatureButton(this);
};



// Shared Functions
function showFeatureDiv(divName) {

    // move active feature to div_hidden_features
    div_hidden_features.appendChild(div_active_feature.firstElementChild);

    // move selected feature to div_active_feature
    div_active_feature.appendChild(divName);
}

function showFeatureSetSidebar(divName) {

    // move active feature to div_hidden_features
    div_hidden_sidebars.appendChild(div_active_sidebar.firstElementChild);

    // move selected feature to div_active_feature
    div_active_sidebar.appendChild(divName);

    // click first sidebar button of active sidebar
    div_active_sidebar.firstElementChild.firstElementChild.click();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function writeToJournal(journalEntry) {
    var result_node = document.createElement('p');
    result_node.innerHTML = journalEntry;
    div_journal_log.appendChild(result_node);
    div_journal_log.scrollTop = div_journal_log.scrollHeight;
}

function applyActiveStyleToMenuButton(activeMenuButton) {

    var menuButtons = activeMenuButton.parentElement.children;

    Object.keys(menuButtons).forEach(button => {
        menuButtons[button].classList.remove("active_button");
    });

    activeMenuButton.classList.add("active_button");
}

function applyActiveStyleToFeatureButton(activeFeatureButton) {

    var featureButtons = activeFeatureButton.parentElement.children;

    Object.keys(featureButtons).forEach(button => {
        featureButtons[button].classList.remove("active_button");
    });

    activeFeatureButton.classList.add("active_button");
}