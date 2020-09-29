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


// Menu Elements
var button_menu_journal = document.getElementById("button_menu_journal");
var button_menu_oracle = document.getElementById("button_menu_oracle");
var button_menu_dungeon = document.getElementById("button_menu_dungeon");
var button_menu_about = document.getElementById("button_menu_about");


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

var div_feature_question = document.getElementById("div_feature_question");
var div_feature_portent = document.getElementById("div_feature_portent");
var div_feature_event = document.getElementById("div_feature_event");

var input_oracle_question = document.getElementById("input_oracle_question");
var input_question_likelihood = document.getElementById("input_question_likelihood");


// Shared Elements
var div_active_feature = document.getElementById("div_active_feature");
var div_hidden_features = document.getElementById("div_hidden_features");
var div_active_sidebar = document.getElementById("div_active_sidebar");
var div_hidden_sidebars = document.getElementById("div_hidden_sidebars");

// About Elements
var button_feature_about_app = document.getElementById("button_feature_about_app");

var div_feature_about_app = document.getElementById("div_feature_about_app");


// Sidebars
var div_sidebar_oracle = document.getElementById("div_sidebar_oracle");
var div_sidebar_dungeon = document.getElementById("div_sidebar_dungeon");
var div_sidebar_journal = document.getElementById("div_sidebar_journal");
var div_sidebar_about = document.getElementById("div_sidebar_about")

// Menu Navigation
button_menu_journal.onclick = function () {
    showFeatureSetSidebar(div_sidebar_journal);
};

button_menu_oracle.onclick = function () {
    showFeatureSetSidebar(div_sidebar_oracle);
};

button_menu_dungeon.onclick = function () {
    showFeatureSetSidebar(div_sidebar_dungeon);
};

button_menu_about.onclick = function () {
    showFeatureSetSidebar(div_sidebar_about);
}



// Journal Functions
button_feature_journal_write.onclick = function () {
    showFeatureDiv(div_feature_journal_write);
}

button_journal_append.onclick = function () {
    appendJournalTextToLog();
}

button_feature_journal_read.onclick = function () {
    showFeatureDiv(div_feature_journal_read);
}

button_journal_undo.onclick = function () {
    undoLastJournalEntry();
};

button_journal_entry_erase.onclick = function () {
    eraseJournalEntryTextArea();
}

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
    
    if(lastJournalEntry !== null) {
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
};

button_feature_portent.onclick = function () {
    showFeatureDiv(div_feature_portent);
};

button_feature_event.onclick = function () {
    showFeatureDiv(div_feature_event);
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
    var questionOutput = (question === "") ? "" : `${question}<br />`;
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
    input_oracle_question.value = "";
    input_question_likelihood.value = "50/50";
}



// About Functions
button_feature_about_app.onclick = function () {
    showFeatureDiv(div_feature_about_app);
}



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

