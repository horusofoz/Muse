// Dungeon Event Handlers

button_feature_dungeon_design.onclick = function () {
    showFeatureDiv(div_feature_dungeon_design);
    applyActiveStyleToFeatureButton(this);
}

button_feature_dungeon_room.onclick = function () {
    showFeatureDiv(div_feature_dungeon_room);
    applyActiveStyleToFeatureButton(this);
}

button_feature_dungeon_passage.onclick = function () {
    showFeatureDiv(div_feature_dungeon_passage);
    applyActiveStyleToFeatureButton(this);
}

button_feature_dungeon_door.onclick = function () {
    showFeatureDiv(div_feature_dungeon_door);
    applyActiveStyleToFeatureButton(this);
}

button_feature_dungeon_trap.onclick = function () {
    showFeatureDiv(div_feature_dungeon_trap);
    applyActiveStyleToFeatureButton(this);
}

button_generate_dungeon.onclick = function () {
    var dungeonDesign = getDungeonDesign();
    setDungeonDesign(dungeonDesign);
}

button_generate_door.onclick = function () {
    var dungeonDoor = getDungeonDoor();
    dungeonDoor = setDungeonDoor(dungeonDoor);
    writeToJournal(dungeonDoor);
}

button_generate_trap.onclick = function () {
    var dungeonTrap = getDungeonTrap();
    dungeonTrap = setDungeonTrap(dungeonTrap);
    writeToJournal(dungeonTrap);
}


// Dungeon Functions

function getDungeonDesign() {

    var dungeonDesign = {};
    dungeonDesign.location = table_dungeon_locations[getRandomInt(1, table_dungeon_locations_count)].location;
    dungeonDesign.creator = table_dungeon_creator[getRandomInt(1, table_dungeon_creator_count)].creator;
    dungeonDesign.purpose = table_dungeon_purpose[getRandomInt(1, table_dungeon_purpose_count)].purpose;
    dungeonDesign.history = table_dungeon_history[getRandomInt(1, table_dungeon_history_count)].history;
    dungeonDesign.size = getDungeonSize();
    dungeonDesign.dominantCreatureType = table_creature_type[getRandomInt(1, table_creature_type_count)].creature_type;
    dungeonDesign.start_area = table_dungeon_start_area[getRandomInt(1, table_dungeon_start_area_count)];
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
    dungeonObject.start_area.exits = setDungeonExits({ exit_left: dungeonObject.start_area.exit_left, exit_opposite: dungeonObject.start_area.exit_opposite, exit_right: dungeonObject.start_area.exit_right });
    dungeonDesign += (dungeonObject.start_area.exits.length > 0) ? "<br />Exits: " + dungeonObject.start_area.exits : "";
    writeToJournal(dungeonDesign);
}

function getDungeonSize() {
    
    var dungeonSize = {};

    // get size
    var size = table_dungeon_size[getRandomInt(1,table_dungeon_size_count)];
    dungeonSize.size = size.size;
    // get rooms

    var rooms = rollDiceForumla(size.dice_to_roll, size.dice_type, size.modifier);
    dungeonSize.rooms = rooms;

    return dungeonSize;
}


function setDungeonExits(inputObject) {
    var exits = "";

    (inputObject.exit_left !== "FALSE") ? exits += inputObject.exit_left + " left, " : "";
    (inputObject.exit_opposite !== "FALSE") ? exits += inputObject.exit_opposite + " opposite, " : "";
    (inputObject.exit_right !== "FALSE") ? exits += inputObject.exit_right + " right, " : "";
    exits = (exits.length > 0) ? exits.substring(0, exits.length - 2) : "";
    exits = exits.charAt(0).toUpperCase() + exits.slice(1);
    return exits;
}

function getDungeonDoor() {
    var dungeonDoor = table_dungeon_door[getRandomInt(1, table_dungeon_door_count)];
    return dungeonDoor;
}

function setDungeonDoor(inputDoor, title = "") {
    var dungeonDoor = "";
    dungeonDoor += (title !== "") ? tile + "<br />" : "";
    dungeonDoor += inputDoor.type;
    dungeonDoor += (inputDoor.locked !== "FALSE") ? ", locked" : "";
    dungeonDoor += (inputDoor.trapped !== "FALSE") ? ", trapped" : "";
    return dungeonDoor;
}

