// Wilderness Event Handlers

button_feature_wilderness_travel.onclick = function () {
    showFeatureDiv(div_feature_wilderness_travel);
    applyActiveStyleToFeatureButton(this);
}

button_generate_travel.onclick = function () {
    writeToJournal(generateTravel());
}

// Wilderness Functions

function generateTravel() {
    var travel = getTravel();
    return setTravel(travel);
}

function getTravel() {
    var travel = {};

    var terrainType = getTravelTerrain();

    travel.terrain = terrainType.type;

    var featureType = terrainType.table[getRandomInt(1, Object.keys(terrainType.table).length)].feature;
    var featureTemplate = getTravelFeature(featureType);

    travel.feature = featureTemplate.feature;
    travel.combat = (rollPercentileTrueFalse(table_wilderness_travel_content.Combat.chance + featureTemplate.combat_chance_modifier)) ? getCombat() : false;
    travel.event = (rollPercentileTrueFalse(table_wilderness_travel_content.Event.chance + featureTemplate.event_chance_modifier)) ? generateEvent().replace("Random Event", "") : false;



    // Get feature details

    return travel;
}

function getTravelTerrain() {
    var inputTerrainType = getTravelTerrainInput();

    if (inputTerrainType === "random") {
        return table_wilderness_terrain_type[getRandomInt(1, table_wilderness_terrain_type_count)];
    } else {
        for (i = 1; i <= table_wilderness_terrain_type_count; i++) {
            var currentTerrainRecord = table_wilderness_terrain_type[i];
            if (currentTerrainRecord.type === inputTerrainType) {
                return currentTerrainRecord;
            }
        }
    }
}

function getTravelTerrainInput() {
    return input_wilderness_travel_terrain.options[input_wilderness_travel_terrain.selectedIndex].value;
}

function getTravelFeature(type) {

    var travelFeature = {};
    if (type == "no feature" || type == "monster lair") {
        travelFeature.feature = type;
        travelFeature.secondary_feature = false;
        travelFeature.event_chance_modifier = 0;
        travelFeature.combat_chance_modifier = (type === "no feature") ? 0 : 100;
        return travelFeature;
    }


    var travelFeature = table_wilderness_feature_type[type].table;
    travelFeature = travelFeature[getRandomInt(1, Object.keys(travelFeature).length)];
    return travelFeature;
}

function setTravel(travel) {
    //travelString = JSON.stringify(travel);    
    var travelString = "";

    travelString += setTravelStringTerrain(travel.terrain);

    // Monster lair
    travelString += (travel.feature === "monster lair") ? "you discover a monster's lair. " : "";



    // Feature
    //travelString += (travel.feature !== "no feature" && travel.feature !== "monster lair") ? setTravelStringFeature() : "";

    if (travel.feature !== "monster lair" && travel.feature !== "no feature") {
        travelString += "you discover " + travel.feature + ". ";
    }

    console.log(travelString[travelString.length - 2]);

    // Combat
    if(travel.combat !== false) {
        var combatString = "you face a " + travel.combat.toLowerCase() + " encounter. ";
        if(travelString[travelString.length - 2] !== ",") {
            combatString = capitalize(combatString);
        }
        travelString += combatString;
    }

    // Event
    if(travel.event !== false) {
        var eventString = "a random event occurs.<br />" + travel.event;
        if(travelString[travelString.length - 2] !== ",") {
            eventString = capitalize(eventString);
        }
        travelString += eventString;
    }

    // Nothing happens

    if(travel.feature  === "no feature" && travel.combat === false && travel.event === false) {
        travelString += "you find nothing new of note.";
    }

    console.log(travel);
    return travelString;
}

function setTravelStringTerrain(terrain) {
    var travelString = "Travelling ";

    switch (terrain) {
        case "arctic":
            travelString += "through arctic terrain, "
            break;
        case "coastal":
            travelString += "along a coast, "
            break;
        case "desert":
            travelString += "though desert terrain, "
            break;
        case "grassland":
            travelString += "through grasslands, "
            break;
        case "forest":
            travelString += "through forest, "
            break;
        case "jungle":
            travelString += "through jungle, "
            break;
        case "hills":
            travelString += "through hilly terrain, "
            break;
        case "mountains":
            travelString += "through mountains, "
            break;
        case "swamp":
            travelString += "through swampy terrain, "
            break;
        default:
            throw "Unknown terrain type passed to setTravelStringTerrain";
    }

    return travelString
}

// Wilderness Tables

// Terrain Tables

const table_wilderness_terrain_arctic = {
    "1": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "2": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "3": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "4": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "5": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "6": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "7": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "8": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "9": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "10": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "11": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "12": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "13": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "14": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "15": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "16": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "17": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "18": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "19": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "20": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "21": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "22": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "23": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "24": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "25": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "26": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "27": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "28": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "29": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "30": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "31": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "32": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "33": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "34": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "35": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "36": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "37": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "38": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "39": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "40": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "41": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "42": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "43": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "44": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "45": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "46": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "47": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "48": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "49": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "50": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "51": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "52": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "53": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "54": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "55": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "56": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "57": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "58": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "59": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "60": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "61": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "62": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "63": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "64": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "65": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "66": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "67": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "68": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "69": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "70": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "71": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "72": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "73": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "74": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "75": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "76": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "77": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "78": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "79": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "80": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "81": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "82": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "83": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "84": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "85": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "86": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "87": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "88": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "89": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "90": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "91": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "92": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "93": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "94": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "95": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "96": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "97": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "98": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "99": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "100": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    }
};

const table_wilderness_terrain_arctic_count = Object.keys(table_wilderness_terrain_arctic).length;

