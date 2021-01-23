// Journal Event Handlers

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


// Journal Functions

function appendJournalTextToLog() {
    var journalText = input_journal_entry_textarea.value;
    journalText = journalText.replace(/(?:\r\n|\r|\n)/g, '<br>');
    input_journal_entry_textarea.value = "";
    writeToJournal(journalText);
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

function writeToJournal(journalEntry) {

    if(journalEntry === "") {
        return;
    }

    if(getEntryStyle() == "clear") {
        clearJournalLog();
    }
    
    var result_node = document.createElement('p');
    result_node.innerHTML = journalEntry;

    if(getEntryStyle() !== "clear") {
        var divider = document.createElement('hr');
        div_journal_log.appendChild(divider);
    }

    div_journal_log.appendChild(result_node);
    div_journal_log.scrollTop = div_journal_log.scrollHeight;
}