function getDungeonTrap() {

    var dungeonTrap = {};
    // Get trap tier
    var trapTier = input_trap_tier.options[input_trap_tier.selectedIndex].text;

    // get trap severity
    var trapSeverity = getSeverity(input_trap_severity.options[input_trap_severity.selectedIndex].value);

    // get trap magic/mundane
    var trapMagicOrMundane = getMagicOrMundane(input_trap_magic_or_mundane.options[input_trap_magic_or_mundane.selectedIndex].text)

    // get trap type
    var trapType = (trapMagicOrMundane === "Magic") ? table_dungeon_trap_magic[getRandomInt(1, table_dungeon_trap_magic_count)] : table_dungeon_trap_mundane[getRandomInt(1, table_dungeon_trap_mundane_count)];

    // get trap trigger
    var trapTrigger = table_dungeon_trap_trigger[getRandomInt(1, table_dungeon_trap_trigger_count)].trigger;

    // get trap stats
    var trapStatsTemplate = table_dungeon_trap_stat[trapTier];
    var trapDamage = (trapType.damage !== "FALSE") ? trapStatsTemplate[trapSeverity] : "FALSE";
    var trapDetectDC = trapStatsTemplate['dc'] + getRandomInt(0, trapStatsTemplate['dc_modifier']);
    var trapDisarmDC = trapStatsTemplate['dc'] + getRandomInt(0, trapStatsTemplate['dc_modifier']);

    // get trap condition applied
    var trapCondition = trapType['apply_condition'];

    // get trap save DCs
    var trapDexteritySaveDC = (trapType.save_dexterity === "TRUE") ? trapStatsTemplate['dc'] + getRandomInt(0, trapStatsTemplate['dc_modifier']) : "";
    var trapConstitutionSaveDC = (trapType.save_constitution === "TRUE") ? trapStatsTemplate['dc'] + getRandomInt(0, trapStatsTemplate['dc_modifier']) : "";
    var trapWisdomSaveDC = (trapType.save_wisdom === "TRUE") ? trapStatsTemplate['dc'] + getRandomInt(0, trapStatsTemplate['dc_modifier']) : "";

    // output
    dungeonTrap.type = trapType.type;
    dungeonTrap.trigger = trapTrigger;
    dungeonTrap.damage = trapDamage;
    dungeonTrap.detectDC = trapDetectDC;
    dungeonTrap.disarmDC = trapDisarmDC;
    dungeonTrap.condition = trapCondition;
    dungeonTrap.dexSaveDC = trapDexteritySaveDC;
    dungeonTrap.conSaveDC = trapConstitutionSaveDC;
    dungeonTrap.wisSaveDC = trapWisdomSaveDC;
    return dungeonTrap;
}

function setDungeonTrap(input) {
    var trap = "";
    trap += capitalize(input.type) + " trap";
    trap += "<br />Trigger: " + capitalize(input.trigger);
    trap += (input.damage !== "FALSE") ? "<br />" + input.damage + " damage" : "";
    trap += "<br />Detect DC: " + input.detectDC;
    trap += "<br />Disarm DC: " + input.disarmDC;
    trap += (input.dexSaveDC !== "") ? "<br />Dexterity Save: " + input.dexSaveDC : "";
    trap += (input.conSaveDC !== "") ? "<br />Constitution Save: " + input.conSaveDC : "";
    trap += (input.wisSaveDC !== "") ? "<br />Wisdom Save: " + input.wisSaveDC : "";
    trap += (input.condition !== "FALSE") ? "<br />Failed save applies " + input.condition + " condition" : "";

    return trap;
}

function getSeverity(severity) {
    if (severity === "random") {
        severity = table_severity[getRandomInt(1, table_severity_count)].severity;
    }
    return severity;
}

function getMagicOrMundane(input) {
    var result = input;
    if (result === "Random") {
        result = (getRandomInt(1, 2) === 1) ? "Magic" : "Mundane";
    }
    return result;
}


// Dungeon Tables

