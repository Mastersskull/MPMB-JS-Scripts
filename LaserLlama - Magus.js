var iFileName = "LaserLlama - Magus.js";
RequiredSheetVersion("13.1.7");

// For this sheet you need the Laserllama Compendium of Spells file. Found at: https://github.com/Mastersskull/MPMB-JS-Scripts/blob/main/LaserLlama%20-%20Compendium%20of%20Spells.js
var magusSpells = [
/*Cantrip*/ "acid splash ll", "blade ward ll", "booming blade ll", "chill touch", "dancing lights", "firebolt", "frostbite", "glitterbeam ll", "green-flame blade ll", "light", "lightning lure ll", "mage hand", "minor illusion", "poison spray ll", "prestidigitation", "resistance ll", "ray of frost", "shocking grasp", "sword burst ll", "tempestuous blade ll", "true strike ll",
/*1st level*/ "absorb elements", "arcane lance ll", "armor of agathys", "burning hands", "caustic brew", "chromatic orb", "color spray", "detect magic", "earth tremor", "expeditious retreat", "faerie fire", "feather fall", "fog cloud", "grease", "ice knife", "identify", "jump ll", "mage armor", "magic missile", "protection from good & evil", "ray of sickness", "shield ll", "sleep", "thunderwave", "torrent ll", "witch bolt ll", "zephyr strike",
/*2nd level*/ "acid arrow", "aganazzar's scorcher", "aura of frost ll", "blindness/deafness", "blur", "cloud of daggers", "darkness", "darkvision", "earthen grasp", "elemental blade ll", "enhance ability", "enlarge/reduce", "gust of wind", "hold person", "invisibility", "knock", "levitate", "magic aura", "magic weapon ll", "mirror image", "misty step", "protection from poison", "ray of enfeeblement", "scorching ray", "shatter", "snowball swarm", "spider climb",
/*3rd level*/ "counterspell ll", "dispel magic", "elemental weapon", "erupting earth", "fireball", "flame arrows", "fly", "haste", "lightning bolt", "magic circle", "minute meteors", "protection from energy", "sleet storm", "slow", "sonic wave ll", "tidal wave", "tiny hut ll", "thunder step", "wall of sand", "wall water", "wind wall",
/*4th level*/ "accursed touch ll", "arcane eye", "banishment", "death ward", "dimension door", "elemental bane", "fire shield", "freedom of movement", "greater invisibility", "ice storm", "polymorph ll", "resilient sphere", "sickening radiance", "stoneskin", "vitriolic sphere", "wall of fire", "watery sphere",
/*5th level*/ "animate objects", "cone of cold", "contagion", "dispel evil & good", "far step", "hold monster", "immolation", "passwall", "scrying", "skill empowerment", "steel wind strike ll", "teleportation circle", "vorpal blade ll", "wall of force ll", "wall of light", "wall of stone"
];
ClassList["magus(laserllama)"] = {

	name: "Magus(LaserLlama)",
	regExpSearch: /^(?=.*magus)(?=.*laserllama).*$/i,
	source: [["GMB:LL", 0]],
	primaryAbility: "Intelligence",
	abilitySave: 4,
	prereqs: "Dexterity 13 and Intelligence 13",
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die: 10,
	saves: ["Con", "Int"],
	skillstxt: {
		primary: "Choose two from Acrobatics, Arcana, Athletics, History, Investigation, Nature, or Performance"
	},
	armorProfs: {
		primary: [true, true, false, true],
		secondary: [true, true, false, true]
	},
	weaponProfs: {
		primary: [true, true]
	},
	equipment: "Magus starting equipment:" +
		"\n \u2022 martial weapon and shield -or- two martial weapons;" +
		"\n \u2022 scale mail -or- leather armor;" +
		"\n \u2022 a light crossbow and 20 bolts -or- 5 javelins;" +
		"\n \u2022 explorer’s pack -or- dungeoneer's pack;",
	subclasses: ["Esoteric Order", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	spellcastingFactor: 2,
	spellcastingFactorRoundupMulti: true,
	spellcastingTable: [[0, 0, 0, 0, 0, 0, 0, 0, 0]].concat(levels.map(function (n) {
		return defaultSpellTable[Math.ceil(n / 2)];
	})),
	spellcastingKnown: {
		cantrips: [0, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells: [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11]
	},
	spellcastingList: {
		spells: magusSpells,
	},
	features: {

		"arcane armory": {
			name: "Arcane Armory",
			source: [["GMB:LL", 0]],
			minlevel: 1,
			description: desc([
				"I can touch a weapon, shield or armor set for 1 hour to add it to my armory.",
				"Anything added to my armory is considered magical while it is part of it.",
				"I can don/doff any number of objects from my armory as a bonus action.",
				"I can use Int instead of Dex when calculating bonus AC in light and medium armor.",
				"I can have a number of objects in my armory equal to 1 + my Int mod."
			]),
			extraAC: [{
				mod: "Int-Dex",
				text: "I add my Intelligence modifier to AC instead of my Dexterity.",
				stopeval: function (v) { v.heavyArmor; } // for everything but heavy armor
			}],
			action: ["bonus action", ""]
		},

		"fighting style": {
			name: "Fighting Style",
			source: ["GMB:LL", 0],
			minlevel: 1,
			description: "\n   " + "Choose a Fighting Style using the \"Choose Feature\" button above",
			choices: ["Arcane Warrior", "Archery", "Brawler", "Classical Swordplay", "Defensive Fighting", "Dual Wielding", "Dueling", "Featherweight Fighting", "Great Weapon Fighting", "Heavyweight Fighting", "Mounted Warrior", "Protector", "Shield Warrior", "Thrown Weapon Fighting", "Versatile Fighting"],
			"arcane warrior": {
				name: "Arcane Warrior Fighting Style",
				description: "I learn two wizard cantrips that count as magus spells for me and use Int for spellcasting",
				spellcastingBonus: [{
					name: "Arcane Warrior",
					"class": "wizard",
					level: [0, 0],
					times: 2
				}]
			},
			"archery": FightingStyles.archery,
			"brawler": {
				name: "Brawler Fighting Style",
				description: "My unarmed strikes deal 1d6 damage. If I have two free hands and only use my action for unarmed strikes, I can make an additional unarmed strike as a bonus action.",
				action: ["bonus action", ""],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (v.baseWeaponName == "unarmed strike") {
								if (fields.Damage_Die == 1 || fields.Damage_Die == "1d4") fields.Damage_Die = '1d6';
							};
						},
						"My unarmed strikes deal 1d6 damage instead of 1. If I have two free hands and only use my action for unarmed strikes, I can make an additional unarmed strike as a bonus action.",
					]
				}
			},
			"classical swordplay": {
				name: "Classical Swordplay Fighting Style",
				description: "While wielding a Finesse weapon and no other weapons, I gain +2 to attack rolls and +1 to Armor class if I'm not wearing heavy armor or a shield.",
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (!v.heavyArmor && !v.usingShield && /finesse/i.test(fields.Description)) output.extraHit += 2;
						},
					],
				},
				extraAC: {
					name: "Classical Swordplay Fighting Style",
					mod: 1,
					stopeval: function (v) { return v.heavyArmor && v.usingShield; }
				}
			},
			"defensive fighting": {
				name: "Defensive Fighting Style",
				description: "While wielding a shield or wearing armor, I gain +1 to my Armor Class",
				extraAC: {
					name: "Defensive Fighting Style",
					mod: 1,
					stopeval: function (v) { return v.wearingArmor || v.usingShield; }
				}
			},
			"dual wielding": {
				name: "Dual Wielding Fighting Style",
				description: "While two-weapon fighting, you make your off-hand weapon attack as part of the Attack action instead of a bonus action, and can add your ability modifier to the damage of this attack. When you do, you cannot also make a bonus action attack."
			},
			"dueling": FightingStyles.dueling,
			"featherweight fighting": {
				name: "Featherweight Fighting Style",
				description: "While you are unarmed or wielding only light weapons, and are not wearing medium or heavy armor, your walking speed increases by 10 feet, and you gain a +1 bonus to your damage rolls with light melee weapons and unarmed strikes.",
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (!v.mediumArmor && !v.heavyArmor && !v.usingShield && /light/i.test(fields.Description)) output.extraDmg += 1;
						},
						function (fields, v) {
							if (!v.mediumArmor && !v.heavyArmor && !v.usingShield && v.baseWeaponName == "unarmed strike") output.extraDmg += 1;
						}
					],
				},
				changeeval: function (v) {
					if (!v.mediumArmor && !v.heavyArmor && !v.usingShield) {
						SetProf('speed', { allModes: + 10 }, "Featherweight Fighting Style");
					}
				}
			},
			"great weapon fighting": {
				name: "great Weapon Fighting Style",
				description: "I can treat damage rolls lower than 6 on two-handed heavy weapons as a 6",
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (/two-handed/i.test(fields.Description) && /heavy/i.test(fields.Description)) fields.Description += (fields.Description ? '; ' : '') + "treat damage rolls lower than 6 as 6."
						}
					],
				},
			},
			"heavyweight fighting": {
				name: "Heavyweight Fighting Style",
				description: "While wielding a heavy weapon, I gain +1 to damage rolls and have advantage on Athletics checks used to shove.",
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (/heavy/i.test(fields.Description)) output.extraDmg += 1;
						}
					],
				},
			},
			"mounted warrior": {
				name: "Mounted Warrior Fighting Style",
				description: "While riding my mount, we both gain +1 to Armor Class and I can use my bonus action to order my mount to use one of its actions",
				extraAC: {
					mod: 1,
					text: "My mount and I gain 1 AC while I am mounting it.",
				}
			},
			"protector": {
				name: "Protector Fighting Style",
				description: "When a creature attacks me or someone within 5ft of me, I can use my reaction to add my prof bonus to the AC of the target against this attack. I can only do this while wielding a shield or melee weapon."
			},
			"shield warrior": {
				name: "Shield Warrior Fighting Style",
				description: "I can use shields as a martial melee weapon. It deals 2d4 + strength mod bludgeoning damage. If I'm only wielding a shield, I gain +1 to attack rolls and Armor Class",
				weaponsAdd: ["Shield"],
				weaponOptions: [{
					name: "Shield",
					source: ["GMB:LL", 0],
					regExpSearch: /^(?=.*shield).*$/i,
					type: "Martial",
					ability: 1,
					abilitytodamage: true,
					damage: [2, 4, "bludgeoning"],
					range: "Melee, 5 ft",
				}],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (v.baseWeaponName == "shield") output.extraHit += 1;
						}
					],
				},
				extraAC: {
					mod: 1,
					text: "While wielding a shield and no other weapons, I gain +1 to my Armor Class",
				}
			},
			"thrown weapon fighting": {
				name: "Thrown Weapon Fighting Style",
				source: [["T", 42]],
				description: desc([
					"I can draw a weapon with the thrown property as part of the attack I make with it",
					"In addition, my ranged attacks made with thrown weapons deal +2 damage"
				]),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (v.isThrownWeapon && v.isMeleeWeapon) {
								fields.Description += (fields.Description ? '; ' : '') + '+2 damage when thrown';
							};
						},
						"I deal +2 damage when I hit a ranged attack made with a thrown weapon."
					],
					atkCalc: [
						function (fields, v, output) {
							if (v.isThrownWeapon && !v.isMeleeWeapon) {
								output.extraDmg += 2;
							};
						},
					]
				}
			},
			"versatile fighting": {
				name: "Versatile Fighting Style",
				description: "While wielding a single versatile weapon and no shield, you gain a +1 bonus to your attack rolls with that weapon. While doing so, you can also use your bonus action to make a single grapple or shove attack, or to take the Use an Object action.",
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (/versatile/i.test(fields.Description && !v.usingShield)) output.extraDmg += 2;
						},
						"I deal +2 damage when I hit a ranged attack made with a thrown weapon."
					],
				},
				action : ["bonus action", "grapple/shove/item"]
			}
		}
	}
}