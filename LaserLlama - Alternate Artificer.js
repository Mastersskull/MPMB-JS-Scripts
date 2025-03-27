var iFileName = "LaserLlama - Artificer.js";
RequiredSheetVersion("13.1.7");

// I haven't included the LL unique spells such as Tempestuos Blade
var artificerSpells = [
	/*Cantrip*/ "acid splash", "booming blade", "create bonfire", "fire bolt", "frostbite", "green-flame blade", "light", "lightning lure", "mage hand", "poison spray", "prestidigitation", "ray of frost", "shocking grasp", "thorn whip", "thunderclap",
	/*1st level*/ "absorb elements", "alarm", "catapult", "caustic brew", "color spray", "cure wounds", "disguise self", "expeditious retreat", "faerie fire", "false life", "feather fall", "fog cloud" , "grease", "heroism", "identify", "jump", "magic missile", "sleep", "witch bolt",
	/*2nd level*/ "aid", "blur", "continual flame", "cordon of arrows", "darkvision", "earthbind", "enhance ability", "enlarge/reduce", "heat metal", "invisibility", "levitate", "knock", "arcane lock", "magic mouth", "magic weapon", "pyrotechnics", "rope trick", "see invisibility", "skywrite", "spider climb", "web",
	/*3rd level*/ "blink", "catnap", "create food and water", "daylight", "dispel magic", "elemental weapon", "flame arrows", "fly", "glyph of warding", "haste", "intellect fortress", "life transference", "lightning arrow", "protection from energy", "revivify", "sending", "slow", "tiny servant", "water breathing",
	/*4th level*/ "arcane eye", "dimension door", "elemental bane", "fabricate", "faithful hound", "freedom of movement", "greater invisibility", "resilient sphere", "secret chest", "stone shape", "summon construct",
	/*5th level*/ "animate objects", "arcane hand", "awaken", "creation", "far step", "passwall", "skill empowerment", "transmute rock", "wall of light", "wall of stone"
 ];

