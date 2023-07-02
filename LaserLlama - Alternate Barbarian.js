var iFileName = "LaserLlama - Barbarian.js";
RequiredSheetVersion("13.0.6");
ClassList["Barbarian(LaserLlama)"] = {

	name : "Barbarian(LaserLlama)",
	regExpSearch : /^(?=.*barbarian)(?=.*laserllama).*$/i,
	source : ["GMB:LL", 0],
	primaryAbility : "Strength",
	prereqs : "Strength 13",
	die : 12,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Str", "Con"],
	skills : ["\n\n" + toUni("MyClass") + ": Choose two from Animal Handling, Athletics, History, Intimidation, Nature, Perception, and Survival."], 	
	armor : [ 
		[true, true, false, true], 
		[true, true, false, true] 
	],
	weapons : [
		[true, true,], 
		[true, true,] 
	],

	equipment : "MyClass starting equipment:\n \u2022 greataxe -or- greatsword -or- maul;\n \u2022 two handaxes -or- any simple weapon;\n \u2022 hide armor, an explorer's pack, and four javelins;\n\nAlternatively, choose 2d4 x 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.", 
	subclasses : ["Primal Path", ["berserker", "brute", "champion", "totem warrior", "alternate ancestral guardian", "alternate battlerager", "alternate storm herald", "alternate zealot", "alternate beast", "alternate wild magic"]], 
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
				"add exploit die dmg (min. 1d4) to melee/thrown weapons that use Str.",
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
			description : desc(["I have advantage on initiative rolls.\n", 
								"If I am surprised when rolling initiative, I can act as normal if I Rage during my first turn."])
		},
		
		"savage exploits" : {
			name : "Savage Exploits",
			minlevel : 2,
			source : [["GMB:LL", 0]],
			abilitySave : 1,
			usages : [, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5],
			additional : [, "d4", "d4", "d4", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10"],
			recovery : "short rest",		
			extraname : "Exploits",
			extrachoices : [
			"Aggressive Sprint",
			"Bonebreaker Critical (Strength 11)",
			"Brace Up (Constitution 11)"
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
				prereq : "Strenght 11"
			},
			
			"brace up (constitution 11)" : {
				name : "Brace Up",
				description : desc(["As a bonus action, I can expend an Exploit Die to gain temp hp equal to 1 + the roll."]),
				source : [["GMB:LL", 0]],
				prereq : "Constitution 11"
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