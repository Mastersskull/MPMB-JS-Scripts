/*  -WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://www.flapkan.com/download#charactersheets
    Import this file using the "Add Extra Materials" bookmark.

    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
	
	-INFORMATION-
    Subject:    Packleader (barbarian subclass)

    Effect:     This script adds the Packleader barbarian subclass published by Laserllama in GM Binder under the Fan Content policy.
    			Laserllama: https://www.gmbinder.com/profile/laserllama
    			Alternate Barbarian expanded: https://www.gmbinder.com/share/-N7MhiHnBhzmgxFtkzBO

    Sheet:      v13.0.06 and newer

    Remarks:    This sheet is best used along with the Alternate Barbarian script
 
    Code by:    Original script by CalypsoMoonlace
*/


var iFileName = "LaserLlama - Packleader.js";
RequiredSheetVersion("13.0.6");

AddSubClass("barbarian(laserllama)", "packleader", { 
	regExpSearch : /packleader/i,
	subname : "Path of the Packleader",
	source : ["GMB:LL", 0],
	features : {

		"subclassfeature3" : {
			name : "Beast Whisperer",
			source : [["GMB:LL", 0]],
			minlevel : 3,
			description : desc(["I gain proficiency with Animal Handling",
								"Wisdom (Animal Handling) checks related to wild animals get a bonus to the roll equal to a roll of Exploit Die."
							]),
			skills : ["Animal Handling"]
		},

		"subclassfeature3.1" : {
			name : "Savage Companion",
			source : ["GMB:LL", 0],
			minlevel : 3,
			description : desc([
				"I have forged a primal bond with a wild beast",
				'Select a "Savage Companion" on the companion page for its stats and rules',
				"If it dies, I can spend time during a long rest to find another worthy beast"
			]),
			action : [["action", " (forgo attack)"], ["bonus action", " (command)"]],
			creaturesAdd : [["Savage Companion", true]],
			creatureOptions : [{
				name : "Savage Companion",
				source : ["GMB:LL", 0],
				size : 3,
				type : "Beast",
				alignment : "Unaligned",
				ac : "13+Prof",
				hp : 20,
				hd : [3, 8],
				hdLinked : ["barbarian(laserllama)", "barbarian"],
				minlevelLinked : ["barbarian(laserllama)", "barbarian"],
				speed : "40 ft",
				scores : [14, 14, 15, 8, 14, 11],
				saves : ["", "", "", "", "", ""],
				senses : "Adv. on Wis (Perception) checks using hearing/sight/smell",
				passivePerception : 12,
				languages : "Understands the languages you speak",
				challengeRating : "0",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite",
					ability : 1,
					damage : [1, 6, "piercing"],
					modifiers : ["", "Prof"],
					range : "Melee (5 ft)",
					description : "On hit, Strength saving throw against Exploit save DC or target is grappled. Up to one targeted grappled at a time.",
					abilitytodamage : true
				}, {
					name : "Maul",
					ability : 1,
					damage : [1, 8, "slashing"],
					modifiers : ["", "Prof"],
					range : "Melee (5 ft)",
					description : "",
					abilitytodamage : true
				}], /*
				features : [{
					name : "Leader",
					description : "It takes its turn during that of its leader, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its leader takes a bonus action to command it to take another action. Its leader can also forgo one attack during their Attack action to command the companion to take the Attack action. If its leader is incapacitated, the companion can take any action, not just Dodge. If the companion is reduced to 0 hit points, it makes death saving throws like a player character would."
				}], */
				traits : [{
					name : "Primal Bond",
					description : "I add my PB to any ability check or saving throw my Companion makes."
				}, {
					name : "Keen Senses",
					description : "The companion has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell."
				}, {
					name : "Wild Fury (Packleader 6)",
					minlevel : 6,
					description : "When I Rage, my Companion also gains resistance to bludgeoning, piercing, and slashing damage for the duration."
					
				}, {
					name : "Leader of the Pack (Packleader 10)",
					minlevel : 10,
					description : "Both me and my Savage Companion have advantage on attack rolls against a creature if the other is within 5 feet of the target creature and not incapacitated."
				}],
				notes: [{
					name : "The companion obeys the commands of its leader",
					description : "and shares its proficiency bonus.",
					joinString: " "
				}, {
					name: "It takes its turn during that of its leader,",
					description: "on the same initiative count.",
					joinString: " "
				}, {
					name: "It can move and take reactions on its own,",
					description: "but only takes the Dodge action on its turn unless its leader takes a bonus action to command it to take another action.",
					joinString: " "
				}, {
					name: "Its leader can also forgo one attack during their Attack action",
					description: "to command the companion to take the Attack action.",
					joinString: " "
				}, {
					name: "If its leader is incapacitated,",
					description: "the companion can take any action, not just Dodge.",
					joinString: " "
				}, {
					name: "If the companion is reduced to 0 hit points,",
					description: "it makes death saving throws like a player character would.",
					joinString: " "
				}],
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						//if (!classes.known.ranger && !classes.known.rangerua) return;
						var rngrLvl = classes.known["barbarian(laserllama)"] ? classes.known["barbarian(laserllama)"].level : classes.known.barbarian.level;
						var rngrLvlM = 5 * rngrLvl;
						HDobj.alt.push(5 + rngrLvlM);
						HDobj.altStr.push(" = 5 as a base\n + 5 \xD7 " + rngrLvl + " from five times its leader's barbarian level (" + rngrLvlM + ")");
					},
					setAltHp : true
				}
			}]
		},


		"subclassfeature3.2" : {
			name : "Packleader Exploits",
			description : desc(["I learn more exploits at certain barbarian levels",
								"These are always prepared, but don't count against the number of exploits I know"]),
			toNotesPage : [{
					name : "Cunning Instinct",
					note : ["When I make a Perception or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],
					page3notes : true,
					source : [["GMB:LL", 0]]
				}, {
					name : "Trampling Rush",
					note : ["When I move at least 20 feet toward a creature and hit it with a melee weapon attack, I can expend an Exploit Die and attempt to trample the creature. It must succeed on a Strength saving throw, or it takes additional damage equal to one roll of your Exploit Die and is knocked prone."],
					page3notes : true,
					source : [["GMB:LL", 0]]
				}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},

		"subclassfeature5" : {
			name : "Packleader Exploits",
			toNotesPage : [{
					name : "Feral Senses",
					note : ["As an action, expend an Exploit Die to heighten my senses for 10 minutes.",
							"I can add a roll of my Exploit Die to each Wisdom (Insight), Wisdom (Perception) or Wisdom (Survival) that rely on smell.",
							"I can also smell the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you, and identify their type",
							"My senses cannot detect anything behind full cover"],		
					page3notes : true,							
					source : [["GMB:LL", 0]]
				}, {
					name : "Bloodthirsty Critical",
					note : ["When I crit I can expend an Exploit Die to make an additional weapon attack.",
							"On a hit, I deal additional damage equal to one roll of my Exploit Die.",
							"I cannot use this exploit on a crit achieved by this exploit."],
					page3notes : true,							
					source : [["GMB:LL", 0]]
				}],
			minlevel : 5,					
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Wild Fury",
			description : desc(["When I Rage, my Companion also gains resistance to bludgeoning, piercing, and slashing damage for the duration."]),
			minlevel : 6,
			source : [["GMB:LL", 0]]
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Pack tactics",
			toNotesPage : [{
				name : "Pack Tactics",
				note :["As a bonus action, expend an Exploit Die to signal my allies until the end of my next turn",
						"Creatures of my choice that can see or hear me within 30 feet have advantage on attack rolls, so long as a conscious allied creature is within 5 feet of their target.",
						"This effect can last up to 1 minute if I expend my bonus action to extend it each turn"],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature10" : {
			name : "Leader of the Pack",
			description : desc(["Both me and my Savage Companion have advantage on attack rolls against a creature if the other is within 5 feet of the target creature and not incapacitated."]),
			minlevel : 10,
			source : [["GMB:LL", 0]],
		},

		"subclassfeature14" : {
			name : "Primal Howl",
			description : desc(["When I Rage, either me or or my Savage Companion can let forth a primal howl, and force creatures of my choice that can hear it within 30 feet to make a Wisdom saving throw against my Exploit save DC. On a failed save, it is frightened of whoever howled for 1 minute.",
								"A creature can repeat this saving throw at the start of each turn, ending the effect on a success. A target that succeeds on its saving throw is immune to the effects of this howl for the next 24 hours."
								]),
			minlevel : 14,
			source : [["GMB:LL", 0]]
		}
	}
});