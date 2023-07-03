var iFileName = "LaserLlama - Barbarian.js";
RequiredSheetVersion("13.0.6");
ClassList["barbarian(laserllama)"] = {

	name : "Barbarian(LaserLlama)",
	regExpSearch : /^(?=.*barbarian)(?=.*laserllama).*$/i,
	source : ["GMB:LL", 0],
	primaryAbility : "Strength",
	prereqs : "Strength 13",
	die : 12,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Str", "Con"],
	skillstxt : {
		primary : "Choose two from Animal Handling, Athletics, History, Intimidation, Nature, Perception, and Survival."
	},
	armorProfs : {
		primary : [true, true, false, true],
		secondary : [false, false, false, true]
	},
	weaponProfs : {
		primary : [true, true],
		secondary : [true, true]
	},
	equipment : "Barbarian starting equipment:" + 
				"\n \u2022 greataxe -or- greatsword -or- maul;" +
				"\n \u2022 two handaxes -or- any simple weapon;" +
				"\n \u2022 hide armor, an explorer's pack, and four javelins;" + 
				"\n\nAlternatively, choose 2d4 x 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.", 
	subclasses : ["Primal Path", []], 
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
	abilitySave : 1,
	abilitySaveAlt : 2,
	features : {

		"rage" : {
			name : "Rage",
			source : [["GMB:LL", 0]],
			minlevel : 1,
			description : desc([
				"For 1 minute:",
				"Add exploit die dmg (min. 1d4) to melee/thrown weapons that use Str.",
				"Adv. on Con/Str checks/saves ; resistance to bludgeoning/piercing/slashing.",
				"Stops if I end turn without attacking, taking damage, making a Str check, dashing as close as possible towards an enemy or go unconscious."
				]),
			usages : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, "unlimited"],
			recovery : "short rest",
			action : ["bonus action", ""],
			dmgres : [["Bludgeoning", "Bludgeon. (in rage)"], ["Piercing", "Piercing (in rage)"], ["Slashing", "Slashing (in rage)"]],
		},
		
		"unarmored defense" : {
			name : "Unarmored Defense",
			source : [["SRD", 8], ["P", 48]],
			minlevel : 1,
			description : desc(["Without armor, my AC is 10 + Dexterity modifier + Constitution modifier + shield"]),
			armorOptions : [{
				regExpSearch : /justToAddToDropDown/,
				name : "Unarmored Defense",
				source : [["SRD", 8], ["P", 48]],
				ac : "10+Con",
				affectsWildShape : true
				}],
			armorAdd : "Unarmored Defense"
		},
		
		"danger sense" : {
			name : "Danger Sense",
			source : [["GMB:LL", 0]],
			minlevel : 2,
			description : desc(["I have advantage on initiative rolls.", 
								"If I am surprised when rolling initiative, I can act as normal if I Rage during my first turn."])
		},
		
		"savage exploits" : {
			name : "Savage Exploits",
			minlevel : 2,
			source : [["GMB:LL", 0]],
			description : desc(["Use the \"Choose Feature\" button above to choose Savage Exploits."]),
			usages : ['', 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5],
			additional : ['', "d4", "d4", "d4", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10"],
			recovery : "short rest",		
			extraname : "Exploits",
			extrachoices : [
			"Aggressive Sprint",
			"Bonebreaker Critical (Strength 11)",
			"Brace Up (Constitution 11)",
			"Crushing Grip (Strength 11)",
			"Destructive Strike (Strength 11)",
			"Feat of Strength (Strength 11 or Constitution 11)",
			"Feral Senses (Wisdom 11)",
			"Heroic Fortitude",
			"Hurl (Strength 11)",
			"Imposing Presence (Strength 11 or Charisma 11)",
			"Menacing Shout",
			"Mighty Leap (Strength 11)",
			"Mighty Thrust (Strength 11)",
			"Primal Intuition (Wisdom 11)",
			"Ruthless Strike (Strenght 11)",
			"Take Down (Strenght 11)"
			],
			extraTimes : levels.map(function (n) {
					return n < 2 ? 0 : n < 4 ? 2 : n < 6 ? 3 : n < 8 ? 4 : n < 10 ? 5 : n < 13 ? 6 : n < 17 ? 7 : 8;
			}),
			
			"aggressive sprint" : {
				name : "Aggressive Sprint",
				description : desc(["As a bonus action, I can expend an Exploit Die to move up to my full speed towards a hostile creature I can see."]),
				source : [["GMB:LL", 0]]
			},
			
			"bonebreaker critical (strength 11)" : {
				name : "Bonebreaker Critical",
				description : desc(["When I crit a target I can expend an Exploit Die to cripple it.",
									"The target deals half damage for 1 minute.",
									"The target can make a Con save at the start of each turn, ending the effect on a succes."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},
			
			"brace up (constitution 11)" : {
				name : "Brace Up",
				description : desc(["As a bonus action, I can expend an Exploit Die to gain temp hp equal to 1 + the roll."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Con') >= 11;}
			},

			"crushing grip (strength 11)" : {
				name : "Crushing Grip",
				description : desc(["If I expend an Exploit Die on a succesfull grapple:", 
									"The grappled creature takes bludgeoning damage at the start of each of their turns equal to the roll."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"destructive strike (strength 11)" : {
				name : "Destructive Strike",
				description : desc(["If I expend an Exploit Die when attacking a nonmagical object, the attack deals maximum damage and I add the roll to the damage."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},
			
			"feat of strength (strength 11 or constitution 11)" : {
				name : "Feat of Strength",
				description : desc(["When I make a Str or Con related check/save, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11 || What('Con') >= 11;}
			},
			
			"feral senses (wisdom 11)" : {
				name : "Feral Senses",
				description : desc(["When I make a Perception or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Wis') >= 11;}
			},

			"heroic fortitude" : {
				name : "Heroic Fortitude",
				description : desc(["When I make a Str/Dex/Con save, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				source : [["GMB:LL", 0]]
			},

			"hurl (strength 11)" : {
				name : "Hurl",
				description : desc(["In place of an attack I can expend an Exploit Die to throw an object I am holding at a target I can see within 60 feet.",
									"The target takes bludgeoning damage equal the roll and my Str modifier if it fails a Dex save."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"imposing presence (strength 11 or charisma 11)" : {
				name : "Imposing Presence",
				description : desc(["When I make an Intimidation check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11 || What('Cha') >= 11;}
			},

			"menacing shout" : {
				name : "Menacing Shout",
				description : desc(["As a bonus action I can expend an Exploit Die and force a creature within 30 feet to make a wisdom save.",
									"On a failed save the creature is frightened for 1 minute. It can repeat the saving throw at the end of each of its turns.",
									"The effect ends early if the creature succeed any of these saves or takes any damage."]),									
				action : ["bonus action", ""],
				source : [["GMB:LL", 0]]
			},

			"mighty leap (strength 11)" : {
				name : "Mighty Leap",
				description : desc(["When I make a running/standing jump, I can expend an Exploit Die and additionally jump [5 x roll] feet (minimum of 5)",
									"This jump can exceed my remaining speed."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"mighty thrust (strength 11)" : {
				name : "Mighty Thrust",
				description : desc(["In place of an attack I can expend an Exploit Die to for a creature within range to make a Str save.",
									"On a failed save the creatures is pushed away an amount of feet equal to 5 times my Str modifier.",
									"Creatures at least 2 sizes larger than me have advantage on the save."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"primal intuition (wisdom 11)" : {
				name : "Primal Intuition",
				description : desc(["When I make an Animal Handling, Nature or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Wis') >= 11;}
			},

			"ruthless strike (strenght 11)" : {
				name : "Ruthless Strike",
				description : desc(["When I hit a creature with a melee weapon attack, I can expend an Exploit Die and add the roll to the damage."]),
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"take down (strength 11)" : {
				name : "Take Down",
				description : desc(["As a bonus action I can expend an Exploit die to make a Shove or Grapple attack against a creature in reach and add the roll to my Athletics check."]),
				source : [["GMB:LL", 0]],				
				action : ["bonus action", ""],
				prereqeval : function(v) { return What('Str') >= 11;}
			}
		},
		
		"subclassfeature3" : {
			name : "Primal Path",
			source : [["GMB:LL", 0]],
			minlevel : 3,
			description : desc(['Choose a Primal Path that shapes the nature of your rage and put it in the "Class" field '])
		}
	}
};