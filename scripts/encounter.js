// Encounter Event Handlers

button_feature_encounter_combat.onclick = function () {
    showFeatureDiv(div_feature_encounter_combat);
    applyActiveStyleToFeatureButton(this);
}

button_feature_encounter_trap.onclick = function () {
    showFeatureDiv(div_feature_encounter_trap);
    applyActiveStyleToFeatureButton(this);
}

button_feature_encounter_settlement.onclick = function () {
    showFeatureDiv(div_feature_encounter_settlement);
    applyActiveStyleToFeatureButton(this);
}

button_generate_combat.onclick = function () {
    writeToJournal(generateCombat());
}

button_generate_trap.onclick = function () {
    writeToJournal(generateTrap());
}

button_generate_settlement.onclick = function () {
    writeToJournal(generateSettlement());
}

// Encounter Functions

function getDifficultyClass() {
    var dcTemplate = table_encounter_difficulty_class[getPartyTier()];
    return dcTemplate.dc_base + getRandomInt(0, dcTemplate.dc_modifier);
}

function generateCombat() {
    var combat = getCombat();
    return setCombat(combat);
}

function getCombat() {
    return table_encounter_combat[getRandomInt(1, table_encounter_combat_count)].difficulty;
}

function setCombat(encounterCombat) {
    var encounterString = encounterCombat + " combat encounter";
    return encounterString;
}

function generateTrap() {
    var trap = getTrap();
    return setTrap(trap);
}

function getTrap(location = "room") {
    var trap = {};

    trap.type = getTrapType();
    trap.trigger = getTrapTrigger();

    var template = table_trap_type_details[trap.type];
    var trapSeverity = table_trap_severity[getRandomInt(1, table_trap_severity_count)].severity;

    trap.noticeDC = getDifficultyClass();
    trap.disarmDC = getDifficultyClass();

    if (template.is_evade_save_required === "TRUE") {
        trap.evadeSaveDC = getDifficultyClass();
        trap.evadeSaveType = template.evade_save_type;
    }

    if (template.is_damage_applied === "TRUE") {
        trap.primaryDamage = table_trap_damage[getPartyTier()][trapSeverity];
        trap.primaryDamageType = template.primary_damage_type;
    }

    if (template.is_secondary_save_required === "TRUE") {
        trap.secondarySaveDC = getDifficultyClass();
        trap.secondarySaveType = template.secondary_save_type;
    }

    if (template.is_secondary_damage === "TRUE") {
        trap.secondaryDamage = table_trap_damage[getPartyTier()][trapSeverity];
        trap.secondaryDamageType = template.secondary_damage_type;
    }

    if (template.is_condition_applied === "TRUE") {
        trap.conditionApplied = template.condition_applied;
    }

    if (template.notes !== "") {
        trap.notes = template.notes;
    }

    return trap;
}

function getTrapType(location) {
    var trapType = "";

    switch (location) {
        case "door":
            trapType = table_trap_location_door[getRandomInt(1, table_trap_location_door_count)].type;
            break;
        case "passage":
            trapType = table_trap_location_passage[getRandomInt(1, table_trap_location_passage_count)].type;
            break;
        case "room":
            trapType = table_trap_location_room[getRandomInt(1, table_trap_location_room_count)].type;
            break;
        case "stair":
            trapType = table_trap_location_stair[getRandomInt(1, table_trap_location_stair_count)].type;
            break;
        case "wilderness":
            trapType = table_trap_location_wilderness[getRandomInt(1, table_trap_location_wilderness_count)].type;
            break;
        default:
            trapType = table_trap_location_room[getRandomInt(1, table_trap_location_room_count)].type;
            break;
    }
    return trapType;
}

function getTrapTrigger() {
    return table_trap_trigger[getRandomInt(1, table_trap_trigger_count)].trigger;
}

function setTrap(trap) {
    var trapString = "";
    trapString += trap.type + " trap triggered by " + trap.trigger;
    trapString += "<br />DC" + trap.noticeDC + " Perception check to notice, DC" + trap.disarmDC + " Thieves' Tools check to disarm"
    trapString += "<br />If triggered, make a DC" + trap.evadeSaveDC + " " + capitalize(trap.evadeSaveType) + " Saving Throw";

    if (trap.hasOwnProperty('primaryDamage')) {
        trapString += "<br />Take " + trap.primaryDamage + " " + trap.primaryDamageType + " damage on a fail";
    }

    if (trap.hasOwnProperty('secondarySaveDC')) {
        trapString += " and make a DC" + trap.secondarySaveDC + " " + capitalize(trap.secondarySaveType) + " Saving Throw"
    }

    if (trap.hasOwnProperty('secondaryDamage')) {
        trapString += "<br />Take an additional " + trap.secondaryDamage + " " + trap.secondaryDamageType + " damage on a fail";
    }

    if (trap.hasOwnProperty('conditionApplied')) {

        if (trapString.slice(trapString.length - 9) == "on a fail") {
            trapString += " and apply the " + capitalize(trap.conditionApplied) + " condition"
        } else {
            trapString += "<br />Apply the " + capitalize(trap.conditionApplied) + " condition on a fail"
        }
    }

    return trapString;
}

