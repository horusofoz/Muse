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

button_feature_dungeon_stair.onclick = function () {
    showFeatureDiv(div_feature_dungeon_stair);
    applyActiveStyleToFeatureButton(this);
}

button_generate_dungeon.onclick = function () {
    var dungeonDesign = getDungeonDesign();
    setDungeonDesign(dungeonDesign);
}

button_generate_room.onclick = function () {
    var room = getDungeonRoom();
    room = setDungeonRoom(room);
    writeToJournal(room);
}

button_generate_door.onclick = function () {
    var dungeonDoor = getDungeonDoor();
    dungeonDoor = setDungeonDoor(dungeonDoor);
    writeToJournal(dungeonDoor);
}

button_generate_passage.onclick = function () {
    var passage = getDungeonPassage();
    passage = setDungeonPassage(passage);
    writeToJournal(passage);
}

button_generate_stair.onclick = function () {
    var stair = buildDungeonStair();
    writeToJournal(stair);
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
    var size = table_dungeon_size[getRandomInt(1, table_dungeon_size_count)];
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

    var door = {};
    // Get type
    var template = table_dungeon_door_type[getRandomInt(1, table_dungeon_door_type_count)];
    door.type = template.type;

    // Get locked
    door.locked = rollPercentileTrueFalse(template.locked);
    if (door.locked) {
        door.pickLockDC = getDifficultyClass();
        door.forceDoorDC = getDifficultyClass();
    }

    // Get trapped
    door.trapped = rollPercentileTrueFalse(template.trapped);
    if (door.trapped) {
        door.trapDetails = buildTrap("door");
    }

    // Get width
    door.width = table_dungeon_door_width[getRandomInt(1, table_dungeon_door_width_count)].width;
    return door;
}

function setDungeonDoor(door) {

    var doorString = "";

    doorString += door.type + ", " + door.width + " feet wide";

    if (door.locked) {
        doorString += "<br />Locked, DC" + door.pickLockDC + " Thieves' Tools check to pick lock, DC" + door.forceDoorDC + " Athletics check to force door";
    }

    if (door.trapped) {
        doorString += "<br/>Trapped, " + door.trapDetails;
    }

    return doorString;
}

function buildDungeonDoor() {
    var dungeonDoor = getDungeonDoor();
    dungeonDoor = setDungeonDoor(dungeonDoor);
    return dungeonDoor;
}

function getDungeonPassage() {
    var passage = {};

    // Get Type
    passage.type = table_dungeon_passage_type[getRandomInt(1, table_dungeon_passage_type_count)].type;

    // Handler for Room or Stairs
    if (passage.type === "Room") {
        return "Room";
    }

    if (passage.type === "Stairs") {
        return "Stairs";
    }

    // Get Width
    passage.width = table_dungeon_passage_width[getRandomInt(1, table_dungeon_passage_width_count)].width;

    // Get Content
    passage.trapped = rollPercentileTrueFalse(table_dungeon_passage_content.Trap.chance);
    if (passage.trapped) {
        passage.trap = buildTrap("passage");
    }

    passage.eventOccurs = rollPercentileTrueFalse(table_dungeon_passage_content.Event.chance);
    if (passage.eventOccurs) {
        passage.event = (initiateEvent()).replace("Random Event", "");
    }

    passage.combatOccurs = rollPercentileTrueFalse(table_dungeon_passage_content.Combat.chance);
    if (passage.combatOccurs) {
        passage.combatDifficulty = (getEncounterCombat());
    }

    passage.lootEncountered = rollPercentileTrueFalse(table_dungeon_passage_content.Combat.chance);

    return passage;
}

function setDungeonPassage(passage) {
    if (passage === "Room" || passage === "Stairs") {
        return "Passage lead to " + passage;
    }

    var passageString = "";

    passageString += passage.width + " feet wide passage ";
    passageString += passage.type;

    if (passage.trapped) {
        passageString += "<br />Passage is trapped, " + passage.trap;
    }

    if (passage.combatOccurs) {
        passageString += "<br />" + passage.combatDifficulty + " combat encounter in passage"
    }

    if (passage.lootEncountered) {
        passageString += "<br />Loot found in passage"
    }

    if (passage.eventOccurs) {
        passageString += "<br />Random event occurs in passage";
        passageString += passage.event;
    }

    return passageString;
}

function getDungeonTypeInput() {
    return input_dungeon_type_for_room_purpose.options[input_dungeon_type_for_room_purpose.selectedIndex].value;
}

function getDungeonRoom() {

    var room = {};
    // Shape/Size
    var shapeSize = table_dungeon_room_shape_size[getRandomInt(1, table_dungeon_room_shape_size_count)];
    room.shape = shapeSize.shape;
    room.size = shapeSize.size;

    // Purpose
    var purpose = getDungeonRoomPurpose();
    room.purpose = purpose.purpose;

    // Exits
    room.exit_left = (rollPercentileTrueFalse(table_dungeon_room_exits.Exit_Left.chance)) ? getDungeonRoomExit() : false;
    room.exit_opposite = (rollPercentileTrueFalse(table_dungeon_room_exits.Exit_Opposite.chance)) ? getDungeonRoomExit() : false;
    room.exit_right = (rollPercentileTrueFalse(table_dungeon_room_exits.Exit_Right.chance)) ? getDungeonRoomExit() : false;

    // Content
    room.trap = (rollPercentileTrueFalse(table_dungeon_room_content.Trap.chance + purpose.trap_chance_modifider)) ? buildTrap() : false;
    room.combat = (rollPercentileTrueFalse(table_dungeon_room_content.Combat.chance + purpose.combat_chance_modifider)) ? getEncounterCombat() : false;
    room.loot = rollPercentileTrueFalse(table_dungeon_room_content.Loot.chance + purpose.loot_chance_modifider);
    room.event = rollPercentileTrueFalse(table_dungeon_room_content.Event.chance + purpose.event_chance_modifider);

    // State
    room.state = table_dungeon_room_state[getRandomInt(1, table_dungeon_room_state_count)].state;

    // Purpose
    return room;
}

