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
    
    var featureType = terrainType.table[getRandomInt(1, Object.keys(terrainType.table).length)];

    travel.feature = featureType.feature;
    travel.featureSize = featureType.size;

    console.log(travel.feature);

    if(travel.feature !== "no feature") {
        var featureDetails = getTravelFeatureDetails(travel.feature);
        travel.featureDetails = featureDetails.type;
        travel.featureNotes = featureDetails.notes;
    }
    

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

function getTravelFeatureDetails(type) {

    var featureTable = table_wilderness_feature_type[type].table;
    return featureDetails = featureTable[getRandomInt(1, Object.keys(featureTable).length)];
     
}

function setTravel(travel) {
    return JSON.stringify(travel);
}

// Wilderness Tables

// Terrain Tables

const table_wilderness_terrain_arctic = {
    "1": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "2": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "3": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "4": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "5": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "6": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "7": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "8": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "9": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "10": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "11": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "12": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "13": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "14": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "15": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "16": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "17": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "18": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "19": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "20": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "21": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "22": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "23": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "24": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "25": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "26": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "27": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "28": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "29": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "30": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "31": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "32": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "33": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "34": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "35": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "36": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "37": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "38": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "39": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "40": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "41": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "42": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "43": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "44": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "45": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "46": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "47": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "48": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "49": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "50": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "51": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "52": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "53": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "54": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "55": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "56": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "57": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "58": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "59": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "60": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "61": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "62": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "63": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "64": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "65": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "66": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "67": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "68": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "69": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "70": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "71": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "72": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "73": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "74": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "75": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "76": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "77": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "78": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "79": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "80": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "81": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "82": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "83": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "84": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "85": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "86": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "87": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "88": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "89": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "90": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "91": {
        "feature": "structure",
        "size": ""
    },
    "92": {
        "feature": "structure",
        "size": ""
    },
    "93": {
        "feature": "monument",
        "size": ""
    },
    "94": {
        "feature": "monument",
        "size": ""
    },
    "95": {
        "feature": "special",
        "size": ""
    },
    "96": {
        "feature": "monster lair",
        "size": ""
    },
    "97": {
        "feature": "monster lair",
        "size": ""
    },
    "98": {
        "feature": "monster lair",
        "size": ""
    },
    "99": {
        "feature": "monster lair",
        "size": ""
    },
    "100": {
        "feature": "monster lair",
        "size": ""
    }
};

const table_wilderness_terrain_arctic_count = Object.keys(table_wilderness_terrain_arctic).length;

const table_wilderness_terrain_coastal = {
    "1": {
        "feature": "no feature",
        "size": "5 m."
    },
    "2": {
        "feature": "no feature",
        "size": "5 m."
    },
    "3": {
        "feature": "no feature",
        "size": "5 m."
    },
    "4": {
        "feature": "no feature",
        "size": "5 m."
    },
    "5": {
        "feature": "no feature",
        "size": "5 m."
    },
    "6": {
        "feature": "no feature",
        "size": "5 m."
    },
    "7": {
        "feature": "no feature",
        "size": "5 m."
    },
    "8": {
        "feature": "no feature",
        "size": "5 m."
    },
    "9": {
        "feature": "no feature",
        "size": "5 m."
    },
    "10": {
        "feature": "no feature",
        "size": "5 m."
    },
    "11": {
        "feature": "no feature",
        "size": "5 m."
    },
    "12": {
        "feature": "no feature",
        "size": "5 m."
    },
    "13": {
        "feature": "no feature",
        "size": "5 m."
    },
    "14": {
        "feature": "no feature",
        "size": "5 m."
    },
    "15": {
        "feature": "no feature",
        "size": "5 m."
    },
    "16": {
        "feature": "no feature",
        "size": "5 m."
    },
    "17": {
        "feature": "no feature",
        "size": "5 m."
    },
    "18": {
        "feature": "no feature",
        "size": "5 m."
    },
    "19": {
        "feature": "no feature",
        "size": "5 m."
    },
    "20": {
        "feature": "no feature",
        "size": "5 m."
    },
    "21": {
        "feature": "no feature",
        "size": "5 m."
    },
    "22": {
        "feature": "no feature",
        "size": "5 m."
    },
    "23": {
        "feature": "no feature",
        "size": "5 m."
    },
    "24": {
        "feature": "no feature",
        "size": "5 m."
    },
    "25": {
        "feature": "no feature",
        "size": "5 m."
    },
    "26": {
        "feature": "no feature",
        "size": "5 m."
    },
    "27": {
        "feature": "no feature",
        "size": "5 m."
    },
    "28": {
        "feature": "no feature",
        "size": "5 m."
    },
    "29": {
        "feature": "no feature",
        "size": "5 m."
    },
    "30": {
        "feature": "no feature",
        "size": "5 m."
    },
    "31": {
        "feature": "no feature",
        "size": "5 m."
    },
    "32": {
        "feature": "no feature",
        "size": "5 m."
    },
    "33": {
        "feature": "no feature",
        "size": "5 m."
    },
    "34": {
        "feature": "no feature",
        "size": "5 m."
    },
    "35": {
        "feature": "no feature",
        "size": "5 m."
    },
    "36": {
        "feature": "no feature",
        "size": "5 m."
    },
    "37": {
        "feature": "no feature",
        "size": "5 m."
    },
    "38": {
        "feature": "no feature",
        "size": "5 m."
    },
    "39": {
        "feature": "no feature",
        "size": "5 m."
    },
    "40": {
        "feature": "no feature",
        "size": "5 m."
    },
    "41": {
        "feature": "no feature",
        "size": "5 m."
    },
    "42": {
        "feature": "no feature",
        "size": "5 m."
    },
    "43": {
        "feature": "no feature",
        "size": "5 m."
    },
    "44": {
        "feature": "no feature",
        "size": "5 m."
    },
    "45": {
        "feature": "no feature",
        "size": "5 m."
    },
    "46": {
        "feature": "no feature",
        "size": "5 m."
    },
    "47": {
        "feature": "no feature",
        "size": "5 m."
    },
    "48": {
        "feature": "no feature",
        "size": "5 m."
    },
    "49": {
        "feature": "no feature",
        "size": "5 m."
    },
    "50": {
        "feature": "no feature",
        "size": "5 m."
    },
    "51": {
        "feature": "no feature",
        "size": "5 m."
    },
    "52": {
        "feature": "no feature",
        "size": "5 m."
    },
    "53": {
        "feature": "no feature",
        "size": "5 m."
    },
    "54": {
        "feature": "no feature",
        "size": "5 m."
    },
    "55": {
        "feature": "no feature",
        "size": "5 m."
    },
    "56": {
        "feature": "no feature",
        "size": "5 m."
    },
    "57": {
        "feature": "no feature",
        "size": "5 m."
    },
    "58": {
        "feature": "no feature",
        "size": "5 m."
    },
    "59": {
        "feature": "no feature",
        "size": "5 m."
    },
    "60": {
        "feature": "no feature",
        "size": "5 m."
    },
    "61": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "62": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "63": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "64": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "65": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "66": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "67": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "68": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "69": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "70": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "71": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "72": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "73": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "74": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "75": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "76": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "77": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "78": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "79": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "80": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "81": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "82": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "83": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "84": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "85": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "86": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "87": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "88": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "89": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "90": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "91": {
        "feature": "structure",
        "size": ""
    },
    "92": {
        "feature": "structure",
        "size": ""
    },
    "93": {
        "feature": "monument",
        "size": ""
    },
    "94": {
        "feature": "monument",
        "size": ""
    },
    "95": {
        "feature": "special",
        "size": ""
    },
    "96": {
        "feature": "monster's lair",
        "size": ""
    },
    "97": {
        "feature": "monster's lair",
        "size": ""
    },
    "98": {
        "feature": "monster's lair",
        "size": ""
    },
    "99": {
        "feature": "monster's lair",
        "size": ""
    },
    "100": {
        "feature": "monster's lair",
        "size": ""
    }
};

const table_wilderness_terrain_coastal_count = Object.keys(table_wilderness_terrain_coastal).length;

const table_wilderness_terrain_desert = {
    "1": {
        "feature": "no feature",
        "size": "5 m."
    },
    "2": {
        "feature": "no feature",
        "size": "5 m."
    },
    "3": {
        "feature": "no feature",
        "size": "5 m."
    },
    "4": {
        "feature": "no feature",
        "size": "5 m."
    },
    "5": {
        "feature": "no feature",
        "size": "5 m."
    },
    "6": {
        "feature": "no feature",
        "size": "5 m."
    },
    "7": {
        "feature": "no feature",
        "size": "5 m."
    },
    "8": {
        "feature": "no feature",
        "size": "5 m."
    },
    "9": {
        "feature": "no feature",
        "size": "5 m."
    },
    "10": {
        "feature": "no feature",
        "size": "5 m."
    },
    "11": {
        "feature": "no feature",
        "size": "5 m."
    },
    "12": {
        "feature": "no feature",
        "size": "5 m."
    },
    "13": {
        "feature": "no feature",
        "size": "5 m."
    },
    "14": {
        "feature": "no feature",
        "size": "5 m."
    },
    "15": {
        "feature": "no feature",
        "size": "5 m."
    },
    "16": {
        "feature": "no feature",
        "size": "5 m."
    },
    "17": {
        "feature": "no feature",
        "size": "5 m."
    },
    "18": {
        "feature": "no feature",
        "size": "5 m."
    },
    "19": {
        "feature": "no feature",
        "size": "5 m."
    },
    "20": {
        "feature": "no feature",
        "size": "5 m."
    },
    "21": {
        "feature": "no feature",
        "size": "5 m."
    },
    "22": {
        "feature": "no feature",
        "size": "5 m."
    },
    "23": {
        "feature": "no feature",
        "size": "5 m."
    },
    "24": {
        "feature": "no feature",
        "size": "5 m."
    },
    "25": {
        "feature": "no feature",
        "size": "5 m."
    },
    "26": {
        "feature": "no feature",
        "size": "5 m."
    },
    "27": {
        "feature": "no feature",
        "size": "5 m."
    },
    "28": {
        "feature": "no feature",
        "size": "5 m."
    },
    "29": {
        "feature": "no feature",
        "size": "5 m."
    },
    "30": {
        "feature": "no feature",
        "size": "5 m."
    },
    "31": {
        "feature": "no feature",
        "size": "5 m."
    },
    "32": {
        "feature": "no feature",
        "size": "5 m."
    },
    "33": {
        "feature": "no feature",
        "size": "5 m."
    },
    "34": {
        "feature": "no feature",
        "size": "5 m."
    },
    "35": {
        "feature": "no feature",
        "size": "5 m."
    },
    "36": {
        "feature": "no feature",
        "size": "5 m."
    },
    "37": {
        "feature": "no feature",
        "size": "5 m."
    },
    "38": {
        "feature": "no feature",
        "size": "5 m."
    },
    "39": {
        "feature": "no feature",
        "size": "5 m."
    },
    "40": {
        "feature": "no feature",
        "size": "5 m."
    },
    "41": {
        "feature": "no feature",
        "size": "5 m."
    },
    "42": {
        "feature": "no feature",
        "size": "5 m."
    },
    "43": {
        "feature": "no feature",
        "size": "5 m."
    },
    "44": {
        "feature": "no feature",
        "size": "5 m."
    },
    "45": {
        "feature": "no feature",
        "size": "5 m."
    },
    "46": {
        "feature": "no feature",
        "size": "5 m."
    },
    "47": {
        "feature": "no feature",
        "size": "5 m."
    },
    "48": {
        "feature": "no feature",
        "size": "5 m."
    },
    "49": {
        "feature": "no feature",
        "size": "5 m."
    },
    "50": {
        "feature": "no feature",
        "size": "5 m."
    },
    "51": {
        "feature": "no feature",
        "size": "5 m."
    },
    "52": {
        "feature": "no feature",
        "size": "5 m."
    },
    "53": {
        "feature": "no feature",
        "size": "5 m."
    },
    "54": {
        "feature": "no feature",
        "size": "5 m."
    },
    "55": {
        "feature": "no feature",
        "size": "5 m."
    },
    "56": {
        "feature": "no feature",
        "size": "5 m."
    },
    "57": {
        "feature": "no feature",
        "size": "5 m."
    },
    "58": {
        "feature": "no feature",
        "size": "5 m."
    },
    "59": {
        "feature": "no feature",
        "size": "5 m."
    },
    "60": {
        "feature": "no feature",
        "size": "5 m."
    },
    "61": {
        "feature": "no feature",
        "size": "5 m."
    },
    "62": {
        "feature": "no feature",
        "size": "5 m."
    },
    "63": {
        "feature": "no feature",
        "size": "5 m."
    },
    "64": {
        "feature": "no feature",
        "size": "5 m."
    },
    "65": {
        "feature": "no feature",
        "size": "5 m."
    },
    "66": {
        "feature": "no feature",
        "size": "5 m."
    },
    "67": {
        "feature": "no feature",
        "size": "5 m."
    },
    "68": {
        "feature": "no feature",
        "size": "5 m."
    },
    "69": {
        "feature": "no feature",
        "size": "5 m."
    },
    "70": {
        "feature": "no feature",
        "size": "5 m."
    },
    "71": {
        "feature": "oasis",
        "size": "1d4 m."
    },
    "72": {
        "feature": "oasis",
        "size": "1d4 m."
    },
    "73": {
        "feature": "oasis",
        "size": "1d4 m."
    },
    "74": {
        "feature": "oasis",
        "size": "1d4 m."
    },
    "75": {
        "feature": "oasis",
        "size": "1d4 m."
    },
    "76": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "77": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "78": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "79": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "80": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "81": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "82": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "83": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "84": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "85": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "86": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "87": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "88": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "89": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "90": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "91": {
        "feature": "structure",
        "size": ""
    },
    "92": {
        "feature": "structure",
        "size": ""
    },
    "93": {
        "feature": "monument",
        "size": ""
    },
    "94": {
        "feature": "monument",
        "size": ""
    },
    "95": {
        "feature": "special",
        "size": ""
    },
    "96": {
        "feature": "monster lair",
        "size": ""
    },
    "97": {
        "feature": "monster lair",
        "size": ""
    },
    "98": {
        "feature": "monster lair",
        "size": ""
    },
    "99": {
        "feature": "monster lair",
        "size": ""
    },
    "100": {
        "feature": "monster lair",
        "size": ""
    }
};

const table_wilderness_terrain_desert_count = Object.keys(table_wilderness_terrain_desert).length;

const table_wilderness_terrain_forest_jungle = {
    "1": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "2": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "3": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "4": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "5": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "6": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "7": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "8": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "9": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "10": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "11": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "12": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "13": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "14": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "15": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "16": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "17": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "18": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "19": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "20": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "21": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "22": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "23": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "24": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "25": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "26": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "27": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "28": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "29": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "30": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "31": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "32": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "33": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "34": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "35": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "36": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "37": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "38": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "39": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "40": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "41": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "42": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "43": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "44": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "45": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "46": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "47": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "48": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "49": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "50": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "51": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "52": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "53": {
        "feature": "small clearing",
        "size": ""
    },
    "54": {
        "feature": "small clearing",
        "size": ""
    },
    "55": {
        "feature": "small clearing",
        "size": ""
    },
    "56": {
        "feature": "small clearing",
        "size": ""
    },
    "57": {
        "feature": "large clearing",
        "size": ""
    },
    "58": {
        "feature": "large clearing",
        "size": ""
    },
    "59": {
        "feature": "large clearing",
        "size": ""
    },
    "60": {
        "feature": "large clearing",
        "size": ""
    },
    "61": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "62": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "63": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "64": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "65": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "66": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "67": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "68": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "69": {
        "feature": "waterway",
        "size": ""
    },
    "70": {
        "feature": "waterway",
        "size": ""
    },
    "71": {
        "feature": "waterway",
        "size": ""
    },
    "72": {
        "feature": "waterway",
        "size": ""
    },
    "73": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "74": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "75": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "76": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "77": {
        "feature": "clearfelled area",
        "size": "1d4 m."
    },
    "78": {
        "feature": "clearfelled area",
        "size": "1d4 m."
    },
    "79": {
        "feature": "clearfelled area",
        "size": "1d4 m."
    },
    "80": {
        "feature": "clearfelled area",
        "size": "1d4 m."
    },
    "81": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "82": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "83": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "84": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "85": {
        "feature": "swamp",
        "size": "1d4 m."
    },
    "86": {
        "feature": "swamp",
        "size": "1d4 m."
    },
    "87": {
        "feature": "swamp",
        "size": "1d4 m."
    },
    "88": {
        "feature": "swamp",
        "size": "1d4 m."
    },
    "89": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "90": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "91": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "92": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "93": {
        "feature": "structure",
        "size": ""
    },
    "94": {
        "feature": "monument",
        "size": ""
    },
    "95": {
        "feature": "monument",
        "size": ""
    },
    "96": {
        "feature": "monsters lair",
        "size": ""
    },
    "97": {
        "feature": "special",
        "size": ""
    },
    "98": {
        "feature": "special",
        "size": ""
    },
    "99": {
        "feature": "special",
        "size": ""
    },
    "100": {
        "feature": "special",
        "size": ""
    }
};

const table_wilderness_terrain_forest_jungle_count = Object.keys(table_wilderness_terrain_forest_jungle).length;