function generateTrap(location) {
    var trap = getTrap(location);
    trap = setTrap(trap);
    return trap;
}

function generateSettlement() {
    var settlement = getSettlement();
    return setSettlement(settlement);
}

function getSettlement() {

    var settlement = {};
    var template = {}

    inputSettlementType = getEncounterSettlementTypeInput();
    if (inputSettlementType === "Random") {
        template = table_encounter_unmarked_settlement[getRandomInt(1, table_encounter_unmarked_settlement_count)];
    }
    else {
        for (i = 1; i <= table_encounter_unmarked_settlement_count; i++) {
            var currentSettlementRecord = table_encounter_unmarked_settlement[i];
            if (currentSettlementRecord.type === inputSettlementType) {
                template = currentSettlementRecord;
                break;
            }
        }
    }

    settlement.type = template.type;
    settlement.population = getRandomInt(template.population_min, template.population_max);

    return settlement;
}

function setSettlement(settlement) {
    settlementString = "";
    settlementString += settlement.type + " with a population of " + settlement.population;
    return settlementString;
}

function getEncounterSettlementTypeInput() {
    return input_encounter_settlement_type.options[input_encounter_settlement_type.selectedIndex].value;
}

// Encounter Tables

const table_encounter_combat = {
    "1": {
        "difficulty": "Easy"
    },
    "2": {
        "difficulty": "Medium"
    },
    "3": {
        "difficulty": "Medium"
    },
    "4": {
        "difficulty": "Medium"
    },
    "5": {
        "difficulty": "Medium"
    },
    "6": {
        "difficulty": "Hard"
    },
    "7": {
        "difficulty": "Hard"
    },
    "8": {
        "difficulty": "Hard"
    },
    "9": {
        "difficulty": "Hard"
    },
    "10": {
        "difficulty": "Deadly"
    }
};

const table_encounter_combat_count = Object.keys(table_encounter_combat).length;


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

const table_encounter_unmarked_settlement = {
    "1": {
        "type": "Campsite",
        "population_min": 1,
        "population_max": 20
    },
    "2": {
        "type": "Caravan",
        "population_min": 1,
        "population_max": 20
    },
    "3": {
        "type": "Cottage",
        "population_min": 1,
        "population_max": 10
    },
    "4": {
        "type": "Encamped Army",
        "population_min": 1000,
        "population_max": 8000
    },
    "5": {
        "type": "Fort",
        "population_min": 200,
        "population_max": 400
    },
    "6": {
        "type": "Hamlet",
        "population_min": 50,
        "population_max": 150
    },
    "7": {
        "type": "Large encampment",
        "population_min": 50,
        "population_max": 100
    },
    "8": {
        "type": "Refugee encampment",
        "population_min": 500,
        "population_max": 5000
    },
    "9": {
        "type": "Stationed garrison",
        "population_min": 100,
        "population_max": 800
    },
    "10": {
        "type": "Village",
        "population_min": 300,
        "population_max": 100
    },
    "11": {
        "type": "Work crew",
        "population_min": 50,
        "population_max": 200
    }
};

const table_encounter_unmarked_settlement_count = Object.keys(table_encounter_unmarked_settlement).length;

// Trap Tables
const table_trap_location_door = {
    "1": {
        "type": "Alchemist's fire"
    },
    "2": {
        "type": "Collapsing roof"
    },
    "3": {
        "type": "Door falls (stone)"
    },
    "4": {
        "type": "Swinging iron bar"
    },
    "5": {
        "type": "Swinging log"
    },
    "6": {
        "type": "Pit"
    },
    "7": {
        "type": "Poison darts"
    },
    "8": {
        "type": "Poison gas"
    },
    "9": {
        "type": "Scything blade"
    },
    "10": {
        "type": "Sleep gas"
    },
    "11": {
        "type": "Spiked grate drops"
    },
    "12": {
        "type": "Spiked pit"
    }
};

const table_trap_location_door_count = Object.keys(table_trap_location_door).length;