function getDungeonRoomExit() {
    var exitType = table_dungeon_room_exit_type[getRandomInt(1, table_dungeon_room_exit_type_count)].type;

    var exit = {};

    switch (exitType) {
        case "passage":
            exit = table_dungeon_passage_width[getRandomInt(1, table_dungeon_passage_width_count)].width + " feet wide, 10 feet long passage";
            break;
        case "door":
            exit = buildDungeonDoor();
            break;
        case "stair":
            exit = buildDungeonStair();
            break;
        default:
            throw "Exit Type not recognised."
            break;
    }

    return exit;
}

function getDungeonRoomPurpose() {

    var purpose = {};

    var dungeonType = getDungeonTypeInput();
    dungeonType = (dungeonType === "Random") ? table_dungeon_purpose[getRandomInt(1, table_dungeon_purpose_count)].purpose : dungeonType;
    switch (dungeonType) {
        case "Death trap":
            purpose = table_dungeon_room_purpose_death_trap[getRandomInt(1, table_dungeon_room_purpose_death_trap_count)];
            break;
        case "Lair":
            purpose = table_dungeon_room_purpose_lair[getRandomInt(1, table_dungeon_room_purpose_lair_count)];
            break;
        case "Maze":
            purpose = table_dungeon_room_purpose_maze[getRandomInt(1, table_dungeon_room_purpose_maze_count)];
            break;
        case "Mine":
            purpose = table_dungeon_room_purpose_mine[getRandomInt(1, table_dungeon_room_purpose_mine_count)];
            break;
        case "Planar gate":
            purpose = table_dungeon_room_purpose_planar_gate[getRandomInt(1, table_dungeon_room_purpose_planar_gate_count)];
            break;
        case "Stronghold":
            purpose = table_dungeon_room_purpose_stronghold[getRandomInt(1, table_dungeon_room_purpose_stronghold_count)];
            break;
        case "Temple":
            purpose = table_dungeon_room_purpose_temple[getRandomInt(1, table_dungeon_room_purpose_temple_count)];
            break;
        case "Tomb":
            purpose = table_dungeon_room_purpose_tomb[getRandomInt(1, table_dungeon_room_purpose_tomb_count)];
            break;
        case "Treasure vault":
            purpose = table_dungeon_room_purpose_treasure_vault[getRandomInt(1, table_dungeon_room_purpose_treasure_vault_count)];
            break;
        default:
            throw "Dungeon Room Purpose not recognised."
            break;
    }

    return purpose;
}

function setDungeonRoom(room) {
    var roomString = "";

    roomString += room.size + " feet " + room.shape + " " + room.purpose + ", " + room.state;

    if (room.exit_left) {
        roomString += "</br /></br />On the left wall is a " + room.exit_left;
    }

    if (room.exit_opposite) {
        roomString += "</br /></br />On the opposite wall is a " + room.exit_opposite;
    }

    if (room.exit_right) {
        roomString += "</br /></br />On the right wall is a " + room.exit_right;
    }

    if (room.trap) {
        roomString += "</br /></br />Room has a " + room.trap;
    }

    if (room.combat) {
        roomString += "</br /></br />" + room.combat + " combat encounter in room";
    }

    if (room.loot) {
        roomString += "</br /></br />Loot found in room";
    }

    if (room.event) {
        roomString += "</br /></br />Random event occurs in passage";
        roomString += initiateEvent().replace("Random Event", "");
    }

    return roomString;
}

function getDungeonStair() {
    var stair = {};

    stair.size = table_dungeon_stair_size[getRandomInt(1, table_dungeon_stair_size_count)].size;
    stair.direction = table_dungeon_stair_direction[getRandomInt(1, table_dungeon_stair_direction_count)].direction;
    stair.trap = (rollPercentileTrueFalse(table_dungeon_stair_content.trap.chance)) ? buildTrap("stair") : false;
    stair.event = (rollPercentileTrueFalse(table_dungeon_stair_content.event.chance)) ? initiateEvent().replace("Random Event", "") : false;
    stair.combat = (rollPercentileTrueFalse(table_dungeon_stair_content.combat.chance)) ? getEncounterCombat() : false;
    stair.loot = (rollPercentileTrueFalse(table_dungeon_stair_content.loot.chance)) ? true : false;

    return stair;
}

function setDungeonStair(stair) {
    console.log(stair);
    var stairString = "";

    stairString += stair.size + " feet stair going " + stair.direction;

    if (stair.trap) {
        stairString += "<br />Stair contains a " + stair.trap;
    }

    if (stair.event) {
        stairString += "<br />A random event occurs on stair" + stair.event;
    }

    if (stair.combat) {
        stairString += "<br />Stair contains " + stair.combat + " combat encounter";
    }

    if (stair.loot) {
        stairString += "<br />Loot found on stair";
    }

    console.log(stairString);
    return stairString;
}

