// Menu Elements
var button_menu_journal = document.getElementById("button_menu_journal");
var button_menu_oracle = document.getElementById("button_menu_oracle");
var button_menu_dungeon = document.getElementById("button_menu_dungeon");
var button_menu_wilderness = document.getElementById("button_menu_wilderness");
var button_menu_encounter = document.getElementById("button_menu_encounter");
var button_menu_about = document.getElementById("button_menu_about");


// Sidebars
var div_sidebar_journal = document.getElementById("div_sidebar_journal");
var div_sidebar_oracle = document.getElementById("div_sidebar_oracle");
var div_sidebar_dungeon = document.getElementById("div_sidebar_dungeon");
var div_sidebar_wilderness = document.getElementById("div_sidebar_wilderness");
var div_sidebar_encounter = document.getElementById("div_sidebar_encounter");
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

var button_generate_question_answer = document.getElementById("button_generate_question_answer");
var button_generate_portent = document.getElementById("button_generate_portent");
var button_generate_event = document.getElementById("button_generate_event");

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
var button_feature_dungeon_stair = document.getElementById("button_feature_dungeon_stair");
var button_feature_dungeon_beyond = document.getElementById("button_feature_dungeon_beyond");

var div_feature_dungeon_design = document.getElementById("div_feature_dungeon_design");
var div_feature_dungeon_room = document.getElementById("div_feature_dungeon_room");
var div_feature_dungeon_passage = document.getElementById("div_feature_dungeon_passage");
var div_feature_dungeon_door = document.getElementById("div_feature_dungeon_door");
var div_feature_dungeon_stair = document.getElementById("div_feature_dungeon_stair");
var div_feature_dungeon_beyond = document.getElementById("div_feature_dungeon_beyond");

var button_generate_dungeon = document.getElementById("button_generate_dungeon");
var button_generate_room = document.getElementById("button_generate_room");
var button_generate_door = document.getElementById("button_generate_door");
var button_generate_passage = document.getElementById("button_generate_passage");
var button_generate_stair = document.getElementById("button_generate_stair");
var button_generate_beyond = document.getElementById("button_generate_beyond");

var input_dungeon_type_for_room_purpose = document.getElementById("input_dungeon_type_for_room_purpose");
var input_dungeon_passage_width = document.getElementById("input_dungeon_passage_width");


// Wilderness Elements
var button_feature_wilderness_travel = document.getElementById("button_feature_wilderness_travel");

var button_generate_travel = document.getElementById("button_generate_travel");

var div_feature_wilderness_travel = document.getElementById("div_feature_wilderness_travel");

var input_wilderness_travel_terrain = document.getElementById("input_wilderness_travel_terrain");

// Encounter Elements
var button_feature_encounter_combat = document.getElementById("button_feature_encounter_combat");
var button_feature_encounter_trap = document.getElementById("button_feature_encounter_trap");
var button_feature_encounter_settlement = document.getElementById("button_feature_encounter_settlement");

var div_feature_encounter_combat = document.getElementById("div_feature_encounter_combat");
var div_feature_encounter_trap = document.getElementById("div_feature_encounter_trap");
var div_feature_encounter_settlement = document.getElementById("div_feature_encounter_settlement");

var button_generate_combat = document.getElementById("button_generate_combat");
var button_generate_settlement = document.getElementById("button_generate_settlement");
var button_generate_trap = document.getElementById("button_generate_trap");

var input_encounter_settlement_type = document.getElementById("input_encounter_settlement_type");

// About Elements
var button_feature_about_settings = document.getElementById("button_feature_about_settings");
var button_feature_about_general = document.getElementById("button_feature_about_general");
var button_feature_about_journal = document.getElementById("button_feature_about_journal");
var button_feature_about_oracle = document.getElementById("button_feature_about_oracle");
var button_feature_about_dungeon = document.getElementById("button_feature_about_dungeon");
var button_feature_about_wilderness = document.getElementById("button_feature_about_wilderness");
var button_feature_about_combat = document.getElementById("button_feature_about_combat");

var div_feature_about_settings = document.getElementById("div_feature_about_settings");
var div_feature_about_general = document.getElementById("div_feature_about_general");
var div_feature_about_journal = document.getElementById("div_feature_about_journal");
var div_feature_about_oracle = document.getElementById("div_feature_about_oracle");
var div_feature_about_dungeon = document.getElementById("div_feature_about_dungeon");
var div_feature_about_wilderness = document.getElementById("div_feature_about_wilderness");
var div_feature_about_combat = document.getElementById("div_feature_about_combat");

var input_party_tier = document.getElementById("input_party_tier");


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

button_menu_encounter.onclick = function () {
    showFeatureSetSidebar(div_sidebar_encounter);
    applyActiveStyleToMenuButton(this);
};

button_menu_about.onclick = function () {
    showFeatureSetSidebar(div_sidebar_about);
    applyActiveStyleToMenuButton(this);
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

function capitalize(inputString) {
    if (typeof inputString !== 'string') {
        return "";
    }
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function rollDiceForumla(diceCount, diceType, modifier) {
    var result = 0;
    for (var i = 0; i <= diceCount; i++) {
        result += getRandomInt(1, diceType);
    }
    result += modifier;
    return result;
}

function rollPercentileTrueFalse(chance) {
    var roll = getRandomInt(1, 100);
    roll = (roll < 1) ? 1 : roll;
    roll = (roll > 100) ? 100 : roll;
    return (roll <= chance);
}

function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1;
}