const table_trap_location_passage = {
    "1": {
        "type": "Alchemist's fire"
    },
    "2": {
        "type": "Bear"
    },
    "3": {
        "type": "Caltrops"
    },
    "4": {
        "type": "Collapsing roof"
    },
    "5": {
        "type": "Swinging iron bar"
    },
    "6": {
        "type": "Swinging log"
    },
    "7": {
        "type": "Pit"
    },
    "8": {
        "type": "Poison darts"
    },
    "9": {
        "type": "Poison gas"
    },
    "10": {
        "type": "Scything blade"
    },
    "11": {
        "type": "Sleep gas"
    },
    "12": {
        "type": "Spiked grate drops"
    },
    "13": {
        "type": "Spiked pit"
    }
};

const table_trap_location_passage_count = Object.keys(table_trap_location_passage).length;

const table_trap_location_room = {
    "1": {
        "type": "Alchemist's fire"
    },
    "2": {
        "type": "Bear"
    },
    "3": {
        "type": "Caltrops"
    },
    "4": {
        "type": "Collapsing roof"
    },
    "5": {
        "type": "Swinging iron bar"
    },
    "6": {
        "type": "Swinging log"
    },
    "7": {
        "type": "Pit"
    },
    "8": {
        "type": "Poison darts"
    },
    "9": {
        "type": "Poison gas"
    },
    "10": {
        "type": "Scything blade"
    },
    "11": {
        "type": "Sleep gas"
    },
    "12": {
        "type": "Spiked grate drops"
    },
    "13": {
        "type": "Spiked pit"
    }
};

const table_trap_location_room_count = Object.keys(table_trap_location_room).length;

const table_trap_location_stair = {
    "1": {
        "type": "Iron bar wings to hit"
    },
    "2": {
        "type": "Swinging log"
    },
    "3": {
        "type": "Poison darts"
    },
    "4": {
        "type": "Poison gas"
    },
    "5": {
        "type": "Scything blade"
    },
    "6": {
        "type": "Sleep gas"
    },
    "7": {
        "type": "Surface turns into slide or chute"
    }
};

const table_trap_location_stair_count = Object.keys(table_trap_location_stair).length;

const table_trap_location_wilderness = {
    "1": {
        "type": "Bear"
    },
    "2": {
        "type": "Swinging log"
    },
    "3": {
        "type": "Pit"
    },
    "4": {
        "type": "Spiked pit"
    },
    "5": {
        "type": "Quicksand"
    },
    "6": {
        "type": "Snare"
    }
};

const table_trap_location_wilderness_count = Object.keys(table_trap_location_wilderness).length;

const table_trap_trigger = {
    "1": {
        "trigger": "pressure plate"
    },
    "2": {
        "trigger": "trip wire"
    },
    "3": {
        "trigger": "lever"
    }
};

const table_trap_trigger_count = Object.keys(table_trap_trigger).length;

