var iFileName = "LaserLlama - Warlock.js";
// Tested on sheet version 13.1.7
// Script updated to the LaserLlama GMBinder file https://www.gmbinder.com/share/-NRARRHW6KjsBfrQIzTs (Alternate Warlock) as of March 6th, 2025
RequiredSheetVersion("13.1.7");

// this spell list requires the LaserLlama Compendium of Spells (https://github.com/Mastersskull/MPMB-JS-Scripts/blob/main/LaserLlama%20-%20Compendium%20of%20Spells.js)

var warlockSpells = [
	/*Cantrip*/ "blade ward ll", "booming blade ll", "chill touch", "create bonfire", "dancing lights", "frostbite", "green-flame blade ll", "infestation", "lightning lure ll", "mage hand", "magic stone", "mind sliver", "minor illusion", "otherwordly grasp ll", "poison spray ll", "prestidigitation", "sword burst ll", "thunderclap", "toll the dead", "true strike ll",
	/*1st level*/ "armor of agathys", "arms of hadar", "bane", "cause fear", "charm person", "color spray", "comprehend languages", "dissonant whispers", "expeditious retreat", "ghastly flight ll", "hellish rebuke", "hex", "hideous laughter", "illusory script", "inflict wounds", "jump ll", "protection from evil & good", "ray of sickness", "sleep", "unseen servant", "witch bolt ll",
	/*2nd level*/ "cloud of daggers", "crown of madness", "darkness", "earthbind", "enthrall", "flame whip ll", "hold person", "invisibility", "levitate", "mind spike", "mind whip", "mirror image", "misty step", "mystic spear ll", "phantasmal force", "ray of enfeeblement", "shadow blade", "shatter", "spider climb", "suggestion",
	/*3rd level*/ "bestow curse", "counterspell ll", "dispel magic", "enemies abound", "fear", "fly", "gaseous form", "hunger of hadar", "hypnotic pattern ll", "intellect fortress", "life transference", "major image", "remove curse", "slow", "spectral passage ll", "spirit shroud", "summon fey", "summon lesser demons", "summon shadowspawn", "summon undead", "thunderstep", "tongues", "vampiric touch",
	/*4th level*/ "accursed touch ll", "arcane eye", "banishment", "blight", "charm monster", "compulsion", "confusion", "dimension door", "eldritch tentacles ll", "elemental bane", "giant insect", "greater invisibility", "hallucinatory terrain", "phantasmal killer", "polymorph ll", "shadow of moil", "sickening radiance", "summon abberation", "summon elemental", "summon greater demon",
	/*5th level*/ "contact other plane", "contagion", "danse macabre", "dominate person", "dream", "enervation", "far step", "geas", "hallow", "hold monster", "infernal calling", "insect plague", "legend lore", "mislead", "negative energy flood", "planar binding", "scrying", "spiritual sundering ll", "synaptic static", "teleportation circle", "wall of light"
 ];