const table_wilderness_terrain_grassland = {
    "1": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "2": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "3": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "4": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "5": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "6": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "7": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "8": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "9": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "10": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "11": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "12": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "13": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "14": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "15": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "16": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "17": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "18": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "19": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "20": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "21": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "22": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "23": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "24": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "25": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "26": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "27": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "28": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "29": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "30": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "31": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "32": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "33": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "34": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "35": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "36": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "37": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "38": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "39": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "40": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "41": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "42": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "43": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "44": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "45": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "46": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "47": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "48": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "49": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "50": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "51": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "52": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "53": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "54": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "55": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "56": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "57": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "58": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "59": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "60": {
        "feature": "hills",
        "size": "1d4 m."
    },
    "61": {
        "feature": "swamp",
        "size": "1d4 m."
    },
    "62": {
        "feature": "swamp",
        "size": "1d4 m."
    },
    "63": {
        "feature": "swamp",
        "size": "1d4 m."
    },
    "64": {
        "feature": "swamp",
        "size": "1d4 m."
    },
    "65": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "66": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "67": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "68": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "69": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "70": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "71": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "72": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "73": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "74": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "75": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "76": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "77": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "78": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "79": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "80": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "81": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "82": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "83": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "84": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "85": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "86": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "87": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "88": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "89": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "90": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "91": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "92": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "93": {
        "feature": "structure",
        "size": ""
    },
    "94": {
        "feature": "monument",
        "size": ""
    },
    "95": {
        "feature": "monument",
        "size": ""
    },
    "96": {
        "feature": "special",
        "size": ""
    },
    "97": {
        "feature": "monster lair",
        "size": ""
    },
    "98": {
        "feature": "monster lair",
        "size": ""
    },
    "99": {
        "feature": "monster lair",
        "size": ""
    },
    "100": {
        "feature": "monster lair",
        "size": ""
    }
};

const table_wilderness_terrain_grassland_count = Object.keys(table_wilderness_terrain_grassland).length;

const table_wilderness_terrain_hills = {
    "1": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "2": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "3": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "4": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "5": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "6": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "7": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "8": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "9": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "10": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "11": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "12": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "13": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "14": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "15": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "16": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "17": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "18": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "19": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "20": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "21": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "22": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "23": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "24": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "25": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "26": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "27": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "28": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "29": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "30": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "31": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "32": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "33": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "34": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "35": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "36": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "37": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "38": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "39": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "40": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "41": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "42": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "43": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "44": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "45": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "46": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "47": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "48": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "49": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "50": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "51": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "52": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "53": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "54": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "55": {
        "feature": "no feature",
        "size": "5 miles"
    },
    "56": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "57": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "58": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "59": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "60": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "61": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "62": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "63": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "64": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "65": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "66": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "67": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "68": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "69": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "70": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "71": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "72": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "73": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "74": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "75": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "76": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "77": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "78": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "79": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "80": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "81": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "82": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "83": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "84": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "85": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "86": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "87": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "88": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "89": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "90": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "91": {
        "feature": "structure",
        "size": ""
    },
    "92": {
        "feature": "structure",
        "size": ""
    },
    "93": {
        "feature": "monument",
        "size": ""
    },
    "94": {
        "feature": "monument",
        "size": ""
    },
    "95": {
        "feature": "special",
        "size": ""
    },
    "96": {
        "feature": "monster lair",
        "size": ""
    },
    "97": {
        "feature": "monster lair",
        "size": ""
    },
    "98": {
        "feature": "monster lair",
        "size": ""
    },
    "99": {
        "feature": "monster lair",
        "size": ""
    },
    "100": {
        "feature": "monster lair",
        "size": ""
    }
};

const table_wilderness_terrain_hills_count = Object.keys(table_wilderness_terrain_hills).length;

const table_wilderness_terrain_mountains = {
    "1": {
        "feature": "no feature",
        "size": "5 m."
    },
    "2": {
        "feature": "no feature",
        "size": "5 m."
    },
    "3": {
        "feature": "no feature",
        "size": "5 m."
    },
    "4": {
        "feature": "no feature",
        "size": "5 m."
    },
    "5": {
        "feature": "no feature",
        "size": "5 m."
    },
    "6": {
        "feature": "no feature",
        "size": "5 m."
    },
    "7": {
        "feature": "no feature",
        "size": "5 m."
    },
    "8": {
        "feature": "no feature",
        "size": "5 m."
    },
    "9": {
        "feature": "no feature",
        "size": "5 m."
    },
    "10": {
        "feature": "no feature",
        "size": "5 m."
    },
    "11": {
        "feature": "no feature",
        "size": "5 m."
    },
    "12": {
        "feature": "no feature",
        "size": "5 m."
    },
    "13": {
        "feature": "no feature",
        "size": "5 m."
    },
    "14": {
        "feature": "no feature",
        "size": "5 m."
    },
    "15": {
        "feature": "no feature",
        "size": "5 m."
    },
    "16": {
        "feature": "no feature",
        "size": "5 m."
    },
    "17": {
        "feature": "no feature",
        "size": "5 m."
    },
    "18": {
        "feature": "no feature",
        "size": "5 m."
    },
    "19": {
        "feature": "no feature",
        "size": "5 m."
    },
    "20": {
        "feature": "no feature",
        "size": "5 m."
    },
    "21": {
        "feature": "no feature",
        "size": "5 m."
    },
    "22": {
        "feature": "no feature",
        "size": "5 m."
    },
    "23": {
        "feature": "no feature",
        "size": "5 m."
    },
    "24": {
        "feature": "no feature",
        "size": "5 m."
    },
    "25": {
        "feature": "no feature",
        "size": "5 m."
    },
    "26": {
        "feature": "no feature",
        "size": "5 m."
    },
    "27": {
        "feature": "no feature",
        "size": "5 m."
    },
    "28": {
        "feature": "no feature",
        "size": "5 m."
    },
    "29": {
        "feature": "no feature",
        "size": "5 m."
    },
    "30": {
        "feature": "no feature",
        "size": "5 m."
    },
    "31": {
        "feature": "no feature",
        "size": "5 m."
    },
    "32": {
        "feature": "no feature",
        "size": "5 m."
    },
    "33": {
        "feature": "no feature",
        "size": "5 m."
    },
    "34": {
        "feature": "no feature",
        "size": "5 m."
    },
    "35": {
        "feature": "no feature",
        "size": "5 m."
    },
    "36": {
        "feature": "no feature",
        "size": "5 m."
    },
    "37": {
        "feature": "no feature",
        "size": "5 m."
    },
    "38": {
        "feature": "no feature",
        "size": "5 m."
    },
    "39": {
        "feature": "no feature",
        "size": "5 m."
    },
    "40": {
        "feature": "no feature",
        "size": "5 m."
    },
    "41": {
        "feature": "no feature",
        "size": "5 m."
    },
    "42": {
        "feature": "no feature",
        "size": "5 m."
    },
    "43": {
        "feature": "no feature",
        "size": "5 m."
    },
    "44": {
        "feature": "no feature",
        "size": "5 m."
    },
    "45": {
        "feature": "no feature",
        "size": "5 m."
    },
    "46": {
        "feature": "no feature",
        "size": "5 m."
    },
    "47": {
        "feature": "no feature",
        "size": "5 m."
    },
    "48": {
        "feature": "no feature",
        "size": "5 m."
    },
    "49": {
        "feature": "no feature",
        "size": "5 m."
    },
    "50": {
        "feature": "no feature",
        "size": "5 m."
    },
    "51": {
        "feature": "no feature",
        "size": "5 m."
    },
    "52": {
        "feature": "no feature",
        "size": "5 m."
    },
    "53": {
        "feature": "no feature",
        "size": "5 m."
    },
    "54": {
        "feature": "no feature",
        "size": "5 m."
    },
    "55": {
        "feature": "no feature",
        "size": "5 m."
    },
    "56": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "57": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "58": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "59": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "60": {
        "feature": "gully",
        "size": "1d4 m."
    },
    "61": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "62": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "63": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "64": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "65": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "66": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "67": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "68": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "69": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "70": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "71": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "72": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "73": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "74": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "75": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "76": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "77": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "78": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "79": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "80": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "81": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "82": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "83": {
        "feature": "small mountain range",
        "size": "1d4 m."
    },
    "84": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "85": {
        "feature": "foothills",
        "size": "1d4 m."
    },
    "86": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "87": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "88": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "89": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "90": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "91": {
        "feature": "structure",
        "size": ""
    },
    "92": {
        "feature": "structure",
        "size": ""
    },
    "93": {
        "feature": "monument",
        "size": ""
    },
    "94": {
        "feature": "monument",
        "size": ""
    },
    "95": {
        "feature": "special",
        "size": ""
    },
    "96": {
        "feature": "monster lair",
        "size": ""
    },
    "97": {
        "feature": "monster lair",
        "size": ""
    },
    "98": {
        "feature": "monster lair",
        "size": ""
    },
    "99": {
        "feature": "monster lair",
        "size": ""
    },
    "100": {
        "feature": "monster lair",
        "size": ""
    }
};

const table_wilderness_terrain_mountains_count = Object.keys(table_wilderness_terrain_mountains).length;