const table_trap_type_details = {
    "Alchemist's fire": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "fire",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "FALSE",
        "secondary_save_type": "FALSE",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "FALSE",
        "condition_applied": "FALSE",
        "notes": ""
    },
    "Bear": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "piercing",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "TRUE",
        "secondary_save_type": "strength",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "TRUE",
        "condition_applied": "restrained",
        "notes": "If hit by bear trap, apply Restrained condition. Strength saving throw to remove bear as an action."
    },
    "Caltrops": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "piercing",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "FALSE",
        "secondary_save_type": "FALSE",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "FALSE",
        "condition_applied": "FALSE",
        "notes": ""
    },
    "Collapsing roof": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "bludgeoning",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "TRUE",
        "secondary_save_type": "strength",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "TRUE",
        "condition_applied": "prone",
        "notes": "If hit by collapsing roof, make a Strength saving throw to avoid applying the Prone condition."
    },
    "Swinging iron bar": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "bludgeoning",
        "is_secondary_damage": "TRUE",
        "is_secondary_save_required": "TRUE",
        "secondary_save_type": "dexterity",
        "secondary_damage_type": "bludgeoning",
        "is_condition_applied": "TRUE",
        "condition_applied": "prone",
        "notes": "If hit by bar, make a second Dexterity saving throw to avoid being knocked into the opposite wall and the Prone condition."
    },
    "Swinging log": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "bludgeoning",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "FALSE",
        "secondary_save_type": "FALSE",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "FALSE",
        "condition_applied": "FALSE",
        "notes": ""
    },
    "Pit": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "bludgeoning",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "FALSE",
        "secondary_save_type": "FALSE",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "FALSE",
        "condition_applied": "prone",
        "notes": "If falled into pit, apply Prone condition."
    },
    "Poison darts": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "piercing",
        "is_secondary_damage": "TRUE",
        "is_secondary_save_required": "TRUE",
        "secondary_save_type": "constitution",
        "secondary_damage_type": "poison",
        "is_condition_applied": "TRUE",
        "condition_applied": "poisoned",
        "notes": "If hit by darts, make a Constitution saving throw against poison. If failed, take full damage and apply Poisoned condition. If successful, half poison damage."
    },
    "Poison gas": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "consitution",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "poison",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "FALSE",
        "secondary_save_type": "FALSE",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "TRUE",
        "condition_applied": "poisoned",
        "notes": "Make a Constitution saving throw. If failed, take full damage and apply Poisoned condition. If successful, half poison damage."
    },
    "Quicksand": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "strength",
        "is_damage_applied": "FALSE",
        "primary_damage_type": "FALSE",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "FALSE",
        "secondary_save_type": "FALSE",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "TRUE",
        "condition_applied": "restrained",
        "notes": "Make a Strength saving throw to avoid sinking into the quicksand if entered. On a fail, two more attempts to save with DC incrementing by 2 each time. Other characters can assist with a rope or other means to retrieve character.\n\nIf 3 attempts failed, character is completely submerged and is alive for 2 more rounds. Requires other characters enter the quicksand to retrieve with the dangered that come with entering."
    },
    "Scything blade": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "slashing",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "FALSE",
        "secondary_save_type": "FALSE",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "FALSE",
        "condition_applied": "FALSE",
        "notes": ""
    },
    "Sleep gas": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "consitution",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "poison",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "FALSE",
        "secondary_save_type": "FALSE",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "TRUE",
        "condition_applied": "sleep",
        "notes": "Make a Constitution saving throw. If failed, take full damage and apply Unconscious condition. If successful, half poison damage."
    },
    "Snare": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "bludgeoning",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "FALSE",
        "secondary_save_type": "FALSE",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "TRUE",
        "condition_applied": "restrained",
        "notes": "If snared, apply Restrained condition."
    },
    "Spiked grate drops": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "piercing",
        "is_secondary_damage": "TRUE",
        "is_secondary_save_required": "TRUE",
        "secondary_save_type": "dexterity",
        "secondary_damage_type": "bludgeoning",
        "is_condition_applied": "TRUE",
        "condition_applied": "prone",
        "notes": "If hit by grate, make a second Dexterity saving throw to avoid being caught underneath and applying the Prone condition."
    },
    "Spiked pit": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "piercing",
        "is_secondary_damage": "FALSE",
        "is_secondary_save_required": "FALSE",
        "secondary_save_type": "FALSE",
        "secondary_damage_type": "FALSE",
        "is_condition_applied": "FALSE",
        "condition_applied": "prone",
        "notes": "If falled into pit, apply Prone condition."
    },
    "Surface turns into slide or chute": {
        "is_evade_save_required": "TRUE",
        "evade_save_type": "dexterity",
        "is_damage_applied": "TRUE",
        "primary_damage_type": "bludgeoning",
        "is_secondary_damage": "TRUE",
        "is_secondary_save_required": "TRUE",
        "secondary_save_type": "dexterity",
        "secondary_damage_type": "bludgeoning",
        "is_condition_applied": "TRUE",
        "condition_applied": "prone",
        "notes": "If falling down chute/slide, make a second Dexterity Saving Throw to avoid landing awkwardly and applying Prone condition."
    }
};

const table_trap_type_details_count = Object.keys(table_trap_type_details).length;

const table_trap_severity = {
    "1": {
        "severity": "setback"
    },
    "2": {
        "severity": "setback"
    },
    "3": {
        "severity": "setback"
    },
    "4": {
        "severity": "setback"
    },
    "5": {
        "severity": "setback"
    },
    "6": {
        "severity": "dangerous"
    },
    "7": {
        "severity": "dangerous"
    },
    "8": {
        "severity": "dangerous"
    },
    "9": {
        "severity": "dangerous"
    },
    "10": {
        "severity": "deadly"
    }
};

const table_trap_severity_count = Object.keys(table_trap_severity).length;

const table_trap_damage = {
    "1": {
        "setback": "1d10",
        "dangerous": "2d10",
        "deadly": "4d10"
    },
    "2": {
        "setback": "2d10",
        "dangerous": "4d10",
        "deadly": "10d10"
    },
    "3": {
        "setback": "4d10",
        "dangerous": "10d10",
        "deadly": "18d10"
    },
    "4": {
        "setback": "10d10",
        "dangerous": "18d10",
        "deadly": "24d10"
    }
};

const table_trap_damage_count = Object.keys(table_trap_damage).length;

const table_encounter_difficulty_class = {
    "1": {
        "dc_base": 8,
        "dc_modifier": 5
    },
    "2": {
        "dc_base": 12,
        "dc_modifier": 5
    },
    "3": {
        "dc_base": 16,
        "dc_modifier": 5
    },
    "4": {
        "dc_base": 20,
        "dc_modifier": 5
    }
};

const table_encounter_difficulty_class_count = Object.keys(table_encounter_difficulty_class).length;