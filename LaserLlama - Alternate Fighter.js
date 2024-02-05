/*  -WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://www.flapkan.com/download#charactersheets
    Import this file using the "Add Extra Materials" bookmark.

    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
	
    -INFORMATION-
    Subject:    Alternate Fighter

    Effect:     This script adds the Alternate Fighter class published by Laserllama in GM Binder under the Fan Content policy.
    			Laserllama: https://www.gmbinder.com/profile/laserllama
    			Alternate Fighter: https://www.gmbinder.com/share/-MSfA82gv8V69JAoqFVq
    			Alternate Fighter expanded: https://www.gmbinder.com/share/-MUkP55cdNMTFYMKlDUL

    Sheet:      v13.0.06 and newer
 
    Code by:    Original script by CalypsoMoonlace
*/


// Meta information
var iFileName = "LaserLlama - Fighter.js";
RequiredSheetVersion("13.0.6");


// Fighting styles
var FightingStyles = {
	archery : {
		name : "Archery Fighting Style",
		description : desc("+2 bonus to attack rolls I make with ranged weapons"),
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.isRangedWeapon && !v.isNaturalWeapon && !v.isDC) output.extraHit += 2;
				},
				"My ranged weapons get a +2 bonus on the To Hit."
			]
		}
	},

	brawler: {
		name : "Brawler Fighting Style",
		description : desc([
			"My unarmed strikes deal 1d6 damage. If I have both hands free and used my action to make only unarmed strikes, I can make a single unarmed strike as bonus action."
		]),
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike") {
						if (fields.Damage_Die == 1 || fields.Damage_Die == "1d4") fields.Damage_Die = '1d6';
					};
				},
				"My unarmed strikes deal 1d6 damage. If I have both hands free and used my action to make only unarmed strikes, I can make a single unarmed strike as bonus action.",
				1
			]
		},
		action : ['bonus action', '']
	},

	classical : {
		name : "Classical Swordplay Fighting Style",
		description : desc("+2 bonus to attack rolls and +1 to AC when wielding a finesse weapon and no other weapon, heavy armor nor shield"),
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					for (var i = 1; i <= FieldNumbers.actions; i++) {
						if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) return;
					};
					if ((/\bfinesse\b/i).test(fields.Description)) output.extraDmg += 2;
				},
				"When I'm wielding a finesse weapon in one hand and no weapon nor shield in my other hand, I do +2 damage with that melee weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists."
			]
		},
		extraAC : {
			name : "Classical Swordplay Fighting Style", // necessary for features referring to fighting style properties directly
			mod : 1,
			text : "I gain a +1 bonus to AC when wielding a finesse weapon and no other weapon, heavy armor nor shield.",
			stopeval : function (v) { return v.heavyArmor || v.usingShield; }
		}
	},

	defense : {
		name : "Defense Fighting Style",
		description : desc("+1 bonus to AC when I'm wearing armor or wielding a shield"),
		extraAC : {
			name : "Defense Fighting Style", // necessary for features referring to fighting style properties directly
			mod : 1,
			text : "I gain a +1 bonus to AC while wearing armor or wielding a shield.",
			stopeval : function (v) { return !v.wearingArmor && !v.usingShield; }
		}
	},

	dueling : {
		name : "Dueling Fighting Style",
		description : desc("+2 to damage rolls when wielding a melee weapon in one hand and no other weapons"),
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					for (var i = 1; i <= FieldNumbers.actions; i++) {
						if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) return;
					};
					if (v.isMeleeWeapon && !v.isNaturalWeapon && !(/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i).test(fields.Description)) output.extraDmg += 2;
				},
				"When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists."
			]
		}
	},

	dual_wielding : {
		name : "Dual Wielding Fighting Style",
		description : desc([
					"I can add make an additional attack when two-weapon fighting as part of my attack action",
					"I can add my ability modifier to the damage of my off-hand attacks"
							]),
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.isOffHand) output.modToDmg = true;
				},
				"When engaging in two-weapon fighting, I can add my ability modifier to the damage of my off-hand attacks. If a melee weapon includes 'off-hand' or 'secondary' in its name or description, it is considered an off-hand attack."
			]
		},
		action : ["action","Dual Wielding (one additional attack)"]
	},

	featherweight : {
		name : "Featherweight Fighting Style",
		description : desc("+1 bonus to damage rolls and +10 ft to speed when wielding only light weapons and not wearing medium or heavy armor nor shield"),
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					for (var i = 1; i <= FieldNumbers.actions; i++) {
						if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) return;
					};
					if ((/\blight\b/i).test(fields.Description)) output.extraDmg += 1;
				},
				"When I'm wielding light weapons and not wearing medium or heavy armor nor a shield, I do +1 damage with light weapons."
			]
		},
		speed : {
			allModes : "+10"
		}
	},

	great_weapon : {
		name : "Great Weapon Fighting Style",
		description : desc([
				"While wielding a heavy melee weapon in two hands and making an attack with my action,",
				"I treat total damage dice rolls lower than 5 as 6"
			]),
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.isMeleeWeapon && (/\bheavy\b/i).test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Treat total damage dice rolls lower than 5 as 6';
					}
				},
				"While wielding a heavy melee weapon in two hands and making an attack with my action, I treat total damage dice rolls lower than 5 as 6"
			]
		}
	},

	improvised : {
		name : "Improvised Fighting Style",
		description : desc([
				"I am proficient with improvised weapons,",
				"I can reroll damage once per turn but it destroys non-magical objects"
			]),
		weaponProfs : [false, false, ["Improvised weapons"]]
	},

	marksman : {
		name : "Melee Marksman Fighting Style",
		description : desc([
			"I don't suffer disadv. on ranged attack rolls for being within 5 ft of a hostile creature",
			"When I make a ranged attack in my Attack action against a creature within 5 ft, I can use a bonus action to make a melee attack with my ranged weapon"
		]),
		weaponOptions : {
			regExpSearch : /(ranged|melee|marksman)/i,
			name : "Ranged weapon melee attack",
			source : [["P", 168]],
			ability : 1,
			type : "ranged weapon melee attack",
			damage : [1, 4, "bludgeoning"],
			range : "Melee",
			list: "melee",
			description : "As bonus action after Attack action with ranged weapon",
			abilitytodamage : true
		},
		weaponsAdd : ["Ranged weapon melee attack"],
		action : ["bonus action", "Melee Marksman attack (with Attack action)"],
		weaponProfs : [false, false, ["ranged weapon melee attack"]]
	},

	protector : {
		name : "Protector Fighting Style",
		description : desc([
			"As a reaction, I can add my prof bonus to AC against an attack made vs. me or someone within 5 ft of me",
			"I need to be wielding a shield or a melee weapon to do this"
		]),
		action : ["reaction", ""]
	},

	strongbow : {
		name : "Strongbow Fighting Style",
		description : desc("I can use Strength for ranged attacks with longbows and shortbows, +1 damage when I do"),
		calcChanges : {
			atkAdd : [
				function (fields, v, output) {
					if (v.isRangedWeapon && (v.WeaponName == "shortbow" || v.baseWeaponName == "shortbow" || v.WeaponName == "longbow" || v.baseWeaponName == "longbow")) {
						fields.Mod = 1;
					}
				},
				"Strength-based attacks with longbows and shortbows get a +1 bonus damage"
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isRangedWeapon && (v.WeaponName == "shortbow" || v.baseWeaponName == "shortbow" || v.WeaponName == "longbow" || v.baseWeaponName == "longbow")) {
						output.extraDmg += 1;
					}
				},
				"Strength-based attacks with longbows and shortbows get a +1 bonus damage"
			]
		}
	},

	thrown : {
		name : "Thrown Weapon Fighting Style",
		description : desc("+2 bonus to damage rolls with thrown weapons as ranged attack"),
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.isThrownWeapon) output.extraDmg += 2;
				},
				"My thrown weapons get a +2 bonus damage when thrown."
			]
		}
	},

	versatile : {
		name : "Versatile Fighting Style",
		description : desc([
				"+1 bonus to attack rolls when wielding a single versatile weapon and no shield",
				"When attacking with it, I can take a bonus action to grapple, shove or use an object"
			]),
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					for (var i = 1; i <= FieldNumbers.actions; i++) {
						if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) return;
					};
					if ((/\bversatile\b/i).test(fields.Description)) output.extraHit += 1;
				},
				"I get a +1 bonus to attack rolls when wielding a single versatile weapon and no shield"
			]
		},
		action : ["bonus action", "Grapple, shove or use an object (with Attack action)"]
	},

	// Fighting styles from expanded alternate fighter
	blind : {
		name : "Blind Warrior Fighting Style",
		description : desc([
							"I gain blindsight for a range of 5 times my prof bonus",
							"In that range, I can see invisible creatures and anything that isn't behind total cover or hidden"
						]),
		vision : [["Blindsight", 10]]
		// TODO: try to add the scaling
	},

	heavyweight : {
		name : "Heavyweight Fighting Style",
		description : desc("+1 damage to damage rolls and adv. on Strength (Athletics) checks to shove when wielding a heavy melee weapon"),
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.isMeleeWeapon && (/\bheavy\b/i).test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Adv. on Strength (Athletics) checks to shove';
					}
				},
				"While wielding a heavy melee weapon, I get +1 to damage rolls and adv. on Strength (Athletics) checks to shove"
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/\bheavy\b/i).test(fields.Description)) {
						output.extraDmg += 1;
					}
				},
				"While wielding a heavy melee weapon, I get +1 to damage rolls and adv. on Strength (Athletics) checks to shove"
			]
		}
	},

	mariner : {
		name : "Mariner Fighting Style",
		description : desc("+1 bonus to AC and swimming speed when not wearing medium or heavy armor nor shield"),
		extraAC : {
			name : "Mariner Fighting Style",
			mod : 1,
			text : "I gain a +1 bonus to AC when not wearing medium or heavy armor nor shield.",
			stopeval : function (v) { return v.mediumArmor || v.heavyArmor || v.usingShield; }
		},
		speed : {
			swim : { spd : "walk", enc : 0 }
		}
	},

	mountaineer : {
		name : "Mountaineer Fighting Style",
		description : desc("+1 bonus to AC and climbing speed when not wearing medium or heavy armor nor shield"),
		extraAC : {
			name : "Mountaineer Fighting Style",
			mod : 1,
			text : "I gain a +1 bonus to AC when not wearing medium or heavy armor nor shield.",
			stopeval : function (v) { return v.mediumArmor || v.heavyArmor || v.usingShield; }
		},
		speed : {
			climb : { spd : "walk", enc : 0 }
		}
	},

	mounted : {
		name : "Mounted Warrior Fighting Style",
		description : desc("+1 bonus to AC to me and my mount when riding, I can use my bonus action to command"),
		extraAC : {
			name : "Mounted Warrior Fighting Style",
			mod : 1,
			text : "I gain a +1 bonus to AC when riding a controlled mount"
		},
		action : ["bonus action", " (command)"]
	},
	// TODO: figure out if it is possible to edit the mount page

	pit : {
		name : "Pit Fighting Style",
		description : desc([
				"Tridents deal 1d8 (1d10) piercing damage on hit",
				"Attacks with nets only replace one attack, melee attacks don't have disadv."
			]),
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.WeaponName == "net" || v.baseWeaponName == "net") {
						fields.Description = "Thrown, no disadv. in melee, up to large creature hit is restrained"
					}

					if ((v.WeaponName == "trident" || v.baseWeaponName == "trident") && (fields.Damage_Die == "1d4" || fields.Damage_Die == "1d6")) {
						fields.Damage_Die = "1d8";
						fields.Description = "Thrown, versatile (1d10)";
					}
				},
				"Nets attack only replace one attack, no disadv. in melee and my tridents deal 1d8 (1d10) damage"
			]
		}
	},

	shieldwarrior : {
		name : "Shield Warrior Fighting Style",
		description : desc([
							"+1 bonus to AC when I'm wielding a shield and nothing else",
							"I gain prof. with shields as martial melee weapon, 2d4 bludg. on hit"
						]),
		extraAC : {
			name : "Shield Warrior Fighting Style",
			mod : 1,
			text : "I gain a +1 bonus to AC while wielding a shield and nothing else.",
			stopeval : function (v) { return !v.usingShield; }
		},
		weaponOptions : {
			regExpSearch : /(shield|bash)/i,
			name : "Shield melee attack",
			ability : 1,
			type : "shield melee attack",
			damage : [2, 4, "bludgeoning"],
			range : "Melee",
			list: "melee",
			abilitytodamage : true
		},
		weaponsAdd : ["Shield melee attack"],
		weaponProfs : [false, false, ["shield melee attack"]]
	},


	standardbearer : {
		name : "Standard Bearer Fighting Style",
		description : desc([
			"As a reaction, I can give adv. to an attack made by someone within 5 ft of me",
			"I need to be wielding a standard or banner to do this"
		]),
		action : ["reaction", ""]
	},

	wrestler : {
		name : "Wrestler Fighting Style",
		description : desc([
						"When hitting someone on my turn, I can attempt to grapple or shove them as a bonus action",
						"I can drag grappled creatures up to my full speed"
					]),
		action : ["bonus action", "Grapple or shove (after hitting with Attack action)"]
	}
};