const table_wilderness_terrain_swamp = {
    "1": {
        "feature": "no feature",
        "size": "5 m."
    },
    "2": {
        "feature": "no feature",
        "size": "5 m."
    },
    "3": {
        "feature": "no feature",
        "size": "5 m."
    },
    "4": {
        "feature": "no feature",
        "size": "5 m."
    },
    "5": {
        "feature": "no feature",
        "size": "5 m."
    },
    "6": {
        "feature": "no feature",
        "size": "5 m."
    },
    "7": {
        "feature": "no feature",
        "size": "5 m."
    },
    "8": {
        "feature": "no feature",
        "size": "5 m."
    },
    "9": {
        "feature": "no feature",
        "size": "5 m."
    },
    "10": {
        "feature": "no feature",
        "size": "5 m."
    },
    "11": {
        "feature": "no feature",
        "size": "5 m."
    },
    "12": {
        "feature": "no feature",
        "size": "5 m."
    },
    "13": {
        "feature": "no feature",
        "size": "5 m."
    },
    "14": {
        "feature": "no feature",
        "size": "5 m."
    },
    "15": {
        "feature": "no feature",
        "size": "5 m."
    },
    "16": {
        "feature": "no feature",
        "size": "5 m."
    },
    "17": {
        "feature": "no feature",
        "size": "5 m."
    },
    "18": {
        "feature": "no feature",
        "size": "5 m."
    },
    "19": {
        "feature": "no feature",
        "size": "5 m."
    },
    "20": {
        "feature": "no feature",
        "size": "5 m."
    },
    "21": {
        "feature": "no feature",
        "size": "5 m."
    },
    "22": {
        "feature": "no feature",
        "size": "5 m."
    },
    "23": {
        "feature": "no feature",
        "size": "5 m."
    },
    "24": {
        "feature": "no feature",
        "size": "5 m."
    },
    "25": {
        "feature": "no feature",
        "size": "5 m."
    },
    "26": {
        "feature": "no feature",
        "size": "5 m."
    },
    "27": {
        "feature": "no feature",
        "size": "5 m."
    },
    "28": {
        "feature": "no feature",
        "size": "5 m."
    },
    "29": {
        "feature": "no feature",
        "size": "5 m."
    },
    "30": {
        "feature": "no feature",
        "size": "5 m."
    },
    "31": {
        "feature": "no feature",
        "size": "5 m."
    },
    "32": {
        "feature": "no feature",
        "size": "5 m."
    },
    "33": {
        "feature": "no feature",
        "size": "5 m."
    },
    "34": {
        "feature": "no feature",
        "size": "5 m."
    },
    "35": {
        "feature": "no feature",
        "size": "5 m."
    },
    "36": {
        "feature": "no feature",
        "size": "5 m."
    },
    "37": {
        "feature": "no feature",
        "size": "5 m."
    },
    "38": {
        "feature": "no feature",
        "size": "5 m."
    },
    "39": {
        "feature": "no feature",
        "size": "5 m."
    },
    "40": {
        "feature": "no feature",
        "size": "5 m."
    },
    "41": {
        "feature": "no feature",
        "size": "5 m."
    },
    "42": {
        "feature": "no feature",
        "size": "5 m."
    },
    "43": {
        "feature": "no feature",
        "size": "5 m."
    },
    "44": {
        "feature": "no feature",
        "size": "5 m."
    },
    "45": {
        "feature": "no feature",
        "size": "5 m."
    },
    "46": {
        "feature": "no feature",
        "size": "5 m."
    },
    "47": {
        "feature": "no feature",
        "size": "5 m."
    },
    "48": {
        "feature": "no feature",
        "size": "5 m."
    },
    "49": {
        "feature": "no feature",
        "size": "5 m."
    },
    "50": {
        "feature": "no feature",
        "size": "5 m."
    },
    "51": {
        "feature": "no feature",
        "size": "5 m."
    },
    "52": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "53": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "54": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "55": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "56": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "57": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "58": {
        "feature": "waterway",
        "size": "1d4 m."
    },
    "59": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "60": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "61": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "62": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "63": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "64": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "65": {
        "feature": "lake",
        "size": "1d4 m."
    },
    "66": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "67": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "68": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "69": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "70": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "71": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "72": {
        "feature": "small wood",
        "size": "1d4 m."
    },
    "73": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "74": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "75": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "76": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "77": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "78": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "79": {
        "feature": "rocky outcrop",
        "size": "1d4 m."
    },
    "80": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "81": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "82": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "83": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "84": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "85": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "86": {
        "feature": "unmarked settlement",
        "size": ""
    },
    "87": {
        "feature": "structure",
        "size": ""
    },
    "88": {
        "feature": "structure",
        "size": ""
    },
    "89": {
        "feature": "monument",
        "size": ""
    },
    "90": {
        "feature": "monument",
        "size": ""
    },
    "91": {
        "feature": "monument",
        "size": ""
    },
    "92": {
        "feature": "special",
        "size": ""
    },
    "93": {
        "feature": "special",
        "size": ""
    },
    "94": {
        "feature": "monsters lair",
        "size": ""
    },
    "95": {
        "feature": "monsters lair",
        "size": ""
    },
    "96": {
        "feature": "monsters lair",
        "size": ""
    },
    "97": {
        "feature": "monsters lair",
        "size": ""
    },
    "98": {
        "feature": "monsters lair",
        "size": ""
    },
    "99": {
        "feature": "monsters lair",
        "size": ""
    },
    "100": {
        "feature": "monsters lair",
        "size": ""
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
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "2": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "3": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "4": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "5": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "6": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "7": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "8": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "9": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "10": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "11": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "12": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "13": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "14": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "15": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "16": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "17": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "18": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "19": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "20": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "21": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "22": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "23": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "24": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "25": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "26": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "27": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "28": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "29": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "30": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "31": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "32": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "33": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "34": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "35": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "36": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "37": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "38": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "39": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "40": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "41": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "42": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "43": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "44": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "45": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "46": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "47": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "48": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "49": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "50": {
        "type": "Clearfelled area",
        "notes": "Large section of forest removed for local industry"
    },
    "51": {
        "type": "Army cutting down trees to build siege weapons. 40% human",
        "notes": "50% army still there"
    },
    "52": {
        "type": "Army cutting down trees to build siege weapons. 40% human",
        "notes": "50% army still there"
    },
    "53": {
        "type": "Army cutting down trees to build siege weapons. 40% human",
        "notes": "50% army still there"
    },
    "54": {
        "type": "Army cutting down trees to build siege weapons. 40% human",
        "notes": "50% army still there"
    },
    "55": {
        "type": "Army cutting down trees to build siege weapons. 40% human",
        "notes": "50% army still there"
    },
    "56": {
        "type": "Army cutting down trees to build siege weapons. 40% human",
        "notes": "50% army still there"
    },
    "57": {
        "type": "Army cutting down trees to build siege weapons. 40% human",
        "notes": "50% army still there"
    },
    "58": {
        "type": "Army cutting down trees to build siege weapons. 40% human",
        "notes": "50% army still there"
    },
    "59": {
        "type": "Army cutting down trees to build siege weapons. 40% human",
        "notes": "50% army still there"
    },
    "60": {
        "type": "Army cutting down trees to build siege weapons. 40% human",
        "notes": "50% army still there"
    },
    "61": {
        "type": "This clear area is the result of a forest fire, not active clearfelling.",
        "notes": "DC 12 nature check to discern cause. Q/A rolls to determine cause."
    },
    "62": {
        "type": "This clear area is the result of a forest fire, not active clearfelling.",
        "notes": "DC 12 nature check to discern cause. Q/A rolls to determine cause."
    },
    "63": {
        "type": "This clear area is the result of a forest fire, not active clearfelling.",
        "notes": "DC 12 nature check to discern cause. Q/A rolls to determine cause."
    },
    "64": {
        "type": "This clear area is the result of a forest fire, not active clearfelling.",
        "notes": "DC 12 nature check to discern cause. Q/A rolls to determine cause."
    },
    "65": {
        "type": "This clear area is the result of a forest fire, not active clearfelling.",
        "notes": "DC 12 nature check to discern cause. Q/A rolls to determine cause."
    },
    "66": {
        "type": "This clear area is the result of a forest fire, not active clearfelling.",
        "notes": "DC 12 nature check to discern cause. Q/A rolls to determine cause."
    },
    "67": {
        "type": "This clear area is the result of a forest fire, not active clearfelling.",
        "notes": "DC 12 nature check to discern cause. Q/A rolls to determine cause."
    },
    "68": {
        "type": "This clear area is the result of a forest fire, not active clearfelling.",
        "notes": "DC 12 nature check to discern cause. Q/A rolls to determine cause."
    },
    "69": {
        "type": "This clear area is the result of a forest fire, not active clearfelling.",
        "notes": "DC 12 nature check to discern cause. Q/A rolls to determine cause."
    },
    "70": {
        "type": "This clear area is the result of a forest fire, not active clearfelling.",
        "notes": "DC 12 nature check to discern cause. Q/A rolls to determine cause."
    },
    "71": {
        "type": "Clearfelled area contains an unmarked settlement",
        "notes": "Roll on Unmarked Settlement Table."
    },
    "72": {
        "type": "Clearfelled area contains an unmarked settlement",
        "notes": "Roll on Unmarked Settlement Table."
    },
    "73": {
        "type": "Clearfelled area contains an unmarked settlement",
        "notes": "Roll on Unmarked Settlement Table."
    },
    "74": {
        "type": "Clearfelled area contains an unmarked settlement",
        "notes": "Roll on Unmarked Settlement Table."
    },
    "75": {
        "type": "Clearfelled area contains an unmarked settlement",
        "notes": "Roll on Unmarked Settlement Table."
    },
    "76": {
        "type": "Clearfelled area contains an unmarked settlement",
        "notes": "Roll on Unmarked Settlement Table."
    },
    "77": {
        "type": "Clearfelled area contains an unmarked settlement",
        "notes": "Roll on Unmarked Settlement Table."
    },
    "78": {
        "type": "Clearfelled area contains an unmarked settlement",
        "notes": "Roll on Unmarked Settlement Table."
    },
    "79": {
        "type": "Clearfelled area contains an unmarked settlement",
        "notes": "Roll on Unmarked Settlement Table."
    },
    "80": {
        "type": "Clearfelled area contains an unmarked settlement",
        "notes": "Roll on Unmarked Settlement Table."
    },
    "81": {
        "type": "Area being clearfelled presently. Workers are 70% human. Contracted by nearby large settlement.",
        "notes": "Q/A to find out more."
    },
    "82": {
        "type": "Area being clearfelled presently. Workers are 70% human. Contracted by nearby large settlement.",
        "notes": "Q/A to find out more."
    },
    "83": {
        "type": "Area being clearfelled presently. Workers are 70% human. Contracted by nearby large settlement.",
        "notes": "Q/A to find out more."
    },
    "84": {
        "type": "Area being clearfelled presently. Workers are 70% human. Contracted by nearby large settlement.",
        "notes": "Q/A to find out more."
    },
    "85": {
        "type": "Area being clearfelled presently. Workers are 70% human. Contracted by nearby large settlement.",
        "notes": "Q/A to find out more."
    },
    "86": {
        "type": "Area being clearfelled presently. Workers are 70% human. Contracted by nearby large settlement.",
        "notes": "Q/A to find out more."
    },
    "87": {
        "type": "Area being clearfelled presently. Workers are 70% human. Contracted by nearby large settlement.",
        "notes": "Q/A to find out more."
    },
    "88": {
        "type": "Area being clearfelled presently. Workers are 70% human. Contracted by nearby large settlement.",
        "notes": "Q/A to find out more."
    },
    "89": {
        "type": "Area being clearfelled presently. Workers are 70% human. Contracted by nearby large settlement.",
        "notes": "Q/A to find out more."
    },
    "90": {
        "type": "Area being clearfelled presently. Workers are 70% human. Contracted by nearby large settlement.",
        "notes": "Q/A to find out more."
    },
    "91": {
        "type": "Area being clearfelled presently. Workers are 70% human. Timber will go to building new Unmarked Settlement",
        "notes": "Roll on Unmarked Settlement table. Workers camp nearby"
    },
    "92": {
        "type": "Area being clearfelled presently. Workers are 70% human. Timber will go to building new Unmarked Settlement",
        "notes": "Roll on Unmarked Settlement table. Workers camp nearby"
    },
    "93": {
        "type": "Area being clearfelled presently. Workers are 70% human. Timber will go to building new Unmarked Settlement",
        "notes": "Roll on Unmarked Settlement table. Workers camp nearby"
    },
    "94": {
        "type": "Area being clearfelled presently. Workers are 70% human. Timber will go to building new Unmarked Settlement",
        "notes": "Roll on Unmarked Settlement table. Workers camp nearby"
    },
    "95": {
        "type": "Area being clearfelled presently. Workers are 70% human. Timber will go to building new Unmarked Settlement",
        "notes": "Roll on Unmarked Settlement table. Workers camp nearby"
    },
    "96": {
        "type": "Area being clearfelled presently. Workers are 70% human. Timber will go to building new Unmarked Settlement",
        "notes": "Roll on Unmarked Settlement table. Workers camp nearby"
    },
    "97": {
        "type": "Area being clearfelled presently. Workers are 70% human. Timber will go to building new Unmarked Settlement",
        "notes": "Roll on Unmarked Settlement table. Workers camp nearby"
    },
    "98": {
        "type": "Area being clearfelled presently. Workers are 70% human. Timber will go to building new Unmarked Settlement",
        "notes": "Roll on Unmarked Settlement table. Workers camp nearby"
    },
    "99": {
        "type": "Area being clearfelled presently. Workers are 70% human. Timber will go to building new Unmarked Settlement",
        "notes": "Roll on Unmarked Settlement table. Workers camp nearby"
    },
    "100": {
        "type": "Area being clearfelled presently. Workers are 70% human. Timber will go to building new Unmarked Settlement",
        "notes": "Roll on Unmarked Settlement table. Workers camp nearby"
    }
};

const table_wilderness_feature_clearfelled_area_count = Object.keys(table_wilderness_feature_clearfelled_area).length;

const table_wilderness_feature_clearing = {
    "1": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "2": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "3": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "4": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "5": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "6": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "7": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "8": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "9": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "10": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "11": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "12": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "13": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "14": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "15": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "16": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "17": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "18": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "19": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "20": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "21": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "22": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "23": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "24": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "25": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "26": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "27": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "28": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "29": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "30": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "31": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "32": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "33": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "34": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "35": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "36": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "37": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "38": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "39": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "40": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "41": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "42": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "43": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "44": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "45": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "46": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "47": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "48": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "49": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "50": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "51": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "52": {
        "type": "Natural clearing, devoid of trees",
        "notes": "Is something watching you from the trees? Q/A roll. Do you notice it?"
    },
    "53": {
        "type": "Druid circle containing standing stones",
        "notes": "Q/A roll to see what you can discern. Clue 20%"
    },
    "54": {
        "type": "Druid circle containing standing stones",
        "notes": "Q/A roll to see what you can discern. Clue 20%"
    },
    "55": {
        "type": "Druid circle containing standing stones",
        "notes": "Q/A roll to see what you can discern. Clue 20%"
    },
    "56": {
        "type": "Druid circle containing standing stones",
        "notes": "Q/A roll to see what you can discern. Clue 20%"
    },
    "57": {
        "type": "Druid circle containing standing stones",
        "notes": "Q/A roll to see what you can discern. Clue 20%"
    },
    "58": {
        "type": "Druid circle containing standing stones",
        "notes": "Q/A roll to see what you can discern. Clue 20%"
    },
    "59": {
        "type": "Totems and other sinister symbols, possibly dark rituals take place here.",
        "notes": "Q/A rolls, medium encounter 10% Clue 40%"
    },
    "60": {
        "type": "Totems and other sinister symbols, possibly dark rituals take place here.",
        "notes": "Q/A rolls, medium encounter 10% Clue 40%"
    },
    "61": {
        "type": "Totems and other sinister symbols, possibly dark rituals take place here.",
        "notes": "Q/A rolls, medium encounter 10% Clue 40%"
    },
    "62": {
        "type": "Totems and other sinister symbols, possibly dark rituals take place here.",
        "notes": "Q/A rolls, medium encounter 10% Clue 40%"
    },
    "63": {
        "type": "Totems and other sinister symbols, possibly dark rituals take place here.",
        "notes": "Q/A rolls, medium encounter 10% Clue 40%"
    },
    "64": {
        "type": "Totems and other sinister symbols, possibly dark rituals take place here.",
        "notes": "Q/A rolls, medium encounter 10% Clue 40%"
    },
    "65": {
        "type": "Totems and other sinister symbols, possibly dark rituals take place here.",
        "notes": "Q/A rolls, medium encounter 10% Clue 40%"
    },
    "66": {
        "type": "Clearing contains a pond, watering hole for local wildlife",
        "notes": "Easy encounter(beast 20% If left alone it will probably just take a drink and leave."
    },
    "67": {
        "type": "Clearing contains a pond, watering hole for local wildlife",
        "notes": "Easy encounter(beast 20% If left alone it will probably just take a drink and leave."
    },
    "68": {
        "type": "Clearing contains a pond, watering hole for local wildlife",
        "notes": "Easy encounter(beast 20% If left alone it will probably just take a drink and leave."
    },
    "69": {
        "type": "Clearing contains a pond, watering hole for local wildlife",
        "notes": "Easy encounter(beast 20% If left alone it will probably just take a drink and leave."
    },
    "70": {
        "type": "Clearing contains a pond, watering hole for local wildlife",
        "notes": "Easy encounter(beast 20% If left alone it will probably just take a drink and leave."
    },
    "71": {
        "type": "Clearing contains a pond, watering hole for local wildlife",
        "notes": "Easy encounter(beast 20% If left alone it will probably just take a drink and leave."
    },
    "72": {
        "type": "Abandoned campsite.",
        "notes": "Q/A rolls, investigation rolls to find out more. Clue 50%"
    },
    "73": {
        "type": "Abandoned campsite.",
        "notes": "Q/A rolls, investigation rolls to find out more. Clue 50%"
    },
    "74": {
        "type": "Abandoned campsite.",
        "notes": "Q/A rolls, investigation rolls to find out more. Clue 50%"
    },
    "75": {
        "type": "Abandoned campsite.",
        "notes": "Q/A rolls, investigation rolls to find out more. Clue 50%"
    },
    "76": {
        "type": "Abandoned campsite.",
        "notes": "Q/A rolls, investigation rolls to find out more. Clue 50%"
    },
    "77": {
        "type": "Abandoned campsite.",
        "notes": "Q/A rolls, investigation rolls to find out more. Clue 50%"
    },
    "78": {
        "type": "Active campsite",
        "notes": "Perception check, DC 8, to determine whether you hear the inhabitants before seeing them. 50% friendly."
    },
    "79": {
        "type": "Active campsite",
        "notes": "Perception check, DC 8, to determine whether you hear the inhabitants before seeing them. 50% friendly."
    },
    "80": {
        "type": "Active campsite",
        "notes": "Perception check, DC 8, to determine whether you hear the inhabitants before seeing them. 50% friendly."
    },
    "81": {
        "type": "Active campsite",
        "notes": "Perception check, DC 8, to determine whether you hear the inhabitants before seeing them. 50% friendly."
    },
    "82": {
        "type": "Active campsite",
        "notes": "Perception check, DC 8, to determine whether you hear the inhabitants before seeing them. 50% friendly."
    },
    "83": {
        "type": "Active campsite",
        "notes": "Perception check, DC 8, to determine whether you hear the inhabitants before seeing them. 50% friendly."
    },
    "84": {
        "type": "Magic at work here - some sort of dimensional rift?",
        "notes": "Q/A rolls to see what's happening here!"
    },
    "85": {
        "type": "Magic at work here - some sort of dimensional rift?",
        "notes": "Q/A rolls to see what's happening here!"
    },
    "86": {
        "type": "Magic at work here - some sort of dimensional rift?",
        "notes": "Q/A rolls to see what's happening here!"
    },
    "87": {
        "type": "Magic at work here - some sort of dimensional rift?",
        "notes": "Q/A rolls to see what's happening here!"
    },
    "88": {
        "type": "Magic at work here - some sort of dimensional rift?",
        "notes": "Q/A rolls to see what's happening here!"
    },
    "89": {
        "type": "Magic at work here - some sort of dimensional rift?",
        "notes": "Q/A rolls to see what's happening here!"
    },
    "90": {
        "type": "Structure present in the clearing.",
        "notes": "Roll on Structures table."
    },
    "91": {
        "type": "Structure present in the clearing.",
        "notes": "Roll on Structures table."
    },
    "92": {
        "type": "Structure present in the clearing.",
        "notes": "Roll on Structures table."
    },
    "93": {
        "type": "Structure present in the clearing.",
        "notes": "Roll on Structures table."
    },
    "94": {
        "type": "Structure present in the clearing.",
        "notes": "Roll on Structures table."
    },
    "95": {
        "type": "Structure present in the clearing.",
        "notes": "Roll on Structures table."
    },
    "96": {
        "type": "Treant meeting currently in progress",
        "notes": "Q/A / Charisma rolls to interact?"
    },
    "97": {
        "type": "Treant meeting currently in progress",
        "notes": "Q/A / Charisma rolls to interact?"
    },
    "98": {
        "type": "Treant meeting currently in progress",
        "notes": "Q/A / Charisma rolls to interact?"
    },
    "99": {
        "type": "Magical glade. A mage or some other magic user (or fey creatures) has a residence here.",
        "notes": "50% friendly. Q/A rolls to determine interaction. Perhaps they have a quest for you!"
    },
    "100": {
        "type": "Magical glade. A mage or some other magic user (or fey creatures) has a residence here.",
        "notes": "50% friendly. Q/A rolls to determine interaction. Perhaps they have a quest for you!"
    }
};

const table_wilderness_feature_clearing_count = Object.keys(table_wilderness_feature_clearing).length;

const table_wilderness_feature_gully = {
    "1": {
        "type": "Standard gully",
        "notes": ""
    },
    "2": {
        "type": "Standard gully",
        "notes": ""
    },
    "3": {
        "type": "Standard gully",
        "notes": ""
    },
    "4": {
        "type": "Standard gully",
        "notes": ""
    },
    "5": {
        "type": "Standard gully",
        "notes": ""
    },
    "6": {
        "type": "Standard gully",
        "notes": ""
    },
    "7": {
        "type": "Standard gully",
        "notes": ""
    },
    "8": {
        "type": "Standard gully",
        "notes": ""
    },
    "9": {
        "type": "Standard gully",
        "notes": ""
    },
    "10": {
        "type": "Standard gully",
        "notes": ""
    },
    "11": {
        "type": "Standard gully",
        "notes": ""
    },
    "12": {
        "type": "Standard gully",
        "notes": ""
    },
    "13": {
        "type": "Standard gully",
        "notes": ""
    },
    "14": {
        "type": "Standard gully",
        "notes": ""
    },
    "15": {
        "type": "Standard gully",
        "notes": ""
    },
    "16": {
        "type": "Standard gully",
        "notes": ""
    },
    "17": {
        "type": "Standard gully",
        "notes": ""
    },
    "18": {
        "type": "Standard gully",
        "notes": ""
    },
    "19": {
        "type": "Standard gully",
        "notes": ""
    },
    "20": {
        "type": "Standard gully",
        "notes": ""
    },
    "21": {
        "type": "Standard gully",
        "notes": ""
    },
    "22": {
        "type": "Standard gully",
        "notes": ""
    },
    "23": {
        "type": "Standard gully",
        "notes": ""
    },
    "24": {
        "type": "Standard gully",
        "notes": ""
    },
    "25": {
        "type": "Standard gully",
        "notes": ""
    },
    "26": {
        "type": "Standard gully",
        "notes": ""
    },
    "27": {
        "type": "Standard gully",
        "notes": ""
    },
    "28": {
        "type": "Standard gully",
        "notes": ""
    },
    "29": {
        "type": "Standard gully",
        "notes": ""
    },
    "30": {
        "type": "Standard gully",
        "notes": ""
    },
    "31": {
        "type": "Standard gully",
        "notes": ""
    },
    "32": {
        "type": "Standard gully",
        "notes": ""
    },
    "33": {
        "type": "Standard gully",
        "notes": ""
    },
    "34": {
        "type": "Standard gully",
        "notes": ""
    },
    "35": {
        "type": "Standard gully",
        "notes": ""
    },
    "36": {
        "type": "Standard gully",
        "notes": ""
    },
    "37": {
        "type": "Standard gully",
        "notes": ""
    },
    "38": {
        "type": "Standard gully",
        "notes": ""
    },
    "39": {
        "type": "Standard gully",
        "notes": ""
    },
    "40": {
        "type": "Standard gully",
        "notes": ""
    },
    "41": {
        "type": "Standard gully",
        "notes": ""
    },
    "42": {
        "type": "Standard gully",
        "notes": ""
    },
    "43": {
        "type": "Standard gully",
        "notes": ""
    },
    "44": {
        "type": "Standard gully",
        "notes": ""
    },
    "45": {
        "type": "Standard gully",
        "notes": ""
    },
    "46": {
        "type": "Standard gully",
        "notes": ""
    },
    "47": {
        "type": "Standard gully",
        "notes": ""
    },
    "48": {
        "type": "Standard gully",
        "notes": ""
    },
    "49": {
        "type": "Standard gully",
        "notes": ""
    },
    "50": {
        "type": "Standard gully",
        "notes": ""
    },
    "51": {
        "type": "Gully with a waterway",
        "notes": ""
    },
    "52": {
        "type": "Gully with a waterway",
        "notes": ""
    },
    "53": {
        "type": "Gully with a waterway",
        "notes": ""
    },
    "54": {
        "type": "Gully with a waterway",
        "notes": ""
    },
    "55": {
        "type": "Gully with a waterway",
        "notes": ""
    },
    "56": {
        "type": "Gully with a waterway",
        "notes": ""
    },
    "57": {
        "type": "Gully with a waterway",
        "notes": ""
    },
    "58": {
        "type": "Rocky gully containing caves",
        "notes": "25% easy encounter. Q/A & investigation rolls to investigate caves. 15% chance they lead to tunnels. 10% NPC."
    },
    "59": {
        "type": "Rocky gully containing caves",
        "notes": "25% easy encounter. Q/A & investigation rolls to investigate caves. 15% chance they lead to tunnels. 10% NPC."
    },
    "60": {
        "type": "Rocky gully containing caves",
        "notes": "25% easy encounter. Q/A & investigation rolls to investigate caves. 15% chance they lead to tunnels. 10% NPC."
    },
    "61": {
        "type": "Rocky gully containing caves",
        "notes": "25% easy encounter. Q/A & investigation rolls to investigate caves. 15% chance they lead to tunnels. 10% NPC."
    },
    "62": {
        "type": "Rocky gully containing caves",
        "notes": "25% easy encounter. Q/A & investigation rolls to investigate caves. 15% chance they lead to tunnels. 10% NPC."
    },
    "63": {
        "type": "Rocky gully containing caves",
        "notes": "25% easy encounter. Q/A & investigation rolls to investigate caves. 15% chance they lead to tunnels. 10% NPC."
    },
    "64": {
        "type": "Gully that looks as if recently caused, perhaps by an earthquake or other natural disaster… or by a huge creature perhaps!",
        "notes": "Q/A / nature rolls to discern cause"
    },
    "65": {
        "type": "Gully that looks as if recently caused, perhaps by an earthquake or other natural disaster… or by a huge creature perhaps!",
        "notes": "Q/A / nature rolls to discern cause"
    },
    "66": {
        "type": "Gully that looks as if recently caused, perhaps by an earthquake or other natural disaster… or by a huge creature perhaps!",
        "notes": "Q/A / nature rolls to discern cause"
    },
    "67": {
        "type": "Gully that looks as if recently caused, perhaps by an earthquake or other natural disaster… or by a huge creature perhaps!",
        "notes": "Q/A / nature rolls to discern cause"
    },
    "68": {
        "type": "Gully that looks as if recently caused, perhaps by an earthquake or other natural disaster… or by a huge creature perhaps!",
        "notes": "Q/A / nature rolls to discern cause"
    },
    "69": {
        "type": "Gully that looks as if recently caused, perhaps by an earthquake or other natural disaster… or by a huge creature perhaps!",
        "notes": "Q/A / nature rolls to discern cause"
    },
    "70": {
        "type": "Gully that looks as if recently caused, perhaps by an earthquake or other natural disaster… or by a huge creature perhaps!",
        "notes": "Q/A / nature rolls to discern cause"
    },
    "71": {
        "type": "Gully that looks as if recently caused, perhaps by an earthquake or other natural disaster… or by a huge creature perhaps!",
        "notes": "Q/A / nature rolls to discern cause"
    },
    "72": {
        "type": "Dry gully containing the bones of many animals. A graveyard of sorts",
        "notes": "Q/A nature rolls to find out more"
    },
    "73": {
        "type": "Dry gully containing the bones of many animals. A graveyard of sorts",
        "notes": "Q/A nature rolls to find out more"
    },
    "74": {
        "type": "Dry gully containing the bones of many animals. A graveyard of sorts",
        "notes": "Q/A nature rolls to find out more"
    },
    "75": {
        "type": "Dry gully containing the bones of many animals. A graveyard of sorts",
        "notes": "Q/A nature rolls to find out more"
    },
    "76": {
        "type": "Dry gully containing the bones of many animals. A graveyard of sorts",
        "notes": "Q/A nature rolls to find out more"
    },
    "77": {
        "type": "Dry gully containing the bones of many animals. A graveyard of sorts",
        "notes": "Q/A nature rolls to find out more"
    },
    "78": {
        "type": "Dry gully containing the bones of many animals. A graveyard of sorts",
        "notes": "Q/A nature rolls to find out more"
    },
    "79": {
        "type": "Heavily wooded gully, an oasis for a particular colony of creatures",
        "notes": "Q/A nature rolls to find out more. Are they still here? 25% Easy encounter, 25% clue"
    },
    "80": {
        "type": "Heavily wooded gully, an oasis for a particular colony of creatures",
        "notes": "Q/A nature rolls to find out more. Are they still here? 25% Easy encounter, 25% clue"
    },
    "81": {
        "type": "Heavily wooded gully, an oasis for a particular colony of creatures",
        "notes": "Q/A nature rolls to find out more. Are they still here? 25% Easy encounter, 25% clue"
    },
    "82": {
        "type": "Heavily wooded gully, an oasis for a particular colony of creatures",
        "notes": "Q/A nature rolls to find out more. Are they still here? 25% Easy encounter, 25% clue"
    },
    "83": {
        "type": "Heavily wooded gully, an oasis for a particular colony of creatures",
        "notes": "Q/A nature rolls to find out more. Are they still here? 25% Easy encounter, 25% clue"
    },
    "84": {
        "type": "Heavily wooded gully, an oasis for a particular colony of creatures",
        "notes": "Q/A nature rolls to find out more. Are they still here? 25% Easy encounter, 25% clue"
    },
    "85": {
        "type": "Heavily wooded gully, an oasis for a particular colony of creatures",
        "notes": "Q/A nature rolls to find out more. Are they still here? 25% Easy encounter, 25% clue"
    },
    "86": {
        "type": "Gully with evidence of mining - an abandoned mining operation",
        "notes": "Mines may lead quite far underground. Go to Random Dungeon Generator"
    },
    "87": {
        "type": "Gully with evidence of mining - an abandoned mining operation",
        "notes": "Mines may lead quite far underground. Go to Random Dungeon Generator"
    },
    "88": {
        "type": "Gully with evidence of mining - an abandoned mining operation",
        "notes": "Mines may lead quite far underground. Go to Random Dungeon Generator"
    },
    "89": {
        "type": "Gully with evidence of mining - an abandoned mining operation",
        "notes": "Mines may lead quite far underground. Go to Random Dungeon Generator"
    },
    "90": {
        "type": "Gully with evidence of mining - an abandoned mining operation",
        "notes": "Mines may lead quite far underground. Go to Random Dungeon Generator"
    },
    "91": {
        "type": "Gully with evidence of mining - an abandoned mining operation",
        "notes": "Mines may lead quite far underground. Go to Random Dungeon Generator"
    },
    "92": {
        "type": "Gully with evidence of mining - an abandoned mining operation",
        "notes": "Mines may lead quite far underground. Go to Random Dungeon Generator"
    },
    "93": {
        "type": "Magical wooded gully. A druid, or wizard, or Fey creatures lives here!",
        "notes": "Friendly 50%, Clue 50%"
    },
    "94": {
        "type": "Magical wooded gully. A druid, or wizard, or Fey creatures lives here!",
        "notes": "Friendly 50%, Clue 50%"
    },
    "95": {
        "type": "Magical wooded gully. A druid, or wizard, or Fey creatures lives here!",
        "notes": "Friendly 50%, Clue 50%"
    },
    "96": {
        "type": "Magical wooded gully. A druid, or wizard, or Fey creatures lives here!",
        "notes": "Friendly 50%, Clue 50%"
    },
    "97": {
        "type": "Magical wooded gully. A druid, or wizard, or Fey creatures lives here!",
        "notes": "Friendly 50%, Clue 50%"
    },
    "98": {
        "type": "Magical wooded gully. A druid, or wizard, or Fey creatures lives here!",
        "notes": "Friendly 50%, Clue 50%"
    },
    "99": {
        "type": "Magical wooded gully. A druid, or wizard, or Fey creatures lives here!",
        "notes": "Friendly 50%, Clue 50%"
    },
    "100": {
        "type": "Magical wooded gully. A druid, or wizard, or Fey creatures lives here!",
        "notes": "Friendly 50%, Clue 50%"
    }
};

const table_wilderness_feature_gully_count = Object.keys(table_wilderness_feature_gully).length;

const table_wilderness_feature_hills = {
    "1": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "2": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "3": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "4": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "5": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "6": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "7": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "8": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "9": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "10": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "11": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "12": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "13": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "14": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "15": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "16": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "17": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "18": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "19": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "20": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "21": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "22": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "23": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "24": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "25": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "26": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "27": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "28": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "29": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "30": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "31": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "32": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "33": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "34": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "35": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "36": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "37": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "38": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "39": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "40": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "41": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "42": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "43": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "44": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "45": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "46": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "47": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "48": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "49": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "50": {
        "type": "Low, rolling hills",
        "notes": "Covered with overarching terrain. In a forest, wooded hills. In grassland, grassy hills."
    },
    "51": {
        "type": "Rocky hills abundant with caves, may also possess a network of natural tunnels",
        "notes": "Q/A rolls to see whether tunnels are present and whether they are inhabited. Clue 25%"
    },
    "52": {
        "type": "Rocky hills abundant with caves, may also possess a network of natural tunnels",
        "notes": "Q/A rolls to see whether tunnels are present and whether they are inhabited. Clue 25%"
    },
    "53": {
        "type": "Rocky hills abundant with caves, may also possess a network of natural tunnels",
        "notes": "Q/A rolls to see whether tunnels are present and whether they are inhabited. Clue 25%"
    },
    "54": {
        "type": "Rocky hills abundant with caves, may also possess a network of natural tunnels",
        "notes": "Q/A rolls to see whether tunnels are present and whether they are inhabited. Clue 25%"
    },
    "55": {
        "type": "Rocky hills abundant with caves, may also possess a network of natural tunnels",
        "notes": "Q/A rolls to see whether tunnels are present and whether they are inhabited. Clue 25%"
    },
    "56": {
        "type": "Rocky hills abundant with caves, may also possess a network of natural tunnels",
        "notes": "Q/A rolls to see whether tunnels are present and whether they are inhabited. Clue 25%"
    },
    "57": {
        "type": "Rocky hills abundant with caves, may also possess a network of natural tunnels",
        "notes": "Q/A rolls to see whether tunnels are present and whether they are inhabited. Clue 25%"
    },
    "58": {
        "type": "Slightly higher hills, giving a good view of the surrounding area",
        "notes": "Q/A A roll to see whether you can see anything of interest. 10% NPC."
    },
    "59": {
        "type": "Slightly higher hills, giving a good view of the surrounding area",
        "notes": "Q/A A roll to see whether you can see anything of interest. 10% NPC."
    },
    "60": {
        "type": "Slightly higher hills, giving a good view of the surrounding area",
        "notes": "Q/A A roll to see whether you can see anything of interest. 10% NPC."
    },
    "61": {
        "type": "Slightly higher hills, giving a good view of the surrounding area",
        "notes": "Q/A A roll to see whether you can see anything of interest. 10% NPC."
    },
    "62": {
        "type": "Slightly higher hills, giving a good view of the surrounding area",
        "notes": "Q/A A roll to see whether you can see anything of interest. 10% NPC."
    },
    "63": {
        "type": "Slightly higher hills, giving a good view of the surrounding area",
        "notes": "Q/A A roll to see whether you can see anything of interest. 10% NPC."
    },
    "64": {
        "type": "Slightly higher hills, giving a good view of the surrounding area",
        "notes": "Q/A A roll to see whether you can see anything of interest. 10% NPC."
    },
    "65": {
        "type": "Sharply jutting, rocky hills, practically unscalable",
        "notes": "Athletics check to scale, DC 16. Fall damage if fail?"
    },
    "66": {
        "type": "Sharply jutting, rocky hills, practically unscalable",
        "notes": "Athletics check to scale, DC 16. Fall damage if fail?"
    },
    "67": {
        "type": "Sharply jutting, rocky hills, practically unscalable",
        "notes": "Athletics check to scale, DC 16. Fall damage if fail?"
    },
    "68": {
        "type": "Sharply jutting, rocky hills, practically unscalable",
        "notes": "Athletics check to scale, DC 16. Fall damage if fail?"
    },
    "69": {
        "type": "Sharply jutting, rocky hills, practically unscalable",
        "notes": "Athletics check to scale, DC 16. Fall damage if fail?"
    },
    "70": {
        "type": "Sharply jutting, rocky hills, practically unscalable",
        "notes": "Athletics check to scale, DC 16. Fall damage if fail?"
    },
    "71": {
        "type": "Sharply jutting, rocky hills, practically unscalable",
        "notes": "Athletics check to scale, DC 16. Fall damage if fail?"
    },
    "72": {
        "type": "Dry, low plateau.",
        "notes": "Monument 25%"
    },
    "73": {
        "type": "Dry, low plateau.",
        "notes": "Monument 25%"
    },
    "74": {
        "type": "Dry, low plateau.",
        "notes": "Monument 25%"
    },
    "75": {
        "type": "Dry, low plateau.",
        "notes": "Monument 25%"
    },
    "76": {
        "type": "Dry, low plateau.",
        "notes": "Monument 25%"
    },
    "77": {
        "type": "Dry, low plateau.",
        "notes": "Monument 25%"
    },
    "78": {
        "type": "Dry, low plateau.",
        "notes": "Monument 25%"
    },
    "79": {
        "type": "Slightly wooded hills, small patches of forest.",
        "notes": "Easy encounter 25%. Roll on Small wood minor feature table."
    },
    "80": {
        "type": "Slightly wooded hills, small patches of forest.",
        "notes": "Easy encounter 25%. Roll on Small wood minor feature table."
    },
    "81": {
        "type": "Slightly wooded hills, small patches of forest.",
        "notes": "Easy encounter 25%. Roll on Small wood minor feature table."
    },
    "82": {
        "type": "Slightly wooded hills, small patches of forest.",
        "notes": "Easy encounter 25%. Roll on Small wood minor feature table."
    },
    "83": {
        "type": "Slightly wooded hills, small patches of forest.",
        "notes": "Easy encounter 25%. Roll on Small wood minor feature table."
    },
    "84": {
        "type": "Slightly wooded hills, small patches of forest.",
        "notes": "Easy encounter 25%. Roll on Small wood minor feature table."
    },
    "85": {
        "type": "Slightly wooded hills, small patches of forest.",
        "notes": "Easy encounter 25%. Roll on Small wood minor feature table."
    },
    "86": {
        "type": "Not hills but barrows of some kind, possibly burial mounds!",
        "notes": "Q/A to determine nature of these mounds. May lead to tunnels."
    },
    "87": {
        "type": "Not hills but barrows of some kind, possibly burial mounds!",
        "notes": "Q/A to determine nature of these mounds. May lead to tunnels."
    },
    "88": {
        "type": "Not hills but barrows of some kind, possibly burial mounds!",
        "notes": "Q/A to determine nature of these mounds. May lead to tunnels."
    },
    "89": {
        "type": "Not hills but barrows of some kind, possibly burial mounds!",
        "notes": "Q/A to determine nature of these mounds. May lead to tunnels."
    },
    "90": {
        "type": "Not hills but barrows of some kind, possibly burial mounds!",
        "notes": "Q/A to determine nature of these mounds. May lead to tunnels."
    },
    "91": {
        "type": "Not hills but barrows of some kind, possibly burial mounds!",
        "notes": "Q/A to determine nature of these mounds. May lead to tunnels."
    },
    "92": {
        "type": "Not hills but barrows of some kind, possibly burial mounds!",
        "notes": "Q/A to determine nature of these mounds. May lead to tunnels."
    },
    "93": {
        "type": "Hills are home to some sort of colony. 50% humanoid, otherwise some sort of burrowing beast.",
        "notes": "Q/A rolls to determine what lurks here."
    },
    "94": {
        "type": "Hills are home to some sort of colony. 50% humanoid, otherwise some sort of burrowing beast.",
        "notes": "Q/A rolls to determine what lurks here."
    },
    "95": {
        "type": "Hills are home to some sort of colony. 50% humanoid, otherwise some sort of burrowing beast.",
        "notes": "Q/A rolls to determine what lurks here."
    },
    "96": {
        "type": "Hills are home to some sort of colony. 50% humanoid, otherwise some sort of burrowing beast.",
        "notes": "Q/A rolls to determine what lurks here."
    },
    "97": {
        "type": "Hills are home to some sort of colony. 50% humanoid, otherwise some sort of burrowing beast.",
        "notes": "Q/A rolls to determine what lurks here."
    },
    "98": {
        "type": "Hills are home to some sort of colony. 50% humanoid, otherwise some sort of burrowing beast.",
        "notes": "Q/A rolls to determine what lurks here."
    },
    "99": {
        "type": "Hills are home to some sort of colony. 50% humanoid, otherwise some sort of burrowing beast.",
        "notes": "Q/A rolls to determine what lurks here."
    },
    "100": {
        "type": "Hills are home to some sort of colony. 50% humanoid, otherwise some sort of burrowing beast.",
        "notes": "Q/A rolls to determine what lurks here."
    }
};

const table_wilderness_feature_hills_count = Object.keys(table_wilderness_feature_hills).length;

const table_wilderness_feature_special = {
    "1": {
        "type": "Sinkhole",
        "notes": ""
    },
    "2": {
        "type": "Crevasse caused by earthquake",
        "notes": ""
    },
    "3": {
        "type": "Geiser / Hot Springs",
        "notes": ""
    },
    "4": {
        "type": "Landslide",
        "notes": ""
    },
    "5": {
        "type": "Waterfall",
        "notes": ""
    },
    "6": {
        "type": "Cave Forest",
        "notes": ""
    },
    "7": {
        "type": "Blowhole (if not coastal, roll again)",
        "notes": ""
    },
    "8": {
        "type": "Volcano",
        "notes": ""
    },
    "9": {
        "type": "Interesting rock formations (caused by lava flow?)",
        "notes": ""
    },
    "10": {
        "type": "Madmade tunnel",
        "notes": ""
    },
    "11": {
        "type": "Crater (meteor?)",
        "notes": ""
    },
    "12": {
        "type": "Tar Pit",
        "notes": ""
    },
    "13": {
        "type": "River source / spring / river going underground",
        "notes": ""
    },
    "14": {
        "type": "Quicksand (Perception check to notice?)",
        "notes": ""
    },
    "15": {
        "type": "Skull / facelike formation of rocks.",
        "notes": ""
    },
    "16": {
        "type": "Creature-shaped rocks. Basilisk victim?",
        "notes": ""
    },
    "17": {
        "type": "Petrified forest",
        "notes": ""
    },
    "18": {
        "type": "A lone pillar with runes",
        "notes": ""
    },
    "19": {
        "type": "Hanging tree, with noose",
        "notes": ""
    },
    "20": {
        "type": "Cairns of stone, arranged symetrically",
        "notes": ""
    }
};

const table_wilderness_feature_special_count = Object.keys(table_wilderness_feature_special).length;

const table_wilderness_feature_lake = {
    "1": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "2": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "3": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "4": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "5": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "6": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "7": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "8": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "9": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "10": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "11": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "12": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "13": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "14": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "15": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "16": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "17": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "18": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "19": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "20": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "21": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "22": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "23": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "24": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "25": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "26": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "27": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "28": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "29": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "30": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "31": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "32": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "33": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "34": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "35": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "36": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "37": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "38": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "39": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "40": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "41": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "42": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "43": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "44": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "45": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "46": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "47": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "48": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "49": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "50": {
        "type": "Medium-sized lake, unmarked on map.",
        "notes": "Situated in overarching terrain. 40% easy encounter. Use overarching terrain for encounter table. 10% NPC."
    },
    "51": {
        "type": "Medium sized lake, small settlement somewhere on its shores.",
        "notes": "Roll on Unmarked Settlement Table"
    },
    "52": {
        "type": "Medium sized lake, small settlement somewhere on its shores.",
        "notes": "Roll on Unmarked Settlement Table"
    },
    "53": {
        "type": "Medium sized lake, small settlement somewhere on its shores.",
        "notes": "Roll on Unmarked Settlement Table"
    },
    "54": {
        "type": "Medium sized lake, small settlement somewhere on its shores.",
        "notes": "Roll on Unmarked Settlement Table"
    },
    "55": {
        "type": "Medium sized lake, small settlement somewhere on its shores.",
        "notes": "Roll on Unmarked Settlement Table"
    },
    "56": {
        "type": "Smallish lake / pond / watering hole",
        "notes": "Q/A to discern whether anything lurks here. 30% medium encounter. Use overarching terrain for encounter table"
    },
    "57": {
        "type": "Smallish lake / pond / watering hole",
        "notes": "Q/A to discern whether anything lurks here. 30% medium encounter. Use overarching terrain for encounter table"
    },
    "58": {
        "type": "Smallish lake / pond / watering hole",
        "notes": "Q/A to discern whether anything lurks here. 30% medium encounter. Use overarching terrain for encounter table"
    },
    "59": {
        "type": "Smallish lake / pond / watering hole",
        "notes": "Q/A to discern whether anything lurks here. 30% medium encounter. Use overarching terrain for encounter table"
    },
    "60": {
        "type": "Smallish lake / pond / watering hole",
        "notes": "Q/A to discern whether anything lurks here. 30% medium encounter. Use overarching terrain for encounter table"
    },
    "61": {
        "type": "Large, unmapped lake, with a waterway running out of it. Could be rideable in a canoe",
        "notes": "DC 19 Survival check to craft canoe if trees are nearby. 10% NPC."
    },
    "62": {
        "type": "Large, unmapped lake, with a waterway running out of it. Could be rideable in a canoe",
        "notes": "DC 19 Survival check to craft canoe if trees are nearby. 10% NPC."
    },
    "63": {
        "type": "Large, unmapped lake, with a waterway running out of it. Could be rideable in a canoe",
        "notes": "DC 19 Survival check to craft canoe if trees are nearby. 10% NPC."
    },
    "64": {
        "type": "Large, unmapped lake, with a waterway running out of it. Could be rideable in a canoe",
        "notes": "DC 19 Survival check to craft canoe if trees are nearby. 10% NPC."
    },
    "65": {
        "type": "Large, unmapped lake, with a waterway running out of it. Could be rideable in a canoe",
        "notes": "DC 19 Survival check to craft canoe if trees are nearby. 10% NPC."
    },
    "66": {
        "type": "Medium sized lake, small settlement somewhere on its shores.",
        "notes": "Roll on Unmarked Settlement Table, adding 20 to roll."
    },
    "67": {
        "type": "Medium sized lake, small settlement somewhere on its shores.",
        "notes": "Roll on Unmarked Settlement Table, adding 20 to roll."
    },
    "68": {
        "type": "Medium sized lake, small settlement somewhere on its shores.",
        "notes": "Roll on Unmarked Settlement Table, adding 20 to roll."
    },
    "69": {
        "type": "Medium sized lake, small settlement somewhere on its shores.",
        "notes": "Roll on Unmarked Settlement Table, adding 20 to roll."
    },
    "70": {
        "type": "Medium sized lake, small settlement somewhere on its shores.",
        "notes": "Roll on Unmarked Settlement Table, adding 20 to roll."
    },
    "71": {
        "type": "Large, unmapped lake, with small mountain range by its shores",
        "notes": "Roll on Small Mountain Range table."
    },
    "72": {
        "type": "Large, unmapped lake, with small mountain range by its shores",
        "notes": "Roll on Small Mountain Range table."
    },
    "73": {
        "type": "Large, unmapped lake, with small mountain range by its shores",
        "notes": "Roll on Small Mountain Range table."
    },
    "74": {
        "type": "Large, unmapped lake, with small mountain range by its shores",
        "notes": "Roll on Small Mountain Range table."
    },
    "75": {
        "type": "Large, unmapped lake, with small mountain range by its shores",
        "notes": "Roll on Small Mountain Range table."
    },
    "76": {
        "type": "Large lake with small woods on its shores",
        "notes": "Roll on Small Woods Table"
    },
    "77": {
        "type": "Large lake with small woods on its shores",
        "notes": "Roll on Small Woods Table"
    },
    "78": {
        "type": "Large lake with small woods on its shores",
        "notes": "Roll on Small Woods Table"
    },
    "79": {
        "type": "Large lake with small woods on its shores",
        "notes": "Roll on Small Woods Table"
    },
    "80": {
        "type": "Large lake with small woods on its shores",
        "notes": "Roll on Small Woods Table"
    },
    "81": {
        "type": "Medium-sized lakes with many boats",
        "notes": "Q/A rolls to determine more. 25% clue. 40% NPC"
    },
    "82": {
        "type": "Medium-sized lakes with many boats",
        "notes": "Q/A rolls to determine more. 25% clue. 40% NPC"
    },
    "83": {
        "type": "Medium-sized lakes with many boats",
        "notes": "Q/A rolls to determine more. 25% clue. 40% NPC"
    },
    "84": {
        "type": "Medium-sized lakes with many boats",
        "notes": "Q/A rolls to determine more. 25% clue. 40% NPC"
    },
    "85": {
        "type": "Medium-sized lakes with many boats",
        "notes": "Q/A rolls to determine more. 25% clue. 40% NPC"
    },
    "86": {
        "type": "Small lake or pond, serves as a lair for some aquatic creature",
        "notes": "25% clue"
    },
    "87": {
        "type": "Small lake or pond, serves as a lair for some aquatic creature",
        "notes": "25% clue"
    },
    "88": {
        "type": "Small lake or pond, serves as a lair for some aquatic creature",
        "notes": "25% clue"
    },
    "89": {
        "type": "Small lake or pond, serves as a lair for some aquatic creature",
        "notes": "25% clue"
    },
    "90": {
        "type": "Small lake or pond, serves as a lair for some aquatic creature",
        "notes": "25% clue"
    },
    "91": {
        "type": "Medium-sized lake, fish jumping",
        "notes": "DC 15 Survival check to catch a fish."
    },
    "92": {
        "type": "Medium-sized lake, fish jumping",
        "notes": "DC 15 Survival check to catch a fish."
    },
    "93": {
        "type": "Medium-sized lake, fish jumping",
        "notes": "DC 15 Survival check to catch a fish."
    },
    "94": {
        "type": "Medium-sized lake, fish jumping",
        "notes": "DC 15 Survival check to catch a fish."
    },
    "95": {
        "type": "Medium-sized lake, fish jumping",
        "notes": "DC 15 Survival check to catch a fish."
    },
    "96": {
        "type": "Sacred pool of some sort. Magical in nature",
        "notes": "Q/A to discern whether any rituals are going on / magic user NPCs nearby."
    },
    "97": {
        "type": "Sacred pool of some sort. Magical in nature",
        "notes": "Q/A to discern whether any rituals are going on / magic user NPCs nearby."
    },
    "98": {
        "type": "Sacred pool of some sort. Magical in nature",
        "notes": "Q/A to discern whether any rituals are going on / magic user NPCs nearby."
    },
    "99": {
        "type": "Sacred pool of some sort. Magical in nature",
        "notes": "Q/A to discern whether any rituals are going on / magic user NPCs nearby."
    },
    "100": {
        "type": "Sacred pool of some sort. Magical in nature",
        "notes": "Q/A to discern whether any rituals are going on / magic user NPCs nearby."
    }
};

const table_wilderness_feature_lake_count = Object.keys(table_wilderness_feature_lake).length;

const table_wilderness_feature_monument = {
    "1": {
        "type": "Standing stones / Obelisks / Large stone carvings",
        "notes": "Q/A to discern more. Might have runes inscribed 10% NPC."
    },
    "2": {
        "type": "Charcoal burning mound",
        "notes": "Q/A rolls to determine what is being burnt here? Ores?"
    },
    "3": {
        "type": "Tribal totem pole",
        "notes": "25% easy encounter Q/A to determine who is nearby, if anyone"
    },
    "4": {
        "type": "Small Shrine",
        "notes": "Q/A to determine god it is dedicated to, and also whether it is currently attended"
    },
    "5": {
        "type": "Sign to show nearby settlements",
        "notes": "50% chance at least one of them isn't on the map. Clue 10%"
    },
    "6": {
        "type": "Cliff face with carved faces of gods",
        "notes": "Q/A to determine god it is dedicated to, and also whether it is currently attended"
    },
    "7": {
        "type": "Statue of ancient leader",
        "notes": "Q/A / History rolls to discern more"
    },
    "8": {
        "type": "Statue of famous adventurer",
        "notes": "Anything hidden here?"
    },
    "9": {
        "type": "Significant / tribally important tree or other natural feature",
        "notes": "70% guarded by tribespeople / barbarians"
    },
    "10": {
        "type": "Ancient Stone Pillars",
        "notes": "Part of ruins? Q/A / History rolls to discern more"
    },
    "11": {
        "type": "Ruined stone walls",
        "notes": "Q/A / History rolls to discern more"
    },
    "12": {
        "type": "Altar / Pedestal",
        "notes": "Sacrificial? 50% stained with blood"
    },
    "13": {
        "type": "Large, scattered boulders of interesting shapes",
        "notes": "Q/A / Nature rolls to discern more"
    },
    "14": {
        "type": "Single tomb of notable identity",
        "notes": "25% already looted"
    },
    "15": {
        "type": "Mountain of bones",
        "notes": "Q/A / Nature rolls to discern more Clue 25%"
    },
    "16": {
        "type": "Ancient battlefield with monument in remembrance of the dead",
        "notes": "Q/A / History rolls to discern more Clue 25%"
    },
    "17": {
        "type": "Burnt down building",
        "notes": "Clue 50%"
    },
    "18": {
        "type": "Termite or other insect mound",
        "notes": "Nature check to discern more 50% easy encounter (with some insect like being perhaps?)"
    },
    "19": {
        "type": "Ley lines",
        "notes": "Q/A to discern more, like who drew them here and how long ago?"
    },
    "20": {
        "type": "A lone archway in the middle of nowhere!",
        "notes": "Portal?"
    }
};

const table_wilderness_feature_monument_count = Object.keys(table_wilderness_feature_monument).length;

const table_wilderness_feature_oasis = {
    "1": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "2": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "3": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "4": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "5": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "6": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "7": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "8": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "9": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "10": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "11": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "12": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "13": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "14": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "15": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "16": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "17": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "18": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "19": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "20": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "21": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "22": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "23": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "24": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "25": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "26": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "27": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "28": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "29": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "30": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "31": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "32": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "33": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "34": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "35": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "36": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "37": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "38": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "39": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "40": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "41": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "42": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "43": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "44": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "45": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "46": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "47": {
        "type": "Oasis with pool of refreshing water at its centre. Ideal campsite",
        "notes": "Good place for a long rest, especially in a desert"
    },
    "48": {
        "type": "On reaching it, you discover it is a mirage.",
        "notes": ""
    },
    "49": {
        "type": "On reaching it, you discover it is a mirage.",
        "notes": ""
    },
    "50": {
        "type": "On reaching it, you discover it is a mirage.",
        "notes": ""
    },
    "51": {
        "type": "On reaching it, you discover it is a mirage.",
        "notes": ""
    },
    "52": {
        "type": "On reaching it, you discover it is a mirage.",
        "notes": ""
    },
    "53": {
        "type": "On reaching it, you discover it is a mirage.",
        "notes": ""
    },
    "54": {
        "type": "Oasis with pool but water is... not quite right. 30% poisoned, or something else. 50% favourable effect.",
        "notes": "Q/A rolls / Nature check to discern more"
    },
    "55": {
        "type": "Oasis with pool but water is... not quite right. 30% poisoned, or something else. 50% favourable effect.",
        "notes": "Q/A rolls / Nature check to discern more"
    },
    "56": {
        "type": "Oasis with pool but water is... not quite right. 30% poisoned, or something else. 50% favourable effect.",
        "notes": "Q/A rolls / Nature check to discern more"
    },
    "57": {
        "type": "Oasis with pool but water is... not quite right. 30% poisoned, or something else. 50% favourable effect.",
        "notes": "Q/A rolls / Nature check to discern more"
    },
    "58": {
        "type": "Oasis with pool but water is... not quite right. 30% poisoned, or something else. 50% favourable effect.",
        "notes": "Q/A rolls / Nature check to discern more"
    },
    "59": {
        "type": "Oasis with pool but water is... not quite right. 30% poisoned, or something else. 50% favourable effect.",
        "notes": "Q/A rolls / Nature check to discern more"
    },
    "60": {
        "type": "Oasis contains a travelling caravan of desert merchants",
        "notes": "90% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "61": {
        "type": "Oasis contains a travelling caravan of desert merchants",
        "notes": "90% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "62": {
        "type": "Oasis contains a travelling caravan of desert merchants",
        "notes": "90% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "63": {
        "type": "Oasis contains a travelling caravan of desert merchants",
        "notes": "90% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "64": {
        "type": "Oasis contains a travelling caravan of desert merchants",
        "notes": "90% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "65": {
        "type": "Oasis contains a travelling caravan of desert merchants",
        "notes": "90% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "66": {
        "type": "Oasis contains a large camp of desert nomads.",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "67": {
        "type": "Oasis contains a large camp of desert nomads.",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "68": {
        "type": "Oasis contains a large camp of desert nomads.",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "69": {
        "type": "Oasis contains a large camp of desert nomads.",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "70": {
        "type": "Oasis contains a large camp of desert nomads.",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "71": {
        "type": "Oasis contains a large camp of desert nomads.",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "72": {
        "type": "Oasis contains a shrine or temple of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "73": {
        "type": "Oasis contains a shrine or temple of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "74": {
        "type": "Oasis contains a shrine or temple of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "75": {
        "type": "Oasis contains a shrine or temple of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "76": {
        "type": "Oasis contains a shrine or temple of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "77": {
        "type": "Oasis contains a shrine or temple of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "78": {
        "type": "Oasis contains a ruin of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "79": {
        "type": "Oasis contains a ruin of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "80": {
        "type": "Oasis contains a ruin of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "81": {
        "type": "Oasis contains a ruin of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "82": {
        "type": "Oasis contains a ruin of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "83": {
        "type": "Oasis contains a ruin of some sort",
        "notes": "Q/A / Investigation roll to find out more."
    },
    "84": {
        "type": "Oasis with bandits / raiders / other adventurers using it as a stopoff point",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "85": {
        "type": "Oasis with bandits / raiders / other adventurers using it as a stopoff point",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "86": {
        "type": "Oasis with bandits / raiders / other adventurers using it as a stopoff point",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "87": {
        "type": "Oasis with bandits / raiders / other adventurers using it as a stopoff point",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "88": {
        "type": "Oasis with bandits / raiders / other adventurers using it as a stopoff point",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "89": {
        "type": "Oasis with bandits / raiders / other adventurers using it as a stopoff point",
        "notes": "50% friendly. Are you able to approach with stealth SO they don't notice you?"
    },
    "90": {
        "type": "Oasis with a waypoint / fresh horses / supplies",
        "notes": "Restock on some basics! Q/A roll to discern more."
    },
    "91": {
        "type": "Oasis with a waypoint / fresh horses / supplies",
        "notes": "Restock on some basics! Q/A roll to discern more."
    },
    "92": {
        "type": "Oasis with a waypoint / fresh horses / supplies",
        "notes": "Restock on some basics! Q/A roll to discern more."
    },
    "93": {
        "type": "Oasis with a waypoint / fresh horses / supplies",
        "notes": "Restock on some basics! Q/A roll to discern more."
    },
    "94": {
        "type": "Oasis with a waypoint / fresh horses / supplies",
        "notes": "Restock on some basics! Q/A roll to discern more."
    },
    "95": {
        "type": "Oasis with a waypoint / fresh horses / supplies",
        "notes": "Restock on some basics! Q/A roll to discern more."
    },
    "96": {
        "type": "Some sort of magical barrier here.. it could only be described as a Wonderwall.",
        "notes": "Q/A rolls / Arcana check to discern nature of barrier."
    },
    "97": {
        "type": "Some sort of magical barrier here.. it could only be described as a Wonderwall.",
        "notes": "Q/A rolls / Arcana check to discern nature of barrier."
    },
    "98": {
        "type": "Some sort of magical barrier here.. it could only be described as a Wonderwall.",
        "notes": "Q/A rolls / Arcana check to discern nature of barrier."
    },
    "99": {
        "type": "Some sort of magical barrier here.. it could only be described as a Wonderwall.",
        "notes": "Q/A rolls / Arcana check to discern nature of barrier."
    },
    "100": {
        "type": "Some sort of magical barrier here.. it could only be described as a Wonderwall.",
        "notes": "Q/A rolls / Arcana check to discern nature of barrier."
    },
    "101": {
        "type": "Some sort of magical barrier here.. it could only be described as a Wonderwall.",
        "notes": "Q/A rolls / Arcana check to discern nature of barrier."
    }
};

const table_wilderness_feature_oasis_count = Object.keys(table_wilderness_feature_oasis).length;

const table_wilderness_feature_rocky_outcrop = {
    "1": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "2": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "3": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "4": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "5": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "6": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "7": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "8": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "9": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "10": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "11": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "12": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "13": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "14": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "15": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "16": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "17": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "18": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "19": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "20": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "21": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "22": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "23": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "24": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "25": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "26": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "27": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "28": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "29": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "30": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "31": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "32": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "33": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "34": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "35": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "36": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "37": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "38": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "39": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "40": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "41": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "42": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "43": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "44": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "45": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "46": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "47": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "48": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "49": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "50": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "51": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "52": {
        "type": "Rocky outcrop",
        "notes": "Protruding above overarching terrain."
    },
    "53": {
        "type": "Outcrop serves as a vantage point for humanoid scouts",
        "notes": "DC 14 perception roll to see if your PC notices. Q/A to discern more."
    },
    "54": {
        "type": "Outcrop serves as a vantage point for humanoid scouts",
        "notes": "DC 14 perception roll to see if your PC notices. Q/A to discern more."
    },
    "55": {
        "type": "Outcrop serves as a vantage point for humanoid scouts",
        "notes": "DC 14 perception roll to see if your PC notices. Q/A to discern more."
    },
    "56": {
        "type": "Outcrop serves as a vantage point for humanoid scouts",
        "notes": "DC 14 perception roll to see if your PC notices. Q/A to discern more."
    },
    "57": {
        "type": "Outcrop serves as a vantage point for humanoid scouts",
        "notes": "DC 14 perception roll to see if your PC notices. Q/A to discern more."
    },
    "58": {
        "type": "Outcrop serves as a vantage point for humanoid scouts",
        "notes": "DC 14 perception roll to see if your PC notices. Q/A to discern more."
    },
    "59": {
        "type": "Small wood atop this outrcrop",
        "notes": "Roll on Small Wood table"
    },
    "60": {
        "type": "Small wood atop this outrcrop",
        "notes": "Roll on Small Wood table"
    },
    "61": {
        "type": "Small wood atop this outrcrop",
        "notes": "Roll on Small Wood table"
    },
    "62": {
        "type": "Small wood atop this outrcrop",
        "notes": "Roll on Small Wood table"
    },
    "63": {
        "type": "Small wood atop this outrcrop",
        "notes": "Roll on Small Wood table"
    },
    "64": {
        "type": "Small wood atop this outrcrop",
        "notes": "Roll on Small Wood table"
    },
    "65": {
        "type": "Small wood atop this outrcrop",
        "notes": "Roll on Small Wood table"
    },
    "66": {
        "type": "If scaled, PC might find a structure or monument on top of this feature",
        "notes": "50% structure, 50% monument"
    },
    "67": {
        "type": "If scaled, PC might find a structure or monument on top of this feature",
        "notes": "50% structure, 50% monument"
    },
    "68": {
        "type": "If scaled, PC might find a structure or monument on top of this feature",
        "notes": "50% structure, 50% monument"
    },
    "69": {
        "type": "If scaled, PC might find a structure or monument on top of this feature",
        "notes": "50% structure, 50% monument"
    },
    "70": {
        "type": "If scaled, PC might find a structure or monument on top of this feature",
        "notes": "50% structure, 50% monument"
    },
    "71": {
        "type": "If scaled, PC might find a structure or monument on top of this feature",
        "notes": "50% structure, 50% monument"
    },
    "72": {
        "type": "Rocky outcrop is actually an island in the middle of a lake",
        "notes": "Roll on Lake Table"
    },
    "73": {
        "type": "Rocky outcrop is actually an island in the middle of a lake",
        "notes": "Roll on Lake Table"
    },
    "74": {
        "type": "Rocky outcrop is actually an island in the middle of a lake",
        "notes": "Roll on Lake Table"
    },
    "75": {
        "type": "Rocky outcrop is actually an island in the middle of a lake",
        "notes": "Roll on Lake Table"
    },
    "76": {
        "type": "Rocky outcrop is actually an island in the middle of a lake",
        "notes": "Roll on Lake Table"
    },
    "77": {
        "type": "Rocky outcrop is actually an island in the middle of a lake",
        "notes": "Roll on Lake Table"
    },
    "78": {
        "type": "Rocky outcrop is actually an assortment of large boulders scattered around.",
        "notes": "Q/A to determine more. How did they get here? 50% medium encounter (possibly with surprise VS you)"
    },
    "79": {
        "type": "Rocky outcrop is actually an assortment of large boulders scattered around.",
        "notes": "Q/A to determine more. How did they get here? 50% medium encounter (possibly with surprise VS you)"
    },
    "80": {
        "type": "Rocky outcrop is actually an assortment of large boulders scattered around.",
        "notes": "Q/A to determine more. How did they get here? 50% medium encounter (possibly with surprise VS you)"
    },
    "81": {
        "type": "Rocky outcrop is actually an assortment of large boulders scattered around.",
        "notes": "Q/A to determine more. How did they get here? 50% medium encounter (possibly with surprise VS you)"
    },
    "82": {
        "type": "Rocky outcrop is actually an assortment of large boulders scattered around.",
        "notes": "Q/A to determine more. How did they get here? 50% medium encounter (possibly with surprise VS you)"
    },
    "83": {
        "type": "Rocky outcrop is actually an assortment of large boulders scattered around.",
        "notes": "Q/A to determine more. How did they get here? 50% medium encounter (possibly with surprise VS you)"
    },
    "84": {
        "type": "Interesting formation of standing stones atop the outcrop.",
        "notes": "DC 12 Survival check to scale this feature and investigate further"
    },
    "85": {
        "type": "Interesting formation of standing stones atop the outcrop.",
        "notes": "DC 12 Survival check to scale this feature and investigate further"
    },
    "86": {
        "type": "Interesting formation of standing stones atop the outcrop.",
        "notes": "DC 12 Survival check to scale this feature and investigate further"
    },
    "87": {
        "type": "Interesting formation of standing stones atop the outcrop.",
        "notes": "DC 12 Survival check to scale this feature and investigate further"
    },
    "88": {
        "type": "Interesting formation of standing stones atop the outcrop.",
        "notes": "DC 12 Survival check to scale this feature and investigate further"
    },
    "89": {
        "type": "Interesting formation of standing stones atop the outcrop.",
        "notes": "DC 12 Survival check to scale this feature and investigate further"
    },
    "90": {
        "type": "An NPC stands atop this outcrop and is calling out to you, beckoning you to join them up there",
        "notes": "Q/A to discern more."
    },
    "91": {
        "type": "An NPC stands atop this outcrop and is calling out to you, beckoning you to join them up there",
        "notes": "Q/A to discern more."
    },
    "92": {
        "type": "An NPC stands atop this outcrop and is calling out to you, beckoning you to join them up there",
        "notes": "Q/A to discern more."
    },
    "93": {
        "type": "An NPC stands atop this outcrop and is calling out to you, beckoning you to join them up there",
        "notes": "Q/A to discern more."
    },
    "94": {
        "type": "An NPC stands atop this outcrop and is calling out to you, beckoning you to join them up there",
        "notes": "Q/A to discern more."
    },
    "95": {
        "type": "An NPC stands atop this outcrop and is calling out to you, beckoning you to join them up there",
        "notes": "Q/A to discern more."
    },
    "96": {
        "type": "Outcrop has been fashioned into the face or form of a well-known god.",
        "notes": "50% worshippers present. Shrine atop the outcrop? Q/A to discern more."
    },
    "97": {
        "type": "Outcrop has been fashioned into the face or form of a well-known god.",
        "notes": "50% worshippers present. Shrine atop the outcrop? Q/A to discern more."
    },
    "98": {
        "type": "Outcrop has been fashioned into the face or form of a well-known god.",
        "notes": "50% worshippers present. Shrine atop the outcrop? Q/A to discern more."
    },
    "99": {
        "type": "Outcrop has been fashioned into the face or form of a well-known god.",
        "notes": "50% worshippers present. Shrine atop the outcrop? Q/A to discern more."
    },
    "100": {
        "type": "Outcrop has been fashioned into the face or form of a well-known god.",
        "notes": "50% worshippers present. Shrine atop the outcrop? Q/A to discern more."
    }
};

const table_wilderness_feature_rocky_outcrop_count = Object.keys(table_wilderness_feature_rocky_outcrop).length;

const table_wilderness_feature_small_mountain_range_foothills = {
    "1": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "2": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "3": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "4": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "5": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "6": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "7": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "8": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "9": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "10": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "11": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "12": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "13": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "14": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "15": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "16": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "17": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "18": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "19": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "20": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "21": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "22": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "23": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "24": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "25": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "26": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "27": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "28": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "29": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "30": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "31": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "32": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "33": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "34": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "35": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "36": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "37": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "38": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "39": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "40": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "41": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "42": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "43": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "44": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "45": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "46": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "47": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "48": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "49": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "50": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "51": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "52": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "53": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "54": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "55": {
        "type": "Standard small mountain range, mostly uniform size, no huge peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "56": {
        "type": "Small mountain range with some large peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "57": {
        "type": "Small mountain range with some large peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "58": {
        "type": "Small mountain range with some large peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "59": {
        "type": "Small mountain range with some large peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "60": {
        "type": "Small mountain range with some large peaks",
        "notes": "Will have snow if it is winter or near to winter. DC 16 Survival roll to scale (climbing gear also required)"
    },
    "61": {
        "type": "Small mountain range that appears to possess a large amount of caves",
        "notes": "Caves might lead to tunnels / dungeons"
    },
    "62": {
        "type": "Small mountain range that appears to possess a large amount of caves",
        "notes": "Caves might lead to tunnels / dungeons"
    },
    "63": {
        "type": "Small mountain range that appears to possess a large amount of caves",
        "notes": "Caves might lead to tunnels / dungeons"
    },
    "64": {
        "type": "Small mountain range that appears to possess a large amount of caves",
        "notes": "Caves might lead to tunnels / dungeons"
    },
    "65": {
        "type": "Small mountain range that appears to possess a large amount of caves",
        "notes": "Caves might lead to tunnels / dungeons"
    },
    "66": {
        "type": "Mountain range appears to be home to a colony / settlement of some kind. Dwarven? Some kind of mountain dwelling creature.",
        "notes": "Roll on Unmarked Settlement table."
    },
    "67": {
        "type": "Mountain range appears to be home to a colony / settlement of some kind. Dwarven? Some kind of mountain dwelling creature.",
        "notes": "Roll on Unmarked Settlement table."
    },
    "68": {
        "type": "Mountain range appears to be home to a colony / settlement of some kind. Dwarven? Some kind of mountain dwelling creature.",
        "notes": "Roll on Unmarked Settlement table."
    },
    "69": {
        "type": "Mountain range appears to be home to a colony / settlement of some kind. Dwarven? Some kind of mountain dwelling creature.",
        "notes": "Roll on Unmarked Settlement table."
    },
    "70": {
        "type": "Mountain range appears to be home to a colony / settlement of some kind. Dwarven? Some kind of mountain dwelling creature.",
        "notes": "Roll on Unmarked Settlement table."
    },
    "71": {
        "type": "Small mountain range covered by forest.",
        "notes": "Roll on Small Wood Table."
    },
    "72": {
        "type": "Small mountain range covered by forest.",
        "notes": "Roll on Small Wood Table."
    },
    "73": {
        "type": "Small mountain range covered by forest.",
        "notes": "Roll on Small Wood Table."
    },
    "74": {
        "type": "Small mountain range covered by forest.",
        "notes": "Roll on Small Wood Table."
    },
    "75": {
        "type": "Small mountain range covered by forest.",
        "notes": "Roll on Small Wood Table."
    },
    "76": {
        "type": "Small mountain range, rugged and dangerous, partially wooded. Giant eagles and the like.",
        "notes": "Hard encounter 50%"
    },
    "77": {
        "type": "Small mountain range, rugged and dangerous, partially wooded. Giant eagles and the like.",
        "notes": "Hard encounter 50%"
    },
    "78": {
        "type": "Small mountain range, rugged and dangerous, partially wooded. Giant eagles and the like.",
        "notes": "Hard encounter 50%"
    },
    "79": {
        "type": "Small mountain range, rugged and dangerous, partially wooded. Giant eagles and the like.",
        "notes": "Hard encounter 50%"
    },
    "80": {
        "type": "Small mountain range, rugged and dangerous, partially wooded. Giant eagles and the like.",
        "notes": "Hard encounter 50%"
    },
    "81": {
        "type": "Bandits / Raiders using these mountains as a hideout. But does your PC know? Perception DC 18 to discern.",
        "notes": "Hard encounter 70%"
    },
    "82": {
        "type": "Bandits / Raiders using these mountains as a hideout. But does your PC know? Perception DC 18 to discern.",
        "notes": "Hard encounter 70%"
    },
    "83": {
        "type": "Bandits / Raiders using these mountains as a hideout. But does your PC know? Perception DC 18 to discern.",
        "notes": "Hard encounter 70%"
    },
    "84": {
        "type": "Bandits / Raiders using these mountains as a hideout. But does your PC know? Perception DC 18 to discern.",
        "notes": "Hard encounter 70%"
    },
    "85": {
        "type": "Bandits / Raiders using these mountains as a hideout. But does your PC know? Perception DC 18 to discern.",
        "notes": "Hard encounter 70%"
    },
    "86": {
        "type": "Small mountain range by lake.",
        "notes": "Roll on Lake Table."
    },
    "87": {
        "type": "Small mountain range by lake.",
        "notes": "Roll on Lake Table."
    },
    "88": {
        "type": "Small mountain range by lake.",
        "notes": "Roll on Lake Table."
    },
    "89": {
        "type": "Small mountain range by lake.",
        "notes": "Roll on Lake Table."
    },
    "90": {
        "type": "Small mountain range by lake.",
        "notes": "Roll on Lake Table."
    },
    "91": {
        "type": "Small mountain range with colony of Giants (or perhaps other humanoids)!",
        "notes": "Q/A rolls to determine more"
    },
    "92": {
        "type": "Small mountain range with colony of Giants (or perhaps other humanoids)!",
        "notes": "Q/A rolls to determine more"
    },
    "93": {
        "type": "Small mountain range with colony of Giants (or perhaps other humanoids)!",
        "notes": "Q/A rolls to determine more"
    },
    "94": {
        "type": "Small mountain range with colony of Giants (or perhaps other humanoids)!",
        "notes": "Q/A rolls to determine more"
    },
    "95": {
        "type": "monastery",
        "notes": "Q/A rolls to determine more"
    },
    "96": {
        "type": "wizard tower",
        "notes": "Q/A rolls to determine more"
    },
    "97": {
        "type": "community of druids",
        "notes": "Q/A rolls to determine more"
    },
    "98": {
        "type": "secret dwarven stronghold",
        "notes": "Q/A rolls to determine more"
    },
    "99": {
        "type": "secret gnomish stronghold",
        "notes": "Q/A rolls to determine more"
    },
    "100": {
        "type": "citadel for an assassin's order",
        "notes": "Q/A rolls to determine more"
    }
};

const table_wilderness_feature_small_mountain_range_foothills_count = Object.keys(table_wilderness_feature_small_mountain_range_foothills).length;

const table_wilderness_feature_small_wood = {
    "1": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "2": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "3": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "4": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "5": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "6": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "7": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "8": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "9": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "10": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "11": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "12": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "13": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "14": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "15": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "16": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "17": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "18": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "19": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "20": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "21": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "22": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "23": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "24": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "25": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "26": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "27": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "28": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "29": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "30": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "31": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "32": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "33": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "34": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "35": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "36": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "37": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "38": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "39": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "40": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "41": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "42": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "43": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "44": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "45": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "46": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "47": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "48": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "49": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "50": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "51": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "52": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "53": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "54": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "55": {
        "type": "Standard type of wood for this area",
        "notes": ""
    },
    "56": {
        "type": "Trees dead, as if by some mysterious disease.",
        "notes": "Use Q/A rolls to see if you can determine the nature of the affliction"
    },
    "57": {
        "type": "Trees dead, as if by some mysterious disease.",
        "notes": "Use Q/A rolls to see if you can determine the nature of the affliction"
    },
    "58": {
        "type": "Trees dead, as if by some mysterious disease.",
        "notes": "Use Q/A rolls to see if you can determine the nature of the affliction"
    },
    "59": {
        "type": "Trees dead, as if by some mysterious disease.",
        "notes": "Use Q/A rolls to see if you can determine the nature of the affliction"
    },
    "60": {
        "type": "Trees dead, as if by some mysterious disease.",
        "notes": "Use Q/A rolls to see if you can determine the nature of the affliction"
    },
    "61": {
        "type": "Ancient wood, twisted, gnarled trees.",
        "notes": "Clue 25%"
    },
    "62": {
        "type": "Ancient wood, twisted, gnarled trees.",
        "notes": "Clue 25%"
    },
    "63": {
        "type": "Ancient wood, twisted, gnarled trees.",
        "notes": "Clue 25%"
    },
    "64": {
        "type": "Ancient wood, twisted, gnarled trees.",
        "notes": "Clue 25%"
    },
    "65": {
        "type": "Ancient wood, twisted, gnarled trees.",
        "notes": "Clue 25%"
    },
    "66": {
        "type": "Serene, Sylvan wood",
        "notes": "Q/A rolls to check for signs of life"
    },
    "67": {
        "type": "Serene, Sylvan wood",
        "notes": "Q/A rolls to check for signs of life"
    },
    "68": {
        "type": "Serene, Sylvan wood",
        "notes": "Q/A rolls to check for signs of life"
    },
    "69": {
        "type": "Serene, Sylvan wood",
        "notes": "Q/A rolls to check for signs of life"
    },
    "70": {
        "type": "Serene, Sylvan wood",
        "notes": "Q/A rolls to check for signs of life"
    },
    "71": {
        "type": "Dark, thick wood, full of menace",
        "notes": "Hard encounter 20%"
    },
    "72": {
        "type": "Dark, thick wood, full of menace",
        "notes": "Hard encounter 20%"
    },
    "73": {
        "type": "Dark, thick wood, full of menace",
        "notes": "Hard encounter 20%"
    },
    "74": {
        "type": "Dark, thick wood, full of menace",
        "notes": "Hard encounter 20%"
    },
    "75": {
        "type": "Dark, thick wood, full of menace",
        "notes": "Hard encounter 20%"
    },
    "76": {
        "type": "Wood which is in the process of being clearfelled for timber",
        "notes": "Q/A rolls to determine who is clearfelling and why"
    },
    "77": {
        "type": "Wood which is in the process of being clearfelled for timber",
        "notes": "Q/A rolls to determine who is clearfelling and why"
    },
    "78": {
        "type": "Wood which is in the process of being clearfelled for timber",
        "notes": "Q/A rolls to determine who is clearfelling and why"
    },
    "79": {
        "type": "Wood which is in the process of being clearfelled for timber",
        "notes": "Q/A rolls to determine who is clearfelling and why"
    },
    "80": {
        "type": "Wood which is in the process of being clearfelled for timber",
        "notes": "Q/A rolls to determine who is clearfelling and why"
    },
    "81": {
        "type": "Wood which has been ravaged by forest fire",
        "notes": "Q/A rolls to determine cause of fire"
    },
    "82": {
        "type": "Wood which has been ravaged by forest fire",
        "notes": "Q/A rolls to determine cause of fire"
    },
    "83": {
        "type": "Wood which has been ravaged by forest fire",
        "notes": "Q/A rolls to determine cause of fire"
    },
    "84": {
        "type": "Wood which has been ravaged by forest fire",
        "notes": "Q/A rolls to determine cause of fire"
    },
    "85": {
        "type": "Wood which has been ravaged by forest fire",
        "notes": "Q/A rolls to determine cause of fire"
    },
    "86": {
        "type": "Wood in which a band of raiding humanoids is currently hiding",
        "notes": "Clue 50%. Medium encounter 35%"
    },
    "87": {
        "type": "Wood in which a band of raiding humanoids is currently hiding",
        "notes": "Clue 50%. Medium encounter 35%"
    },
    "88": {
        "type": "Wood in which a band of raiding humanoids is currently hiding",
        "notes": "Clue 50%. Medium encounter 35%"
    },
    "89": {
        "type": "Wood in which a band of raiding humanoids is currently hiding",
        "notes": "Clue 50%. Medium encounter 35%"
    },
    "90": {
        "type": "Wood in which a band of raiding humanoids is currently hiding",
        "notes": "Clue 50%. Medium encounter 35%"
    },
    "91": {
        "type": "Wood containing a clearing containing totem / standing stones",
        "notes": "Medium encounter 25%, Clue 10%"
    },
    "92": {
        "type": "Wood containing a clearing containing totem / standing stones",
        "notes": "Medium encounter 25%, Clue 10%"
    },
    "93": {
        "type": "Wood containing a clearing containing totem / standing stones",
        "notes": "Medium encounter 25%, Clue 10%"
    },
    "94": {
        "type": "Wood containing a clearing containing totem / standing stones",
        "notes": "Medium encounter 25%, Clue 10%"
    },
    "95": {
        "type": "Wood containing a clearing containing totem / standing stones",
        "notes": "Medium encounter 25%, Clue 10%"
    },
    "96": {
        "type": "Wood inhabited by humanoid settlement such as elves, gnomes, halflings",
        "notes": "Q/A rolls to determine whether you meet them"
    },
    "97": {
        "type": "Wood inhabited by humanoid settlement such as elves, gnomes, halflings",
        "notes": "Q/A rolls to determine whether you meet them"
    },
    "98": {
        "type": "Wood inhabited by humanoid settlement such as elves, gnomes, halflings",
        "notes": "Q/A rolls to determine whether you meet them"
    },
    "99": {
        "type": "Wood inhabited by humanoid settlement such as elves, gnomes, halflings",
        "notes": "Q/A rolls to determine whether you meet them"
    },
    "100": {
        "type": "Wood inhabited by humanoid settlement such as elves, gnomes, halflings",
        "notes": "Q/A rolls to determine whether you meet them"
    }
};

const table_wilderness_feature_small_wood_count = Object.keys(table_wilderness_feature_small_wood).length;

const table_wilderness_feature_structure = {
    "1": {
        "type": "Mine",
        "notes": "10% inhabited"
    },
    "2": {
        "type": "Cemetery / Tomb",
        "notes": "30% haunted / undead"
    },
    "3": {
        "type": "Small castle / keep",
        "notes": "30% deserted (with possible monster inhabitants)"
    },
    "4": {
        "type": "Manor House",
        "notes": "50% inhabited"
    },
    "5": {
        "type": "Monastery",
        "notes": "90% inhabited"
    },
    "6": {
        "type": "Shrine / Temple",
        "notes": "50% humanoid inhabitants"
    },
    "7": {
        "type": "Watchtower",
        "notes": "50% inhabitated, 50% humans"
    },
    "8": {
        "type": "Farm House",
        "notes": "80% inhabited, 5% under attack currently"
    },
    "9": {
        "type": "Fence",
        "notes": "Q/A roll / nature roll to determine its purpose"
    },
    "10": {
        "type": "Windmill",
        "notes": ""
    },
    "11": {
        "type": "Watermill",
        "notes": "Roll on Waterway Table"
    },
    "12": {
        "type": "Old well",
        "notes": "50% hidden cave / tunnel at bottom. 30% clue"
    },
    "13": {
        "type": "Hermit Hut / Cave",
        "notes": "70% inhabited, 40% clue"
    },
    "14": {
        "type": "Lone tavern / inn",
        "notes": "90% inhabited Q/A to discern more"
    },
    "15": {
        "type": "Roll d4. 1-2: Hunting cabin. S-4: Fishing Hut.",
        "notes": "25% inhabited. Might contain basic supplies. Q/A roll to determine If fishing hut, (roll d4) roll on 1-2: Waterway Table, S-4: Lake Table."
    },
    "16": {
        "type": "Hideout / Bunker",
        "notes": "DC 16 perception check to notice. If you are in familiar / favoured terrain, make at advantage."
    },
    "17": {
        "type": "Waypoint. Stopoff for couriers / horse trader",
        "notes": "Q/A to discern more. 75% friendly or neutral."
    },
    "18": {
        "type": "Training Camp",
        "notes": "Q/A to discern more"
    },
    "19": {
        "type": "Bridge. (Roll d4) 1-2: Small, S: Medium, 4: Large",
        "notes": "Roll on Waterways Table"
    },
    "20": {
        "type": "Medium Bridge",
        "notes": "Roll on Waterways Table"
    },
    "21": {
        "type": "Large Bridge",
        "notes": "Roll on Waterways Table"
    },
    "22": {
        "type": "Large Castle / Keep",
        "notes": "80% inhabited (if uninhabited, then something else will have moved in)."
    },
    "23": {
        "type": "Ruins",
        "notes": "50% hard encounter 10% deadly encounter. Clue 60%"
    },
    "24": {
        "type": "Burial Mounds / Barrows",
        "notes": "What lies beneath?"
    },
    "25": {
        "type": "Wizard Tower",
        "notes": "Definitely inhabited. 60% friendly."
    }
}

const table_wilderness_feature_structure_count = Object.keys(table_wilderness_feature_structure).length;

const table_wilderness_feature_swamp = {
    "1": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "2": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "3": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "4": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "5": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "6": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "7": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "8": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "9": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "10": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "11": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "12": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "13": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "14": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "15": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "16": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "17": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "18": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "19": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "20": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "21": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "22": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "23": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "24": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "25": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "26": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "27": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "28": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "29": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "30": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "31": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "32": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "33": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "34": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "35": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "36": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "37": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "38": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "39": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "40": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "41": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "42": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "43": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "44": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "45": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "46": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "47": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "48": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "49": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "50": {
        "type": "Standard swamp",
        "notes": "Difficult terrain (half movement) 25% easy encounter"
    },
    "51": {
        "type": "Thick, dense swamp, almost impossible to traverse, extending in all directions forward.",
        "notes": "Extremely difficult terrain, movement slowed to quarter of normal."
    },
    "52": {
        "type": "Thick, dense swamp, almost impossible to traverse, extending in all directions forward.",
        "notes": "Extremely difficult terrain, movement slowed to quarter of normal."
    },
    "53": {
        "type": "Thick, dense swamp, almost impossible to traverse, extending in all directions forward.",
        "notes": "Extremely difficult terrain, movement slowed to quarter of normal."
    },
    "54": {
        "type": "Thick, dense swamp, almost impossible to traverse, extending in all directions forward.",
        "notes": "Extremely difficult terrain, movement slowed to quarter of normal."
    },
    "55": {
        "type": "Thick, dense swamp, almost impossible to traverse, extending in all directions forward.",
        "notes": "Extremely difficult terrain, movement slowed to quarter of normal."
    },
    "56": {
        "type": "Thick, dense swamp, almost impossible to traverse, extending in all directions forward.",
        "notes": "Extremely difficult terrain, movement slowed to quarter of normal."
    },
    "57": {
        "type": "Thick, dense swamp, almost impossible to traverse, extending in all directions forward.",
        "notes": "Extremely difficult terrain, movement slowed to quarter of normal."
    },
    "58": {
        "type": "Patchy swamp with dry areas. Perfect area for bandits or raiders to have a camp.",
        "notes": "Hard encounter 50%. Clue 30%"
    },
    "59": {
        "type": "Patchy swamp with dry areas. Perfect area for bandits or raiders to have a camp.",
        "notes": "Hard encounter 50%. Clue 30%"
    },
    "60": {
        "type": "Patchy swamp with dry areas. Perfect area for bandits or raiders to have a camp.",
        "notes": "Hard encounter 50%. Clue 30%"
    },
    "61": {
        "type": "Patchy swamp with dry areas. Perfect area for bandits or raiders to have a camp.",
        "notes": "Hard encounter 50%. Clue 30%"
    },
    "62": {
        "type": "Patchy swamp with dry areas. Perfect area for bandits or raiders to have a camp.",
        "notes": "Hard encounter 50%. Clue 30%"
    },
    "63": {
        "type": "Patchy swamp with dry areas. Perfect area for bandits or raiders to have a camp.",
        "notes": "Hard encounter 50%. Clue 30%"
    },
    "64": {
        "type": "Patchy swamp with dry areas. Perfect area for bandits or raiders to have a camp.",
        "notes": "Hard encounter 50%. Clue 30%"
    },
    "65": {
        "type": "Wetland containing many ponds and a network of waterways. May need a small boat to traverse.",
        "notes": "Survival check, DC 19, to craft a small kayak. Otherwise, might need to go around, adding travel time."
    },
    "66": {
        "type": "Wetland containing many ponds and a network of waterways. May need a small boat to traverse.",
        "notes": "Survival check, DC 19, to craft a small kayak. Otherwise, might need to go around, adding travel time."
    },
    "67": {
        "type": "Wetland containing many ponds and a network of waterways. May need a small boat to traverse.",
        "notes": "Survival check, DC 19, to craft a small kayak. Otherwise, might need to go around, adding travel time."
    },
    "68": {
        "type": "Wetland containing many ponds and a network of waterways. May need a small boat to traverse.",
        "notes": "Survival check, DC 19, to craft a small kayak. Otherwise, might need to go around, adding travel time."
    },
    "69": {
        "type": "Wetland containing many ponds and a network of waterways. May need a small boat to traverse.",
        "notes": "Survival check, DC 19, to craft a small kayak. Otherwise, might need to go around, adding travel time."
    },
    "70": {
        "type": "Wetland containing many ponds and a network of waterways. May need a small boat to traverse.",
        "notes": "Survival check, DC 19, to craft a small kayak. Otherwise, might need to go around, adding travel time."
    },
    "71": {
        "type": "Wetland containing many ponds and a network of waterways. May need a small boat to traverse.",
        "notes": "Survival check, DC 19, to craft a small kayak. Otherwise, might need to go around, adding travel time."
    },
    "72": {
        "type": "Dark, eerie swamp, with an eldritch aura",
        "notes": "Something evil hides in here.. Q/A rolls to determine what! Clue 10%"
    },
    "73": {
        "type": "Dark, eerie swamp, with an eldritch aura",
        "notes": "Something evil hides in here.. Q/A rolls to determine what! Clue 10%"
    },
    "74": {
        "type": "Dark, eerie swamp, with an eldritch aura",
        "notes": "Something evil hides in here.. Q/A rolls to determine what! Clue 10%"
    },
    "75": {
        "type": "Dark, eerie swamp, with an eldritch aura",
        "notes": "Something evil hides in here.. Q/A rolls to determine what! Clue 10%"
    },
    "76": {
        "type": "Dark, eerie swamp, with an eldritch aura",
        "notes": "Something evil hides in here.. Q/A rolls to determine what! Clue 10%"
    },
    "77": {
        "type": "Dark, eerie swamp, with an eldritch aura",
        "notes": "Something evil hides in here.. Q/A rolls to determine what! Clue 10%"
    },
    "78": {
        "type": "Dark, eerie swamp, with an eldritch aura",
        "notes": "Something evil hides in here.. Q/A rolls to determine what! Clue 10%"
    },
    "79": {
        "type": "A land forgotten by time! Ancient swamp, small part of a more primeval wilderness that was here before",
        "notes": "Hard encounter 50%"
    },
    "80": {
        "type": "A land forgotten by time! Ancient swamp, small part of a more primeval wilderness that was here before",
        "notes": "Hard encounter 50%"
    },
    "81": {
        "type": "A land forgotten by time! Ancient swamp, small part of a more primeval wilderness that was here before",
        "notes": "Hard encounter 50%"
    },
    "82": {
        "type": "A land forgotten by time! Ancient swamp, small part of a more primeval wilderness that was here before",
        "notes": "Hard encounter 50%"
    },
    "83": {
        "type": "A land forgotten by time! Ancient swamp, small part of a more primeval wilderness that was here before",
        "notes": "Hard encounter 50%"
    },
    "84": {
        "type": "A land forgotten by time! Ancient swamp, small part of a more primeval wilderness that was here before",
        "notes": "Hard encounter 50%"
    },
    "85": {
        "type": "A land forgotten by time! Ancient swamp, small part of a more primeval wilderness that was here before",
        "notes": "Hard encounter 50%"
    },
    "86": {
        "type": "Fey Oasis",
        "notes": "50% encounter with fey. Wisdom check (DC 16) or you get totally turned around, lost."
    },
    "87": {
        "type": "Fey Oasis",
        "notes": "50% encounter with fey. Wisdom check (DC 16) or you get totally turned around, lost."
    },
    "88": {
        "type": "Fey Oasis",
        "notes": "50% encounter with fey. Wisdom check (DC 16) or you get totally turned around, lost."
    },
    "89": {
        "type": "Fey Oasis",
        "notes": "50% encounter with fey. Wisdom check (DC 16) or you get totally turned around, lost."
    },
    "90": {
        "type": "Fey Oasis",
        "notes": "50% encounter with fey. Wisdom check (DC 16) or you get totally turned around, lost."
    },
    "91": {
        "type": "Fey Oasis",
        "notes": "50% encounter with fey. Wisdom check (DC 16) or you get totally turned around, lost."
    },
    "92": {
        "type": "Fey Oasis",
        "notes": "50% encounter with fey. Wisdom check (DC 16) or you get totally turned around, lost."
    },
    "93": {
        "type": "Swamp inhabited by humanoids who wish to remain hidden from the world.",
        "notes": "Q/A rolls to determine whether you meet them."
    },
    "94": {
        "type": "Swamp inhabited by humanoids who wish to remain hidden from the world.",
        "notes": "Q/A rolls to determine whether you meet them."
    },
    "95": {
        "type": "Swamp inhabited by humanoids who wish to remain hidden from the world.",
        "notes": "Q/A rolls to determine whether you meet them."
    },
    "96": {
        "type": "Swamp inhabited by humanoids who wish to remain hidden from the world.",
        "notes": "Q/A rolls to determine whether you meet them."
    },
    "97": {
        "type": "Swamp inhabited by humanoids who wish to remain hidden from the world.",
        "notes": "Q/A rolls to determine whether you meet them."
    },
    "98": {
        "type": "Swamp inhabited by humanoids who wish to remain hidden from the world.",
        "notes": "Q/A rolls to determine whether you meet them."
    },
    "99": {
        "type": "Swamp inhabited by humanoids who wish to remain hidden from the world.",
        "notes": "Q/A rolls to determine whether you meet them."
    },
    "100": {
        "type": "Swamp inhabited by humanoids who wish to remain hidden from the world.",
        "notes": "Q/A rolls to determine whether you meet them."
    }
};

const table_wilderness_feature_swamp_count = Object.keys(table_wilderness_feature_swamp).length;

const table_wilderness_feature_unmarked_settlement = {
    "1": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "2": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "3": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "4": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "5": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "6": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "7": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "8": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "9": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "10": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "11": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "12": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "13": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "14": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "15": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "16": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "17": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "18": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "19": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "20": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "21": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "22": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "23": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "24": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "25": {
        "type": "Hamlet",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "26": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "27": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "28": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "29": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "30": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "31": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "32": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "33": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "34": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "35": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "36": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "37": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "38": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "39": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "40": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "41": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "42": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "43": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "44": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "45": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "46": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "47": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "48": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "49": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "50": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "51": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "52": {
        "type": "Village",
        "notes": "Situated in overarching terrain. Q/A rolls to find out more."
    },
    "53": {
        "type": "Nomadic camp",
        "notes": ""
    },
    "54": {
        "type": "Nomadic camp",
        "notes": ""
    },
    "55": {
        "type": "Nomadic camp",
        "notes": ""
    },
    "56": {
        "type": "Nomadic camp",
        "notes": ""
    },
    "57": {
        "type": "Abandoned Hamlet",
        "notes": "Q/A rolls to discern cause of abandonment and also how long ago it was abandoned."
    },
    "58": {
        "type": "Abandoned Hamlet",
        "notes": "Q/A rolls to discern cause of abandonment and also how long ago it was abandoned."
    },
    "59": {
        "type": "Abandoned Village",
        "notes": "Q/A rolls to discern cause of abandonment and also how long ago it was abandoned."
    },
    "60": {
        "type": "Abandoned Village",
        "notes": "Q/A rolls to discern cause of abandonment and also how long ago it was abandoned."
    },
    "61": {
        "type": "Tower. Appears uninhabited",
        "notes": "Q/A to discern whether anything lurks here."
    },
    "62": {
        "type": "Tower. Appears uninhabited",
        "notes": "Q/A to discern whether anything lurks here."
    },
    "63": {
        "type": "Tower. Appears uninhabited",
        "notes": "Q/A to discern whether anything lurks here."
    },
    "64": {
        "type": "Tower. Appears inhabited",
        "notes": "Q/A rolls to discern more."
    },
    "65": {
        "type": "Tower. Appears inhabited",
        "notes": "Q/A rolls to discern more."
    },
    "66": {
        "type": "Tower. Appears inhabited",
        "notes": "Q/A rolls to discern more."
    },
    "67": {
        "type": "Tower. Appears inhabited",
        "notes": "Q/A rolls to discern more."
    },
    "68": {
        "type": "Worker's camp",
        "notes": "Appropriate to overarching terrain. 70% human, otherwise\nsome other sort of humanoid."
    },
    "69": {
        "type": "Worker's camp",
        "notes": "Appropriate to overarching terrain. 70% human, otherwise\nsome other sort of humanoid."
    },
    "70": {
        "type": "Worker's camp",
        "notes": "Appropriate to overarching terrain. 70% human, otherwise\nsome other sort of humanoid."
    },
    "71": {
        "type": "Worker's camp",
        "notes": "Appropriate to overarching terrain. 70% human, otherwise\nsome other sort of humanoid."
    },
    "72": {
        "type": "Hamlet, inhabited",
        "notes": "Settlement founded on surrounding industry. 70% human, otherwise some other sort of humanoid."
    },
    "73": {
        "type": "Hamlet, inhabited",
        "notes": "Settlement founded on surrounding industry. 70% human, otherwise some other sort of humanoid."
    },
    "74": {
        "type": "Hamlet, inhabited",
        "notes": "Settlement founded on surrounding industry. 70% human, otherwise some other sort of humanoid."
    },
    "75": {
        "type": "Hamlet, but some sort of affliction on the inhabitants",
        "notes": "Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "76": {
        "type": "Hamlet, but some sort of affliction on the inhabitants",
        "notes": "Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "77": {
        "type": "Hamlet, but some sort of affliction on the inhabitants",
        "notes": "Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "78": {
        "type": "Hamlet, but some sort of affliction on the inhabitants",
        "notes": "Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "79": {
        "type": "Unmapped village, inhabited",
        "notes": "Settlement founded on surrounding industry. 70% human, otherwise some other sort of humanoid."
    },
    "80": {
        "type": "Unmapped village, inhabited",
        "notes": "Settlement founded on surrounding industry. 70% human, otherwise some other sort of humanoid."
    },
    "81": {
        "type": "Unmapped village, inhabited",
        "notes": "Settlement founded on surrounding industry. 70% human, otherwise some other sort of humanoid."
    },
    "82": {
        "type": "Unmapped village, inhabited",
        "notes": "Settlement founded on surrounding industry. 70% human, otherwise some other sort of humanoid."
    },
    "83": {
        "type": "Village, but in discord / strife",
        "notes": "Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "84": {
        "type": "Village, but in discord / strife",
        "notes": "Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "85": {
        "type": "Village, but in discord / strife",
        "notes": "Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "86": {
        "type": "Village, but in discord / strife",
        "notes": "Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "87": {
        "type": "Hidden town / humanoid colony. A good amount of inhabitants.",
        "notes": "How have they remained hidden, and why? Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "88": {
        "type": "Hidden town / humanoid colony. A good amount of inhabitants.",
        "notes": "How have they remained hidden, and why? Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "89": {
        "type": "Hidden town / humanoid colony. A good amount of inhabitants.",
        "notes": "How have they remained hidden, and why? Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "90": {
        "type": "Hidden town / humanoid colony. A good amount of inhabitants.",
        "notes": "How have they remained hidden, and why? Q/A rolls to discern more. 70% human, otherwise some other sort of humanoid."
    },
    "91": {
        "type": "Tree hut village",
        "notes": "80% humanoid inhabitants (probably wood elves)"
    },
    "92": {
        "type": "Tree hut village",
        "notes": "80% humanoid inhabitants (probably wood elves)"
    },
    "93": {
        "type": "Tree hut village",
        "notes": "80% humanoid inhabitants (probably wood elves)"
    },
    "94": {
        "type": "Tree hut village",
        "notes": "80% humanoid inhabitants (probably wood elves)"
    },
    "95": {
        "type": "Town is here magically",
        "notes": "50% hard encounter. Q/A rolls to discern more."
    },
    "96": {
        "type": "Town is here magically",
        "notes": ""
    },
    "97": {
        "type": "Town is illusory but inhabitants still interact with you",
        "notes": ""
    },
    "98": {
        "type": "Floating town, suspended by magic",
        "notes": ""
    },
    "99": {
        "type": "Town is a haven for undead",
        "notes": ""
    },
    "100": {
        "type": "Town is here magically",
        "notes": ""
    }
};

const table_wilderness_feature_unmarked_settlement_count = Object.keys(table_wilderness_feature_unmarked_settlement).length;

const table_wilderness_feature_waterway = {
    "1": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "2": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "3": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "4": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "5": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "6": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "7": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "8": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "9": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "10": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "11": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "12": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "13": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "14": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "15": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "16": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "17": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "18": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "19": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "20": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "21": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "22": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "23": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "24": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "25": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "26": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "27": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "28": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "29": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "30": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "31": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "32": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "33": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "34": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "35": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "36": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "37": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "38": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "39": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "40": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "41": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "42": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "43": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "44": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "45": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "46": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "47": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "48": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "49": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "50": {
        "type": "Stream /river running through",
        "notes": "Runs through overarching terrain 15% waterfall nearby."
    },
    "51": {
        "type": "Slightly larger river, might be difficult to ford",
        "notes": "Survival check. DC 12 to ford. On a fail, you lose 1d4 perishable goods downstream and are soaked through If it's cold, you might need to stop and make a fire to dry off."
    },
    "52": {
        "type": "Slightly larger river, might be difficult to ford",
        "notes": "Survival check. DC 12 to ford. On a fail, you lose 1d4 perishable goods downstream and are soaked through If it's cold, you might need to stop and make a fire to dry off."
    },
    "53": {
        "type": "Slightly larger river, might be difficult to ford",
        "notes": "Survival check. DC 12 to ford. On a fail, you lose 1d4 perishable goods downstream and are soaked through If it's cold, you might need to stop and make a fire to dry off."
    },
    "54": {
        "type": "Slightly larger river, might be difficult to ford",
        "notes": "Survival check. DC 12 to ford. On a fail, you lose 1d4 perishable goods downstream and are soaked through If it's cold, you might need to stop and make a fire to dry off."
    },
    "55": {
        "type": "Slightly larger river, might be difficult to ford",
        "notes": "Survival check. DC 12 to ford. On a fail, you lose 1d4 perishable goods downstream and are soaked through If it's cold, you might need to stop and make a fire to dry off."
    },
    "56": {
        "type": "A man-made waterway of some sort, irrigation channel perhaps?",
        "notes": "Q/A rolls to discern purpose"
    },
    "57": {
        "type": "A man-made waterway of some sort, irrigation channel perhaps?",
        "notes": "Q/A rolls to discern purpose"
    },
    "58": {
        "type": "A man-made waterway of some sort, irrigation channel perhaps?",
        "notes": "Q/A rolls to discern purpose"
    },
    "59": {
        "type": "A man-made waterway of some sort, irrigation channel perhaps?",
        "notes": "Q/A rolls to discern purpose"
    },
    "60": {
        "type": "A man-made waterway of some sort, irrigation channel perhaps?",
        "notes": "Q/A rolls to discern purpose"
    },
    "61": {
        "type": "Deep but narrow stream. You see something float by! Dex check to grab it.",
        "notes": "Clue 50%, otherwise just a branch."
    },
    "62": {
        "type": "Deep but narrow stream. You see something float by! Dex check to grab it.",
        "notes": "Clue 50%, otherwise just a branch."
    },
    "63": {
        "type": "Deep but narrow stream. You see something float by! Dex check to grab it.",
        "notes": "Clue 50%, otherwise just a branch."
    },
    "64": {
        "type": "Deep but narrow stream. You see something float by! Dex check to grab it.",
        "notes": "Clue 50%, otherwise just a branch."
    },
    "65": {
        "type": "Deep but narrow stream. You see something float by! Dex check to grab it.",
        "notes": "Clue 50%, otherwise just a branch."
    },
    "66": {
        "type": "Large, unmapped river. Could be rideable in canoe.",
        "notes": "DC 19 Survival check to craft boat (if in forest or trees are nearby). O/A rolls and DC 19 History roll to discern more about this river."
    },
    "67": {
        "type": "Large, unmapped river. Could be rideable in canoe.",
        "notes": "DC 19 Survival check to craft boat (if in forest or trees are nearby). O/A rolls and DC 19 History roll to discern more about this river."
    },
    "68": {
        "type": "Large, unmapped river. Could be rideable in canoe.",
        "notes": "DC 19 Survival check to craft boat (if in forest or trees are nearby). O/A rolls and DC 19 History roll to discern more about this river."
    },
    "69": {
        "type": "Large, unmapped river. Could be rideable in canoe.",
        "notes": "DC 19 Survival check to craft boat (if in forest or trees are nearby). O/A rolls and DC 19 History roll to discern more about this river."
    },
    "70": {
        "type": "Large, unmapped river. Could be rideable in canoe.",
        "notes": "DC 19 Survival check to craft boat (if in forest or trees are nearby). O/A rolls and DC 19 History roll to discern more about this river."
    },
    "71": {
        "type": "Sizable river with pond areas. Probably quite good for fishing or swimming",
        "notes": "Medium encounter 50% Clue 25%"
    },
    "72": {
        "type": "Sizable river with pond areas. Probably quite good for fishing or swimming",
        "notes": "Medium encounter 50% Clue 25%"
    },
    "73": {
        "type": "Sizable river with pond areas. Probably quite good for fishing or swimming",
        "notes": "Medium encounter 50% Clue 25%"
    },
    "74": {
        "type": "Sizable river with pond areas. Probably quite good for fishing or swimming",
        "notes": "Medium encounter 50% Clue 25%"
    },
    "75": {
        "type": "Sizable river with pond areas. Probably quite good for fishing or swimming",
        "notes": "Medium encounter 50% Clue 25%"
    },
    "76": {
        "type": "Sizable, unmapped river, spanned by bridge",
        "notes": "Easy encounter 25% O/A roll to discern who built the bridge and for what purpose. 35% Unmarked Settlement nearby."
    },
    "77": {
        "type": "Sizable, unmapped river, spanned by bridge",
        "notes": "Easy encounter 25% O/A roll to discern who built the bridge and for what purpose. 35% Unmarked Settlement nearby."
    },
    "78": {
        "type": "Sizable, unmapped river, spanned by bridge",
        "notes": "Easy encounter 25% O/A roll to discern who built the bridge and for what purpose. 35% Unmarked Settlement nearby."
    },
    "79": {
        "type": "Sizable, unmapped river, spanned by bridge",
        "notes": "Easy encounter 25% O/A roll to discern who built the bridge and for what purpose. 35% Unmarked Settlement nearby."
    },
    "80": {
        "type": "Sizable, unmapped river, spanned by bridge",
        "notes": "Easy encounter 25% O/A roll to discern who built the bridge and for what purpose. 35% Unmarked Settlement nearby."
    },
    "81": {
        "type": "Meandering river with pier where small boats are tied up. Ferryman?",
        "notes": "Q/A rolls to determine purpose of boats."
    },
    "82": {
        "type": "Meandering river with pier where small boats are tied up. Ferryman?",
        "notes": "Q/A rolls to determine purpose of boats."
    },
    "83": {
        "type": "Meandering river with pier where small boats are tied up. Ferryman?",
        "notes": "Q/A rolls to determine purpose of boats."
    },
    "84": {
        "type": "Meandering river with pier where small boats are tied up. Ferryman?",
        "notes": "Q/A rolls to determine purpose of boats."
    },
    "85": {
        "type": "Meandering river with pier where small boats are tied up. Ferryman?",
        "notes": "Q/A rolls to determine purpose of boats."
    },
    "86": {
        "type": "This appears to be a drainage channel for a nearby settlement.",
        "notes": "Roll on Unmarked Settlement table."
    },
    "87": {
        "type": "This appears to be a drainage channel for a nearby settlement.",
        "notes": "Roll on Unmarked Settlement table."
    },
    "88": {
        "type": "This appears to be a drainage channel for a nearby settlement.",
        "notes": "Roll on Unmarked Settlement table."
    },
    "89": {
        "type": "This appears to be a drainage channel for a nearby settlement.",
        "notes": "Roll on Unmarked Settlement table."
    },
    "90": {
        "type": "This appears to be a drainage channel for a nearby settlement.",
        "notes": "Roll on Unmarked Settlement table."
    },
    "91": {
        "type": "Humanoids or fey (elves? dryads?) frolicking in the water.",
        "notes": "25% get freaky"
    },
    "92": {
        "type": "Humanoids or fey (elves? dryads?) frolicking in the water.",
        "notes": "25% get freaky"
    },
    "93": {
        "type": "Humanoids or fey (elves? dryads?) frolicking in the water.",
        "notes": "25% get freaky"
    },
    "94": {
        "type": "Humanoids or fey (elves? dryads?) frolicking in the water.",
        "notes": "25% get freaky"
    },
    "95": {
        "type": "Humanoids or fey (elves? dryads?) frolicking in the water.",
        "notes": "25% get freaky"
    },
    "96": {
        "type": "Shallow brook what's that you see there amongst the pebbles?",
        "notes": "Loot 20% (use CR of last creature defeated). Clue 40%"
    },
    "97": {
        "type": "Shallow brook what's that you see there amongst the pebbles?",
        "notes": "Loot 20% (use CR of last creature defeated). Clue 40%"
    },
    "98": {
        "type": "Shallow brook what's that you see there amongst the pebbles?",
        "notes": "Loot 20% (use CR of last creature defeated). Clue 40%"
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
    "foot hills": {
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