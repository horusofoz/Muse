// Oracle Tables

const table_question = {
    "1": {
        "answer": "Extreme No"
    },
    "2": {
        "answer": "No"
    },
    "3": {
        "answer": "No"
    },
    "4": {
        "answer": "No"
    },
    "5": {
        "answer": "No, but"
    },
    "6": {
        "answer": "Yes, but"
    },
    "7": {
        "answer": "Yes"
    },
    "8": {
        "answer": "Yes"
    },
    "9": {
        "answer": "Yes"
    },
    "10": {
        "answer": "Extreme Yes"
    }
};

const table_question_count = Object.keys(table_question).length;

const table_verb = {
    "1": {
        "verb": "Explode"
    },
    "2": {
        "verb": "Berate"
    },
    "3": {
        "verb": "Declare"
    },
    "4": {
        "verb": "Fumble"
    },
    "5": {
        "verb": "Defend"
    },
    "6": {
        "verb": "Alert"
    },
    "7": {
        "verb": "Plunder"
    },
    "8": {
        "verb": "Sleep"
    },
    "9": {
        "verb": "Consecrate"
    },
    "10": {
        "verb": "Forge"
    },
    "11": {
        "verb": "Force"
    },
    "12": {
        "verb": "Construct"
    },
    "13": {
        "verb": "Collaborate"
    },
    "14": {
        "verb": "Amuse"
    },
    "15": {
        "verb": "Segregate"
    },
    "16": {
        "verb": "Beg"
    },
    "17": {
        "verb": "Prophesize"
    },
    "18": {
        "verb": "Seize"
    },
    "19": {
        "verb": "Witness"
    },
    "20": {
        "verb": "Inflame"
    },
    "21": {
        "verb": "Rage"
    },
    "22": {
        "verb": "Blurt"
    },
    "23": {
        "verb": "Bid"
    },
    "24": {
        "verb": "Dishonor"
    },
    "25": {
        "verb": "Attend"
    },
    "26": {
        "verb": "Climb"
    },
    "27": {
        "verb": "Stage"
    },
    "28": {
        "verb": "Purchase"
    },
    "29": {
        "verb": "Ridicule"
    },
    "30": {
        "verb": "Betray"
    },
    "31": {
        "verb": "Dodge"
    },
    "32": {
        "verb": "March"
    },
    "33": {
        "verb": "Spy"
    },
    "34": {
        "verb": "Decay"
    },
    "35": {
        "verb": "Order"
    },
    "36": {
        "verb": "Congratulate"
    },
    "37": {
        "verb": "Catch"
    },
    "38": {
        "verb": "Jaywalk"
    },
    "39": {
        "verb": "Confront"
    },
    "40": {
        "verb": "Banish"
    },
    "41": {
        "verb": "Distill"
    },
    "42": {
        "verb": "Gesture"
    },
    "43": {
        "verb": "Tempt"
    },
    "44": {
        "verb": "Entice"
    },
    "45": {
        "verb": "Disguise"
    },
    "46": {
        "verb": "Beautify"
    },
    "47": {
        "verb": "Hurry"
    },
    "48": {
        "verb": "Build"
    },
    "49": {
        "verb": "Transform"
    },
    "50": {
        "verb": "Reward"
    },
    "51": {
        "verb": "Glare"
    },
    "52": {
        "verb": "Observe"
    },
    "53": {
        "verb": "Choke"
    },
    "54": {
        "verb": "Mutate"
    },
    "55": {
        "verb": "Practice"
    },
    "56": {
        "verb": "Enlighten"
    },
    "57": {
        "verb": "Defeat"
    },
    "58": {
        "verb": "Bait"
    },
    "59": {
        "verb": "Enrage"
    },
    "60": {
        "verb": "Sob"
    },
    "61": {
        "verb": "Punish"
    },
    "62": {
        "verb": "Laugh"
    },
    "63": {
        "verb": "Narrate"
    },
    "64": {
        "verb": "Slaughter"
    },
    "65": {
        "verb": "Bleed"
    },
    "66": {
        "verb": "Rescue"
    },
    "67": {
        "verb": "Invite"
    },
    "68": {
        "verb": "Decorate"
    },
    "69": {
        "verb": "Wound"
    },
    "70": {
        "verb": "Unload"
    },
    "71": {
        "verb": "Dazzle"
    },
    "72": {
        "verb": "Rush"
    },
    "73": {
        "verb": "Pollute"
    },
    "74": {
        "verb": "Destroy"
    },
    "75": {
        "verb": "Hurtle"
    },
    "76": {
        "verb": "Promote"
    },
    "77": {
        "verb": "Infuriate"
    },
    "78": {
        "verb": "Harass"
    },
    "79": {
        "verb": "Insult"
    },
    "80": {
        "verb": "Foretell"
    },
    "81": {
        "verb": "Gob"
    },
    "82": {
        "verb": "Stop"
    },
    "83": {
        "verb": "Investigate"
    },
    "84": {
        "verb": "Collapse"
    },
    "85": {
        "verb": "Divert"
    },
    "86": {
        "verb": "Notify"
    },
    "87": {
        "verb": "Congregate"
    },
    "88": {
        "verb": "Defuse"
    },
    "89": {
        "verb": "Near"
    },
    "90": {
        "verb": "Warn"
    },
    "91": {
        "verb": "Massacre"
    },
    "92": {
        "verb": "Alter"
    },
    "93": {
        "verb": "Subdue"
    },
    "94": {
        "verb": "Confiscate"
    },
    "95": {
        "verb": "Fake"
    },
    "96": {
        "verb": "Take"
    },
    "97": {
        "verb": "Abandon"
    },
    "98": {
        "verb": "Avenge"
    },
    "99": {
        "verb": "Terrorize"
    },
    "100": {
        "verb": "Inflict"
    },
    "101": {
        "verb": "Torment"
    },
    "102": {
        "verb": "Resist"
    },
    "103": {
        "verb": "Trade"
    },
    "104": {
        "verb": "Guard"
    },
    "105": {
        "verb": "Meddle"
    },
    "106": {
        "verb": "Examine"
    },
    "107": {
        "verb": "Bawl"
    },
    "108": {
        "verb": "Exclude"
    },
    "109": {
        "verb": "Disrupt"
    },
    "110": {
        "verb": "Auction"
    },
    "111": {
        "verb": "Foresee"
    },
    "112": {
        "verb": "Grab"
    },
    "113": {
        "verb": "Wink"
    },
    "114": {
        "verb": "Drink"
    },
    "115": {
        "verb": "Drown"
    },
    "116": {
        "verb": "Escort"
    },
    "117": {
        "verb": "Agitate"
    },
    "118": {
        "verb": "Love"
    },
    "119": {
        "verb": "Humiliate"
    },
    "120": {
        "verb": "Injure"
    },
    "121": {
        "verb": "Silence"
    },
    "122": {
        "verb": "Bewilder"
    },
    "123": {
        "verb": "Prohibit"
    },
    "124": {
        "verb": "Solicit"
    },
    "125": {
        "verb": "Attempt"
    },
    "126": {
        "verb": "Aim"
    },
    "127": {
        "verb": "Excavate"
    },
    "128": {
        "verb": "Mock"
    },
    "129": {
        "verb": "Concoct"
    },
    "130": {
        "verb": "Hold"
    },
    "131": {
        "verb": "Summon"
    },
    "132": {
        "verb": "Cremate"
    },
    "133": {
        "verb": "Provoke"
    },
    "134": {
        "verb": "Babble"
    },
    "135": {
        "verb": "Aid"
    },
    "136": {
        "verb": "Preach"
    },
    "137": {
        "verb": "Claim"
    },
    "138": {
        "verb": "Fund"
    },
    "139": {
        "verb": "Expose"
    },
    "140": {
        "verb": "Chase"
    },
    "141": {
        "verb": "Debate"
    },
    "142": {
        "verb": "Smash"
    },
    "143": {
        "verb": "Loot"
    },
    "144": {
        "verb": "Sell"
    },
    "145": {
        "verb": "Persuade"
    },
    "146": {
        "verb": "Arrange"
    },
    "147": {
        "verb": "Exclaim"
    },
    "148": {
        "verb": "Infringe"
    },
    "149": {
        "verb": "Offend"
    },
    "150": {
        "verb": "Dream"
    },
    "151": {
        "verb": "Irritate"
    },
    "152": {
        "verb": "Whittle"
    },
    "153": {
        "verb": "Give"
    },
    "154": {
        "verb": "Enquire"
    },
    "155": {
        "verb": "Elude"
    },
    "156": {
        "verb": "Inform"
    },
    "157": {
        "verb": "Ensnare"
    },
    "158": {
        "verb": "Ambush"
    },
    "159": {
        "verb": "Broadcast"
    },
    "160": {
        "verb": "Command"
    },
    "161": {
        "verb": "Recruit"
    },
    "162": {
        "verb": "Deride"
    },
    "163": {
        "verb": "Escape"
    },
    "164": {
        "verb": "Bargain"
    },
    "165": {
        "verb": "Distress"
    },
    "166": {
        "verb": "Denounce"
    },
    "167": {
        "verb": "Leap"
    },
    "168": {
        "verb": "Gather"
    },
    "169": {
        "verb": "Free"
    },
    "170": {
        "verb": "Wave"
    },
    "171": {
        "verb": "End"
    },
    "172": {
        "verb": "Deal"
    },
    "173": {
        "verb": "Praise"
    },
    "174": {
        "verb": "Collide"
    },
    "175": {
        "verb": "Bite"
    },
    "176": {
        "verb": "Obscure"
    },
    "177": {
        "verb": "Rejoice"
    },
    "178": {
        "verb": "Bark"
    },
    "179": {
        "verb": "Complain"
    },
    "180": {
        "verb": "Conceal"
    },
    "181": {
        "verb": "Trap"
    },
    "182": {
        "verb": "Intoxicate"
    },
    "183": {
        "verb": "Suffer"
    },
    "184": {
        "verb": "Travel"
    },
    "185": {
        "verb": "Endorse"
    },
    "186": {
        "verb": "Volunteer"
    },
    "187": {
        "verb": "Wait"
    },
    "188": {
        "verb": "Ban"
    },
    "189": {
        "verb": "Deceive"
    },
    "190": {
        "verb": "Leer"
    },
    "191": {
        "verb": "Spit"
    },
    "192": {
        "verb": "Riot"
    },
    "193": {
        "verb": "Stab"
    },
    "194": {
        "verb": "Dress"
    },
    "195": {
        "verb": "Befriend"
    },
    "196": {
        "verb": "Mesmerize"
    },
    "197": {
        "verb": "Unite"
    },
    "198": {
        "verb": "Drop"
    },
    "199": {
        "verb": "Grapple"
    },
    "200": {
        "verb": "Bow"
    },
    "201": {
        "verb": "Faint"
    },
    "202": {
        "verb": "Run"
    },
    "203": {
        "verb": "Transport"
    },
    "204": {
        "verb": "Eat"
    },
    "205": {
        "verb": "Wreck"
    },
    "206": {
        "verb": "Enjoy"
    },
    "207": {
        "verb": "Gallop"
    },
    "208": {
        "verb": "Endanger"
    },
    "209": {
        "verb": "Abuse"
    },
    "210": {
        "verb": "Carve"
    },
    "211": {
        "verb": "Lunge"
    },
    "212": {
        "verb": "Resurrect"
    },
    "213": {
        "verb": "Push"
    },
    "214": {
        "verb": "Maim"
    },
    "215": {
        "verb": "Erect"
    },
    "216": {
        "verb": "Queue"
    },
    "217": {
        "verb": "Carry"
    },
    "218": {
        "verb": "Frighten"
    },
    "219": {
        "verb": "Decree"
    },
    "220": {
        "verb": "Displease"
    },
    "221": {
        "verb": "Unveil"
    },
    "222": {
        "verb": "Frame"
    },
    "223": {
        "verb": "Blab"
    },
    "224": {
        "verb": "Enter"
    },
    "225": {
        "verb": "Threaten"
    },
    "226": {
        "verb": "Recount"
    },
    "227": {
        "verb": "Patrol"
    },
    "228": {
        "verb": "Petition"
    },
    "229": {
        "verb": "Belittle"
    },
    "230": {
        "verb": "Break"
    },
    "231": {
        "verb": "Bestow"
    },
    "232": {
        "verb": "Scrounge"
    },
    "233": {
        "verb": "Gossip"
    },
    "234": {
        "verb": "Bemoan"
    },
    "235": {
        "verb": "Hit"
    },
    "236": {
        "verb": "Bash"
    },
    "237": {
        "verb": "Imprison"
    },
    "238": {
        "verb": "Conjure"
    },
    "239": {
        "verb": "Entertain"
    },
    "240": {
        "verb": "Throw"
    },
    "241": {
        "verb": "Ship"
    },
    "242": {
        "verb": "Shout"
    },
    "243": {
        "verb": "Bother"
    },
    "244": {
        "verb": "Market"
    },
    "245": {
        "verb": "Capture"
    },
    "246": {
        "verb": "Seduce"
    },
    "247": {
        "verb": "Falsify"
    },
    "248": {
        "verb": "Flaunt"
    },
    "249": {
        "verb": "Glimpse"
    },
    "250": {
        "verb": "Fracture"
    },
    "251": {
        "verb": "Celebrate"
    },
    "252": {
        "verb": "Compliment"
    },
    "253": {
        "verb": "Evacuate"
    },
    "254": {
        "verb": "Show"
    },
    "255": {
        "verb": "Vandalize"
    },
    "256": {
        "verb": "Punch"
    },
    "257": {
        "verb": "Drag"
    },
    "258": {
        "verb": "Fuss"
    },
    "259": {
        "verb": "Nag"
    },
    "260": {
        "verb": "Jostle"
    },
    "261": {
        "verb": "Gleam"
    },
    "262": {
        "verb": "Consider"
    },
    "263": {
        "verb": "Cheat"
    },
    "264": {
        "verb": "Implore"
    },
    "265": {
        "verb": "Violate"
    },
    "266": {
        "verb": "Scream"
    },
    "267": {
        "verb": "Pounce"
    },
    "268": {
        "verb": "Gift"
    },
    "269": {
        "verb": "Mimic"
    },
    "270": {
        "verb": "Persecute"
    },
    "271": {
        "verb": "Wield"
    },
    "272": {
        "verb": "Deface"
    },
    "273": {
        "verb": "Weep"
    },
    "274": {
        "verb": "Ignite"
    },
    "275": {
        "verb": "Enchant"
    },
    "276": {
        "verb": "Frustrate"
    },
    "277": {
        "verb": "Provide"
    },
    "278": {
        "verb": "Manhandle"
    },
    "279": {
        "verb": "Audition"
    },
    "280": {
        "verb": "Help"
    },
    "281": {
        "verb": "Discipline"
    },
    "282": {
        "verb": "Dismount"
    },
    "283": {
        "verb": "Blame"
    },
    "284": {
        "verb": "Barter"
    },
    "285": {
        "verb": "Charm"
    },
    "286": {
        "verb": "Search"
    },
    "287": {
        "verb": "Devour"
    },
    "288": {
        "verb": "Execute"
    },
    "289": {
        "verb": "Scamper"
    },
    "290": {
        "verb": "Arise"
    },
    "291": {
        "verb": "Flee"
    },
    "292": {
        "verb": "Secure"
    },
    "293": {
        "verb": "Abolish"
    },
    "294": {
        "verb": "Entangle"
    },
    "295": {
        "verb": "Amaze"
    },
    "296": {
        "verb": "Dispel"
    },
    "297": {
        "verb": "Decompose"
    },
    "298": {
        "verb": "Approach"
    },
    "299": {
        "verb": "Exchange"
    },
    "300": {
        "verb": "Address"
    },
    "301": {
        "verb": "Terrify"
    },
    "302": {
        "verb": "Perform"
    },
    "303": {
        "verb": "Enshrine"
    },
    "304": {
        "verb": "Drum"
    },
    "305": {
        "verb": "Raid"
    },
    "306": {
        "verb": "Unleash"
    },
    "307": {
        "verb": "Brag"
    },
    "308": {
        "verb": "Damage"
    },
    "309": {
        "verb": "Conflict"
    },
    "310": {
        "verb": "Careen"
    },
    "311": {
        "verb": "Arouse"
    },
    "312": {
        "verb": "Inspect"
    },
    "313": {
        "verb": "Goggle"
    },
    "314": {
        "verb": "Assemble"
    },
    "315": {
        "verb": "Murder"
    },
    "316": {
        "verb": "Lurk"
    },
    "317": {
        "verb": "Intimidate"
    },
    "318": {
        "verb": "Welcome"
    },
    "319": {
        "verb": "Victimize"
    },
    "320": {
        "verb": "Speak"
    },
    "321": {
        "verb": "Contact"
    },
    "322": {
        "verb": "Ransack"
    },
    "323": {
        "verb": "Apprehend"
    },
    "324": {
        "verb": "Steal"
    },
    "325": {
        "verb": "Cook"
    },
    "326": {
        "verb": "Goad"
    },
    "327": {
        "verb": "Play"
    },
    "328": {
        "verb": "Remark"
    },
    "329": {
        "verb": "Involve"
    },
    "330": {
        "verb": "Assault"
    },
    "331": {
        "verb": "Attack"
    },
    "332": {
        "verb": "Vanish"
    },
    "333": {
        "verb": "Discriminate"
    },
    "334": {
        "verb": "Accuse"
    },
    "335": {
        "verb": "Crowd"
    },
    "336": {
        "verb": "Besiege"
    },
    "337": {
        "verb": "Salute"
    },
    "338": {
        "verb": "Contest"
    },
    "339": {
        "verb": "Reveal"
    },
    "340": {
        "verb": "Blunder"
    },
    "341": {
        "verb": "Astonish"
    },
    "342": {
        "verb": "Applaud"
    },
    "343": {
        "verb": "Overturn"
    },
    "344": {
        "verb": "Pelt"
    },
    "345": {
        "verb": "Alarm"
    },
    "346": {
        "verb": "Engage"
    },
    "347": {
        "verb": "Pursue"
    },
    "348": {
        "verb": "Quarrel"
    },
    "349": {
        "verb": "Pry"
    },
    "350": {
        "verb": "Inspire"
    },
    "351": {
        "verb": "Enforce"
    },
    "352": {
        "verb": "Revolt"
    },
    "353": {
        "verb": "Surround"
    },
    "354": {
        "verb": "Grieve"
    },
    "355": {
        "verb": "Lecture"
    },
    "356": {
        "verb": "Prosecute"
    },
    "357": {
        "verb": "Duplicate"
    },
    "358": {
        "verb": "Dispute"
    },
    "359": {
        "verb": "Oppress"
    },
    "360": {
        "verb": "Fret"
    },
    "361": {
        "verb": "Renege"
    },
    "362": {
        "verb": "Jeer"
    },
    "363": {
        "verb": "Repair"
    },
    "364": {
        "verb": "Recite"
    },
    "365": {
        "verb": "Despair"
    },
    "366": {
        "verb": "Beguile"
    },
    "367": {
        "verb": "Fling"
    },
    "368": {
        "verb": "Aggravate"
    },
    "369": {
        "verb": "Scavenge"
    },
    "370": {
        "verb": "Translate"
    },
    "371": {
        "verb": "Exaggerate"
    },
    "372": {
        "verb": "Wrestle"
    },
    "373": {
        "verb": "Blast"
    },
    "374": {
        "verb": "Prowl"
    },
    "375": {
        "verb": "Disturb"
    },
    "376": {
        "verb": "Deliver"
    },
    "377": {
        "verb": "Startle"
    },
    "378": {
        "verb": "Evict"
    },
    "379": {
        "verb": "Challenge"
    },
    "380": {
        "verb": "Protest"
    },
    "381": {
        "verb": "Parade"
    },
    "382": {
        "verb": "Thank"
    },
    "383": {
        "verb": "Pronounce"
    },
    "384": {
        "verb": "Plead"
    },
    "385": {
        "verb": "Badmouth"
    },
    "386": {
        "verb": "Infest"
    },
    "387": {
        "verb": "Annoy"
    },
    "388": {
        "verb": "Impede"
    },
    "389": {
        "verb": "Kick"
    },
    "390": {
        "verb": "Evade"
    },
    "391": {
        "verb": "Bequeath"
    },
    "392": {
        "verb": "Dedicate"
    },
    "393": {
        "verb": "Strangle"
    },
    "394": {
        "verb": "Kill"
    },
    "395": {
        "verb": "Enrich"
    },
    "396": {
        "verb": "Caress"
    },
    "397": {
        "verb": "Misspell"
    },
    "398": {
        "verb": "Annihilate"
    },
    "399": {
        "verb": "Strike"
    },
    "400": {
        "verb": "Suspect"
    },
    "401": {
        "verb": "Hamper"
    },
    "402": {
        "verb": "Follow"
    },
    "403": {
        "verb": "Sing"
    },
    "404": {
        "verb": "Gaze"
    },
    "405": {
        "verb": "Corner"
    },
    "406": {
        "verb": "Boast"
    },
    "407": {
        "verb": "Harm"
    },
    "408": {
        "verb": "Contaminate"
    },
    "409": {
        "verb": "Demolish"
    },
    "410": {
        "verb": "Dance"
    },
    "411": {
        "verb": "Gamble"
    },
    "412": {
        "verb": "Lose"
    },
    "413": {
        "verb": "Bellow"
    },
    "414": {
        "verb": "Assassinate"
    },
    "415": {
        "verb": "Restrain"
    },
    "416": {
        "verb": "Instigate"
    },
    "417": {
        "verb": "Crown"
    },
    "418": {
        "verb": "Ask"
    },
    "419": {
        "verb": "Joke"
    },
    "420": {
        "verb": "Rob"
    },
    "421": {
        "verb": "Obstruct"
    },
    "422": {
        "verb": "Arrest"
    },
    "423": {
        "verb": "Bewitch"
    },
    "424": {
        "verb": "Disperse"
    },
    "425": {
        "verb": "Proclaim"
    },
    "426": {
        "verb": "Bless"
    },
    "427": {
        "verb": "Customize"
    },
    "428": {
        "verb": "Discover"
    },
    "429": {
        "verb": "Argue"
    },
    "430": {
        "verb": "Disgust"
    },
    "431": {
        "verb": "Dash"
    },
    "432": {
        "verb": "Write"
    },
    "433": {
        "verb": "Rebel"
    },
    "434": {
        "verb": "Engineer"
    },
    "435": {
        "verb": "Barricade"
    },
    "436": {
        "verb": "Antagonize"
    },
    "437": {
        "verb": "Freeze"
    },
    "438": {
        "verb": "Dupe"
    },
    "439": {
        "verb": "Penalize"
    },
    "440": {
        "verb": "Enlarge"
    },
    "441": {
        "verb": "Discuss"
    },
    "442": {
        "verb": "Employ"
    },
    "443": {
        "verb": "Disappear"
    },
    "444": {
        "verb": "Fall"
    },
    "445": {
        "verb": "Worship"
    },
    "446": {
        "verb": "Dump"
    },
    "447": {
        "verb": "Lament"
    },
    "448": {
        "verb": "Display"
    },
    "449": {
        "verb": "Enlist"
    },
    "450": {
        "verb": "Research"
    },
    "451": {
        "verb": "Avert"
    },
    "452": {
        "verb": "Look"
    },
    "453": {
        "verb": "Infect"
    },
    "454": {
        "verb": "Torture"
    },
    "455": {
        "verb": "Flirt"
    },
    "456": {
        "verb": "Query"
    },
    "457": {
        "verb": "Dare"
    },
    "458": {
        "verb": "Beckon"
    },
    "459": {
        "verb": "Earn"
    },
    "460": {
        "verb": "Bribe"
    },
    "461": {
        "verb": "Parley"
    },
    "462": {
        "verb": "Overhear"
    },
    "463": {
        "verb": "Taunt"
    },
    "464": {
        "verb": "Endear"
    },
    "465": {
        "verb": "Exhibit"
    },
    "466": {
        "verb": "Baptize"
    },
    "467": {
        "verb": "Condemn"
    },
    "468": {
        "verb": "Disrespect"
    },
    "469": {
        "verb": "Overpower"
    },
    "470": {
        "verb": "Dig"
    },
    "471": {
        "verb": "Fashion"
    },
    "472": {
        "verb": "Deduce"
    },
    "473": {
        "verb": "Yell"
    },
    "474": {
        "verb": "Bet"
    },
    "475": {
        "verb": "Hide"
    },
    "476": {
        "verb": "Spill"
    },
    "477": {
        "verb": "Belch"
    },
    "478": {
        "verb": "Decline"
    },
    "479": {
        "verb": "Protect"
    },
    "480": {
        "verb": "Yield"
    },
    "481": {
        "verb": "Interfere"
    },
    "482": {
        "verb": "Shove"
    },
    "483": {
        "verb": "Enroll"
    },
    "484": {
        "verb": "Corrupt"
    },
    "485": {
        "verb": "Kiss"
    },
    "486": {
        "verb": "Mob"
    },
    "487": {
        "verb": "Giggle"
    },
    "488": {
        "verb": "Tease"
    },
    "489": {
        "verb": "Mutilate"
    },
    "490": {
        "verb": "Confuse"
    },
    "491": {
        "verb": "Disarm"
    },
    "492": {
        "verb": "Forgive"
    },
    "493": {
        "verb": "Experiment"
    },
    "494": {
        "verb": "Tug"
    },
    "495": {
        "verb": "Win"
    },
    "496": {
        "verb": "Demand"
    },
    "497": {
        "verb": "Interrogate"
    },
    "498": {
        "verb": "Scare"
    },
    "499": {
        "verb": "Appeal"
    },
    "500": {
        "verb": "Disgrace"
    }
};