ClassList["artificer(laserllama)"] = {
	
	name : "Artificer(LaserLlama)",
	regExpSearch : /^(?=.*artificer)(?=.*laserllama).*$/i,
	source : [["GMB:LL", 0]],
	primaryAbility : "Intelligence",
	abilitySave : 4,
	prereqs : "Intelligence 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Con", "Int"],
	skillstxt : {
		primary : "Choose two from Arcana, History, Investigation, Medicine, Nature, and Sleight of Hand"
	},
	toolProfs : {
		primary : [["Artisan's tools", 1], "Tinker's tools"],
		secondary : [["Artisan's tools", 1], "Tinker's tools"]
	},
	armorProfs : {
		primary : [true, true, false, true],
		secondary : [true, true, false, true]
	},
	weaponProfs : {
		primary : [true, false,["Hand Crossbows"], ["Firearms"]]
	},
	equipment : "Artificer starting equipment:" +
		"\n \u2022 Tinker's tools and a set of Artisan's tools of my choice;" +
		"\n \u2022 One simple weapon and light crossbow with 20 bolts;" +
		"\n \u2022 Studded leather armor -or- scale mail;" +
		"\n \u2022 scholar's pack -or- dungeoneer's pack;",
	subclasses : ["Artificer Specialist", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 2,
	spellcastingFactorRoundupMulti : true,
	spellcastingTable : [[0, 0, 0, 0, 0, 0, 0, 0, 0]].concat(levels.map(function (n) {
		return defaultSpellTable[Math.ceil(n / 2)];
	})),
	spellcastingKnown : {
		cantrips : [0, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells : [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11]
	},
	spellcastingList : {
		spells : artificerSpells,
	},
	features : {

		"magical tinker" : {
			name : "Magical Tinker",
			source : [["GMB:LL", 0]],
			minlevel : 1,
			description : desc([
				"I can use tinker's tools to cast the mending cantrip.",
                "I can also cast Identify and Detect magic as rituals only.",
                "Crafting Magic items takes half as long if I'm proficient with the appropriate tool."
			]),
			spellcastingBonus : {
				name : "Magical Tinker",
				spells : ["mending"],
				selection : ["mending"],
			},
			spellcastingBonus : {
				name : "Magical Tinker",
				spells : ["detect magic", "identify"],
				selection : ["detect magic", "identify"],
				firstCol : "(R)",
				times : 2
			},
			spellChanges : {
				"detect magic" : {
					time : "10 min",
					changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
				},
				"identify" : {
					time : "11 min",
					changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
				}
			},

		"infuse item" : {
				name : "Infuse Item",
				source : [["GMB:LL", 0]],
				description : desc([
					"When I finish a long rest, I can turn nonmagical objects into magic items using my infusions",
					"I can attune to it immediately; If I infuse too many items, the oldest loses its magic",
					"The infusion lasts until my death + my Int mod in days, but ends if I unlearn the infusion",
					"Each infusion can only be used in one item at a time and only in appropriate items",
					"Whenever I gain an artificer level, I can replace an infusion I know with another",
					"I can use an infused item as a spellcasting focus",
					"\n I can also replicate magic items:",
					"The item must be of a rarity appropriate for my level (common lvl 1, uncommon lvl 5, rare lvl 11, very rare lvl 17)",
					"I cannot replicate consumables, and to replicate a magic item I must have studied an original for 1 hour during a long rest."
				]),
				additional : levels.map(function (n) {
					return (n < 2 ? 2 : n < 5 ? 3 : n < 8 ? 4 : n < 11 ? 5 : n < 14 ? 6 : n < 17 ? 7 : 8) + " infusions";
				})
			},
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : [["GMB:LL", 0]],
			minlevel : 2,
			description : desc([
				"I can cast prepared artificer cantrips/spells, using Intelligence as my spellcasting ability",
				"To cast, I must use artisan's tools I'm proficient with as a spellcasting focus",
				"I can cast my prepared artificer spells as rituals if they have the ritual tag",
				"Whenever I gain an artificer level, I can swap one artificer cantrip I know for another"
			]),
			additional : levels.map(function (n, idx) {
				return [0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4][idx] + " cantrips known";
			}),
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (!spellObj.psionic && spName == "artificer" && spellObj.compMaterial === SpellsList[spellKey].compMaterial) {
							var extraFocus = classes.known.artificer.subclass.indexOf("artillerist") !== -1 && classes.known.artificer.level > 4 ? "my arcane firearm, " : classes.known.artificer.subclass.indexOf("armorer") !== -1 && classes.known.artificer.level > 2 ? "my arcane armor, " : "";
							spellObj.compMaterial = (spellObj.compMaterial ? spellObj.compMaterial + ".\n\nAlso a" : "A") + "lways requires my artificer spellcasting focus: thieves' tools, any set of artisan's tools I'm proficient with, " + extraFocus + "or an item infused by me.";
							if (GetFeatureChoice("classes", "artificer", "spellcasting", true).indexOf("don't change component column on spell sheet") != -1) {
								// do nothing if set to do so
							} else if (!spellObj.components) {
								spellObj.components = "M\u0192";
							} else if (spellObj.components.indexOf("M") == -1) {
								spellObj.components += ",M\u0192";
							} else if ((/M([^\u0192\u2020]|$)/).test(spellObj.components)) {
								spellObj.components = spellObj.components.replace("M", "M\u0192");
							}
							return true;
						}
						return false;
					},
					"My artificer spells always require me to use a spellcasting focus: thieves' tools, artisan's tools I'm proficient with, or an item infused by me."
				]
			},
			extrachoices : ["Don't change component column on spell sheet"],
			extraname : "Artificer Spellcasting",
			"don't change component column on spell sheet" : {
				name : "[Meta] Don't alter spell sheets",
				source : [["E:RLW", 55], ["T", 11]],
				description : "\n   The automation will not add M\u0192 to each artificer spell on the generated spell sheets"
			}
		},

		"infuse item" : {
			name : "Infuse Item",
			source : [["GMB:LL", 0]],
			minlevel : 1,
			description : '\n   Use the "Choose Feature" button above to add Artificer Infusions to the third page',
			additional : levels.map(function (n) {
				return (n < 2 ? 2 : n < 5 ? 3 : n < 8 ? 4 : n < 11 ? 5 : n < 14 ? 6 : n < 17 ? 7  : 8) + " infusions"
			}),
			extraname : "Artificer Infusion",
			extrachoices : [

                "Arm Launcher", // glove or gauntlet
                "Enhanced Arcane Focus", // arcane focus (attunement)
                "Enhanced Defense (Armor)", // armor
                "Enhanced Defense (Shield)", // shield
                "Enhanced Weapon", // simple or martial weapon
                "Featherweight Belt", // belt or cloak (attunement)
                "Featherweight Weapon", // simple or martial weapon (attunement)
                "Goggles of Clearsight", // helm, goggles or glasses
                "Lightning Cannon", // gauntlet, arcane focus or metal rod
                "Power Whip", // whip or chain
                "Repeating Shot", // ranged weapon (attunement)
                "Returning Weapon", // thrown weapon

                // level 5+
                "Gem of Warding", // gem worth at least 100gp
                "Homing Weapon", // weapon with thrown or ranged property
                "Homunculus Servant", // gem worth at least 100gp
                "Immovable Boots", // boots (attunement)
                "Infiltrator Armor", // suit of armor (attunement)
                "Light Blade", // sword hilt or arcane focus (attunement)
                "Mind Sharpener", // helmet, diadem, suit of armor or robes
                "Minor Arcane Item", // tiny object, tool or arcane focus (attunement)
                "Radiant Weapon", // melee weapon (attunement)
                "Repulsion Gauntlets", // gloves or gauntlets (attunement)
                "Repulsion Shield", // shield (attunement)

                // level 11+
                "Armor of Strength", // suit of armor (attunement)
                "Chameleon Armor", // suit of armor (attunement)
                "Elemental Armor", // suit of armor (attunement)
                "Elemental Ring", // ring (attunement)
                "Elemental Weapon", // weapon (attunement)
                "Greater Arcane Item", // tiny object, tool or arcane focus (attunement)
                "Helm of Awareness", // helmet or diadem (attunement)
                "Voyager Boots", // boots (attunement)

                // level 17+
                "Guardian Gauntlets", // gauntlets (attunement)
                "Masterwork Arcane Item", // tiny object, tool or arcane focus (attunement)
                "Masterwork Homunculus", // --
                "Mind Shield", // helmet or diadem (attunement)
            ],
			extraTimes : levels.map(function (n) {
				return (n < 2 ? 2 : n < 5 ? 3 : n < 8 ? 4 : n < 11 ? 5 : n < 14 ? 6 : n < 18 ? 7 : 8)
			}),

			"arm launcher" : {
				name : "Arm Launcher",
				source : [["GMB:LL", 0]],
				description : desc([
					"As an action, the wearer can load this launcher with up to 5 tiny objects such as vials or ball bearings.",
					"As a bonus action, the wearer can fire a loaded object at a target or space within 20 feet."
				]),
				submenu : "[Lvl 1+]",
                action : ["bonus action","Fire Loaded Object (Arm Launcher)"],
                action : ["action","Load Arm Launcher"],
				additional : "glove or gauntlet",
				magicitemsAdd : ["Arm Launcher"]
			},

            "enhanced arcane focus" : {
				name : "Enhanced Arcane Focus",
				source : [["GMB:LL", 0]],
				description : "The holder has a bonus to spell attack rolls and ignores half cover with spell attacks",
				submenu : "[Lvl 1+]",
				additional : levels.map(function (n) {
					return "arcane focus; attunement; +" + (n < 11 ? 1 : n < 17 ? 2 : 3);
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Enhanced Arcane Focus +" + (classes.known["artificer(laserllama)"].level < 11 ? 1 : classes.known["artificer(laserllama)"].level < 17 ? 2 : 3));
				},
				removeeval : function (lvl, chc) {
					RemoveMagicItem("enhanced arcane focus, +1 or +2 or +3");
				}
			},

            "enhanced defense (armor)" : {
				name : "Enhanced Defense (Armor)",
				source : [["GMB:LL", 0]],
				description : "",
				submenu : "[Lvl 1+]",
				additional : levels.map(function (n) {
					return "armor; +" + (n < 11 ? 1 : n < 17 ? 2 : 3) + " magical";
				}),
				prereqeval : function(v) {
					return GetFeatureChoice("classes", "artificer(laserllama)", "infuse item", true).indexOf("enhanced defense (shield)") == -1;
				},
				eval : function (lvl, chc) {
					AddMagicItem("Armor +" + (classes.known["artificer(laserllama)"].level < 11 ? 1 : classes.known["artificer(laserllama)"].level < 17 ? 2 : 3));
				},
				removeeval : function (lvl, chc) {
					RemoveMagicItem("armor, +1, +2, or +3");
				}
			},
			"enhanced defense (shield)" : {
				name : "Enhanced Defense (Shield)",
				source : [["GMB:LL", 0]],
				description : "",
				submenu : "[Lvl 1+]",
				additional : levels.map(function (n) {
					return "shield; +" + (n < 11 ? 1 : n < 17 ? 2 : 3) + " magical";
				}),
				prereqeval : function(v) {
					return GetFeatureChoice("classes", "artificer", "infuse item", true).indexOf("enhanced defense (armor)") == -1;
				},
				eval : function (lvl, chc) {
					AddMagicItem("Shield +" + (classes.known["artificer(laserllama)"].level < 11 ? 1 : classes.known["artificer(laserllama)"].level < 17 ? 2 : 3));
				},
				removeeval : function (lvl, chc) {
					RemoveMagicItem("shield, +1, +2, or +3");
				}
			},
			"enhanced weapon" : {
				name : "Enhanced Weapon",
				source : [["GMB:LL", 0]],
				description : "",
				submenu : "[Lvl 1+]",
				additional : levels.map(function (n) {
					return "simple/martial weapon; +" + (n < 11 ? 1 : n < 17 ? 2 : 3) + " magical";
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Weapon +" + (classes.known["artificer(laserllama)"].level < 11 ? 1 : classes.known["artificer(laserllama)"].level < 17 ? 2 : 3));
				},
				removeeval : function (lvl, chc) {
					RemoveMagicItem("weapon, +1, +2, or +3");
				}
			},

			"featherweight belt" : {
				name : "Featherweight Belt",
				source : [["GMB:LL", 0]],
				description : desc([
					"The wearer's weight is reduced to 1/10.",
                    "At lvl 11, the wearer's weight is instead reduced to 1/100."
				]),
				submenu : "[Lvl 1+]",
				additional : "belt or cloak; requires attunement",
				magicitemsAdd : ["Featherweight Belt"]
			},

			"featherweight weapon" : {
				name : "Featherweight Weapon",
				source : [["GMB:LL", 0]],
				description : desc([
					"This weapon loses the two-handed and/or heavy property",
                    "If it didn't have those properties to begin with, it gains the light property."
				]),
				submenu : "[Lvl 1+]",
				additional : "simple or martial weapon; requires attunement",
				magicitemsAdd : ["Featherweight Weapon"]
			},

			"goggles of clearsight" : {
				name : "Goggles of Clearsight",
				source : [["GMB:LL", 0]],
				description : desc([
					"The wearer can see through (heavy) obscurement and darkness from mundane and magical sources.",
                    "The wearer has advantage on saves vs the blinded condition and ignore the sunlight sensitivity trait if they have it."
				]),
				submenu : "[Lvl 1+]",
				additional : "helm, goggles or glasses",
                savetxt : "Adv. on saves vs blinded",
				magicitemsAdd : ["Goggles of Clearsight"],
                vision : [["(heavy) obscurement, (magical) darkness", 120]],
			},

			"lightning cannon" : {
				name : "Lightning Cannon",
				source : [["GMB:LL", 0]],
				description : desc([
					"The wearer can use this cannon to make ranged spell attacks in place of other attacks.",
                    "The wearer must see the target within 60 feet of them and they use their Intelligence as their spellcasting ability.",
                    "On a hit, the weapon deals 2d6 lightning damage."
				]),
				submenu : "[Lvl 1+]",
				additional : "gauntlet, arcane focus or metal rod; requires attunement",
				magicitemsAdd : ["Lightning Cannon"],
                addWeapons : ["Lightning Cannon"],
                weaponOptions : {
                    regExpSearch : /^(?=.*lightning)(?=.*cannon).*$/i,
                    name : "Lightning Cannon",
                    source: [["GMB:LL", 0]],
                    list : "spell",
                    ability : 4,
                    type : "AlwaysProf",
                    damage : [2, 6, "lightning"],
                    range : "60 ft",
                    abilitytodamage : false,
                },
			},

			"power whip" : {
				name : "Power Whip",
				source : [["GMB:LL", 0]],
				description : desc([
					"This whip deals 1d10 slashing damage and, once per turn, can force a large or smaller creature on hit to make a dex save.",
                    "On a fail, the creature is knocked prone."
				]),
				submenu : "[Lvl 1+]",
				additional : "chain or whip",
				magicitemsAdd : ["Power Whip"],
                addWeapons : ["Power Whip"],
                baseWeapon : "whip",
                weaponOptions : {
                    regExpSearch : /^(?=.*power)(?=.*whip).*$/i,
                    name : "Power Whip",
                    source: [["GMB:LL", 0]],
                    type : "AlwaysProf",
                    description : "Once per turn on-hit: force target large or smaller to make a dex save or be knocked prone.",
                    damage : [1, 10, "slashing"],
                },
                calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 11 ? "" : classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                }
			},

			"repeating shot" : {
				name : "Repeating Shot",
				source : [["GMB:LL", 0]],
				description : desc([
					"This weapon ignores the loading property if it has it.",
                    "It produces its own ammunition if none is loaded."
				]),
				submenu : "[Lvl 1+]",
				additional : "ranged weapon; requires attunement",
				magicitemsAdd : ["Repeating Shot"],
                calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 11 ? "" : classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                }
			},

            "returning weapon" : {
				name : "Returning Weapon",
				source : [["GMB:LL", 0]],
				description : desc([
					"This weapon immediately flies back to the owner's hand after making an attack with it."
				]),
				submenu : "[Lvl 1+]",
				additional : "weapon with thrown property",
				magicitemsAdd : ["Returning Weapon"],
                calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 11 ? "" : classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                }
			},

            "gem of warding" : {
				name : "Gem of Warding",
				source : [["GMB:LL", 0]],
				description : desc([
					"The wielder can expend 1 charge of this gem to throw it to a space within 30 feet, where it hovers 5 feet above the ground.",
                    "The wielder can use its bonus action to move the gem 20 ft or cause it to pulse.",
                    "When the gem pulses, creatures of your choice within 10 ft of the gem gain temp hp equal to your Int mod.",
                    "It remains active for one minute or until destroyed, after which it returns to me."
				]),
				submenu : "[Lvl 5+]",
				additional : "gem worth at least 100gp",
				magicitemsAdd : ["Gem of Warding"],
                action : ["action", ""],
                action : ["bonus action", "Move Gem 20 ft"],
                action : ["bonus action", "Gem Pulse"],
				creatureOptions : [{
					name : "Gem of Warding",
					source : [["GMB:LL", 0]],
					size : 5,
					type : "Object",
					alignment : "Neutral",
					ac : What('Int'),
					hp : 5,
					hd : [2, 4],
					hdLinked : ["artificer"],
					speed : "fly 20 ft (hover)",
					scores : [10, 10, 10, 10, 10, 10],
					saves : ["", "", "", "", "", ""],
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known["artificer(laserllama)"]) return;
							var artLvl = classes.known["artificer(laserllama)"].level;
							HDobj.alt.push(artLvl);
							HDobj.altStr.push(" from its creator's artificer level (" + artLvl + ")");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 5; },
			},

            "homing weapon" : {
				name : "Homing Weapon",
				source : [["GMB:LL", 0]],
				description : desc([
					"The wielder of this weapon ignores disadvantage as a result from attacking at long range with it."
				]),
				submenu : "[Lvl 5+]",
				additional : "weapon with the ranged or thrown property",
				magicitemsAdd : ["Homing Weapon"],
				calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 11 ? "" : classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                },
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 5; },
			},   

            "homunculus servant" : {
				name : "Homunculus Servant",
				source : [["GMB:LL", 0]],
				description : desc([
					""
				]),
				submenu : "[Lvl 5+]",
				additional : "gem worth at least 100gp",
				magicitemsAdd : ["Homunculus Servant"],
				creatureOptions : [{
					name : "Homunculus Servant",
					source : [["GMB:LL", 0]],
					size : 5,
					type : "Construct",
					alignment : "Neutral",
					ac : 11,
					hp : 1,
					hd : [2, 4],
					hdLinked : ["artificer"],
					speed : "20 ft, fly 30 ft",
					scores : [4, 15, 12, 10, 10, 7],
					saves : ["", "", "", "", "", ""],
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known["artificer(laserllama)"]) return;
							var artLvl = classes.known["artificer(laserllama)"].level;
							HDobj.alt.push(artLvl);
							HDobj.altStr.push(1 + " from twice its creator's artificer level (" + artLvl * 2 + ")");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 5; },
			},   

            "immovable boots" : {
				name : "Immovable Boots",
				source : [["GMB:LL", 0]],
				description : desc([
					"As an action, the wearer can fix themselves in place.",
					"A creature must succeed on a DC 30 Strength check to move the wearer."
				]),
				submenu : "[Lvl 5+]",
				additional : "boots; requires attunement",
				magicitemsAdd : ["Immovable Boots"],
				action : ["action", ""],
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 5; },
			},

            "infiltrator armor" : {
				name : "Infiltrator Armor",
				source : [["GMB:LL", 0]],
				description : desc([
					"This armor grants its wearer advantage on stealth checks and can be worn under clothes."
				]),
				submenu : "[Lvl 5+]",
				additional : "armor; requires attunement",
				magicitemsAdd : ["Infiltrator Armor"],
				advantages : [["stealth", true]],
				calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 11 ? "" : classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                },
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 5; },
			},   

            "light blade" : {
				name : "Light Blade",
				source : [["GMB:LL", 0]],
				description : desc([
					"The wielder of this object can use their bonus action to make the blade appear.",
					"While it exists, this weapon emits 15ft bright and 15ft dim light."
				]),
				submenu : "[Lvl 5+]",
				action : ["bonus action","Light Blade (dis)appears"],
				additional : "sword hilt or arcane focus; requires attunement",
				magicitemsAdd : ["Light Blade"],
                weaponOptions : {
                    regExpSearch : /^(?=.*light)(?=.*blade).*$/i,
                    name : "Light Blade",
                    source: [["GMB:LL", 0]],
                    type : "simple",
					ability : 1,
                    description : "Finesse",
                    damage : [1, 8, "radiant"],
                },
				calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 11 ? "" : classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                },
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 5; },
			},   

            "mind sharpener" : {
				name : "Mind Sharpener",
				source : [["GMB:LL", 0]],
				description : desc([
					"When the wearer of this object fails their Concentration check, they can use their reaction to succeed instead."
				]),
				submenu : "[Lvl 5+]",
				additional : "helmet, diadem, armor or robes",
				magicitemsAdd : ["Mind Sharpener"],
				action : ["reaction",""],
				extraLimitedFeatures : [{
					name : "Mind Sharpener",
					usages : What('Int Mod'),
					recovery : "dawn"
				}], 
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 5; },
			},   

            "minor arcane item" : {
				name : "Minor Arcane Item",
				source : [["GMB:LL", 0]],
				description : desc([
					"I can infuse a 1st-level Artificer spell into the item.",
					"For 1 charge the wielder can cast the spell infused within, using my spellcasting ability.",
					"If the spell requires concentration, the wielder of the item must concentrate on it."
				]),
				submenu : "[Lvl 5+]",
				additional : "tiny object, tool or arcane focus; requires attunement",
				magicitemsAdd : ["minor arcane item"],
				extraLimitedFeatures : [{
					name : "Minor Arcane Item",
					usages : What('Int Mod'),
					recovery : "dawn"
				}], 
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 5; },
			},   

            "radiant weapon" : {
				name : "Radiant Weapon",
				source : [["GMB:LL", 0]],
				description : desc([
					"As a bonus action, the wielder can make this weapon emit 30ft bright light and 30ft dim light.",
					"This light the wielder can extinguish as a bonus action. On a hit with this weapon I can force the target to make a con save.",
					"On a fail, the target is blinded until the beginning of the wielder's next turn."
				]),
				submenu : "[Lvl 5+]",
				additional : "melee weapon; requires attunement",
				magicitemsAdd : ["Radiant Weapon"],
				weaponOptions : {
                    regExpSearch : /^(?=.*radiant)(?=.*weapon).*$/i,
                    name : "Radiant Weapon",
                    source: [["GMB:LL", 0]],
                    type : "simple",
					ability : 1,
                    description : "On a hit, spend charge to force a Con save: blind on a fail until beginning of my next turn.",
                    damage : [1, 8, "radiant"],
                },
				action : ["bonus action","30ft bright + 30ft dim light (radiant weapon)"],
				extraLimitedFeatures : [{
					name : "Radiant Weapon",
					usages : What('Int Mod'),
					recovery : "dawn"
				}], 
				calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 11 ? "" : classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                },
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 5; },
			}, 

            "repulsion gauntlets" : {
				name : "Repulsion Gauntlets",
				source : [["GMB:LL", 0]],
				description : desc([
					"When hitting a creature with an unarmed strike with these gauntlets, the wielder can expend a charge to force the target to make a strength saving throw.",
					"On a fail, the target is knocked back 15 feet in a straight line. A large or larger creature has advantage on the save."
				]),
				submenu : "[Lvl 5+]",
				extraLimitedFeatures : [{
					name : "Repulsion Gauntlets",
					usages : What('Int Mod'),
					recovery : "dawn"
				}], 
				additional : "gloves or gauntlets; requires attunement",
				magicitemsAdd : ["Repulsion Gauntlets"],
				calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 11 ? "" : classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                },
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 5; },
			}, 

            "repulsion shield" : {
				name : "Repulsion Shield",
				source : [["GMB:LL", 0]],
				description : desc([
					"When the wielder is hit by a melee attack, they can expend a charge to force the target to make a strength saving throw.",
					"On a fail, the target is knocked back 15 feet in a straight line and falls prone. A large or larger creature has advantage on the save."
				]),
				submenu : "[Lvl 5+]",
				extraLimitedFeatures : [{
					name : "Repulsion Shield",
					usages : What('Int Mod'),
					recovery : "dawn"
				}], 
				additional : "shield; requires attunement",
				magicitemsAdd : ["Repulsion Shield"],
				calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 11 ? "" : classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                },
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 5; },
			}, 

            "armor of strength" : {
				name : "Armor of Strength",
				source : [["GMB:LL", 0]],
				description : desc([
					"The wearer of this armor can use their Int instead of Str for Strength based checks and saves.",
					"When they wearer would be moved or knocked prone, they can expend a charge to not to."
				]),
				submenu : "[Lvl 11+]",
				additional : "armor; requires attunement",
				magicitemsAdd : ["Armor of Strength"],
				extraLimitedFeatures : [{
					name : "Armor of Strength",
					usages : What('Int Mod'),
					recovery : "dawn"
				}], 
				calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                },
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 11; },
			}, 

            "chameleon armor" : {
				name : "Chameleon Armor",
				source : [["GMB:LL", 0]],
				description : desc([
					"This armor lets the wearer cast:",
					"disguise self (1 charge), invisibility (2 charges), greater invisibility (4 charges)"
				]),
				additional : "armor; requires attunement",
				magicitemsAdd : ["Chameleon Armor"],
				extraLimitedFeatures : [{
					name : "Chameleon Armor",
					usages : What('Int Mod'),
					recovery : "dawn"
				}], 
				spellcastingBonus : [{
					name : "1 charge",
					spells : ["disguise self"],
					selection : ["disguise self"],
					firstCol : 1
				}, {
					name : "2 charge",
					spells : ["invisibility"],
					selection : ["invisibility"],
					firstCol : 2
				}, {
					name : "4 charge",
					spells : ["greater invisibility"],
					selection : ["greater invisibility"],
					firstCol : 4
				}],
				submenu : "[Lvl 11+]",
				calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                },
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 11; },
			}, 

            "elemental armor" : {
				name : "Elemental Armor",
				source : [["GMB:LL", 0]],
				description : desc([
					"This armor makes its wearer resistant to my choice of damage from the listed options.",
					"This damage type is chosen on infusing the item."
				]),
				submenu : "[Lvl 11+]",
				choices : ["acid", "cold", "fire", "lightning", "necrotic", "poison", "radiant", "thunder"],
				"acid" : {
                    description: desc(["I am resistant to Acid damage."]),
                    dmgres: ["Acid"],
                },
				"cold" : {
                    description: desc(["I am resistant to Cold damage."]),
                    dmgres: ["Cold"],
                },
				"fire" : {
                    description: desc(["I am resistant to Fire damage."]),
                    dmgres: ["Fire"],
                },
				"lightning" : {
                    description: desc(["I am resistant to Lightning damage."]),
                    dmgres: ["Lightning"],
                },
				"necrotic" : {
                    description: desc(["I am resistant to Necrotic damage."]),
                    dmgres: ["Necrotic"],
                },
				"poison" : {
                    description: desc(["I am resistant to Poison damage."]),
                    dmgres: ["Poison"],
                },
				"radiant" : {
                    description: desc(["I am resistant to Radiant damage."]),
                    dmgres: ["Radiant"],
                },
				"thunder" : {
                    description: desc(["I am resistant to Thunder damage."]),
                    dmgres: ["Thunder"],
                },
				additional : "armor; requires attunement",
				magicitemsAdd : ["Elemental Armor"],
				calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            fields.name += (classes.known["artificer(laserllama)"].level < 17 ? 1 : 2)
                        },
                    ]
                },
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 11; },
			}, 

			"elemental ring" : {
				name : "Elemental Ring",
				source : [["GMB:LL", 0]],
				description : desc([
					"When the wearer casts a spell of 3rd level or lower that deals the chosen damage type, they can speak the command to make it do maximum damage instead to one of the targets.",
					"At 17th level, I can use this command on spells of 5th level and lower."
				]),
				submenu : "[Lvl 11+]",
				choices : ["acid", "cold", "fire", "lightning", "poison"],
				"acid" : {
                    description: desc(["I have an elemental ring of Acid damage."]),
                },
				"cold" : {
                    description: desc(["I have an elemental ring of Cold damage."]),
                },
				"fire" : {
                    description: desc(["I have an elemental ring of Fire damage."]),
                },
				"lightning" : {
                    description: desc(["I have an elemental ring of Lightning damage."]),
                },
				"poison" : {
                    description: desc(["I have an elemental ring of Poison damage."]),
                },
				extraLimitedFeatures : [{
					name : "Elemental Ring",
					usages : 1,
					recovery : "dawn"
				}], 
				additional : "ring; requires attunement",
				magicitemsAdd : ["Elemental Ring"],
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 11; },
			}, 

			"elemental weapon" : {
				name : "Elemental Weapon",
				source : [["GMB:LL", 0]],
				description : desc([
					"When infusing this item, I choose between acid, cold, fire, poison or lightning.",
					"Upon the wielder speaking the weapon's command word, the weapon deals 1d6 additional damage based on the chosen element.",
					"At level 17, this becomes 2d6 additional damage."
				]),
				submenu : "[Lvl 11+]",
				choices : ["acid", "cold", "fire", "lightning", "poison"],
				"acid" : {
					addWeapons : ["Elemental Weapon(acid)"],
					weaponOptions : {
						regExpSearch : /^(?=.*elemental)(?=.*weapon).*$/i,
						name : "Elemental Weapon(acid)",
						source: [["GMB:LL", 0]],
						list : "spell",
						ability : 4,
						type : "AlwaysProf",
						damage : [1, 6, "acid"],
						abilitytodamage : false,
					},
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if(classes.known["artificer(laserllama)"].level > 16)
								{
									fields.damage = [2, 6, "acid"]
								}
							},
						]
					}
                },
				"cold" : {
					addWeapons : ["Elemental Weapon(cold)"],
					weaponOptions : {
						regExpSearch : /^(?=.*elemental)(?=.*weapon).*$/i,
						name : "Elemental Weapon(cold)",
						source: [["GMB:LL", 0]],
						list : "spell",
						ability : 4,
						type : "AlwaysProf",
						damage : [1, 6, "cold"],
						abilitytodamage : false,
					},
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if(classes.known["artificer(laserllama)"].level > 16)
								{
									fields.damage = [2, 6, "cold"]
								}
							},
						]
					}
                },
				"fire" : {
					addWeapons : ["Elemental Weapon(fire)"],
					weaponOptions : {
						regExpSearch : /^(?=.*elemental)(?=.*weapon).*$/i,
						name : "Elemental Weapon(fire)",
						source: [["GMB:LL", 0]],
						list : "spell",
						ability : 4,
						type : "AlwaysProf",
						damage : [1, 6, "fire"],
						abilitytodamage : false,
					},
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if(classes.known["artificer(laserllama)"].level > 16)
								{
									fields.damage = [2, 6, "fire"]
								}
							},
						]
					}
                },
				"lightning" : {
					addWeapons : ["Elemental Weapon(lightning)"],
					weaponOptions : {
						regExpSearch : /^(?=.*elemental)(?=.*weapon).*$/i,
						name : "Elemental Weapon(lightning)",
						source: [["GMB:LL", 0]],
						list : "spell",
						ability : 4,
						type : "AlwaysProf",
						damage : [1, 6, "lightning"],
						abilitytodamage : false,
					},
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if(classes.known["artificer(laserllama)"].level > 16)
								{
									fields.damage = [2, 6, "lightning"]
								}
							},
						]
					}
                },
				"poison" : {
					addWeapons : ["Elemental Weapon(poison)"],
					weaponOptions : {
						regExpSearch : /^(?=.*elemental)(?=.*weapon).*$/i,
						name : "Elemental Weapon(poison)",
						source: [["GMB:LL", 0]],
						list : "spell",
						ability : 4,
						type : "AlwaysProf",
						damage : [1, 6, "poison"],
						abilitytodamage : false,
					},
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if(classes.known["artificer(laserllama)"].level > 16)
								{
									fields.damage = [2, 6, "poison"]
								}
							},
						]
					}
                },
				extraLimitedFeatures : [{
					name : "Elemental Weapon",
					usages : 1,
					recovery : "dawn"
				}], 
				additional : "melee weapon; requires attunement",
				magicitemsAdd : ["Elemental Weapon"],
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 11; },
			}, 

            "greater arcane item" : {
				name : "Greater Arcane Item",
				source : [["GMB:LL", 0]],
				description : desc([
					"I can infuse a 2nd-level Artificer spell into the item.",
					"For 1 charge the wielder can cast the spell infused within, using my spellcasting ability.",
					"If the spell requires concentration, the wielder of the item must concentrate on it."
				]),
				submenu : "[Lvl 11+]",
				additional : "tiny object, tool or arcane focus; requires attunement",
				magicitemsAdd : ["Greater Arcane Item"],
				extraLimitedFeatures : [{
					name : "Greater Arcane Item",
					usages : What('Int Mod'),
					recovery : "dawn"
				}], 
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 11; },
			},  

            "helm of awareness" : {
				name : "Helm of Awareness",
				source : [["GMB:LL", 0]],
				description : desc([
					"I cannot be surprised unless I am incapacitated, and I can add my Intellgence to my initiative rolls."
				]),
				submenu : "[Lvl 11+]",
				additional : "helmet; requires attunement",
				magicitemsAdd : ["Helm of Awareness"],
				addMod : { type : "skill", field : "Init", mod : "max(Int|1)", text : "I can add my Intelligence modifier to initiative rolls." },
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 11; },
			}, 

            "voyager boots" : {
				name : "Voyager Boots",
				source : [["GMB:LL", 0]],
				description : desc([
					"As a bonus action, the wearer can teleport up to 15 feet to an unoccupied space they can see.",
					"At lvl 17, this distance becomes 30 feet."
				]),
				submenu : "[Lvl 11+]",
				additional : "boots; requires attunement",
				action : ["bonus action",""],
				magicitemsAdd : ["Voyager Boots"],
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 11; },
			}, 

            "guardian gauntlets" : {
				name : "Guardian Gauntlets",
				source : [["GMB:LL", 0]],
				description : desc([
					"When a creature ends within 30ft of the wearer, they can use their reaction to force that creature to make a str save.",
					"On a fail, it is pulled 30ft towards the wearer. Creatures that are huge and larger have advantage on the save. ",
					"If this pulls the creature within 5 ft of the wearer they can make a single melee weapon attack against it."
				]),
				submenu : "[Lvl 17+]",
				additional : "gauntlets; requires attunement",
				magicitemsAdd : ["Guardian Gauntlets"],
				extraLimitedFeatures : [{
					name : "Guardian Gauntlets",
					usages : What('Int Mod'),
					recovery : "dawn"
				}], 
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 17; },
			}, 

			"masterwork arcane item" : {
				name : "Masterwork Arcane Item",
				source : [["GMB:LL", 0]],
				description : desc([
					"I can infuse a 3rd-level Artificer spell into the item.",
					"For 1 charge the wielder can cast the spell infused within, using my spellcasting ability.",
					"If the spell requires concentration, the wielder of the item must concentrate on it."
				]),
				submenu : "[Lvl 17+]",
				additional : "tiny object, tool or arcane focus; requires attunement",
				magicitemsAdd : ["Greater Arcane Item"],
				extraLimitedFeatures : [{
					name : "Masterwork Arcane Item",
					usages : What('Int Mod'),
					recovery : "dawn"
				}], 
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 17; },
			},

            "masterwork homunculus" : {
				name : "Masterwork Homunculus",
				source : [["GMB:LL", 0]],
				description : desc([
					""
				]),
				submenu : "[Lvl 17+]",
				additional : "",
				magicitemsAdd : ["Masterwork Homunculus"],
				spellcastingBonus : [{
					name : "1 Clone Max",
					spells : ["clone"],
					selection : ["clone"],
					firstCol : 1
				}],
				spellChanges : {
					"clone" : {
						changes : "Can only have 1 clone, which takes 12 days to reach maturity."
					}
				},
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 17; },
			}, 

            "mind shield" : {
				name : "Mind Shield",
				source : [["GMB:LL", 0]],
				description : desc([
					"The wearer of this helmet gains resistance to psychic damage, and immunity to the charmed and frightened condition."
				]),
				submenu : "[Lvl 17+]",
				savetxt : "Immune to charmed/frightened",
				dmgres : ["psychic"],
				additional : "helmet or diadem; requires attunement",
				magicitemsAdd : ["Mind Shield"],
				prereqeval : function(v) { return classes.known["artificer(laserllama)"].level >= 17; },
			}, 
        },

		"tinker's insight" : {
			name : "Tinker's Insight",
            source : ["GMB:LL", 0],
            minlevel : 2,
            description : desc([
                "I can attune to magic items I normally wouldn't meet the requirements for.",
				"If the item has a save DC, I can use my spell save DC instead."
            ])
		},

		"subclassfeature3" : {
            name : "Specialization",
            source : ["GMB:LL", 0],
            minlevel : 3,
            description : desc([
                "Choose a specialization that best represents my research and skills and put it in the \"Class\" field.",
            ])
        },

		"arcane recharge" : {
			name : "Arcane Recharge",
            source : ["GMB:LL", 0],
            minlevel : 3,
            description : desc([
                "Once per day, during a short rest, I can restore spell slots with a combined level up to my Int mod.",
				"At level 11, I can alternatively recharge a magic item's charges that it would otherwise regain at dawn."
            ])
		},

		"flash of genius" : {
			name : "Flash of Genius",
            source : ["GMB:LL", 0],
            minlevel : 6,
            description : desc([
                "When I or a creature within 30 feet makes an ability check or saving throw, I can use my reaction to add my Int mod to that roll."
            ]),
			action : ["reaction","add int to check or save"],
			usages : "Int mod per",
			usagescalc : "event.value = Math.max(1, Number(What('Int Mod')));",	
		},

		"expert tinker" : {
			name : "Expert Tinker",
            source : ["GMB:LL", 0],
            minlevel : 7,
            description : desc([
                "I add double my proficiency bonus to all tool checks I am proficient with.",
				"I can now also apply my infusions to magic items, but the bonus can't exceed +3."
            ]),
			skillstxt : "expertise with all tools I am proficient with",
		},

		"magic item mastery" : {
			name : "Magic Item Mastery",
            source : ["GMB:LL", 0],
            minlevel : 9,
            description : desc([
                "I can attune up to 4 magic items at once.",
				"This increases to 5 magic items at lvl 14, and 6 at level 18."
            ]),
		},

		"masterwork inventions" : {
			name : "Masterwork Inventions",
			source : [["GMB:LL", 0]],
			minlevel : 20,
			description : " [+1 on all saves per attuned magic item]\n   As a reaction when I'm reduced to 0 HP, I can end one infusion to drop to 1 HP instead",
			action : [["reaction", ""]],
			savetxt : {
				text : ["+1 to all saves per attuned magic item"]
			}
		}
	},
};