const table_dungeon_locations = {
    "1": {
        "location": "A building in a city"
    },
    "2": {
        "location": "Catacombs or sewers beneath a city"
    },
    "3": {
        "location": "Beneath a farmhouse"
    },
    "4": {
        "location": "Beneath a graveyard"
    },
    "5": {
        "location": "Beneath a ruined castle"
    },
    "6": {
        "location": "Beneath a ruined city"
    },
    "7": {
        "location": "Beneath a temple"
    },
    "8": {
        "location": "In a chasm"
    },
    "9": {
        "location": "In a cliff face"
    },
    "10": {
        "location": "In a desert"
    },
    "11": {
        "location": "In a forest"
    },
    "12": {
        "location": "In a glacier"
    },
    "13": {
        "location": "In a gorge"
    },
    "14": {
        "location": "In a jungle"
    },
    "15": {
        "location": "In a mountain pass"
    },
    "16": {
        "location": "In a swamp"
    },
    "17": {
        "location": "Beneath or on top of a mesa"
    },
    "18": {
        "location": "In sea caves"
    },
    "19": {
        "location": "In several connected mesas"
    },
    "20": {
        "location": "On a mountain peak"
    },
    "21": {
        "location": "On a promontory"
    },
    "22": {
        "location": "On an island"
    },
    "23": {
        "location": "Underwater"
    }
};

const table_dungeon_locations_count = Object.keys(table_dungeon_locations).length;

const table_dungeon_creator = {
    "1": {
        "creator": "Beholder"
    },
    "2": {
        "creator": "Cult or religious group"
    },
    "3": {
        "creator": "Cult or religious group"
    },
    "4": {
        "creator": "Cult or religious group"
    },
    "5": {
        "creator": "Dwarves"
    },
    "6": {
        "creator": "Dwarves"
    },
    "7": {
        "creator": "Dwarves"
    },
    "8": {
        "creator": "Dwarves"
    },
    "9": {
        "creator": "Elves (including drow)"
    },
    "10": {
        "creator": "Giants"
    },
    "11": {
        "creator": "Hobgoblins"
    },
    "12": {
        "creator": "Humans"
    },
    "13": {
        "creator": "Humans"
    },
    "14": {
        "creator": "Humans"
    },
    "15": {
        "creator": "Humans"
    },
    "16": {
        "creator": "Kuo-toa"
    },
    "17": {
        "creator": "Lich"
    },
    "18": {
        "creator": "Mind flayers"
    },
    "19": {
        "creator": "Yuan-ti"
    },
    "20": {
        "creator": "No creator (natural caverns)"
    }
};

const table_dungeon_creator_count = Object.keys(table_dungeon_creator).length;

const table_dungeon_purpose = {
    "1": {
        "purpose": "Death trap",
        "description": "This dungeon is built to eliminate any creature that dares to enter it. A death trap might guard the treasure of an insane wizard, or it might be designed to lure adventurers to their demise for some nefarious purpose, such as to feed souls to a lich’s phylactery."
    },
    "2": {
        "purpose": "Lair",
        "description": "A lair is a place where monsters live. Typical lairs include ruins and caves."
    },
    "3": {
        "purpose": "Lair",
        "description": "A lair is a place where monsters live. Typical lairs include ruins and caves."
    },
    "4": {
        "purpose": "Lair",
        "description": "A lair is a place where monsters live. Typical lairs include ruins and caves."
    },
    "5": {
        "purpose": "Lair",
        "description": "A lair is a place where monsters live. Typical lairs include ruins and caves."
    },
    "6": {
        "purpose": "Maze",
        "description": "A maze is intended to deceive or confuse those who enter it. Some mazes are elaborate obstacles that protect treasure, while others are gauntlets for prisoners banished there to be hunted and devoured by the monsters within."
    },
    "7": {
        "purpose": "Mine",
        "description": "An abandoned mine can quickly become infested with monsters, while miners who delve too deep can break through into the Underdark."
    },
    "8": {
        "purpose": "Mine",
        "description": "An abandoned mine can quickly become infested with monsters, while miners who delve too deep can break through into the Underdark."
    },
    "9": {
        "purpose": "Mine",
        "description": "An abandoned mine can quickly become infested with monsters, while miners who delve too deep can break through into the Underdark."
    },
    "10": {
        "purpose": "Planar gate",
        "description": "Dungeons built around planar portals are often transformed by the planar energy seeping out through those portals."
    },
    "11": {
        "purpose": "Stronghold",
        "description": "A stronghold dungeon provides a secure base of operations for villains and monsters. It is usually ruled by a powerful individual, such as a wizard, vampire, or dragon, and it is larger and more complex than a simple lair."
    },
    "12": {
        "purpose": "Stronghold",
        "description": "A stronghold dungeon provides a secure base of operations for villains and monsters. It is usually ruled by a powerful individual, such as a wizard, vampire, or dragon, and it is larger and more complex than a simple lair."
    },
    "13": {
        "purpose": "Stronghold",
        "description": "A stronghold dungeon provides a secure base of operations for villains and monsters. It is usually ruled by a powerful individual, such as a wizard, vampire, or dragon, and it is larger and more complex than a simple lair."
    },
    "14": {
        "purpose": "Stronghold",
        "description": "A stronghold dungeon provides a secure base of operations for villains and monsters. It is usually ruled by a powerful individual, such as a wizard, vampire, or dragon, and it is larger and more complex than a simple lair."
    },
    "15": {
        "purpose": "Temple or shrine",
        "description": "This dungeon is consecrated to a deity or other planar entity. The entity’s worshipers control the dungeon and conduct their rites there."
    },
    "16": {
        "purpose": "Temple or shrine",
        "description": "This dungeon is consecrated to a deity or other planar entity. The entity’s worshipers control the dungeon and conduct their rites there."
    },
    "17": {
        "purpose": "Temple or shrine",
        "description": "This dungeon is consecrated to a deity or other planar entity. The entity’s worshipers control the dungeon and conduct their rites there."
    },
    "18": {
        "purpose": "Tomb",
        "description": "Tombs are magnets for treasure hunters, as well as monsters that hunger for the bones of the dead."
    },
    "19": {
        "purpose": "Tomb",
        "description": "Tombs are magnets for treasure hunters, as well as monsters that hunger for the bones of the dead."
    },
    "20": {
        "purpose": "Treasure vault",
        "description": "Built to protect powerful magic items and great material wealth, treasure vault dungeons are heavily guarded by monsters and traps."
    }
};

