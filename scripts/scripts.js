const oracle_table = {
    1: "Extreme No",
    2: "No",
    3: "No",
    4: "No",
    5: "No, but...",
    6: "Yes, but...",
    7: "Yes",
    8: "Yes",
    9: "Yes",
    10: "Extreme Yes"
};

const oracle_table_count = Object.keys(oracle_table).length;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var button_menu_journal = document.getElementById("button_menu_journal");
var button_menu_omen = document.getElementById("button_menu_omen");
var button_menu_dungeon = document.getElementById("button_menu_dungeon");
var button_menu_about = document.getElementById("button_menu_about");

var button_feature_oracle = document.getElementById("button_feature_oracle");
var button_feature_portent = document.getElementById("button_feature_portent");
var button_feature_event = document.getElementById("button_feature_event");
var div_feature_append_journal = document.getElementById("div_feature_append_journal");

var button_ask_oracle = document.getElementById("button_ask_oracle");
var button_feature_journal_append = document.getElementById("button_feature_journal_append");

var div_active_feature = document.getElementById("div_active_feature");
var div_hidden_features = document.getElementById("div_hidden_features");

var div_active_sidebar = document.getElementById("div_active_sidebar");
var div_hidden_sidebars = document.getElementById("div_hidden_sidebars");

var div_sidebar_omen = document.getElementById("div_sidebar_omen");
var div_sidebar_dungeon = document.getElementById("div_sidebar_dungeon");
var div_sidebar_journal = document.getElementById("div_sidebar_journal");

var div_feature_oracle = document.getElementById("div_feature_oracle");
var feature_portent = document.getElementById("div_feature_portent");
var feature_event = document.getElementById("div_feature_event");

var button_copy = document.getElementById("button_copy_output");
var button_clear = document.getElementById("button_clear_output");
var input_oracle_question = document.getElementById("input_oracle_question");
var input_oracle_likelihood = document.getElementById("input_oracle_likelihood");
var div_output_field = document.getElementById("div_output_field");

var input_journal_textarea = document.getElementById("input_journal_textarea");



button_menu_journal.onclick = function() {
    showFeatureSetSidebar(div_sidebar_journal);
    showFeatureDiv(div_feature_append_journal);
};

button_menu_omen.onclick = function() {
    showFeatureSetSidebar(div_sidebar_omen);
};

button_menu_dungeon.onclick = function() {
    showFeatureSetSidebar(div_sidebar_dungeon);
};



button_ask_oracle.onclick = function () {
    askOracle();
};

input_oracle_question.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        askOracle();
    }
});

button_feature_oracle.onclick = function () {
    showFeatureDiv(div_feature_oracle);
};

button_feature_portent.onclick = function () {
    showFeatureDiv(feature_portent);
};

button_feature_event.onclick = function () {
    showFeatureDiv(feature_event);
};

button_feature_journal_append.onclick = function() {
    appendJournalTextToLog();
}

button_copy.onclick = function () {
    copyOutput();
};

button_clear.onclick = function () {
    clearOutput();
};

function askOracle() {

    var question = input_oracle_question.value;
    /*if (question === "") {
        return;
    }*/
    var oracleResult = getOracleResult();
    setOracleOutput(oracleResult, question);
    resetOracleInputs();
    input_oracle_question.focus();
    return;
}

function setOracleOutput(oracleResult, question) {

    var oracleOutput = question;
    oracleOutput += "<br />Likelihood: " + oracleResult.likelihood;
    oracleOutput += "<br />Roll: " + oracleResult.firstRoll;

    if (oracleResult.likelihood !== "Possible") {
        oracleOutput += " & " + oracleResult.secondRoll;
    }

    oracleOutput += "<br />Answer: " + oracleResult.answer;

    var result_node = document.createElement('p');
    result_node.innerHTML = oracleOutput;
    div_output_field.appendChild(result_node);
    div_output_field.scrollTop = div_output_field.scrollHeight;

}

function getOracleResult() {
    var oracle_likelihood = input_oracle_likelihood.options[input_oracle_likelihood.selectedIndex].text;
    var firstRoll = getRandomInt(1, oracle_table_count);
    var secondRoll = getRandomInt(1, oracle_table_count);

    var rollResult;

    // Determine result
    switch (oracle_likelihood) {
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

    var answer = oracle_table[rollResult];

    return {
        answer: answer,
        firstRoll: firstRoll,
        secondRoll: secondRoll,
        likelihood: oracle_likelihood
    };
}

function resetOracleInputs() {
    input_oracle_question.value = "";
    input_oracle_likelihood.value = "possible";
}

function copyOutput() {
    var range = document.createRange();
    range.selectNode(div_output_field);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

function clearOutput() {
    div_output_field.innerHTML = "";
}

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
}

function appendJournalTextToLog() {
    var journalText = input_journal_textarea.value;
    console.log(journalText);

    div_output_field.appendChild(journalText);
}