const table_verb_count = Object.keys(table_verb).length;

const table_event_focus = {
    "1": {
        "focus": "NPC Action"
    },
    "2": {
        "focus": "New NPC"
    },
    "3": {
        "focus": "Advance Plot"
    },
    "4": {
        "focus": "Regress Plot"
    },
    "5": {
        "focus": "PC Positive"
    },
    "6": {
        "focus": "PC Negative"
    },
    "7": {
        "focus": "NPC Negative"
    },
    "8": {
        "focus": "NPC Positive"
    }
};

const table_event_focus_count = Object.keys(table_event_focus).length;

const table_event_subject = {
    "1": {
        "subject": "Afterthought"
    },
    "2": {
        "subject": "Mechanism"
    },
    "3": {
        "subject": "Queen"
    },
    "4": {
        "subject": "King"
    },
    "5": {
        "subject": "Girl"
    },
    "6": {
        "subject": "Idea"
    },
    "7": {
        "subject": "Candle"
    },
    "8": {
        "subject": "Fountain"
    },
    "9": {
        "subject": "Lock"
    },
    "10": {
        "subject": "Border"
    },
    "11": {
        "subject": "Magic"
    },
    "12": {
        "subject": "Slave"
    },
    "13": {
        "subject": "Circle"
    },
    "14": {
        "subject": "Teacher"
    },
    "15": {
        "subject": "Beauty"
    },
    "16": {
        "subject": "Veil"
    },
    "17": {
        "subject": "Monkey"
    },
    "18": {
        "subject": "Death"
    },
    "19": {
        "subject": "Creature"
    },
    "20": {
        "subject": "Land"
    },
    "21": {
        "subject": "River"
    },
    "22": {
        "subject": "Lizard"
    },
    "23": {
        "subject": "Lion"
    },
    "24": {
        "subject": "Rain"
    },
    "25": {
        "subject": "Learn"
    },
    "26": {
        "subject": "Crowd"
    },
    "27": {
        "subject": "Message"
    },
    "28": {
        "subject": "Pleasure"
    },
    "29": {
        "subject": "Boy"
    },
    "30": {
        "subject": "Aftermath"
    },
    "31": {
        "subject": "Plant"
    },
    "32": {
        "subject": "Flag"
    },
    "33": {
        "subject": "Friction"
    },
    "34": {
        "subject": "Beach"
    },
    "35": {
        "subject": "Insurance"
    },
    "36": {
        "subject": "Achieve"
    },
    "37": {
        "subject": "Deer"
    },
    "38": {
        "subject": "Clothing"
    },
    "39": {
        "subject": "Painting"
    },
    "40": {
        "subject": "Market"
    },
    "41": {
        "subject": "Sun"
    },
    "42": {
        "subject": "Divide"
    },
    "43": {
        "subject": "Ocean"
    },
    "44": {
        "subject": "Cemetery"
    },
    "45": {
        "subject": "Oil"
    },
    "46": {
        "subject": "Lawyer"
    },
    "47": {
        "subject": "Doctor"
    },
    "48": {
        "subject": "Shoe"
    },
    "49": {
        "subject": "House"
    },
    "50": {
        "subject": "Pollution"
    },
    "51": {
        "subject": "School"
    },
    "52": {
        "subject": "Mountain"
    },
    "53": {
        "subject": "Creator"
    },
    "54": {
        "subject": "Galley"
    },
    "55": {
        "subject": "Egg"
    },
    "56": {
        "subject": "Army"
    },
    "57": {
        "subject": "Animal"
    },
    "58": {
        "subject": "Guide"
    },
    "59": {
        "subject": "Volcano"
    },
    "60": {
        "subject": "Action"
    },
    "61": {
        "subject": "Learn"
    },
    "62": {
        "subject": "Light"
    },
    "63": {
        "subject": "Night"
    },
    "64": {
        "subject": "Partner"
    },
    "65": {
        "subject": "Ice"
    },
    "66": {
        "subject": "Language"
    },
    "67": {
        "subject": "Island"
    },
    "68": {
        "subject": "Massacre"
    },
    "69": {
        "subject": "Beginner"
    },
    "70": {
        "subject": "Hospital"
    },
    "71": {
        "subject": "Vulture"
    },
    "72": {
        "subject": "Guard"
    },
    "73": {
        "subject": "Feather"
    },
    "74": {
        "subject": "Aberration"
    },
    "75": {
        "subject": "Deity"
    },
    "76": {
        "subject": "Boundary"
    },
    "77": {
        "subject": "Temper"
    },
    "78": {
        "subject": "Devil"
    },
    "79": {
        "subject": "Demon"
    },
    "80": {
        "subject": "Son"
    },
    "81": {
        "subject": "Daughter"
    },
    "82": {
        "subject": "Forest"
    },
    "83": {
        "subject": "Reward"
    },
    "84": {
        "subject": "Blade"
    },
    "85": {
        "subject": "Needle"
    },
    "86": {
        "subject": "Shadow"
    },
    "87": {
        "subject": "Fey"
    },
    "88": {
        "subject": "Library"
    },
    "89": {
        "subject": "Eye"
    },
    "90": {
        "subject": "Ancient"
    },
    "91": {
        "subject": "Genocide"
    },
    "92": {
        "subject": "Rainbow"
    },
    "93": {
        "subject": "Bomb"
    },
    "94": {
        "subject": "Gold"
    },
    "95": {
        "subject": "Religion"
    },
    "96": {
        "subject": "Heart"
    },
    "97": {
        "subject": "Star"
    },
    "98": {
        "subject": "Iron"
    },
    "99": {
        "subject": "Sister"
    },
    "100": {
        "subject": "Ghost"
    },
    "101": {
        "subject": "Brother"
    },
    "102": {
        "subject": "Channel"
    },
    "103": {
        "subject": "King"
    },
    "104": {
        "subject": "Wall"
    },
    "105": {
        "subject": "Room"
    },
    "106": {
        "subject": "Wilderness"
    },
    "107": {
        "subject": "Dream"
    },
    "108": {
        "subject": "Minister"
    },
    "109": {
        "subject": "Temple"
    },
    "110": {
        "subject": "Believe"
    },
    "111": {
        "subject": "Resurrection"
    },
    "112": {
        "subject": "Food"
    },
    "113": {
        "subject": "Helmet"
    },
    "114": {
        "subject": "Thread"
    },
    "115": {
        "subject": "Garden"
    },
    "116": {
        "subject": "Weather"
    },
    "117": {
        "subject": "Jewellery"
    },
    "118": {
        "subject": "Health"
    },
    "119": {
        "subject": "Flower"
    },
    "120": {
        "subject": "Territory"
    },
    "121": {
        "subject": "Energy"
    },
    "122": {
        "subject": "Slave"
    },
    "123": {
        "subject": "Fuel"
    },
    "124": {
        "subject": "Portal"
    },
    "125": {
        "subject": "Family"
    },
    "126": {
        "subject": "Window"
    },
    "127": {
        "subject": "Disease"
    },
    "128": {
        "subject": "Picture"
    },
    "129": {
        "subject": "Book"
    },
    "130": {
        "subject": "Music"
    },
    "131": {
        "subject": "Time"
    },
    "132": {
        "subject": "Writer"
    },
    "133": {
        "subject": "Diamond"
    },
    "134": {
        "subject": "Fire"
    },
    "135": {
        "subject": "Amulet"
    },
    "136": {
        "subject": "Nest"
    },
    "137": {
        "subject": "Stone"
    },
    "138": {
        "subject": "Plant"
    },
    "139": {
        "subject": "Wealth"
    },
    "140": {
        "subject": "Insect"
    }
};