const table_dungeon_purpose_count = Object.keys(table_dungeon_purpose).length;

const table_dungeon_history = {
    "1": {
        "history": "Abandoned by creators"
    },
    "2": {
        "history": "Abandoned by creators"
    },
    "3": {
        "history": "Abandoned by creators"
    },
    "4": {
        "history": "Abandoned due to plague"
    },
    "5": {
        "history": "Conquered by invaders"
    },
    "6": {
        "history": "Conquered by invaders"
    },
    "7": {
        "history": "Conquered by invaders"
    },
    "8": {
        "history": "Conquered by invaders"
    },
    "9": {
        "history": "Creators destroyed by attacking raiders"
    },
    "10": {
        "history": "Creators destroyed by attacking raiders"
    },
    "11": {
        "history": "Creators destroyed by discovery made within the site"
    },
    "12": {
        "history": "Creators destroyed by internal conflict"
    },
    "13": {
        "history": "Creators destroyed by magical catastrophe"
    },
    "14": {
        "history": "Creators destroyed by natural disaster"
    },
    "15": {
        "history": "Creators destroyed by natural disaster"
    },
    "16": {
        "history": "Location cursed by the gods and shunned"
    },
    "17": {
        "history": "Original creator still in control"
    },
    "18": {
        "history": "Original creator still in control"
    },
    "19": {
        "history": "Overrun by planar creatures"
    },
    "20": {
        "history": "Site of a great miracle"
    }
};


const table_dungeon_history_count = Object.keys(table_dungeon_history).length;

