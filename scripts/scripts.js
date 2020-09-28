const question_table = {
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

const question_table_count = Object.keys(question_table).length;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var button_menu_journal = document.getElementById("button_menu_journal");
var button_menu_oracle = document.getElementById("button_menu_oracle");
var button_menu_dungeon = document.getElementById("button_menu_dungeon");
var button_menu_about = document.getElementById("button_menu_about");

var button_feature_question = document.getElementById("button_feature_question");
var button_feature_portent = document.getElementById("button_feature_portent");
var button_feature_event = document.getElementById("button_feature_event");
var div_feature_append_journal = document.getElementById("div_feature_append_journal");

var button_ask_question = document.getElementById("button_ask_question");
var button_feature_journal_append = document.getElementById("button_feature_journal_append");

var div_active_feature = document.getElementById("div_active_feature");
var div_hidden_features = document.getElementById("div_hidden_features");

var div_active_sidebar = document.getElementById("div_active_sidebar");
var div_hidden_sidebars = document.getElementById("div_hidden_sidebars");

var div_sidebar_oracle = document.getElementById("div_sidebar_oracle");
var div_sidebar_dungeon = document.getElementById("div_sidebar_dungeon");
var div_sidebar_journal = document.getElementById("div_sidebar_journal");

var div_feature_question = document.getElementById("div_feature_question");
var feature_portent = document.getElementById("div_feature_portent");
var feature_event = document.getElementById("div_feature_event");

var button_copy = document.getElementById("button_copy_output");
var button_clear = document.getElementById("button_clear_output");
var input_question = document.getElementById("input_question");
var input_question_likelihood = document.getElementById("input_question_likelihood");
var div_output_field = document.getElementById("div_output_field");

var input_journal_textarea = document.getElementById("input_journal_textarea");



button_menu_journal.onclick = function() {
    showFeatureSetSidebar(div_sidebar_journal);
    showFeatureDiv(div_feature_append_journal);
};

button_menu_oracle.onclick = function() {
    showFeatureSetSidebar(div_sidebar_oracle);
};

button_menu_dungeon.onclick = function() {
    showFeatureSetSidebar(div_sidebar_dungeon);
};



button_ask_question.onclick = function () {
    askquestion();
};

input_question.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        askquestion();
    }
});

button_feature_question.onclick = function () {
    showFeatureDiv(div_feature_question);
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

function askquestion() {

    var question = input_question.value;
    var questionResult = getquestionResult();
    setquestionOutput(questionResult, question);
    resetquestionInputs();
    return;
}

function setquestionOutput(questionResult, question) {

    var questionOutput = question;
    questionOutput += (question === "") ? "" : "<br />";
    questionOutput += "Likelihood: " + questionResult.likelihood;
    questionOutput += "<br />Roll: " + questionResult.firstRoll;

    if (questionResult.likelihood !== "50/50") {
        questionOutput += " & " + questionResult.secondRoll;
    }

    questionOutput += "<br />Answer: " + questionResult.answer;

    var result_node = document.createElement('p');
    result_node.innerHTML = questionOutput;
    div_output_field.appendChild(result_node);
    div_output_field.scrollTop = div_output_field.scrollHeight;

}

function getquestionResult() {
    var question_likelihood = input_question_likelihood.options[input_question_likelihood.selectedIndex].text;
    var firstRoll = getRandomInt(1, question_table_count);
    var secondRoll = getRandomInt(1, question_table_count);

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

    var answer = question_table[rollResult];

    return {
        answer: answer,
        firstRoll: firstRoll,
        secondRoll: secondRoll,
        likelihood: question_likelihood
    };
}

function resetquestionInputs() {
    input_question.value = "";
    input_question_likelihood.value = "50/50";
}

function copyOutput() {
    var range = document.createRange();
    range.selectNode(div_output_field);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
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
    journalText =  journalText.replace(/(?:\r\n|\r|\n)/g, '<br>');
    var journalTextHTML = document.createElement("p");
    journalTextHTML.innerHTML = journalText;
    div_output_field.appendChild(journalTextHTML);
    input_journal_textarea.value = "";
    div_output_field.scrollTop = div_output_field.scrollHeight;
}