const table_wilderness_terrain_coastal = {
    "1": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "2": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "3": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "4": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "5": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "6": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "7": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "8": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "9": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "10": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "11": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "12": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "13": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "14": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "15": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "16": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "17": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "18": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "19": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "20": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "21": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "22": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "23": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "24": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "25": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "26": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "27": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "28": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "29": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "30": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "31": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "32": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "33": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "34": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "35": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "36": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "37": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "38": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "39": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "40": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "41": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "42": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "43": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "44": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "45": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "46": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "47": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "48": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "49": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "50": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "51": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "52": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "53": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "54": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "55": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "56": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "57": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "58": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "59": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "60": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "61": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "62": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "63": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "64": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "65": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "66": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "67": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "68": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "69": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "70": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "71": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "72": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "73": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "74": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "75": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "76": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "77": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "78": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "79": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "80": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "81": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "82": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "83": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "84": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "85": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "86": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "87": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "88": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "89": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "90": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "91": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "92": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "93": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "94": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "95": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "96": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "97": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "98": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "99": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "100": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    }
};

const table_wilderness_terrain_coastal_count = Object.keys(table_wilderness_terrain_coastal).length;

const table_wilderness_terrain_desert = {
    "1": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "2": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "3": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "4": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "5": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "6": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "7": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "8": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "9": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "10": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "11": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "12": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "13": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "14": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "15": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "16": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "17": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "18": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "19": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "20": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "21": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "22": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "23": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "24": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "25": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "26": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "27": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "28": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "29": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "30": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "31": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "32": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "33": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "34": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "35": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "36": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "37": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "38": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "39": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "40": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "41": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "42": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "43": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "44": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "45": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "46": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "47": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "48": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "49": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "50": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "51": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "52": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "53": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "54": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "55": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "56": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "57": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "58": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "59": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "60": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "61": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "62": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "63": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "64": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "65": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "66": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "67": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "68": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "69": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "70": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "71": {
        "feature": "oasis",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "72": {
        "feature": "oasis",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "73": {
        "feature": "oasis",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "74": {
        "feature": "oasis",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "75": {
        "feature": "oasis",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "76": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "77": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "78": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "79": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "80": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "81": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "82": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "83": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "84": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "85": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "86": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "87": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "88": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "89": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "90": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "91": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "92": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "93": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "94": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "95": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "96": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "97": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "98": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "99": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "100": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    }
};

const table_wilderness_terrain_desert_count = Object.keys(table_wilderness_terrain_desert).length;

const table_wilderness_terrain_forest_jungle = {
    "1": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "2": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "3": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "4": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "5": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "6": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "7": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "8": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "9": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "10": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "11": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "12": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "13": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "14": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "15": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "16": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "17": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "18": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "19": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "20": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "21": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "22": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "23": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "24": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "25": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "26": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "27": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "28": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "29": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "30": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "31": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "32": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "33": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "34": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "35": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "36": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "37": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "38": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "39": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "40": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "41": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "42": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "43": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "44": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "45": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "46": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "47": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "48": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "49": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "50": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "51": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "52": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "53": {
        "feature": "clearing",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "54": {
        "feature": "clearing",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "55": {
        "feature": "clearing",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "56": {
        "feature": "clearing",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "57": {
        "feature": "clearing",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "58": {
        "feature": "clearing",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "59": {
        "feature": "clearing",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "60": {
        "feature": "clearing",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "61": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "62": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "63": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "64": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "65": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "66": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "67": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "68": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "69": {
        "feature": "waterway",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "70": {
        "feature": "waterway",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "71": {
        "feature": "waterway",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "72": {
        "feature": "waterway",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "73": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "74": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "75": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "76": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "77": {
        "feature": "clearfelled area",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "78": {
        "feature": "clearfelled area",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "79": {
        "feature": "clearfelled area",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "80": {
        "feature": "clearfelled area",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "81": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "82": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "83": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "84": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "85": {
        "feature": "swamp",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "86": {
        "feature": "swamp",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "87": {
        "feature": "swamp",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "88": {
        "feature": "swamp",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "89": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "90": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "91": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "92": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "93": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "94": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "95": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "96": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "97": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "98": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "99": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "100": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    }
};

const table_wilderness_terrain_forest_jungle_count = Object.keys(table_wilderness_terrain_forest_jungle).length;

const table_wilderness_terrain_grassland = {
    "1": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "2": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "3": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "4": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "5": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "6": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "7": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "8": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "9": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "10": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "11": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "12": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "13": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "14": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "15": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "16": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "17": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "18": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "19": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "20": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "21": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "22": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "23": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "24": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "25": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "26": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "27": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "28": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "29": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "30": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "31": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "32": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "33": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "34": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "35": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "36": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "37": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "38": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "39": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "40": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "41": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "42": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "43": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "44": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "45": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "46": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "47": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "48": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "49": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "50": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "51": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "52": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "53": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "54": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "55": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "56": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "57": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "58": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "59": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "60": {
        "feature": "hills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "61": {
        "feature": "swamp",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "62": {
        "feature": "swamp",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "63": {
        "feature": "swamp",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "64": {
        "feature": "swamp",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "65": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "66": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "67": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "68": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "69": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "70": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "71": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "72": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "73": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "74": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "75": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "76": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "77": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "78": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "79": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "80": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "81": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "82": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "83": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "84": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "85": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "86": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "87": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "88": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "89": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "90": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "91": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "92": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "93": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "94": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "95": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "96": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "97": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "98": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "99": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "100": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    }
};

const table_wilderness_terrain_grassland_count = Object.keys(table_wilderness_terrain_grassland).length;

const table_wilderness_terrain_hills = {
    "1": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "2": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "3": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "4": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "5": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "6": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "7": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "8": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "9": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "10": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "11": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "12": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "13": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "14": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "15": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "16": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "17": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "18": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "19": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "20": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "21": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "22": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "23": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "24": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "25": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "26": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "27": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "28": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "29": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "30": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "31": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "32": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "33": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "34": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "35": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "36": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "37": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "38": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "39": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "40": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "41": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "42": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "43": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "44": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "45": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "46": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "47": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "48": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "49": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "50": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "51": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "52": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "53": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "54": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "55": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "56": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "57": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "58": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "59": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "60": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "61": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "62": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "63": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "64": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "65": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "66": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "67": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "68": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "69": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "70": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "71": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "72": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "73": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "74": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "75": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "76": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "77": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "78": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "79": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "80": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "81": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "82": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "83": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "84": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "85": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "86": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "87": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "88": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "89": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "90": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "91": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "92": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "93": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "94": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "95": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "96": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "97": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "98": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "99": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "100": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    }
};

const table_wilderness_terrain_hills_count = Object.keys(table_wilderness_terrain_hills).length;

const table_wilderness_terrain_mountains = {
    "1": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "2": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "3": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "4": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "5": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "6": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "7": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "8": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "9": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "10": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "11": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "12": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "13": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "14": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "15": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "16": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "17": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "18": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "19": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "20": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "21": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "22": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "23": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "24": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "25": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "26": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "27": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "28": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "29": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "30": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "31": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "32": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "33": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "34": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "35": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "36": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "37": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "38": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "39": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "40": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "41": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "42": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "43": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "44": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "45": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "46": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "47": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "48": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "49": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "50": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "51": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "52": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "53": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "54": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "55": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "56": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "57": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "58": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "59": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "60": {
        "feature": "gully",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "61": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "62": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "63": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "64": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "65": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "66": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "67": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "68": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "69": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "70": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "71": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "72": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "73": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "74": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "75": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "76": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "77": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "78": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "79": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "80": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "81": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "82": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "83": {
        "feature": "small mountain range",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "84": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "85": {
        "feature": "foothills",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "86": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "87": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "88": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "89": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "90": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "91": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "92": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "93": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "94": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "95": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "96": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "97": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "98": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "99": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "100": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    }
};

const table_wilderness_terrain_mountains_count = Object.keys(table_wilderness_terrain_mountains).length;

const table_wilderness_terrain_swamp = {
    "1": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "2": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "3": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "4": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "5": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "6": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "7": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "8": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "9": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "10": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "11": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "12": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "13": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "14": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "15": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "16": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "17": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "18": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "19": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "20": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "21": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "22": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "23": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "24": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "25": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "26": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "27": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "28": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "29": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "30": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "31": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "32": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "33": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "34": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "35": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "36": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "37": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "38": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "39": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "40": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "41": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "42": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "43": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "44": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "45": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "46": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "47": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "48": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "49": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "50": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "51": {
        "feature": "no feature",
        "size_include": "TRUE",
        "size_variable": "FALSE",
        "size": 5
    },
    "52": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "53": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "54": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "55": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "56": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "57": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "58": {
        "feature": "waterway",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "59": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "60": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "61": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "62": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "63": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "64": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "65": {
        "feature": "lake",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "66": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "67": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "68": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "69": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "70": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "71": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "72": {
        "feature": "small wood",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "73": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "74": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "75": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "76": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "77": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "78": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "79": {
        "feature": "rocky outcrop",
        "size_include": "TRUE",
        "size_variable": "TRUE",
        "size": 4
    },
    "80": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "81": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "82": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "83": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "84": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "85": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "86": {
        "feature": "unmarked settlement",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "87": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "88": {
        "feature": "structure",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "89": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "90": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "91": {
        "feature": "monument",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "92": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "93": {
        "feature": "special",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "94": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "95": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "96": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "97": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "98": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "99": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    },
    "100": {
        "feature": "monster lair",
        "size_include": "FALSE",
        "size_variable": "FALSE",
        "size": 0
    }
};

const table_wilderness_terrain_swamp_count = Object.keys(table_wilderness_terrain_swamp).length;

const table_wilderness_terrain_type = {
    "1": {
        "type": "arctic",
        "table": table_wilderness_terrain_arctic
    },
    "2": {
        "type": "coastal",
        "table": table_wilderness_terrain_coastal
    },
    "3": {
        "type": "desert",
        "table": table_wilderness_terrain_desert
    },
    "4": {
        "type": "forest",
        "table": table_wilderness_terrain_forest_jungle
    },
    "5": {
        "type": "jungle",
        "table": table_wilderness_terrain_forest_jungle
    },
    "6": {
        "type": "grassland",
        "table": table_wilderness_terrain_grassland
    },
    "7": {
        "type": "hills",
        "table": table_wilderness_terrain_hills
    },
    "8": {
        "type": "mountains",
        "table": table_wilderness_terrain_mountains
    },
    "9": {
        "type": "swamp",
        "table": table_wilderness_terrain_swamp
    }
};

const table_wilderness_terrain_type_count = Object.keys(table_wilderness_terrain_type).length;

// Feature Tables

const table_wilderness_feature_clearfelled_area = {
    "1": {
        "feature": "an area that appears to have been clearfelled very recently",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "an area that appears to have been clearfelled very recently",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "an area that appears to have been clearfelled recently",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "4": {
        "feature": "an area that appears to have been clearfelled recently",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "5": {
        "feature": "an area that appears to have been clearfelled recently",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "an area that appears to have been clearfelled years ago",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "an area that appears to have been clearfelled years ago",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "8": {
        "feature": "an area that appears to have been clearfelled years ago",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "9": {
        "feature": "an area that appears to have been clearfelled a long time ago",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "10": {
        "feature": "an area that appears to have been clearfelled a long time ago",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "11": {
        "feature": "a human army cutting down trees to build siege weapons",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "12": {
        "feature": "a non-human army cutting down trees to build siege weapons",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "an area that appears to have been burned out by fire",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "14": {
        "feature": "an area that appears to have been burned out by fire",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "15": {
        "feature": "an unmarked hamlet within a clearing",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "16": {
        "feature": "an unmarked village within a clearing",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "17": {
        "feature": "a crew of human workers cutting timber for nearest large settlement",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "18": {
        "feature": "a crew of human workers cutting timber for an unmarked settlement",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "19": {
        "feature": "a crew of non-human workers cutting timber for nearest large settlement",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "20": {
        "feature": "a crew of non-human workers cutting timber for an unmarked settlement",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    }
};

const table_wilderness_feature_clearfelled_area_count = Object.keys(table_wilderness_feature_clearfelled_area).length;

const table_wilderness_feature_clearing = {
    "1": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "4": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "5": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "8": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "9": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "10": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "11": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "12": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "14": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "15": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "16": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "17": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "18": {
        "feature": "a natural clearing, devoid of trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "19": {
        "feature": "a natural clearing, devoid of trees. Something has been stalking you",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 100
    },
    "20": {
        "feature": "a natural clearing, devoid of trees. Something has been stalking you",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 100
    },
    "21": {
        "feature": "a natural clearing, devoid of trees. Something has been stalking you",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 100
    },
    "22": {
        "feature": "a natural clearing, devoid of trees. Something has been stalking you",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 100
    },
    "23": {
        "feature": "a circle of standing stones",
        "secondary_feature": "",
        "event_chance_modifier": 10,
        "combat_chance_modifier": 0
    },
    "24": {
        "feature": "a circle of standing stones",
        "secondary_feature": "",
        "event_chance_modifier": 10,
        "combat_chance_modifier": 0
    },
    "25": {
        "feature": "a circle of standing stones",
        "secondary_feature": "",
        "event_chance_modifier": 10,
        "combat_chance_modifier": 0
    },
    "26": {
        "feature": "a circle of standing stones",
        "secondary_feature": "",
        "event_chance_modifier": 10,
        "combat_chance_modifier": 0
    },
    "27": {
        "feature": "signs of a dark magic ritual site",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 45
    },
    "28": {
        "feature": "signs of a dark magic ritual site",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 45
    },
    "29": {
        "feature": "signs of a dark magic ritual site",
        "secondary_feature": "",
        "event_chance_modifier": 10,
        "combat_chance_modifier": 45
    },
    "30": {
        "feature": "signs of a dark magic ritual site",
        "secondary_feature": "",
        "event_chance_modifier": 10,
        "combat_chance_modifier": 45
    },
    "31": {
        "feature": "a clearing with a small pond",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "32": {
        "feature": "a clearing with a small pond",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "33": {
        "feature": "a clearing with a small pond",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "34": {
        "feature": "a clearing with a small pond",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "35": {
        "feature": "a clearing with a small pond",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "36": {
        "feature": "a clearing with a small pond",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "37": {
        "feature": "a campsite with friendly adventurers",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "38": {
        "feature": "a campsite with friendly adventurers",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "39": {
        "feature": "a campsite with friendly adventurers",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "40": {
        "feature": "a campsite with friendly adventurers",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "41": {
        "feature": "a campsite with hostile adventurers",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 45
    },
    "42": {
        "feature": "a campsite with hostile adventurers",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 45
    },
    "43": {
        "feature": "a campsite with hostile adventurers",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 45
    },
    "44": {
        "feature": "a campsite with hostile adventurers",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 45
    },
    "45": {
        "feature": "a clearing containing a",
        "secondary_feature": "structure",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "46": {
        "feature": "a clearing containing a",
        "secondary_feature": "structure",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "47": {
        "feature": "a magical glade with a friendly mage",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "48": {
        "feature": "a magical glade with a hostile mage",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 50
    },
    "49": {
        "feature": "a magical glade with a friendly fey",
        "secondary_feature": "",
        "event_chance_modifier": 50,
        "combat_chance_modifier": 0
    },
    "50": {
        "feature": "a magical glade with a hostile fey",
        "secondary_feature": "",
        "event_chance_modifier": 50,
        "combat_chance_modifier": 75
    }
};

const table_wilderness_feature_clearing_count = Object.keys(table_wilderness_feature_clearing).length;

const table_wilderness_feature_gully = {
    "1": {
        "feature": "a small gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "a small gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "a small gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "4": {
        "feature": "a small gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "5": {
        "feature": "a small gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "a small gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "a small gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "8": {
        "feature": "a small gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "9": {
        "feature": "a large gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "10": {
        "feature": "a large gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "11": {
        "feature": "a large gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "12": {
        "feature": "a large gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "a large gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "14": {
        "feature": "a large gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "15": {
        "feature": "a large gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "16": {
        "feature": "a large gully",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "17": {
        "feature": "a gully with a",
        "secondary_feature": "waterway",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "18": {
        "feature": "a gully with a",
        "secondary_feature": "waterway",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "19": {
        "feature": "a gully with a",
        "secondary_feature": "waterway",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "20": {
        "feature": "a gully with a",
        "secondary_feature": "waterway",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "21": {
        "feature": "a gully with a",
        "secondary_feature": "waterway",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "22": {
        "feature": "a gully with a",
        "secondary_feature": "waterway",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "23": {
        "feature": "a rocky gully with caves",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 25
    },
    "24": {
        "feature": "a rocky gully with caves",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 25
    },
    "25": {
        "feature": "a gully that looks like it was only recently made",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "26": {
        "feature": "a gully that looks like it was only recently made",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "27": {
        "feature": "a gully home to a group of neutral creatures",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "28": {
        "feature": "a gully home to a group of neutral creatures",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "29": {
        "feature": "a gully home to a group of hostile creatures",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 30
    },
    "30": {
        "feature": "a gully home to a group of hostile creatures",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 30
    },
    "31": {
        "feature": "a dry gully containing the bones of many animals",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "32": {
        "feature": "a dry gully containing the bones of many animals",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "33": {
        "feature": "a dry gully containing the bones of many animals",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "34": {
        "feature": "a gully containing an abandoned mine",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "35": {
        "feature": "a gully containing an abandoned mine",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 5
    },
    "36": {
        "feature": "a gully containing an abandoned mine",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "37": {
        "feature": "a gully with a magical aura. A wizard lives here",
        "secondary_feature": "",
        "event_chance_modifier": 10,
        "combat_chance_modifier": 0
    },
    "38": {
        "feature": "a gully with a magical aura. A Fey creature lives here",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "39": {
        "feature": "a gully with a magical aura. A druid lives here",
        "secondary_feature": "",
        "event_chance_modifier": 10,
        "combat_chance_modifier": 0
    },
    "40": {
        "feature": "a gully with a dark aura. An evil entity lives here",
        "secondary_feature": "",
        "event_chance_modifier": 5,
        "combat_chance_modifier": 20
    }
};

const table_wilderness_feature_gully_count = Object.keys(table_wilderness_feature_gully).length;

const table_wilderness_feature_hills = {
    "1": {
        "feature": "low rolling hills, easier to travel than you would have expected",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "low rolling hills, easier to travel than you would have expected",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "low rolling hills, easier to travel than you would have expected",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "4": {
        "feature": "low rolling hills, easier to travel than you would have expected",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "5": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "8": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "9": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "10": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "11": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "12": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "14": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "15": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "16": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "17": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "18": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "19": {
        "feature": "low rolling hills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "20": {
        "feature": "rocky hills with many cave entrances",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "21": {
        "feature": "rocky hills with many cave entrances",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "22": {
        "feature": "rocky hills with many cave entrances",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "23": {
        "feature": "a high hill offering a good view of the surrounding area",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "24": {
        "feature": "a high hill offering a good view of the surrounding area",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "25": {
        "feature": "a high hill offering a good view of the surrounding area",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "26": {
        "feature": "a series of sharply jutting rocky hills requiring a great effort to scale",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "27": {
        "feature": "a series of sharply jutting rocky hills requiring a great effort to scale",
        "secondary_feature": "",
        "event_chance_modifier": 10,
        "combat_chance_modifier": 20
    },
    "28": {
        "feature": "a series of sharply jutting rocky hills requiring a great effort to scale",
        "secondary_feature": "",
        "event_chance_modifier": 10,
        "combat_chance_modifier": 15
    },
    "29": {
        "feature": "a dry low plateau containing",
        "secondary_feature": "monument",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "30": {
        "feature": "a cluster of hills sheltering a small wood",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "31": {
        "feature": "a cluster of hills sheltering a small wood",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "32": {
        "feature": "a cluster of hills sheltering a small wood",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "33": {
        "feature": "an entrance to an ancient barrow buried in the side of a hill",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "34": {
        "feature": "an entrance to an ancient barrow buried in the side of a hill",
        "secondary_feature": "",
        "event_chance_modifier": 20,
        "combat_chance_modifier": 0
    },
    "35": {
        "feature": "an entrance to an ancient barrow buried in the side of a hill",
        "secondary_feature": "",
        "event_chance_modifier": 30,
        "combat_chance_modifier": 0
    },
    "36": {
        "feature": "the hills you are walking across house a colony of friendly humanoids",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "37": {
        "feature": "the hills you are walking across house a colony of hostile humanoids",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    }
};

const table_wilderness_feature_hills_count = Object.keys(table_wilderness_feature_hills).length;

const table_wilderness_feature_special = {
    "1": {
        "feature": "a sinkhole",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "a crevasse",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "a geiser",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "4": {
        "feature": "a landslide's aftermath",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "5": {
        "feature": "a landslide triggers",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "a waterfall",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "a cave leading to a mystical subterranean forest",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 10
    },
    "8": {
        "feature": "a volcano",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "9": {
        "feature": "a series of seemingly natural yet symmetrical rock formations",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "10": {
        "feature": "a large crater",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "11": {
        "feature": "a tar pit",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "12": {
        "feature": "a petrified forest",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "a megalithic pillar covered in runes",
        "secondary_feature": "",
        "event_chance_modifier": 30,
        "combat_chance_modifier": 0
    },
    "14": {
        "feature": "a tree with an empty noose",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 30
    }
};

const table_wilderness_feature_special_count = Object.keys(table_wilderness_feature_special).length;

const table_wilderness_feature_lake = {
    "1": {
        "feature": "an unmapped lake",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 40
    },
    "2": {
        "feature": "an unmapped lake",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 40
    },
    "3": {
        "feature": "an unmapped lake",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 40
    },
    "4": {
        "feature": "an unmapped lake",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 40
    },
    "5": {
        "feature": "an unmapped lake",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 40
    },
    "6": {
        "feature": "an unmapped lake",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 40
    },
    "7": {
        "feature": "an unmapped lake",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 40
    },
    "8": {
        "feature": "an unmapped lake",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 40
    },
    "9": {
        "feature": "an unmapped lake",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 40
    },
    "10": {
        "feature": "an unmapped lake",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 40
    },
    "11": {
        "feature": "an unmapped lake with an unmarked village",
        "secondary_feature": "",
        "event_chance_modifier": 20,
        "combat_chance_modifier": 0
    },
    "12": {
        "feature": "a small pond",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 30
    },
    "13": {
        "feature": "a large unmapped lake that is difficult to cross",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "14": {
        "feature": "an unmapped lake with an unmarked hamlet",
        "secondary_feature": "",
        "event_chance_modifier": 20,
        "combat_chance_modifier": 0
    },
    "15": {
        "feature": "an unmapped lake",
        "secondary_feature": "",
        "event_chance_modifier": 100,
        "combat_chance_modifier": 0
    },
    "16": {
        "feature": "an unmapped lake teeming with fish",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "17": {
        "feature": "a small pool radiating a magical aura",
        "secondary_feature": "",
        "event_chance_modifier": 30,
        "combat_chance_modifier": 0
    }
};

const table_wilderness_feature_lake_count = Object.keys(table_wilderness_feature_lake).length;

const table_wilderness_feature_monument = {
    "1": {
        "feature": "a circle of standing stones",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "a series of large stone carvings",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "an ancient looking statue of primitive origins",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 15
    },
    "4": {
        "feature": "a small shrine",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "5": {
        "feature": "a sign showing nearby settlements",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "a cliff face carved with the likeness of an unknown figure",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "a statue of a famous figure from history",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "8": {
        "feature": "a fairy ring",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "9": {
        "feature": "ruins of an ancient structure lost to history",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 30
    },
    "10": {
        "feature": "an altar with flowers, jewels and offerings",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "11": {
        "feature": "an altar marked by centuries of renewed splashed blood",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 20
    },
    "12": {
        "feature": "a tomb of a famous historical figure",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "a mountain of bones",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "14": {
        "feature": "an ancient battlefield with with monument to the dead",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "15": {
        "feature": "a burnt down building",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "16": {
        "feature": "an archway exuding a chaotic magic",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    }
};

const table_wilderness_feature_monument_count = Object.keys(table_wilderness_feature_monument).length;

const table_wilderness_feature_oasis = {
    "1": {
        "feature": "an oasis with a pool of refreshing water",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "an oasis with a pool of refreshing water",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "an oasis with a pool of refreshing water",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "4": {
        "feature": "an oasis with a pool of refreshing water",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "5": {
        "feature": "an oasis with a pool of refreshing water",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "an oasis with a pool of refreshing water",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "an oasis with a pool of refreshing water",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "8": {
        "feature": "an oasis with a pool of refreshing water",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "9": {
        "feature": "an oasis. Upon reaching it, you discover it is a mirage",
        "secondary_feature": "",
        "event_chance_modifier": 20,
        "combat_chance_modifier": 30
    },
    "10": {
        "feature": "an oasis with a pool of poisoned water",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 25
    },
    "11": {
        "feature": "an oasis with a pool of blessed water",
        "secondary_feature": "",
        "event_chance_modifier": 30,
        "combat_chance_modifier": 0
    },
    "12": {
        "feature": "an oasis with a travelling caravan of desert merchants",
        "secondary_feature": "",
        "event_chance_modifier": 20,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "an oasis with a travelling caravan of desert nomads",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 30
    },
    "14": {
        "feature": "an oasis containing a ruin",
        "secondary_feature": "",
        "event_chance_modifier": 20,
        "combat_chance_modifier": 0
    },
    "15": {
        "feature": "an oasis containing a temple",
        "secondary_feature": "",
        "event_chance_modifier": 20,
        "combat_chance_modifier": 0
    },
    "16": {
        "feature": "an oasis camp for a group of bandits",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 100
    }
};

const table_wilderness_feature_oasis_count = Object.keys(table_wilderness_feature_oasis).length;

const table_wilderness_feature_rocky_outcrop = {
    "1": {
        "feature": "a rocky outcrop",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "a rocky outcrop",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "a rocky outcrop",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "4": {
        "feature": "a rocky outcrop",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "5": {
        "feature": "a rocky outcrop",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "a rocky outcrop",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "a rocky outcrop",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "8": {
        "feature": "a rocky outcrop",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "9": {
        "feature": "a high rocky outcrop providing a vantage point of surrounding area",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 30
    },
    "10": {
        "feature": "a high rocky outcrop providing a vantage point of surrounding area",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "11": {
        "feature": "a formation of standing stones atop a rocky outcrop",
        "secondary_feature": "",
        "event_chance_modifier": 30,
        "combat_chance_modifier": 0
    },
    "12": {
        "feature": "an NPC sitting atop a rocky outcrop, bekconing you to join them",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "a rocky outcrop carved into the likeness of a well known god",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    }
};

const table_wilderness_feature_rocky_outcrop_count = Object.keys(table_wilderness_feature_rocky_outcrop).length;

const table_wilderness_feature_small_mountain_range_foothills = {
    "1": {
        "feature": "a small mountain range",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "a small mountain range",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "a small mountain range",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "4": {
        "feature": "foothills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "5": {
        "feature": "foothills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "foothills",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "an entrance to a cave in the side of a small mountain",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "8": {
        "feature": "an entrance to a cave in the side of a foothill",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "9": {
        "feature": "foothills surrounding a wizard tower",
        "secondary_feature": "",
        "event_chance_modifier": 30,
        "combat_chance_modifier": 0
    },
    "10": {
        "feature": "small mountains surrounding a monastery",
        "secondary_feature": "",
        "event_chance_modifier": 30,
        "combat_chance_modifier": 0
    },
    "11": {
        "feature": "small mountains hiding the entrance to a secret dwaven underground citadel",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "12": {
        "feature": "foothills mountains hiding the entrance to a secret dwaven gnomish stronghold",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "mountains hiding a citedal for an assassin's order",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 40
    }
};

const table_wilderness_feature_small_mountain_range_foothills_count = Object.keys(table_wilderness_feature_small_mountain_range_foothills).length;

const table_wilderness_feature_small_wood = {
    "1": {
        "feature": "a small wood",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "a small wood",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "a small wood",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "4": {
        "feature": "a small wood",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "5": {
        "feature": "a small wood",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "a small wood",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "a small wood",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "8": {
        "feature": "a small forest of dead trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 30
    },
    "9": {
        "feature": "a small wood of ancient twisted trees",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 30
    },
    "10": {
        "feature": "a serene Sylvan wood",
        "secondary_feature": "",
        "event_chance_modifier": 40,
        "combat_chance_modifier": 0
    },
    "11": {
        "feature": "a dark thick wood",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 40
    },
    "12": {
        "feature": "a small wood that has been ravaged by fire",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "a small wood where a band of raiders are hiding",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 35
    },
    "14": {
        "feature": "a small wood with an overgrown shrine",
        "secondary_feature": "",
        "event_chance_modifier": 40,
        "combat_chance_modifier": 0
    },
    "15": {
        "feature": "a small wood sheltering a wood elf village",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "16": {
        "feature": "a small wood sheltering a wood forest gnome village",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    }
};

const table_wilderness_feature_small_wood_count = Object.keys(table_wilderness_feature_small_wood).length;

const table_wilderness_feature_structure = {
    "1": {
        "feature": "a mine",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "a tomb",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 30
    },
    "3": {
        "feature": "a haunted cemetery",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 50
    },
    "4": {
        "feature": "a cemetery",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 20
    },
    "5": {
        "feature": "a small castle",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "a manor house",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "an abandoned manor house",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "8": {
        "feature": "a shrine",
        "secondary_feature": "",
        "event_chance_modifier": 40,
        "combat_chance_modifier": 0
    },
    "9": {
        "feature": "a watchtower",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "10": {
        "feature": "an old well",
        "secondary_feature": "",
        "event_chance_modifier": 50,
        "combat_chance_modifier": 0
    },
    "11": {
        "feature": "a hermit hut",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "12": {
        "feature": "a lone tavern",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "a hunting cabin",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "14": {
        "feature": "a bandit hideout",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "15": {
        "feature": "a ruins",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 75
    },
    "16": {
        "feature": "a wizard tower",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "17": {
        "feature": "a burial mound",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 30
    },
    "18": {
        "feature": "a monastery",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "19": {
        "feature": "a bridge",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    }
};

const table_wilderness_feature_structure_count = Object.keys(table_wilderness_feature_structure).length;

const table_wilderness_feature_swamp = {
    "1": {
        "feature": "a swamp that is difficult to pass througfh",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 15
    },
    "2": {
        "feature": "a swamp that is difficult to pass througfh",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 15
    },
    "3": {
        "feature": "a swamp that is difficult to pass througfh",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 15
    },
    "4": {
        "feature": "a swamp that is difficult to pass througfh",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 15
    },
    "5": {
        "feature": "a swamp that is difficult to pass througfh",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 15
    },
    "6": {
        "feature": "a swamp that is difficult to pass througfh",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 15
    },
    "7": {
        "feature": "a swamp that is difficult to pass througfh",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 15
    },
    "8": {
        "feature": "a swamp that is difficult to pass througfh",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 15
    },
    "9": {
        "feature": "a thick, dense swamp, extremely difficult to pass through",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 30
    },
    "10": {
        "feature": "a thick, dense swamp, extremely difficult to pass through",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 30
    },
    "11": {
        "feature": "a patchy swamp with dry areas",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 50
    },
    "12": {
        "feature": "a patchy swamp with dry areas",
        "secondary_feature": "",
        "event_chance_modifier": 25,
        "combat_chance_modifier": 0
    },
    "13": {
        "feature": "a wetland containing a network of waterways",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "14": {
        "feature": "a wetland containing a network of waterways",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "15": {
        "feature": "a dark, eerie swamp exuding an eldritch aura",
        "secondary_feature": "",
        "event_chance_modifier": 50,
        "combat_chance_modifier": 65
    },
    "16": {
        "feature": "an ancient swamp with creatures forgotten to time",
        "secondary_feature": "",
        "event_chance_modifier": 35,
        "combat_chance_modifier": 55
    },
    "17": {
        "feature": "a Fey oasis",
        "secondary_feature": "",
        "event_chance_modifier": 75,
        "combat_chance_modifier": 0
    },
    "18": {
        "feature": "an unmarked human village within a swamp",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "19": {
        "feature": "an unmarked non-human village with a swamp",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    }
};

const table_wilderness_feature_swamp_count = Object.keys(table_wilderness_feature_swamp).length;

const table_wilderness_feature_unmarked_settlement = {
    "1": {
        "feature": "a hamlet",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "a hamlet",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "a village",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "4": {
        "feature": "a village",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "5": {
        "feature": "a nomadic camp",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "an abandoned hamlet",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 10
    },
    "7": {
        "feature": "an abandoned village0",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 10
    },
    "8": {
        "feature": "an abandoned tower",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 10
    },
    "9": {
        "feature": "a tower",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    },
    "10": {
        "feature": "a village in strife",
        "secondary_feature": "",
        "event_chance_modifier": 15,
        "combat_chance_modifier": 0
    }
};

const table_wilderness_feature_unmarked_settlement_count = Object.keys(table_wilderness_feature_unmarked_settlement).length;

const table_wilderness_feature_waterway = {
    "1": {
        "feature": "a small stream",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "2": {
        "feature": "a small stream",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "3": {
        "feature": "a river",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "4": {
        "feature": "a river",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 40
    },
    "5": {
        "feature": "a river",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "6": {
        "feature": "a deep narrow stream",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "7": {
        "feature": "a man-made waterway",
        "secondary_feature": "",
        "event_chance_modifier": 0,
        "combat_chance_modifier": 0
    },
    "8": {
        "feature": "a river with Fey frolicking within",
        "secondary_feature": "",
        "event_chance_modifier": 35,
        "combat_chance_modifier": 0
    },
    "9": {
        "feature": "a river with Elves frolicking within",
        "secondary_feature": "",
        "event_chance_modifier": 35,
        "combat_chance_modifier": 0
    },
    "10": {
        "feature": "a river with humans frolicking within",
        "secondary_feature": "",
        "event_chance_modifier": 35,
        "combat_chance_modifier": 0
    }
};

const table_wilderness_feature_waterway_count = Object.keys(table_wilderness_feature_waterway).length;

const table_wilderness_active_discovery = {
    "1": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "2": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "3": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "4": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "5": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "6": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "7": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "8": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "9": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "10": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "11": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "12": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "13": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "14": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "15": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "16": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "17": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "18": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "19": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "20": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "21": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "22": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "23": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "24": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "25": {
        "type": "This area contains more proof of the rumours / leads you are investigating. Roll once on Clue Table (this chapter), or on Chapter 14 tables, then roll again on this table.",
        "notes": ""
    },
    "26": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "27": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "28": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "29": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "30": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "31": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "32": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "33": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "34": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "35": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "36": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "37": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "38": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "39": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "40": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "41": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "42": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "43": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "44": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "45": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "46": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "47": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "48": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "49": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "50": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "51": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "52": {
        "type": "You find the beast / monster / cause of the problem you have been looking for. Roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter 6: Deadly Encounter (Use Chapter 16). 50% chance you haven't been noticed. On a successful stealth roll (DC=Creature's passive perception), attack with surprise.",
        "notes": ""
    },
    "53": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "54": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "55": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "56": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "57": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "58": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "59": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "60": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "61": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "62": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "63": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "64": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "65": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "66": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "67": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "68": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "69": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "70": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "71": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "72": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "73": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "74": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "75": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "76": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "77": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "78": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "79": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "80": {
        "type": "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (You could go to Chapter 8: Dungeon Generation from here) When you find them, roll d6. 1-S: Medium Encounter. 4-5: Hard Encounter. 6: Deadly Encounter. (Use Chapter 16).",
        "notes": ""
    },
    "81": {
        "type": "You find a lair or dwelling, but it appears currently uninhabited Perhaps the creature you seek is away causing mischief right now!",
        "notes": ""
    },
    "82": {
        "type": "You find a lair or dwelling, but it appears currently uninhabited Perhaps the creature you seek is away causing mischief right now!",
        "notes": ""
    },
    "83": {
        "type": "Stealth check from all your PCs. If one check is lower than 14, then the creature has noticed your PCs' arrival and is stalking them, preparing an attack. They will probably be surprised!",
        "notes": ""
    },
    "84": {
        "type": "Stealth check from all your PCs. If one check is lower than 14, then the creature has noticed your PCs' arrival and is stalking them, preparing an attack. They will probably be surprised!",
        "notes": ""
    },
    "85": {
        "type": "This area is not what it was rumoured to be. Make a d100 rolls. If it is 25 or below, roll on the Wilderness Encounter Table. After resolving the encounter, continue exploring the area and make an investigation check, DC 15. If successful, roll again on this table. If unsuccessful, make another d100 roll (as above)",
        "notes": ""
    },
    "86": {
        "type": "This area is not what it was rumoured to be. Make a d100 rolls. If it is 25 or below, roll on the Wilderness Encounter Table. After resolving the encounter, continue exploring the area and make an investigation check, DC 15. If successful, roll again on this table. If unsuccessful, make another d100 roll (as above)",
        "notes": ""
    },
    "87": {
        "type": "You find another party of adventurers investigating the same rumours / leads you are investigating. They are (d+) 1: Hostile, 2-4: Friendly. There are 1d4 members in the party. Roll on NPC tables (skip professions and roll on class tables instead) to determine who they are, then roll again on this table.",
        "notes": ""
    },
    "88": {
        "type": "You find another party of adventurers investigating the same rumours / leads you are investigating. They are (d+) 1: Hostile, 2-4: Friendly. There are 1d4 members in the party. Roll on NPC tables (skip professions and roll on class tables instead) to determine who they are, then roll again on this table.",
        "notes": ""
    },
    "89": {
        "type": "You find a dead party of 1d4 adventurers (use NPC tables if you wish). They have been hacked / maimed savagely, and it appears all their weapons and belongings have been stolen.",
        "notes": ""
    },
    "90": {
        "type": "You find a dead party of 1d4 adventurers (use NPC tables if you wish). They have been hacked / maimed savagely, and it appears all their weapons and belongings have been stolen.",
        "notes": ""
    },
    "91": {
        "type": "You find a dead party of 1d4 adventurers (use NPC tables if you wish).",
        "notes": ""
    },
    "92": {
        "type": "You find a dead party of 1d4 adventurers (use NPC tables if you wish).",
        "notes": ""
    },
    "93": {
        "type": "You meet an NPC. who gives you details of another, far more important quest related to this one. Go to Chapter 7: Quest Generation to find out what it is.",
        "notes": ""
    },
    "94": {
        "type": "You meet an NPC. who gives you details of another, far more important quest related to this one. Go to Chapter 7: Quest Generation to find out what it is.",
        "notes": ""
    },
    "95": {
        "type": "You discover that the creature or target you seek has discovered that something is tracking them, and has departed the area. You could pursue (further rolls on Wilderness generation tables, above), or you could declare the matter solved (10% chance they return once you are gone).",
        "notes": ""
    },
    "96": {
        "type": "You discover that the creature or target you seek has discovered that something is tracking them, and has departed the area. You could pursue (further rolls on Wilderness generation tables, above), or you could declare the matter solved (10% chance they return once you are gone).",
        "notes": ""
    },
    "97": {
        "type": "A mysterious NPC, a lone adventurer, is present here, and has resolved the issue. They give proof too (carcass / spoils of completed quest). They tell you that you may claim the fame of completing this, as long as you accompany them.",
        "notes": ""
    },
    "98": {
        "type": "A mysterious NPC, a lone adventurer, is present here, and has resolved the issue. They give proof too (carcass / spoils of completed quest). They tell you that you may claim the fame of completing this, as long as you accompany them.",
        "notes": ""
    },
    "99": {
        "type": "Shallow brook what's that you see there amongst the pebbles?",
        "notes": "Loot 20% (use CR of last creature defeated). Clue 40%"
    },
    "100": {
        "type": "Shallow brook what's that you see there amongst the pebbles?",
        "notes": "Loot 20% (use CR of last creature defeated). Clue 40%"
    }
};

const table_wilderness_active_discovery_count = Object.keys(table_wilderness_active_discovery).length;

const table_wilderness_feature_type = {
    "clearfelled area": {
        "table": table_wilderness_feature_clearfelled_area
    },
    "clearing": {
        "table": table_wilderness_feature_clearing
    },
    "foothills": {
        "table": table_wilderness_feature_small_mountain_range_foothills
    },
    "gully": {
        "table": table_wilderness_feature_gully
    },
    "hills": {
        "table": table_wilderness_feature_hills
    },
    "lake": {
        "table": table_wilderness_feature_lake
    },
    "monument": {
        "table": table_wilderness_feature_monument
    },
    "oasis": {
        "table": table_wilderness_feature_oasis
    },
    "rocky outcrop": {
        "table": table_wilderness_feature_rocky_outcrop
    },
    "small mountain range": {
        "table": table_wilderness_feature_small_mountain_range_foothills
    },
    "small wood": {
        "table": table_wilderness_feature_small_wood
    },
    "special": {
        "table": table_wilderness_feature_special
    },
    "structure": {
        "table": table_wilderness_feature_structure
    },
    "swamp": {
        "table": table_wilderness_feature_swamp
    },
    "unmarked settlement": {
        "table": table_wilderness_feature_unmarked_settlement
    },
    "waterway": {
        "table": table_wilderness_feature_waterway
    }
};

const table_wilderness_travel_content = {
    "Event": {
        "chance": 10
    },
    "Combat": {
        "chance": 25
    }
};