const table_dungeon_start_area = {
    "1": {
        "configuration": "Square",
        "size": "20 × 20 ft.",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "2": {
        "configuration": "Square",
        "size": "20 × 20 ft.",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "3": {
        "configuration": "Square",
        "size": "40 × 40 ft.",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "4": {
        "configuration": "Rectangle",
        "size": "60 × 20 ft.",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "5": {
        "configuration": "Rectangle",
        "size": "20 × 40 ft.",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "6": {
        "configuration": "Circle",
        "size": "40 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "7": {
        "configuration": "Passage, T intersection",
        "size": "10 ft. wide",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "8": {
        "configuration": "Passage, four-way intersection",
        "size": "10 ft. wide",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "passage"
    }
};

const table_dungeon_start_area_count = Object.keys(table_dungeon_start_area).length;

const table_dungeon_door = {
    "1": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "2": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "3": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "4": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "5": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "6": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "7": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "8": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "9": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "10": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "11": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "12": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "13": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "14": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "15": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "16": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "17": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "18": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "19": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "20": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "21": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "22": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "23": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "24": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "25": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "26": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "27": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "28": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "29": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "30": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "31": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "32": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "33": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "34": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "35": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "36": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "37": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "38": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "39": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "40": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "41": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "42": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "43": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "44": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "45": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "46": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "47": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "48": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "49": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "50": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "51": {
        "type": "Wooden door",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "52": {
        "type": "Wooden door",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "53": {
        "type": "Wooden door",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "54": {
        "type": "Wooden door",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "55": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "56": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "57": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "58": {
        "type": "Wooden door",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "59": {
        "type": "Wooden door",
        "locked": "TRUE",
        "trapped": "TRUE"
    },
    "60": {
        "type": "Wooden door",
        "locked": "TRUE",
        "trapped": "TRUE"
    },
    "61": {
        "type": "Stone door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "62": {
        "type": "Stone door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "63": {
        "type": "Stone door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "64": {
        "type": "Stone door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "65": {
        "type": "Stone door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "66": {
        "type": "Stone door",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "67": {
        "type": "Stone door",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "68": {
        "type": "Stone door",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "69": {
        "type": "Stone door",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "70": {
        "type": "Stone door",
        "locked": "TRUE",
        "trapped": "TRUE"
    },
    "71": {
        "type": "Iron door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "72": {
        "type": "Iron door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "73": {
        "type": "Iron door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "74": {
        "type": "Iron door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "75": {
        "type": "Iron door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "76": {
        "type": "Iron door",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "77": {
        "type": "Iron door",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "78": {
        "type": "Iron door",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "79": {
        "type": "Iron door",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "80": {
        "type": "Iron door",
        "locked": "TRUE",
        "trapped": "TRUE"
    },
    "81": {
        "type": "Portcullis",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "82": {
        "type": "Portcullis",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "83": {
        "type": "Portcullis",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "84": {
        "type": "Portcullis",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "85": {
        "type": "Portcullis",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "86": {
        "type": "Portcullis",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "87": {
        "type": "Portcullis",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "88": {
        "type": "Portcullis",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "89": {
        "type": "Portcullis",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "90": {
        "type": "Portcullis",
        "locked": "TRUE",
        "trapped": "TRUE"
    },
    "91": {
        "type": "Secret door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "92": {
        "type": "Secret door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "93": {
        "type": "Secret door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "94": {
        "type": "Secret door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "95": {
        "type": "Secret door",
        "locked": "FALSE",
        "trapped": "FALSE"
    },
    "96": {
        "type": "Secret door",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "97": {
        "type": "Secret door",
        "locked": "TRUE",
        "trapped": "FALSE"
    },
    "98": {
        "type": "Secret door",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "99": {
        "type": "Secret door",
        "locked": "FALSE",
        "trapped": "TRUE"
    },
    "100": {
        "type": "Secret door",
        "locked": "TRUE",
        "trapped": "TRUE"
    }
};

const table_dungeon_door_count = Object.keys(table_dungeon_door).length;

const table_dungeon_room_layout = {
    "1": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "2": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "3": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "4": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "5": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "6": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "7": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "8": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "9": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "10": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "11": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "12": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "13": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "14": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "15": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "16": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "17": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "18": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "19": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "20": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "21": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "22": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "23": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "24": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "25": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "26": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "27": {
        "layout": "Square, 20 × 20 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "28": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "29": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "30": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "31": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "32": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "33": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "34": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "35": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "36": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "37": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "38": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "39": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "40": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "41": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "42": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "43": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "44": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "45": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "46": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "47": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "48": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "49": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "50": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "51": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "52": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "53": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "54": {
        "layout": "Square, 30 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "55": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "56": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "57": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "58": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "59": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "60": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "61": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "62": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "63": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "64": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "65": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "66": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "67": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "68": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "69": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "70": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "71": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "72": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "73": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "74": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "75": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "76": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "77": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "78": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "79": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "80": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "81": {
        "layout": "Rectangle, 20 × 30 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "82": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "83": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "84": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "85": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "86": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "87": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "88": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "89": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "90": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "91": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "92": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "93": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "94": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "95": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "96": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "97": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "98": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "99": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "100": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "101": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "102": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "103": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "104": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "105": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "106": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "107": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "108": {
        "layout": "Circle, 30 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "109": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "110": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "111": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "112": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "113": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "114": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "115": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "116": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "117": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "118": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "119": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "120": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "121": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "122": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "123": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "124": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "125": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "126": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "127": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "128": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "129": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "130": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "131": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "132": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "133": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "134": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "135": {
        "layout": "Circle, 50 ft. diameter",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "136": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "137": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "138": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "139": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "140": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "141": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "142": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "143": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "144": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "145": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "146": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "147": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "148": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "149": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "150": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "151": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "152": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "153": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "154": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "155": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "156": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "157": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "158": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "159": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "160": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "161": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "162": {
        "layout": "Octagon, 40 × 40 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "163": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "164": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "165": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "166": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "167": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "FALSE"
    },
    "168": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "169": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "FALSE",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "170": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "171": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "172": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "FALSE"
    },
    "173": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "FALSE"
    },
    "174": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "175": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "176": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "FALSE",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "177": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "FALSE",
        "exit_opposite": "door",
        "exit_right": "door"
    },
    "178": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "179": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "passage"
    },
    "180": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "passage",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "181": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "door",
        "exit_opposite": "FALSE",
        "exit_right": "door"
    },
    "182": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "183": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "passage",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "184": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "passage"
    },
    "185": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "186": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "passage"
    },
    "187": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "passage",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "188": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "door",
        "exit_opposite": "passage",
        "exit_right": "door"
    },
    "189": {
        "layout": "Trapezoid, roughly 40 × 60 ft",
        "exit_left": "door",
        "exit_opposite": "door",
        "exit_right": "door"
    }
};

const table_dungeon_room_layout_count = Object.keys(table_dungeon_room_layout).length;

const table_dungeon_trap_stat = {
    "1": {
      "setback": "1d4",
      "dangerous": "2d4",
      "deadly": "4d6",
      "dc": 9,
      "dc_modifier": 3
    },
    "2": {
      "setback": "2d6",
      "dangerous": "4d6",
      "deadly": "10d8",
      "dc": 12,
      "dc_modifier": 6
    },
    "3": {
      "setback": "4d8",
      "dangerous": "10d8",
      "deadly": "18d8",
      "dc": 15,
      "dc_modifier": 9
    },
    "4": {
      "setback": "6d10",
      "dangerous": "10d10",
      "deadly": "20d10",
      "dc": 15,
      "dc_modifier": 12
    }
  };

const table_dungeon_trap_stat_count = Object.keys(table_dungeon_trap_stat).length;

const table_dungeon_trap_trigger = {
    "1": {
        "trigger": "pressure"
    },
    "2": {
        "trigger": "trip wire"
    }
};

const table_dungeon_trap_trigger_count = Object.keys(table_dungeon_trap_trigger).length;

const table_dungeon_trap_mundane = {
    "1": {
      "type": "pit",
      "damage": "TRUE",
      "save_dexterity": "TRUE",
      "save_constitution": "FALSE",
      "save_wisdom": "FALSE",
      "apply_condition": "FALSE"
    },
    "2": {
      "type": "spiked pit",
      "damage": "TRUE",
      "save_dexterity": "TRUE",
      "save_constitution": "FALSE",
      "save_wisdom": "FALSE",
      "apply_condition": "FALSE"
    },
    "3": {
      "type": "poison darts",
      "damage": "TRUE",
      "save_dexterity": "TRUE",
      "save_constitution": "TRUE",
      "save_wisdom": "FALSE",
      "apply_condition": "poisoned"
    },
    "4": {
      "type": "poison needle",
      "damage": "TRUE",
      "save_dexterity": "TRUE",
      "save_constitution": "TRUE",
      "save_wisdom": "FALSE",
      "apply_condition": "poisoned"
    },
    "5": {
      "type": "crossbow",
      "damage": "TRUE",
      "save_dexterity": "TRUE",
      "save_constitution": "FALSE",
      "save_wisdom": "FALSE",
      "apply_condition": "FALSE"
    },
    "6": {
      "type": "spikes",
      "damage": "TRUE",
      "save_dexterity": "TRUE",
      "save_constitution": "FALSE",
      "save_wisdom": "FALSE",
      "apply_condition": "FALSE"
    },
    "7": {
      "type": "poison gas",
      "damage": "TRUE",
      "save_dexterity": "FALSE",
      "save_constitution": "TRUE",
      "save_wisdom": "FALSE",
      "apply_condition": "poisoned"
    }
  };

const table_dungeon_trap_mundane_count = Object.keys(table_dungeon_trap_mundane).length;

const table_dungeon_trap_magic = {
    "1": {
      "type": "alarm",
      "damage": "FALSE",
      "save_dexterity": "FALSE",
      "save_constitution": "FALSE",
      "save_wisdom": "FALSE",
      "apply_condition": "FALSE"
    },
    "2": {
      "type": "magic missile",
      "damage": "TRUE",
      "save_dexterity": "FALSE",
      "save_constitution": "FALSE",
      "save_wisdom": "FALSE",
      "apply_condition": "FALSE"
    },
    "3": {
      "type": "blindness",
      "damage": "TRUE",
      "save_dexterity": "FALSE",
      "save_constitution": "TRUE",
      "save_wisdom": "FALSE",
      "apply_condition": "blinded"
    },
    "4": {
      "type": "fireball",
      "damage": "TRUE",
      "save_dexterity": "TRUE",
      "save_constitution": "FALSE",
      "save_wisdom": "FALSE",
      "apply_condition": "FALSE"
    },
    "5": {
      "type": "lightning",
      "damage": "TRUE",
      "save_dexterity": "TRUE",
      "save_constitution": "FALSE",
      "save_wisdom": "FALSE",
      "apply_condition": "FALSE"
    },
    "6": {
      "type": "poison spray",
      "damage": "TRUE",
      "save_dexterity": "FALSE",
      "save_constitution": "TRUE",
      "save_wisdom": "FALSE",
      "apply_condition": "FALSE"
    }
  };

const table_dungeon_trap_magic_count = Object.keys(table_dungeon_trap_magic).length;


const table_dungeon_size = {
    "1": {
      "size": "Tiny",
      "dice_to_roll": 1,
      "dice_type": 4,
      "modifier": 2
    },
    "2": {
      "size": "Tiny",
      "dice_to_roll": 1,
      "dice_type": 4,
      "modifier": 2
    },
    "3": {
      "size": "Tiny",
      "dice_to_roll": 1,
      "dice_type": 4,
      "modifier": 2
    },
    "4": {
      "size": "Small",
      "dice_to_roll": 2,
      "dice_type": 6,
      "modifier": 3
    },
    "5": {
      "size": "Small",
      "dice_to_roll": 2,
      "dice_type": 6,
      "modifier": 3
    },
    "6": {
      "size": "Small",
      "dice_to_roll": 2,
      "dice_type": 6,
      "modifier": 3
    },
    "7": {
      "size": "Small",
      "dice_to_roll": 2,
      "dice_type": 6,
      "modifier": 3
    },
    "8": {
      "size": "Small",
      "dice_to_roll": 2,
      "dice_type": 6,
      "modifier": 3
    },
    "9": {
      "size": "Medium",
      "dice_to_roll": 3,
      "dice_type": 8,
      "modifier": 5
    },
    "10": {
      "size": "Medium",
      "dice_to_roll": 3,
      "dice_type": 8,
      "modifier": 5
    },
    "11": {
      "size": "Medium",
      "dice_to_roll": 3,
      "dice_type": 8,
      "modifier": 5
    },
    "12": {
      "size": "Medium",
      "dice_to_roll": 3,
      "dice_type": 8,
      "modifier": 5
    },
    "13": {
      "size": "Medium",
      "dice_to_roll": 3,
      "dice_type": 8,
      "modifier": 5
    },
    "14": {
      "size": "Medium",
      "dice_to_roll": 3,
      "dice_type": 8,
      "modifier": 5
    },
    "15": {
      "size": "Medium",
      "dice_to_roll": 3,
      "dice_type": 8,
      "modifier": 5
    },
    "16": {
      "size": "Medium",
      "dice_to_roll": 3,
      "dice_type": 8,
      "modifier": 5
    },
    "17": {
      "size": "Large",
      "dice_to_roll": 4,
      "dice_type": 10,
      "modifier": 8
    },
    "18": {
      "size": "Large",
      "dice_to_roll": 4,
      "dice_type": 10,
      "modifier": 8
    },
    "19": {
      "size": "Huge",
      "dice_to_roll": 5,
      "dice_type": 12,
      "modifier": 10
    },
    "20": {
      "size": "Huge",
      "dice_to_roll": 5,
      "dice_type": 12,
      "modifier": 10
    }
  };

const table_dungeon_size_count = Object.keys(table_dungeon_size).length;
