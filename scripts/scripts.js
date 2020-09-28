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
}

const oracle_table_count = Object.keys(oracle_table).length;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var button_ask_oracle = document.getElementById("button_ask_oracle");
var button_feature_oracle = document.getElementById("button_feature_oracle");
var button_feature_portent = document.getElementById("button_feature_portent");
var button_feature_event = document.getElementById("button_feature_event");

var div_active_feature = document.getElementById("div_active_feature");
var div_hidden_features = document.getElementById("div_hidden_features");

var feature_oracle = document.getElementById("feature_oracle");
var feature_portent = document.getElementById("feature_portent");
var feature_event = document.getElementById("feature_event");

var button_copy = document.getElementById("copy_output");
var button_clear = document.getElementById("clear_output");
var input_question = document.getElementById("input_question");
var input_oracle_likelihood = document.getElementById("input_oracle_likelihood");
var output_field = document.getElementById("output_field");

button_ask_oracle.onclick = function () {
    askOracle();
}

button_feature_oracle.onclick = function() {
    showFeatureDiv(feature_oracle);
}

button_feature_portent.onclick = function() {
    showFeatureDiv(feature_portent);
}

button_feature_event.onclick = function() {
    showFeatureDiv(feature_event);
}

button_copy.onclick = function() {
    copyOutput();
}

button_clear.onclick = function() {
    clearOutput();
}

function askOracle() {

    var question = input_question.value;
    if (question === "") {
        return;
    }
    var oracleResult = getOracleResult();
    setOracleOutput(oracleResult, question);
    resetOracleInputs();
    input_question.focus();
    return;
}

function setOracleOutput(oracleResult, question) {

    var oracleOutput = question;
    oracleOutput += "<br />Likelihood: " + oracleResult.likelihood;
    oracleOutput += "<br />Roll: " + oracleResult.firstRoll;

    if(oracleResult.likelihood !== "Possible") {
        oracleOutput += " & " + oracleResult.secondRoll;
    }

    oracleOutput += "<br />Answer: " + oracleResult.answer;
    
    var result_node = document.createElement('p');
    result_node.innerHTML = oracleOutput;
    output_field.appendChild(result_node);
    output_field.scrollTop = output_field.scrollHeight;

}

function getOracleResult() {
    var oracle_likelihood = input_oracle_likelihood.options[input_oracle_likelihood.selectedIndex].text;    
    var firstRoll = getRandomInt(1, oracle_table_count);
    var secondRoll = getRandomInt(1, oracle_table_count);
    
    var rollResult;

    // Determine result
    switch(oracle_likelihood) {
        case "Likely" :
            rollResult = (firstRoll > secondRoll) ? firstRoll : secondRoll;
            break;
        case "Unlikely" :
            rollResult = (firstRoll > secondRoll) ? secondRoll : firstRoll;
            break;
        default:
            rollResult = firstRoll;
            break;
    }

    var answer = oracle_table[rollResult]

    return {
        answer: answer,
        firstRoll: firstRoll,
        secondRoll: secondRoll,
        likelihood: oracle_likelihood
    }
}

function resetOracleInputs() {
    input_question.value = "";
    input_oracle_likelihood.value = "possible";
}

function copyOutput() {
    var range = document.createRange();
                    range.selectNode(output_field);
                    window.getSelection().removeAllRanges(); // clear current selection
                    window.getSelection().addRange(range); // to select text
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();// to deselect
}

function clearOutput() {
    output_field.innerHTML = "";
}

function showFeatureDiv(divName) {
    
    // move active feature to div_hidden_features
    div_hidden_features.appendChild(div_active_feature.firstElementChild);

    // move selected feature to div_active_feature
    div_active_feature.appendChild(divName);
}