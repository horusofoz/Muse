// Wilderness Event Handlers

button_feature_wilderness_travel.onclick = function () {
    showFeatureDiv(div_feature_wilderness_travel);
    applyActiveStyleToFeatureButton(this);
}

button_generate_travel.onclick = function () {
    writeToJournal(generateWildernessTravel());
}

// Wilderness Functions

function generateWildernessTravel() {
    var travel = getWildernessTravel();
    return setWildernessTravel(travel);
}

function getWildernessTravel() {
    var travel = {};

    // Get Terrain


    // Get Feature

    // Get Feature Details



    return travel;
}

function setWildernessTravel(travel) {
    var travelString = getWildernessTravelTerrainInput();
    return travelString;
}

function getWildernessTravelTerrainInput() {
    return input_wilderness_travel_terrain.options[input_wilderness_travel_terrain.selectedIndex].value;
}




// Wilderness Tables

const table_wilderness_terrain_type = {
    "1": {
        "type": "arctic"
    },
    "2": {
        "type": "coastal"
    },
    "3": {
        "type": "desert"
    },
    "4": {
        "type": "forest"
    },
    "5": {
        "type": "jungle"
    },
    "6": {
        "type": "grassland"
    },
    "7": {
        "type": "hills"
    },
    "8": {
        "type": "mountains"
    },
    "9": {
        "type": "swamp"
    }
};

const table_wilderness_terrain_type_count = Object.keys(table_wilderness_terrain_type).length;

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