function buildDungeonStair() {
    var stair = getDungeonStair();
    stair = setDungeonStair(stair);
    return stair
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
        "purpose": "Temple",
        "description": "This dungeon is consecrated to a deity or other planar entity. The entity’s worshipers control the dungeon and conduct their rites there."
    },
    "16": {
        "purpose": "Temple",
        "description": "This dungeon is consecrated to a deity or other planar entity. The entity’s worshipers control the dungeon and conduct their rites there."
    },
    "17": {
        "purpose": "Temple",
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


// Door Tables

const table_dungeon_door_type = {
    "1": {
        "type": "Wooden door",
        "locked": 10,
        "trapped": 10
    },
    "2": {
        "type": "Wooden door",
        "locked": 10,
        "trapped": 10
    },
    "3": {
        "type": "Wooden door",
        "locked": 10,
        "trapped": 10
    },
    "4": {
        "type": "Wooden door",
        "locked": 10,
        "trapped": 10
    },
    "5": {
        "type": "Wooden door",
        "locked": 10,
        "trapped": 10
    },
    "6": {
        "type": "Wooden door",
        "locked": 10,
        "trapped": 10
    },
    "7": {
        "type": "Stone door",
        "locked": 15,
        "trapped": 15
    },
    "8": {
        "type": "Iron door",
        "locked": 20,
        "trapped": 20
    },
    "9": {
        "type": "Portcullis",
        "locked": 25,
        "trapped": 25
    },
    "10": {
        "type": "Secret door",
        "locked": 50,
        "trapped": 50
    }
};

const table_dungeon_door_type_count = Object.keys(table_dungeon_door_type).length;

const table_dungeon_door_width = {
    "1": {
        "width": 5
    },
    "2": {
        "width": 10
    }
};

const table_dungeon_door_width_count = Object.keys(table_dungeon_door_width).length;

const table_dungeon_passage_type = {
    "1": {
        "type": "continues straight 30 ft., no doors or side passages"
    },
    "2": {
        "type": "continues straight 30 ft., no doors or side passages"
    },
    "3": {
        "type": "continues straight 20 ft., door to the right, then an additional 10 ft. ahead"
    },
    "4": {
        "type": "continues straight 20 ft., door to the left, then an additional 10 ft. ahead"
    },
    "5": {
        "type": "continues straight 20 ft.; passage ends in a door"
    },
    "6": {
        "type": "continues straight 20 ft., side passage to the right, then an additional 10 ft. ahead"
    },
    "7": {
        "type": "continues straight 20 ft., side passage to the right, then an additional 10 ft. ahead"
    },
    "8": {
        "type": "continues straight 20 ft., side passage to the left, then an additional 10 ft. ahead"
    },
    "9": {
        "type": "continues straight 20 ft., side passage to the left, then an additional 10 ft. ahead"
    },
    "10": {
        "type": "continues straight 20 ft., comes to a dead end"
    },
    "11": {
        "type": "continues straight 20 ft., then the passage turns left and continuess 10 ft."
    },
    "12": {
        "type": "continues straight 20 ft., then the passage turns left and continuess 10 ft."
    },
    "13": {
        "type": "continues straight 20 ft., then the passage turns right and continues 10 ft."
    },
    "14": {
        "type": "continues straight 20 ft., then the passage turns right and continues 10 ft."
    },
    "15": {
        "type": "Room"
    },
    "16": {
        "type": "Room"
    },
    "17": {
        "type": "Room"
    },
    "18": {
        "type": "Room"
    },
    "19": {
        "type": "Room"
    },
    "20": {
        "type": "Stairs"
    }
};


// Passage Tables

const table_dungeon_passage_type_count = Object.keys(table_dungeon_passage_type).length;

const table_dungeon_passage_width = {
    "1": {
        "width": 5
    },
    "2": {
        "width": 10
    }
};

const table_dungeon_passage_width_count = Object.keys(table_dungeon_passage_width).length;

const table_dungeon_passage_content = {
    "Trap": {
        "chance": 10
    },
    "Event": {
        "chance": 10
    },
    "Combat": {
        "chance": 25
    },
    "Loot": {
        "chance": 10
    }
};

const table_dungeon_passage_content_count = Object.keys(table_dungeon_passage_content).length;



// Room Tables

const table_dungeon_room_shape_size = {
    "1": {
        "shape": "square",
        "size": "20 x 20"
    },
    "2": {
        "shape": "square",
        "size": "20 x 20"
    },
    "3": {
        "shape": "square",
        "size": "30 x 30"
    },
    "4": {
        "shape": "square",
        "size": "30 x 30"
    },
    "5": {
        "shape": "square",
        "size": "40 x 40"
    },
    "6": {
        "shape": "square",
        "size": "40 x 40"
    },
    "7": {
        "shape": "rectangle",
        "size": "20 x 30"
    },
    "8": {
        "shape": "rectangle",
        "size": "20 x 30"
    },
    "9": {
        "shape": "rectangle",
        "size": "20 x 30"
    },
    "10": {
        "shape": "rectangle",
        "size": "30 x 40"
    },
    "11": {
        "shape": "rectangle",
        "size": "30 x 40"
    },
    "12": {
        "shape": "rectangle",
        "size": "40 x 50"
    },
    "13": {
        "shape": "rectangle",
        "size": "40 x 50"
    },
    "14": {
        "shape": "circle",
        "size": 30
    },
    "15": {
        "shape": "circle",
        "size": 30
    },
    "16": {
        "shape": "circle",
        "size": 50
    },
    "17": {
        "shape": "diamond",
        "size": 35
    },
    "18": {
        "shape": "octagon",
        "size": "45 x 50"
    },
    "19": {
        "shape": "semi circle",
        "size": "40 x 30"
    },
    "20": {
        "shape": "trapezoid",
        "size": "50 x 35"
    }
};

const table_dungeon_room_shape_size_count = Object.keys(table_dungeon_room_shape_size).length;

const table_dungeon_room_exits = {
    "Exit_Left": {
        "chance": 35
    },
    "Exit_Opposite": {
        "chance": 35
    },
    "Exit_Right": {
        "chance": 35
    }
};

const table_dungeon_room_exits_count = Object.keys(table_dungeon_room_exits).length;

const table_dungeon_room_exit_type = {
    "1": {
        "type": "door"
    },
    "2": {
        "type": "door"
    },
    "3": {
        "type": "door"
    },
    "4": {
        "type": "door"
    },
    "5": {
        "type": "passage"
    },
    "6": {
        "type": "passage"
    },
    "7": {
        "type": "passage"
    },
    "8": {
        "type": "passage"
    },
    "9": {
        "type": "passage"
    },
    "10": {
        "type": "stair"
    }
};

const table_dungeon_room_exit_type_count = Object.keys(table_dungeon_room_exit_type).length;

const table_dungeon_room_content = {
    "Trap": {
        "chance": 10
    },
    "Event": {
        "chance": 10
    },
    "Combat": {
        "chance": 25
    },
    "Loot": {
        "chance": 10
    }
};

const table_dungeon_room_state = {
    "1": {
        "state": "ceiling is partially collapsed with rubble strewn across the room"
    },
    "2": {
        "state": "ceiling is partially collapsed with rubble strewn across the room"
    },
    "3": {
        "state": "ceiling is partially collapsed with rubble strewn across the room"
    },
    "4": {
        "state": "floor is partially collapsed and littered with holes"
    },
    "5": {
        "state": "floor is partially collapsed and littered with holes"
    },
    "6": {
        "state": "contents mostly burned and covered with ashes"
    },
    "7": {
        "state": "contents mostly burned and covered with ashes"
    },
    "8": {
        "state": "has been used as a campsite"
    },
    "9": {
        "state": "has been used as a campsite"
    },
    "10": {
        "state": "there is a pool of water and room’s contents are water damaged"
    },
    "11": {
        "state": "there is a pool of water and room’s contents are water damaged"
    },
    "12": {
        "state": "furniture is wrecked but still present"
    },
    "13": {
        "state": "furniture is wrecked but still present"
    },
    "14": {
        "state": "furniture is wrecked but still present"
    },
    "15": {
        "state": "furniture is wrecked but still present"
    },
    "16": {
        "state": "furniture is wrecked but still present"
    },
    "17": {
        "state": "has been converted to some other use"
    },
    "18": {
        "state": "has been converted to some other use"
    },
    "19": {
        "state": "has been stripped bare"
    },
    "20": {
        "state": "is in pristine state"
    }
};

const table_dungeon_room_state_count = Object.keys(table_dungeon_room_state).length;

const table_dungeon_room_purpose_death_trap = {
    "1": {
        "purpose": "antechamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "2": {
        "purpose": "guardroom fortified against intruders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "3": {
        "purpose": "guardroom fortified against intruders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "4": {
        "purpose": "guardroom fortified against intruders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "5": {
        "purpose": "guardroom fortified against intruders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "6": {
        "purpose": "guardroom fortified against intruders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "7": {
        "purpose": "guardroom fortified against intruders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "8": {
        "purpose": "guardroom fortified against intruders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "9": {
        "purpose": "vault for holding important treasures",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 100
    },
    "10": {
        "purpose": "vault for holding important treasures",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 100
    },
    "11": {
        "purpose": "vault for holding important treasures",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 100
    },
    "12": {
        "purpose": "trap room designed to kill or capture creatures",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "13": {
        "purpose": "trap room designed to kill or capture creatures",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "14": {
        "purpose": "trap room designed to kill or capture creatures",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "15": {
        "purpose": "trap room designed to kill or capture creatures",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "16": {
        "purpose": "trap room designed to kill or capture creatures",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "17": {
        "purpose": "main hall",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    }
};

const table_dungeon_room_purpose_death_trap_count = Object.keys(table_dungeon_room_purpose_death_trap).length;

const table_dungeon_room_purpose_lair = {
    "1": {
        "purpose": "armory stocked with weapons and armor",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 100
    },
    "2": {
        "purpose": "audience chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "3": {
        "purpose": "banquet room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "4": {
        "purpose": "barracks",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 50,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "5": {
        "purpose": "bedroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "6": {
        "purpose": "chapel",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 20,
        "loot_chance_modifider": 0
    },
    "7": {
        "purpose": "cistern",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "8": {
        "purpose": "guardroom for the defense of the lair",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "9": {
        "purpose": "guardroom for the defense of the lair",
        "trap_chance_modifider": 20,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "10": {
        "purpose": "kennel",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 60,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "11": {
        "purpose": "kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 15
    },
    "12": {
        "purpose": "prison",
        "trap_chance_modifider": 20,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "13": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 15
    },
    "14": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "15": {
        "purpose": "throne room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 50,
        "feature_chance_modifider": 30,
        "loot_chance_modifider": 0
    },
    "16": {
        "purpose": "torture chamber",
        "trap_chance_modifider": 20,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "17": {
        "purpose": "training and exercise room",
        "trap_chance_modifider": 20,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "18": {
        "purpose": "trophy room",
        "trap_chance_modifider": 30,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 30
    },
    "19": {
        "purpose": "latrine",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 5,
        "combat_chance_modifider": 10,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "20": {
        "purpose": "workshop",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 15,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 20
    }
};

const table_dungeon_room_purpose_lair_count = Object.keys(table_dungeon_room_purpose_lair).length;

table_dungeon_room_purpose_maze = {
    "1": {
        "purpose": "conjuring room",
        "trap_chance_modifider": 20,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 50,
        "loot_chance_modifider": 10
    },
    "2": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "3": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "4": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "5": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "6": {
        "purpose": "lair",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "7": {
        "purpose": "lair",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "8": {
        "purpose": "lair",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "9": {
        "purpose": "lair",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "10": {
        "purpose": "lair",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "11": {
        "purpose": "prison",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "12": {
        "purpose": "shrine",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 30,
        "loot_chance_modifider": 30
    },
    "13": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "14": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "15": {
        "purpose": "trap room",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "16": {
        "purpose": "trap room",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "17": {
        "purpose": "trap room",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "18": {
        "purpose": "trap room",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "19": {
        "purpose": "well that provides drinking water",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "20": {
        "purpose": "workshop",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    }
};

const table_dungeon_room_purpose_maze_count = Object.keys(table_dungeon_room_purpose_maze).length;

table_dungeon_room_purpose_mine = {
    "1": {
        "purpose": "barracks for miners",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 50,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "2": {
        "purpose": "barracks for miners",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 50,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "3": {
        "purpose": "bedroom for a supervisor or manager",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 35,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "4": {
        "purpose": "chapel",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 25
    },
    "5": {
        "purpose": "cistern providing drinking water",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "6": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "7": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "8": {
        "purpose": "kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "9": {
        "purpose": "laboratory",
        "trap_chance_modifider": 10,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 10,
        "feature_chance_modifider": 20,
        "loot_chance_modifider": 20
    },
    "10": {
        "purpose": "lode where metal ore is mined",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": "",
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "11": {
        "purpose": "lode where metal ore is mined",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "12": {
        "purpose": "lode where metal ore is mined",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "13": {
        "purpose": "lode where metal ore is mined",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "14": {
        "purpose": "lode where metal ore is mined",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "15": {
        "purpose": "lode where metal ore is mined",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "16": {
        "purpose": "office used by the mine supervisor",
        "trap_chance_modifider": 20,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "17": {
        "purpose": "smithy",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 15
    },
    "18": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "19": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "20": {
        "purpose": "vault",
        "trap_chance_modifider": 40,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    }
};

const table_dungeon_room_purpose_mine_count = Object.keys(table_dungeon_room_purpose_mine).length;

table_dungeon_room_purpose_planar_gate = {
    "1": {
        "purpose": "Decorated foyer or antechamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 0
    },
    "2": {
        "purpose": "Decorated foyer or antechamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 0
    },
    "3": {
        "purpose": "Decorated foyer or antechamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 0
    },
    "4": {
        "purpose": "Armory used by the portal’s guardians",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 10,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "5": {
        "purpose": "Armory used by the portal’s guardians",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 10,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "6": {
        "purpose": "Armory used by the portal’s guardians",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 10,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "7": {
        "purpose": "Armory used by the portal’s guardians",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 10,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "8": {
        "purpose": "Armory used by the portal’s guardians",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 10,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "9": {
        "purpose": "Audience chamber for receiving visitors",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 20,
        "loot_chance_modifider": 0
    },
    "10": {
        "purpose": "Audience chamber for receiving visitors",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 20,
        "loot_chance_modifider": 0
    },
    "11": {
        "purpose": "Barracks used by the portal’s guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "12": {
        "purpose": "Barracks used by the portal’s guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "13": {
        "purpose": "Barracks used by the portal’s guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "14": {
        "purpose": "Barracks used by the portal’s guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "15": {
        "purpose": "Barracks used by the portal’s guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "16": {
        "purpose": "Barracks used by the portal’s guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "17": {
        "purpose": "Barracks used by the portal’s guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "18": {
        "purpose": "Barracks used by the portal’s guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "19": {
        "purpose": "Barracks used by the portal’s guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "20": {
        "purpose": "Bedroom for use by the high-ranking members of the order that guards the portal",
        "trap_chance_modifider": 10,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 15,
        "feature_chance_modifider": 15,
        "loot_chance_modifider": 25
    },
    "21": {
        "purpose": "Bedroom for use by the high-ranking members of the order that guards the portal",
        "trap_chance_modifider": 10,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 15,
        "feature_chance_modifider": 15,
        "loot_chance_modifider": 25
    },
    "22": {
        "purpose": "Bedroom for use by the high-ranking members of the order that guards the portal",
        "trap_chance_modifider": 10,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 15,
        "feature_chance_modifider": 15,
        "loot_chance_modifider": 25
    },
    "23": {
        "purpose": "Bedroom for use by the high-ranking members of the order that guards the portal",
        "trap_chance_modifider": 10,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 15,
        "feature_chance_modifider": 15,
        "loot_chance_modifider": 25
    },
    "24": {
        "purpose": "Chapel dedicated to a deity or deities related to the portal and its defenders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 25
    },
    "25": {
        "purpose": "Chapel dedicated to a deity or deities related to the portal and its defenders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 25
    },
    "26": {
        "purpose": "Chapel dedicated to a deity or deities related to the portal and its defenders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 25
    },
    "27": {
        "purpose": "Chapel dedicated to a deity or deities related to the portal and its defenders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 25
    },
    "28": {
        "purpose": "Chapel dedicated to a deity or deities related to the portal and its defenders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 25
    },
    "29": {
        "purpose": "Chapel dedicated to a deity or deities related to the portal and its defenders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 25
    },
    "30": {
        "purpose": "Chapel dedicated to a deity or deities related to the portal and its defenders",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 25
    },
    "31": {
        "purpose": "Cistern providing fresh water",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "32": {
        "purpose": "Cistern providing fresh water",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "33": {
        "purpose": "Cistern providing fresh water",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "34": {
        "purpose": "Cistern providing fresh water",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "35": {
        "purpose": "Cistern providing fresh water",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "36": {
        "purpose": "Classroom for use of initiates learning about the portal’s secrets",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 10,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "37": {
        "purpose": "Classroom for use of initiates learning about the portal’s secrets",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 10,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "38": {
        "purpose": "Classroom for use of initiates learning about the portal’s secrets",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 10,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "39": {
        "purpose": "Conjuring room for summoning creatures used to investigate or defend the portal",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "40": {
        "purpose": "Crypt where the remains of those that died guarding the portal are kept",
        "trap_chance_modifider": 30,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 20,
        "loot_chance_modifider": 30
    },
    "41": {
        "purpose": "Crypt where the remains of those that died guarding the portal are kept",
        "trap_chance_modifider": 30,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 20,
        "loot_chance_modifider": 30
    },
    "42": {
        "purpose": "Dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "43": {
        "purpose": "Dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "44": {
        "purpose": "Dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "45": {
        "purpose": "Dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "46": {
        "purpose": "Dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "47": {
        "purpose": "Dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "48": {
        "purpose": "Divination room used to investigate the portal and events tied to it",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 35,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 35
    },
    "49": {
        "purpose": "Divination room used to investigate the portal and events tied to it",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 35,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 35
    },
    "50": {
        "purpose": "Divination room used to investigate the portal and events tied to it",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 35,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 35
    },
    "51": {
        "purpose": "Dormitory for visitors and guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 35,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "52": {
        "purpose": "Dormitory for visitors and guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 35,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "53": {
        "purpose": "Dormitory for visitors and guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 35,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "54": {
        "purpose": "Dormitory for visitors and guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 35,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "55": {
        "purpose": "Dormitory for visitors and guards",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 35,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "56": {
        "purpose": "Anteroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "57": {
        "purpose": "Anteroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "58": {
        "purpose": "Gallery for displaying trophies and objects related to the portal and those that guard it",
        "trap_chance_modifider": 30,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 20,
        "loot_chance_modifider": 30
    },
    "59": {
        "purpose": "Gallery for displaying trophies and objects related to the portal and those that guard it",
        "trap_chance_modifider": 30,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 20,
        "loot_chance_modifider": 30
    },
    "60": {
        "purpose": "Guardroom to protect or watch over the portal",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "61": {
        "purpose": "Guardroom to protect or watch over the portal",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "62": {
        "purpose": "Guardroom to protect or watch over the portal",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "63": {
        "purpose": "Guardroom to protect or watch over the portal",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "64": {
        "purpose": "Guardroom to protect or watch over the portal",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "65": {
        "purpose": "Guardroom to protect or watch over the portal",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "66": {
        "purpose": "Guardroom to protect or watch over the portal",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "67": {
        "purpose": "Guardroom to protect or watch over the portal",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "68": {
        "purpose": "Kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "69": {
        "purpose": "Kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "70": {
        "purpose": "Kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "71": {
        "purpose": "Kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "72": {
        "purpose": "Kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "73": {
        "purpose": "Laboratory for conducting experiments relating to the portal and creatures that emerge from it",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 40,
        "combat_chance_modifider": 25,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "74": {
        "purpose": "Laboratory for conducting experiments relating to the portal and creatures that emerge from it",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 40,
        "combat_chance_modifider": 25,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "75": {
        "purpose": "Laboratory for conducting experiments relating to the portal and creatures that emerge from it",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 40,
        "combat_chance_modifider": 25,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "76": {
        "purpose": "Laboratory for conducting experiments relating to the portal and creatures that emerge from it",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 40,
        "combat_chance_modifider": 25,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "77": {
        "purpose": "Laboratory for conducting experiments relating to the portal and creatures that emerge from it",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 40,
        "combat_chance_modifider": 25,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "78": {
        "purpose": "Library holding books about the portal’s history",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "79": {
        "purpose": "Library holding books about the portal’s history",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "80": {
        "purpose": "Library holding books about the portal’s history",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "81": {
        "purpose": "Pen or prison for holding captives or creatures that emerge from the portal",
        "trap_chance_modifider": 15,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 30,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "82": {
        "purpose": "Pen or prison for holding captives or creatures that emerge from the portal",
        "trap_chance_modifider": 15,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 30,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "83": {
        "purpose": "Pen or prison for holding captives or creatures that emerge from the portal",
        "trap_chance_modifider": 15,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 30,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "84": {
        "purpose": "Pen or prison for holding captives or creatures that emerge from the portal",
        "trap_chance_modifider": 15,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 30,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "85": {
        "purpose": "Pen or prison for holding captives or creatures that emerge from the portal",
        "trap_chance_modifider": 15,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 30,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "86": {
        "purpose": "Planar junction, where the gate to another plane once stood",
        "trap_chance_modifider": 15,
        "event_chance_modifider": 40,
        "combat_chance_modifider": 25,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "87": {
        "purpose": "Planar junction, where the gate to another plane once stood",
        "trap_chance_modifider": 15,
        "event_chance_modifider": 40,
        "combat_chance_modifider": 25,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "88": {
        "purpose": "Storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "89": {
        "purpose": "Storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "90": {
        "purpose": "Storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "91": {
        "purpose": "Strong room or vault, for guarding valuable treasures connected to the portal or funds used to pay the planar gate’s guardians",
        "trap_chance_modifider": 30,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 100
    },
    "92": {
        "purpose": "Study",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "93": {
        "purpose": "Study",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "94": {
        "purpose": "Torture chamber, for questioning creatures that pass through the portal or that attempt to clandestinely use it",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 30,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "95": {
        "purpose": "Latrine or bath",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "96": {
        "purpose": "Latrine or bath",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "97": {
        "purpose": "Latrine or bath",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "98": {
        "purpose": "Latrine or bath",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "99": {
        "purpose": "Latrine or bath",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "100": {
        "purpose": "Workshop for constructing tools and gear needed to study the portal",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    }
};

const table_dungeon_room_purpose_planar_gate_count = Object.keys(table_dungeon_room_purpose_planar_gate).length;

table_dungeon_room_purpose_stronghold = {
    "1": {
        "purpose": "antechamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "2": {
        "purpose": "antechamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "3": {
        "purpose": "armory",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "4": {
        "purpose": "armory",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "5": {
        "purpose": "armory",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "6": {
        "purpose": "audience chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 25,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 0
    },
    "7": {
        "purpose": "kennel",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "8": {
        "purpose": "mess hall",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "9": {
        "purpose": "mess hall",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "10": {
        "purpose": "mess hall",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "11": {
        "purpose": "barracks",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 80,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 50
    },
    "12": {
        "purpose": "barracks",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 80,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 50
    },
    "13": {
        "purpose": "barracks",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 80,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 50
    },
    "14": {
        "purpose": "barracks",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 80,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 50
    },
    "15": {
        "purpose": "barracks",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 80,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 50
    },
    "16": {
        "purpose": "bath",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 10
    },
    "17": {
        "purpose": "bedroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "18": {
        "purpose": "chapel",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 40,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "19": {
        "purpose": "cistern providing drinking water",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "20": {
        "purpose": "cistern providing drinking water",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "21": {
        "purpose": "cistern providing drinking water",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "22": {
        "purpose": "dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "23": {
        "purpose": "dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "24": {
        "purpose": "dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "25": {
        "purpose": "dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "26": {
        "purpose": "dressing room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "27": {
        "purpose": "trophy room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "28": {
        "purpose": "trophy room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "29": {
        "purpose": "trophy room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "30": {
        "purpose": "entertainment room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 0
    },
    "31": {
        "purpose": "entertainment room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 0
    },
    "32": {
        "purpose": "entertainment room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 0
    },
    "33": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "34": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "35": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "36": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "37": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "38": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "39": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "40": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "41": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "42": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "43": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "44": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "45": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "46": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "47": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "48": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "49": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "50": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "51": {
        "purpose": "kennel",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 60,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "52": {
        "purpose": "kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "53": {
        "purpose": "kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "54": {
        "purpose": "kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "55": {
        "purpose": "kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "56": {
        "purpose": "kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "57": {
        "purpose": "library with an extensive collection of rare books",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "58": {
        "purpose": "library with an extensive collection of rare books",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "59": {
        "purpose": "library with an extensive collection of rare books",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "60": {
        "purpose": "library with an extensive collection of rare books",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "61": {
        "purpose": "library with an extensive collection of rare books",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "62": {
        "purpose": "entertainment room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "63": {
        "purpose": "pantry",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "64": {
        "purpose": "pantry",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "65": {
        "purpose": "pantry",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "66": {
        "purpose": "pantry",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "67": {
        "purpose": "pantry",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "68": {
        "purpose": "pantry",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "69": {
        "purpose": "pantry",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "70": {
        "purpose": "sitting room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 0
    },
    "71": {
        "purpose": "sitting room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 0
    },
    "72": {
        "purpose": "sitting room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 0
    },
    "73": {
        "purpose": "sitting room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 0
    },
    "74": {
        "purpose": "sitting room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 0
    },
    "75": {
        "purpose": "stable",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "76": {
        "purpose": "stable",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "77": {
        "purpose": "stable",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "78": {
        "purpose": "stable",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "79": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "80": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "81": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "82": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "83": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "84": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "85": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "86": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "87": {
        "purpose": "vault",
        "trap_chance_modifider": 40,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 100
    },
    "88": {
        "purpose": "study",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "89": {
        "purpose": "study",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "90": {
        "purpose": "study",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "91": {
        "purpose": "study",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "92": {
        "purpose": "study",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "93": {
        "purpose": "throne room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 50,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "94": {
        "purpose": "throne room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "95": {
        "purpose": "throne room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "96": {
        "purpose": "latrine",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "97": {
        "purpose": "latrine",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "98": {
        "purpose": "bath",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "99": {
        "purpose": "crypt",
        "trap_chance_modifider": 25,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 25,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 25
    },
    "100": {
        "purpose": "crypt",
        "trap_chance_modifider": 25,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 25,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 25
    }
};

const table_dungeon_room_purpose_stronghold_count = Object.keys(table_dungeon_room_purpose_stronghold).length;

table_dungeon_room_purpose_temple = {
    "1": {
        "purpose": "armory",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "2": {
        "purpose": "armory",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "3": {
        "purpose": "armory",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "4": {
        "purpose": "audience chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "5": {
        "purpose": "audience chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "6": {
        "purpose": "banquet hall",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "7": {
        "purpose": "banquet hall",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "8": {
        "purpose": "barracks",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 60,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "9": {
        "purpose": "barracks",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 60,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "10": {
        "purpose": "barracks",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 60,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "11": {
        "purpose": "acolyte cells",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "12": {
        "purpose": "acolyte cells",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "13": {
        "purpose": "acolyte cells",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "14": {
        "purpose": "acolyte cells",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "15": {
        "purpose": "ritual chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 10
    },
    "16": {
        "purpose": "ritual chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 10
    },
    "17": {
        "purpose": "ritual chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 10
    },
    "18": {
        "purpose": "ritual chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 10
    },
    "19": {
        "purpose": "ritual chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 10
    },
    "20": {
        "purpose": "ritual chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 10
    },
    "21": {
        "purpose": "ritual chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 10
    },
    "22": {
        "purpose": "ritual chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 10
    },
    "23": {
        "purpose": "ritual chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 10
    },
    "24": {
        "purpose": "ritual chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 25,
        "loot_chance_modifider": 10
    },
    "25": {
        "purpose": "minor shrine",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 5,
        "loot_chance_modifider": 5
    },
    "26": {
        "purpose": "minor shrine",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 5,
        "loot_chance_modifider": 5
    },
    "27": {
        "purpose": "minor shrine",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 5,
        "loot_chance_modifider": 5
    },
    "28": {
        "purpose": "minor shrine",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 5,
        "loot_chance_modifider": 5
    },
    "29": {
        "purpose": "classroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "30": {
        "purpose": "classroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "31": {
        "purpose": "classroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "32": {
        "purpose": "conjuring room",
        "trap_chance_modifider": 10,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "33": {
        "purpose": "conjuring room",
        "trap_chance_modifider": 10,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "34": {
        "purpose": "conjuring room",
        "trap_chance_modifider": 10,
        "event_chance_modifider": 30,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "35": {
        "purpose": "crypt",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 60
    },
    "36": {
        "purpose": "crypt",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 60
    },
    "37": {
        "purpose": "crypt",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 60
    },
    "38": {
        "purpose": "crypt",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 60
    },
    "39": {
        "purpose": "crypt",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 60
    },
    "40": {
        "purpose": "crypt",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 60
    },
    "41": {
        "purpose": "dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "42": {
        "purpose": "dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "43": {
        "purpose": "dining room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "44": {
        "purpose": "divination room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "45": {
        "purpose": "divination room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "46": {
        "purpose": "divination room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 30
    },
    "47": {
        "purpose": "dormitory",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "48": {
        "purpose": "dormitory",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "49": {
        "purpose": "dormitory",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "50": {
        "purpose": "dormitory",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "51": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "52": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "53": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "54": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "55": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "56": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "57": {
        "purpose": "kennel",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 60,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "58": {
        "purpose": "kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "59": {
        "purpose": "kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "60": {
        "purpose": "kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 10
    },
    "61": {
        "purpose": "library",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "62": {
        "purpose": "library",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "63": {
        "purpose": "library",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "64": {
        "purpose": "library",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "65": {
        "purpose": "library",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "66": {
        "purpose": "prison",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "67": {
        "purpose": "prison",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "68": {
        "purpose": "prison",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 20,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "75": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 15
    },
    "76": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 15
    },
    "77": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 15
    },
    "78": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 15
    },
    "79": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 15
    },
    "80": {
        "purpose": "vault",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 100
    },
    "81": {
        "purpose": "torture chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 15,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "82": {
        "purpose": "torture chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 15,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "83": {
        "purpose": "trophy room",
        "trap_chance_modifider": 50,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "84": {
        "purpose": "trophy room",
        "trap_chance_modifider": 50,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "85": {
        "purpose": "trophy room",
        "trap_chance_modifider": 50,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "86": {
        "purpose": "trophy room",
        "trap_chance_modifider": 50,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "87": {
        "purpose": "trophy room",
        "trap_chance_modifider": 50,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "88": {
        "purpose": "trophy room",
        "trap_chance_modifider": 50,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "89": {
        "purpose": "trophy room",
        "trap_chance_modifider": 50,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "90": {
        "purpose": "latrine",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "91": {
        "purpose": "well",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "92": {
        "purpose": "well",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "93": {
        "purpose": "well",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "94": {
        "purpose": "well",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "95": {
        "purpose": "workshop",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 5,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 25
    },
    "96": {
        "purpose": "workshop",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 5,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 25
    },
    "97": {
        "purpose": "workshop",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 5,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 25
    },
    "98": {
        "purpose": "workshop",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 5,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 25
    },
    "99": {
        "purpose": "workshop",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 5,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 25
    },
    "100": {
        "purpose": "workshop",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 5,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 25
    }
};

const table_dungeon_room_purpose_temple_count = Object.keys(table_dungeon_room_purpose_temple).length;

table_dungeon_room_purpose_tomb = {
    "1": {
        "purpose": "antechamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "2": {
        "purpose": "chapel",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 15
    },
    "3": {
        "purpose": "chapel",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 15
    },
    "4": {
        "purpose": "crypt",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 5,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "5": {
        "purpose": "crypt",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 5,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "6": {
        "purpose": "crypt",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 5,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "7": {
        "purpose": "crypt",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 5,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "8": {
        "purpose": "crypt",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 5,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 5
    },
    "9": {
        "purpose": "divination room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 25,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 10,
        "loot_chance_modifider": 20
    },
    "10": {
        "purpose": "false crypt",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "11": {
        "purpose": "vault",
        "trap_chance_modifider": 15,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 20,
        "loot_chance_modifider": 60
    },
    "12": {
        "purpose": "grant crypt",
        "trap_chance_modifider": 30,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 60
    },
    "13": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "14": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "15": {
        "purpose": "ritual room",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "16": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "17": {
        "purpose": "storage",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "18": {
        "purpose": "grand crypt",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 100
    },
    "19": {
        "purpose": "workshop",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "20": {
        "purpose": "workshop",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    }
};

const table_dungeon_room_purpose_tomb_count = Object.keys(table_dungeon_room_purpose_tomb).length;

table_dungeon_room_purpose_treasure_vault = {
    "1": {
        "purpose": "antechamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "2": {
        "purpose": "armory",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 40
    },
    "3": {
        "purpose": "barracks",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 50,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "4": {
        "purpose": "barracks",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 50,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 20
    },
    "5": {
        "purpose": "cistern providing fresh water",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "6": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "7": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "8": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "9": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 100,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "10": {
        "purpose": "kennel",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 30,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "11": {
        "purpose": "kitchen",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "12": {
        "purpose": "guardroom",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 0,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "13": {
        "purpose": "prison",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "14": {
        "purpose": "vault",
        "trap_chance_modifider": 50,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 50,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 100
    },
    "15": {
        "purpose": "vault",
        "trap_chance_modifider": 50,
        "event_chance_modifider": 10,
        "combat_chance_modifider": 50,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 100
    },
    "16": {
        "purpose": "torture chamber",
        "trap_chance_modifider": 0,
        "event_chance_modifider": 15,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "17": {
        "purpose": "trap room",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "18": {
        "purpose": "trap room",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "19": {
        "purpose": "trap room",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    },
    "20": {
        "purpose": "trap room",
        "trap_chance_modifider": 100,
        "event_chance_modifider": 20,
        "combat_chance_modifider": 0,
        "feature_chance_modifider": 0,
        "loot_chance_modifider": 0
    }
};

const table_dungeon_room_purpose_treasure_vault_count = Object.keys(table_dungeon_room_purpose_treasure_vault).length;


// Stair Tables

const table_dungeon_stair_size = {
    "1": {
        "size": "5 x 5"
    },
    "2": {
        "size": "5 x 10"
    },
    "3": {
        "size": "10 x 10"
    }
};

const table_dungeon_stair_size_count = Object.keys(table_dungeon_stair_size).length;

const table_dungeon_stair_direction = {
    "1": {
        "direction": "up"
    },
    "2": {
        "direction": "down"
    }
};

const table_dungeon_stair_direction_count = Object.keys(table_dungeon_stair_direction).length;

const table_dungeon_stair_content = {
    "trap": {
        "chance": 5
    },
    "event": {
        "chance": 5
    },
    "combat": {
        "chance": 5
    },
    "loot": {
        "chance": 5
    }
};