// Main class
ClassList["fighter(laserllama)"] = {

	name : "Fighter(LaserLlama)",
	regExpSearch : /^(?=.*fighter)(?=.*laserllama).*$/i,
	source : ["GMB:LL", 0],
	primaryAbility : "Strength or Dexterity",
	prereqs : "Strength 13 or Dexterity 13",
	die : 10,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Str", "Con"],
	skillstxt : {
		primary : "Choose two from Acrobatics, Athletics, History, Intimidation, Perception, Stealth and Survival."
	},
	toolProfs : {
		primary : [["Artisan's tool", 1]]
	},
	armorProfs : { // the 4 entries are for: ["light", "medium", "heavy", "shields"]
		primary : [true, true, true, true], // the armor proficiencies if this is the first or only class
		secondary : [true, true, false, true] // the armor proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	},
	weaponProfs : {
		primary : [true, true],
		secondary : [true, true]
	},
	equipment : "Fighter starting equipment:" + 
				"\n \u2022 chain mail -or- leather armor, a longbow, 20 arrows;" +
				"\n \u2022 martial weapon and shield -or- two martial weapons;" +
				"\n \u2022 light crossbow and 20 bolts -or- two handaxes;" +
				"\n \u2022 a dungeoneer’s pack -or- an explorer’s pack;" + 
				"\n\nAlternatively, choose 5d4 x 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.", 
	subclasses : ["Warrior Archetype", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
	abilitySave : 1, // Alt Fighter uses Strength or Dex for foes' saving throws
	abilitySaveAlt : 2,
	features: {

		"fighting style" : {
			name : "Fighting Style",
			source : [["GMB:LL", 0]],
			minlevel : 1,
			description : desc('Choose a Fighting Style for the fighter using the "Choose Feature" button above'),
			choices : ["Archery", "Brawler", "Classical Swordplay", "Defense", "Dueling", "Dual Wielding", "Featherweight Fighting","Great Weapon Fighting", 
						"Improvised Fighting", "Melee Marksman", "Protector", "Strongbow", "Thrown Weapon Fighting", "Versatile Fighting", "Blind Warrior",
						"Heavyweight Fighting", "Mariner", "Mountaineer", "Pit Fighting", "Shield Warrior", "Standard Bearer", "Wrestler"],
			"archery" : FightingStyles.archery,
			"classical swordplay" : FightingStyles.classical,
			"brawler": FightingStyles.brawler,
			"defense" : FightingStyles.defense,
			"dueling" : FightingStyles.dueling,
			"dual wielding" : FightingStyles.dual_wielding,
			"featherweight fighting" : FightingStyles.featherweight,
			"great weapon fighting" : FightingStyles.great_weapon,
			"improvised fighting" : FightingStyles.improvised,
			"melee marksman" : FightingStyles.marksman,
			"protector" : FightingStyles.protector,
			"strongbow" : FightingStyles.strongbow,
			"thrown weapon fighting" : FightingStyles.thrown,
			"versatile fighting" : FightingStyles.versatile,
			"blind warrior" : FightingStyles.blind,
			"heavyweight fighting" : FightingStyles.heavyweight,
			"mariner" : FightingStyles.mariner,
			"mountaineer" : FightingStyles.mountaineer,
			"pit fighting" : FightingStyles.pit,
			"shield warrior" : FightingStyles.shieldwarrior,
			"standard bearer" : FightingStyles.standardbearer,
			"wrestler" : FightingStyles.wrestler
		},

		"second wind" : {
			name : "Second Wind",
			source : [["GMB:LL", 0]],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can regain hit points equal to 1d10 + fighter level"
			]),
			additional : levels.map(function (n) {
				return "1d10+" + n;
			}),
			usages : levels.map(function (n) { return n < 1 ? "" : n < 20 ? 1 : 2 }),
			recovery : "short rest",
			action : [["bonus action", ""]]
		},

		"martial exploits": {
			name : "Martial Exploits",
			minlevel : 2,
			source : [["GMB:LL", 0]],
			description : desc(["Use the \"Choose Feature\" button above to choose Martial Exploits."]),
			usages : ['', 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6],
			additional : ['', "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12"],
			recovery : "short rest",		
			extraname : "Exploits",
			extrachoices : [
				"Aggressive Sprint"
				],
			extraTimes : ['', 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 10, 10],
			"aggressive sprint" : {
				name : "Aggressive Sprint",
				description : desc(["As a bonus action, I can expend an Exploit Die to move up to my full speed towards a hostile creature I can see."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]]
			}
		},

		"know your enemy" : {
			name : "Know Your Enemy",
			source : [["GMB:LL", 0]],
			minlevel : 3,
			description : levels.map(function (n) {
				if (n < 14) {
					var descr = [
						"If I spend an action studying someone (up to 60 ft), the DM will tell me info about them",
						"I cannot use this twice on the same creature before completing a short rest"
					];
				} else {
					var descr = [
						"If I spend an action studying someone (up to 60 ft), the DM will tell me info about them",
						"I can also use this once per turn if I hit with a weapon attack",
						"I cannot use this more than three times on the same creature before completing a short rest"
					];
				}
				return desc(descr);
			})
		},

		"subclassfeature3" : {
            name : "Warrior Archetype",
            source : [["GMB:LL", 0]],
            minlevel : 3,
            description : desc([
                'Choose a Warrior Archetype you strive to emulate and put it in the "Class" field'
            ])
        },

        "action surge" : {
			name : "Action Surge",
			source : [["GMB:LL", 0]],
			minlevel : 6,
			description : desc([
                "I can take one additional action on my turn on top of my normally allowed actions"
            ]),
			usages : levels.map(function (n) {
					return n < 6 ? 0 : n < 20 ? 1 : 2;
			}),
			recovery : "short rest"
		},

		"indomitable" : {
			name : "Indomitable",
			source : [["GMB:LL", 0]],
			minlevel : 6,
			description : desc([
                "When I fail a saving throw, I can choose to succeed instead"
            ]),
			usages : levels.map(function (n) {
					return n < 9 ? 0 : n < 13 ? 1 : n < 17 ? 2 : 3;
			}),
			recovery : "long rest"
		},

		"martial superiority" : {
			name : "Martial Superiority",
			source : [["GMB:LL", 0]],
			minlevel : 11,
			description : desc(["Whenever I use second wind, I regain an exploit die",
				"Also, I regain all expended exploit die if I spend 10 minutes only doing light activity"
			])
		},

		"relentless" : {
			name : "Relentless",
			source : [["GMB:LL", 0]],
			minlevel : 20,
			description : desc(["When I roll initiative, I regain all expended exploit die",
				"Also, if I start my turn without any exploit die remaining, I regain one"
			])
		}
	}

}

// Feats
FeatsList["alternate defensive duelist"] = {
	name : "Alternate Defensive Duelist",
	source : [["GMB:LL"]],
	descriptionFull : "When a creature you can see hits you with a melee attack while you are wielding a finesse weapon you are proficient with, you can use a reaction to add your Dexterity modifier (minimum of +1) to your Armor Class against that attack. If this bonus to your Armor Class would cause the attack to miss, you can make an attack with that finesse weapon against the attacker as part of the same reaction.",
	description : "When wielding a finesse weapon with which I am proficient and another creature hits me with a melee attack, I can use my reaction to add my Dexterity modifier to my AC for that attack. If this causes the attack to miss me, I can make an attack with it as part of the reaction.",
	prerequisite : "Dexterity 13 or higher",
	prereqeval : function(v) { return What('Dex') >= 13; },
	action : ["reaction", " (when hit in melee)"]
};

// Source information
SourceList["GMB:LL"] = {
	name : "LaserLlama",
	abbreviation : "GMB:LL",
	abbreviationSpellsheet : "ll",
	group : "GM Binder",
	url : "https://www.gmbinder.com/profile/laserllama",
	date : "2018/04/22"
}