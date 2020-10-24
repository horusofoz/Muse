// Encounter Event Handlers

button_feature_encounter_combat.onclick = function () {
    showFeatureDiv(div_feature_encounter_combat);
    applyActiveStyleToFeatureButton(this);
}


// Encounter Functions


// Encounter Tables

const table_creature_type = {
    "1": {
        "creature_type": "Aberration"
    },
    "2": {
        "creature_type": "Beast"
    },
    "3": {
        "creature_type": "Celestial"
    },
    "4": {
        "creature_type": "Construct"
    },
    "5": {
        "creature_type": "Dragon"
    },
    "6": {
        "creature_type": "Elemental"
    },
    "7": {
        "creature_type": "Fey"
    },
    "8": {
        "creature_type": "Fiend"
    },
    "9": {
        "creature_type": "Giant"
    },
    "10": {
        "creature_type": "Humanoid"
    },
    "11": {
        "creature_type": "Monstrosity"
    },
    "12": {
        "creature_type": "Ooze"
    },
    "13": {
        "creature_type": "Plant"
    },
    "14": {
        "creature_type": "Undead"
    }
};

const table_creature_type_count = Object.keys(table_creature_type).length;
