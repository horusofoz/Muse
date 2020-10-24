// About Event Handlers

button_feature_about_settings.onclick = function () {
    showFeatureDiv(div_feature_about_settings);
    applyActiveStyleToFeatureButton(this);
};

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

button_feature_about_encounter.onclick = function () {
    showFeatureDiv(button_feature_about_encounter);
    applyActiveStyleToFeatureButton(this);
};


// About Functions
function getPartyTier() {
    return input_party_tier.options[input_party_tier.selectedIndex].value;
}