ClassList["warlock(laserllama)"] = {
	
	name : "Warlock(LaserLlama)",
	regExpSearch : /^(?=.*warlock)(?=.*laserllama).*$/i,
	source : [["GMB:LL", 0]],
	abilitySave : [4,5,6],
    pactAbility : function(abilitySave) {
        if(this.abilitySave = 4) {return "Intelligence"}
        else if(this.abilitySave = 5) {return "Wisdom"}
        else if(this.abilitySave = 6) {return "Charisma"}
    },
	primaryAbility : pactAbility,
	prereqs : pactAbility + " 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Int", "Wis"],
	skillstxt : {
		primary : "Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion"
	},
    armorProfs : {
        primary : [true, false, false, false],
        secondary : [true, false, false, false]
    },
    weaponProfs : {
        primary : [true, false],
        secondary : [true, false]
    },
	equipment : "Warlock starting equipment:" +
			"\n \u2022 A light crossbow and 20 bolts -or- any simple weapon;" +
			"\n \u2022 A component pouch -or- an arcane focus;" +
			"\n \u2022 A scholar's pack -or- a dungeoneer's pack;" +
			"\n \u2022 Leather armor, any simple weapon, and two daggers." +
			"\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Otherwordly Patron", []],
    attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    spellcastingFactor : "warlock1",
    spellcastingKnown : {
        cantrips : [, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        spells : [, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]
    },
	spellcastingList : {
		spells : warlockSpells,
        level : [0, 5] //lower and higher limit
	},
    features : {
        "eldricth blast" : {
            name : "Eldritch Blast",
            source : [["GMB:LL", 0]],
            minlevel : 1,
            description : desc([
                "I can make a ranged spell attack against a target within 120 feet.",
                "On hit, it takes force damage equal to 1d8 + my pact modifier."
            ]),
        },
        "eldritch invocations" : {
			name : "Eldritch Invocations",
			source : [["GMB:LL", 0]],
			minlevel : 1,
			description : desc([
				'Use the "Choose Feature" button above to add Eldritch Invocations to the third page',
				"Whenever I gain a warlock level, I can replace an invocation I know with another"
			]),
			additional : levels.map(function (n) {
				return n < 2 ? "" : (n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : n < 12 ? 5 : n < 15 ? 6 : n < 18 ? 7 : 8) + " invocations known";
			}),
			extraname : "Eldritch Invocation",
			extrachoices : ["Armor of Shadows", "Aspect of the Moon", "Beguiling Influence", "Eldritch Sight", "Eyes of the Rune Keeper", "Gaze of Two Minds", "Gift of the Deep Ones", "Infernal Sight", "Otherwordly Vigor", "Mask of Many Faces", "Misty Visions", "Sylvan Speech", "Cloak of Decay (prereq: level 3 warlock)", "Eldritch Spear (prereq: level 3 warlock)", "Grasp of Hadar (prereq: level 3 warlock)", "Lance of Lethargy (prereq: level 3 warlock)", "Repelling Blast (prereq: level 3 warlock)", "Thief of Five Fates (prereq: level 3 warlock)", "Tome of Ancient Secrets (prereq: level 3 warlock, eldritch tome)", "Voice of the Master (prereq: level 3 warlock, eldritch familiar)", "Blasphemous Prayer (prereq: level 5 warlock, eldritch tome)", "Erupting Blast (prereq: level 5 warlock)", "Thirsting Blade (prereq: level 5 warlock, eldritch blade)", "Tomb of Frost (prereq: level 5 warlock)", "Vitality of the Ageless (prereq: level 5 warlock, eldritch familiar)", "Arcane Secrets (prereq: level 7 warlock)", "Ascendant Step (prereq: level 7 warlock)", "Enspelled Blade (prereq: level 7 warlock, eldritch blade)", "Ethereal Sight (prereq: level 7 warlock)", "Favored Servant (prereq: level 7 warlock)", "Otherwordly Nature (prereq: level 7 warlock)", "Whispers of the Grave (prereq: level 7 warlock)", "Commune with Patron (prereq: level 9 warlock)", "Favor of the Master (prereq: level 9 warlock, eldritch familiar)", "Witch Sight (prereq: level 9 warlock)"],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 2 : n < 5 ? 3 : n < 7 ? 4 : n < 9 ? 5 : n < 12 ? 6 : n < 15 ? 7 : n < 18 ? 8 : 9;
			}),
            "armor of shadows" : {
                name : "Armor of Shadows",
                description : desc("As an action, I can give myself armor granting me AC equal to 13 + my pact modifier, so long as I wear no armor or shield."),
                source : [["GMB:LL", 0]],
                action : [["action", ""]]     
            },
            "aspect of the moon" : {
                name : "Aspect of the Moon",
                description : desc("I no longer need to sleep and cannot forcefully be put to sleep. To benefit from a long rest, I must spend those hours doing light activity."),
                source : [["GMB:LL", 0]],   
            },
            "beguiling influence" : {
                name : "Beguiling Influence",
                description : desc("I choose 2 skills from the following: Deception, Insight, Intimidation, Persuassion. I can proficiency in these skills and use my pact modifier instead of the normal ability score for them."),
                source : [["GMB:LL", 0]], 
            },
        },
        "pact magic" : {
            name : "Pact Magic",
            source : [["GMB:LL", 0]],
            minlevel : 2,
            description : desc([
                "I can cast warlock cantrips/spells that I know, using my pact ability (int, wis or cha) as my spellcasting ability",
                "I can use an arcane focus as a spellcasting focus for my warlock spells",
                "I regain these spell slots on a short rest"
            ]),
            additional : levels.map(function (n, idx) {
                var cantr = [, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4][idx];
                var splls = [, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15][idx];
                var slots = n < 2 ? 0 : n < 11 ? 2 : n < 17 ? 3 : 4;
                var sllvl = n < 3 ? 1 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : 5;
                return cantr + " cantrips \u0026 " + splls + " spells known; " + slots + "\xD7 " + Base_spellLevelList[sllvl] + " spell slot";
            })
        },
    }
};