AddSubClass("artificer(laserllama)", "enhanced", { 
	regExpSearch : /^(?=.*enhanced)(?!.*wizard).*$/i,
	subname : "Enhanced",
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	source : ["GMB:LL", 0],
	features : {

		"subclassfeature3" : {
			name : "Tools of the trade",
			description : desc(["I gain proficiency with Leatherworker's tools and smith's tools.",
								"If I already am proficient in these, I gain proficiency with another artisan tool of my choice."
			]),	
			minlevel : 3,
			source : [["GMB:LL", 0]],
			toolProfs : [["Leahterworker's tools", "Smith's Tools"]],
			spellcastingBonusElsewhere : {
				addTo : "artificer(laserllama)",
				spellcastingExtra : [{
				spells : ["absorb elements", "thunderous smite", "alter self", "spider climb", "blinding smite", "haste", "freedom of movement", "greater invisibility", "banishing smite", "skill empowerment"],
				addToKnown : ["absorb elements", "thunderous smite", "alter self", "spider climb", "blinding smite", "haste", "freedom of movement", "greater invisibility", "banishing smite", "skill empowerment"],
				}],
			},
		},	
		
		"subclassfeature3.1" : {
			name : "Modular Physique",
			description : desc(["My body functions as items for the purpose of infusions:",
								"head (helmet), body (armor), arms (gauntlets) and legs (boots).",
								"They can each bear one infusion, and I also can use 10 + Dex Mod + Int mod as my AC when not wearing armor."
			]),	
			
			minlevel : 3,			
			source : [["GMB:LL", 0]],
			armorOptions : [{
				regExpSearch : /justToAddToDropDown/,
				name : "Unarmored Defense (Int)",
				source : [["GMB:LL", 0]],
				ac : "10+Int",
				affectsWildShape : true
				}],
			armorAdd : "Unarmored Defense (Int)"
		},
		
		"subclassfeature3.2" : {
			name : "Hidden Blade",
			description : desc(["My arm incorporates a hidden blade that can be extended or retracted as a bonus action."]),	
			action : ["bonus action", "extend/retract hidden blade"],	
			minlevel : 3,					
			source : [["GMB:LL", 0]],
			weaponOptions : {
				regExpSearch : /^(?=.*hidden)(?=.*blade).*$/i,
				name : "Hidden Blade",
				source: [["GMB:LL", 0]],
				type : "simple",
				ability : 1,
				description : "Finesse; is magical; can do either piercing or slashing damage",
				damage : [1, 10, "slashing"],
				range : "melee",
			},
			addWeapons : ["Hidden Blade"],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.name === "Hidden Blade") {
							fields.Damage_Die = (classes.known["artificer(laserllama)"].level < 10 ? 1 : 2) + 'd10';
						};
					},
				]
			}
		},
	
		"subclassfeature5" : {
			name : "Bonus Enhancements",
			description : desc(["My maximum number of infusions increases by 1 on level 5, 10 and 15.",
								"These infusions must by applied to my body through my Modular Physique feature."
			]),	
			minlevel : 5,
			source : [["GMB:LL", 0]],
			bonusClassExtrachoices : [{
				"class" : "artificer(laserllama)",
				feature : "infuse item",
				bonus : 1 
			}]
		},

		"subclassfeature5.1" : {
			name : "Extra Attack",
			description : desc(["I can attack twice instead of once when I take the attack action.",
								"If I use my action to cast a spell, I can attack once with my hidden blade as a bonus action."
			]),	
			minlevel : 5,		
			action : ["bonus action","hidden blade attack after casting a spell"],			
			source : [["GMB:LL", 0]]
		},

		"subclassfeature10" : {
			name : "Streamlined Integration",
			description : desc(["For each part of my body bearing an infusion, I gain +1 to Str/Dex/Con based checks (max 5).",
								"My movement speed also increases by 5 feet per infusion (max 25 feet). My hidden blade damage is now 2d10."
			]),
			minlevel : 10,
			source : [["GMB:LL", 0]]
		},

		"subclassfeature15" : {
			name : "Master Enhanced",
			description : desc(["I am now considered both a humanoid and construct.",
								"I don't need to sleep/drink/eat and I don't age.",
								"I benefit from a long rest if I spend 4 hours mechanically maintaining my body.",
								"I resist piercing, slashing and bludgeoning damage."
			]),
			minlevel : 15,
			source : [["GMB:LL", 0]],
			dmgres : ["Slashing", "Piercing", "Bludgeoning"]
		},
	}
});