const table_event_subject_count = Object.keys(table_event_subject).length;


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

const table_dungeon_size = {
    "1": {
        "size": "Tiny",
        "rooms": 3
    },
    "2": {
        "size": "Tiny",
        "rooms": 4
    },
    "3": {
        "size": "Tiny",
        "rooms": 5
    },
    "4": {
        "size": "Small",
        "rooms": 6
    },
    "5": {
        "size": "Small",
        "rooms": 7
    },
    "6": {
        "size": "Small",
        "rooms": 8
    },
    "7": {
        "size": "Small",
        "rooms": 9
    },
    "8": {
        "size": "Small",
        "rooms": 10
    },
    "9": {
        "size": "Medium",
        "rooms": 13
    },
    "10": {
        "size": "Medium",
        "rooms": 14
    },
    "11": {
        "size": "Medium",
        "rooms": 15
    },
    "12": {
        "size": "Medium",
        "rooms": 16
    },
    "13": {
        "size": "Medium",
        "rooms": 17
    },
    "14": {
        "size": "Medium",
        "rooms": 18
    },
    "15": {
        "size": "Medium",
        "rooms": 19
    },
    "16": {
        "size": "Medium",
        "rooms": 20
    },
    "17": {
        "size": "Large",
        "rooms": 28
    },
    "18": {
        "size": "Large",
        "rooms": 29
    },
    "19": {
        "size": "Huge",
        "rooms": 55
    },
    "20": {
        "size": "Limitless",
        "rooms": "Until goal achieved"
    }
};

const table_dungeon_size_count = Object.keys(table_dungeon_size).length;

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

// Shared Tables

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
