var iFileName = "LaserLlama - Barbarian.js";
// Tested on sheet version 13.1.7 and 13.1.0, encountered problems on sheet version 13.1.0
// Script updated to the LaserLlama GMBinder file https://www.gmbinder.com/share/-N2gn3QXALCVqwAFJe5v (Alternate Barbarian) as of August 6th, 2024
RequiredSheetVersion("13.1.7");
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
			description : levels.map(function(n) {
				if (n < 2) {
					var descr = ["For 1 minute:",
								 "Add 1d4 to melee/thrown weapon attacks that use Str.",
								 "Adv. on Con/Str checks/saves ; resistance to bludgeoning/piercing/slashing.",
								 "I cannot cast or concentrate on spells",
								 "Stops if I end turn without attacking, taking damage, making a Str check, dashing as close as possible towards an enemy or go unconscious."
								 ];
				} else if (n > 1 && n < 11 ){
					var descr = ["For 1 minute:",
								 "Add exploit die to melee/thrown weapon attacks that use Str.",
								 "Adv. on Con/Str checks/saves ; resistance to bludgeoning/piercing/slashing.",
								 "I cannot cast or concentrate on spells",
								 "Stops if I end turn without attacking, taking damage, making a Str check, dashing as close as possible towards an enemy or go unconscious."];
				} else if (n > 10 && n < 15 ){
					var descr = ["For 1 minute:",
								 "Add exploit die to melee/thrown weapon attacks that use Str.",
								 "Adv. on Con/Str checks/saves ; resistance to bludgeoning/piercing/slashing.",
								 "I cannot cast or concentrate on spells",
								 "Stops if I go unconscious."];
				} else {
					var descr = ["For 1 hour:",
								 "Add exploit die to melee/thrown weapon attacks that use Str.",
								 "Adv. on Con/Str checks/saves ; resistance to bludgeoning/piercing/slashing.",
								 "I cannot cast or concentrate on spells",
								 "Stops if I go unconscious."];
				}
				return desc(descr);
			  }),
			usages : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, "unlimited"],
			recovery : "short rest",
			action : ["bonus action", ""],
			dmgres : [["Bludgeoning", "Bludgeon. (in rage)"], ["Piercing", "Piercing (in rage)"], ["Slashing", "Slashing (in rage)"]],
		},
		
		"unarmored defense" : {
			name : "Unarmored Defense",
			source : [["SRD", 8], ["P", 48]],
			minlevel : 1,
			description : desc(["Without armor, my AC is 10 + Dexterity modifier + Constitution modifier + shield (if any)"]),
			armorOptions : [{
				regExpSearch : /justToAddToDropDown/,
				name : "Unarmored Defense",
				source : [["SRD", 8], ["P", 48]],
				ac : "10+Con",
				affectsWildShape : true
				}],
			armorAdd : "Unarmored Defense (Con)"
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

			//1st-degree exploits
			"Bonebreaker Critical (Strength 11)",
			"Brace Up (Constitution 11)",
			"Commanding Presence (Strength 11 or Charisma 11)", 
			"Crushing Grip (Strength 11)",
			"Cunning Instinct (Wisdom 11)",
			"Destructive Strike (Strength 11)",
			"Feat of Strength (Strength 11 or Constitution 11)",
			"Heroic Fortitude",
			"Hurl (Strength 11)",
			"Mighty Leap (Strength 11)",
			"Mighty Thrust (Strength 11)",
			"Rustic Intuition (Wisdom 11)",
			"Ruthless Strike (Strenght 11)",
			"Savage Rebuke",
			"Take Down (Strength 11)",
			"Trampling Rush (Strength 11)",

			//2nd-degree exploits (level 5+)
			"Aggressive Sprint",
			"Arresting Critical (Strength 13)",
			"Bloodthirsty Critical (Strength 13)",
			"Concussive Blow (Strength 13)",
			"Greater Hurl (Strength 13)",
			"Honor Duel",
			"Immovable Stance (Strength 13 or Constitution 13)",
			"Menacing Shout (Constitution 13 or Charisma 13)",
			"Shattering Slam (Strength 13)",
			"Thunderous Blow (Strength 13)",

			//3rd-degree exploits (level 9+)
			"Confounding Critical (Strength 15)",
			"Destructive Slam (Strength 15)",
			"Primal Terror",
			"Mythic Resilience (Constitution 15)",
			"Roar of Triumph",
			"Savage Defiance",
			"War Cry",

			//4th-degree exploits (level 13+)
			"Devastating Critical (Strength 17)",
			"Staggering Blow (Strength 17)",
			"Strength of the Colossus (Strength 17)",
			"Unbreakable (Constitution 17)",

			//5th-degree exploits (level 17+)
			"Cataclysmic Slam (Strength 19)",
			"Vorpal Critical (Strength 19)"
			],
			extraTimes : levels.map(function (n) {
					return n < 2 ? 0 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : n < 11 ? 5 : n < 13 ? 6 : n < 17 ? 7 : 8;
			}),
			
			//1st-degree exploits
			"bonebreaker critical (strength 11)" : {
				name : "Bonebreaker Critical",
				description : desc(["When I crit a target I can expend an Exploit Die to cripple it.",
									"The target deals half damage with strenght-based attacks for 1 minute.",
									"The target can make a Con save at the end of each of its turns, ending the effect on a succes."]),
									submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},
			
			"brace up (constitution 11)" : {
				name : "Brace Up",
				description : desc(["As a bonus action, I can expend an Exploit Die to gain temp hp equal to 1 + the roll."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Con') >= 11;}
			},

			"commanding presence (strength 11 or charisma 11)" : {
				name : "Commanding Presence",
				description : desc(["When I make an Intimidation or Persuasion check, I can expend an Exploit Die and add it to the result before knowing if it succeeds.",
									"Whenever I make an Intimidation check, I can use my Strenght instead of Charisma"]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11 || What('Cha') >= 11;}
			},

			"crushing grip (strength 11)" : {
				name : "Crushing Grip",
				description : desc(["If I expend an Exploit Die on a succesfull grapple:", 
									"The grappled creature takes bludgeoning damage at the start of each of their turns equal to the roll."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"cunning instinct (wisdom 11)" : {
				name : "Cunning Instinct",
				description : desc(["When I make a Perception or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Wis') >= 11;}
			},

			"destructive strike (strength 11)" : {
				name : "Destructive Strike",
				description : desc(["If I expend an Exploit Die when attacking a nonmagical object, the attack and Exploit Die deal maximum damage."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},
			
			"feat of strength (strength 11 or constitution 11)" : {
				name : "Feat of Strength",
				description : desc(["When I make a Str or Con related check/save, I can expend Exploit Dice up to my prof. bonus and add it to the result before knowing if it succeeds."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11 || What('Con') >= 11;}
			},

			"heroic fortitude" : {
				name : "Heroic Fortitude",
				description : desc(["When I make a Str/Dex/Con save, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]]
			},

			"hurl (strength 11)" : {
				name : "Hurl",
				description : levels.map(function(n) {
					if (n < 11) {
						var descr = ["In place of an attack I can expend an Exploit Die to throw an object I am holding at a target I can see within 60 feet.",
									 "The target takes bludgeoning damage equal the roll and my Str modifier if it fails a Dex save."];
					} else {
						var descr = ["In place of an attack I can expend an Exploit Die to throw an object I am holding at a target I can see within 120 feet.",
									 "The target takes bludgeoning damage equal the roll and my Str modifier if it fails a Dex save."];
					}
					return desc(descr);
				}),				
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"mighty leap (strength 11)" : {
				name : "Mighty Leap",
				description : desc(["When I make a running/standing jump, I can expend Exploit Dice up to my prof. bonus and additionally jump 10 feet per dice spent.",
									"This jump can exceed my remaining speed."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"mighty thrust (strength 11)" : {
				name : "Mighty Thrust",
				description : desc(["In place of an attack I can expend an Exploit Die to for a creature within range to make a Str save.",
									"On a failed save the creatures is pushed away an amount of feet equal to 5 times my Str modifier.",
									"Creatures at least 2 sizes larger than me have advantage on the save."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"rustic intuition (wisdom 11)" : {
				name : "Rustic Intuition",
				description : desc(["When I make an Animal Handling, Nature or Medicine check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Wis') >= 11;}
			},

			"ruthless strike (strenght 11)" : {
				name : "Ruthless Strike",
				description : desc(["When I hit a creature with a melee weapon attack, I can expend Exploit Dice up to my prof. bonus and add the roll to the damage."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"savage rebuke" : {
				name : "Savage Rebuke",
				description : desc(["When a creature I can see hits me with a melee attack I can expend an Exploit Die to make 1 melee weapon attack back at them.",
									"On a hit, I add the Exploit Die to the damage."]),
				submenu : "[1st-degree exploits]",
				source : ["GMB:LL", 0],
				action : ["reaction", ""],
			},

			"take down (strength 11)" : {
				name : "Take Down",
				description : desc(["As a bonus action I can expend an Exploit Die to make a Shove or Grapple attack against a creature I can touch and add the roll to my Athletics check."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],				
				action : ["bonus action", ""],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"trampling rush (strength 11)" : {
				name : "Trampling Rush",
				description : desc(["If I move at least 20 feet toward a creature and hit it with a melee weapon attack I can expend an Exploit Die and force them to make a strenght saving throw.",
									"On a fail, the creature takes additional damage equal to the Exploit Die roll and is knocked prone."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],			
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			//2nd-degree exploits
			"aggressive sprint" : {
				name : "Aggressive Sprint",
				description : desc(["As a bonus action, I can expend an Exploit Die to move up to my walking speed towards a hostile creature and make one melee weapon attack."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				action : ["bonus action", ""],
			},

			"arresting critical (strength 13)" : {
				name : "Arresting Critical",
				description : desc(["When I crit with a weapon attack I can expend an Exploit Die to reduce a target's movement speed to 0 for 1 minute.",
									"The target can make a Con save at the start of each of its turn, ending the effect on a success."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"bloodthirsty critical (strength 13)" : {
				name : "Bloodthirsty Critical",
				description : desc(["When I crit with a weapon attack I can expend an Exploit Die to make an additional weapon attack.",
									"If the additional attack hits I can add the Exploit Die to the damage.",
									"I cannot use this exploit on a crit achieved by this exploit."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"concussive blow (strength 13)" : {
				name : "Concussive Blow",
				description : desc(["When I hit a creature with a melee attack, I can expend an Exploit Die to force it to make a Con save.",
									"On a failed save the target's speed becomes 0, can only speak falteringly, attack rolls against it have advantage and it has disadvantage on attacks, ability checks and Dex saves.",
									"These effects last until the beginning of my next turn."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"greater hurl (strength 13)" : {
				name : "Greater Hurl",
				description : desc(["As an action force a creature smaller than me within range to make a Str save.",
									"On a failed save the target is thrown towards a point I can see within 30 feet.",
									"If they land in an unoccupied space they fall prone.",
									"If they hit another creature, that creature must make a Dex save or take bludgeoning damage equal to the Exploit Die roll + my Str mod.",
									"Counting as 1 size larger for carrying or grappling also applies to this exploit."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				action : ["action",""],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"honor duel" : {
				name : "Honor Duel",
				description : desc(["As a bonus action I can shout at a foe within 30 feet that can see or hear me and force them to make a saving throw.",
									"On a failed save, the creature has disadvantage on all attacks made against anyone but me for 1 minute.",
									"The creature can attempt the save again at the end of each of its turns. The effect also ends early if I attack somebody else."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				action : ["bonus action",""],
			},

			"immovable stance (strength 13 or constitution 13)" : {
				name : "Immovable Stance",
				description : desc(["As a bonus action I can expend an Exploit Die to plant my feet.",
									"Until I move, a creature trying to grapple/move me or move through my space has to succeed on a Str save to do so."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				action : ["bonus action",""],
				prereqeval : function(v) { return What('Str') >= 13 || What('Con' >= 13);}
			},

			"menacing shout (constitution 13 or charisma 13)" : {
				name : "Menacing Shout",
				description : desc(["As a bonus action I can expend an Exploit Die to force a creature within 30 feet that can see or hear me to make a wisdom save.",
									"On a fail, the creature is frightened of me until the end of my next turn and must use its action to move as far from me as possible without harming itself."]),
				submenu : "[2nd-degree exploits (level 5+)]",									
				action : ["bonus action", ""],
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Con') >= 13 || What('Cha' >= 13);}
			},

			"shattering slam (strength 13)" : {
				name : "Shattering Slam",
				description : desc(["In place of an attack I can expend an Exploit Die to force creatures within 5 feet of me to make a Dex save.",
									"On a failed save, the creature takes bludgeoning damage equal to the Exploit Die roll and my Str mod and fall prone.",
									"On a successful save the creature takes half damage without falling prone.",
									"The area I strike becomes difficult terrain if it's stone or loose earth, and stays this way until someone uses their action to clear it."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"thunderous blow (strength 13)" : {
				name : "Thunderous Blow",
				description : desc(["When I hit a creature with a melee weapon attack I can expend an Exploit Die to force them to make a Str save.",
									"On a failed save the target takes bludgeoning damage equal to the attack + Exploit Die roll and is pushed away [5 x Str mod] feet.",
									"Creatures larger than me have advantage on the save."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			//3rd-degree exploits (level 9+)
			"confounding critical (strength 15)" : {
				name : "Confounding Critical",
				description : desc(["When I crit with a weapon attack I can expend an Exploit Die to strike the head, muddling the target.",
									"For 1 minute it must roll a d6 and subtract the result from any attack roll, ability or concentration check.",
									"At the start of the creature's turns they can make an Int save, ending the effect on a success."]),
				submenu : "[3nd-degree exploits (level 9+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 15;}
			},

			"destructive slam (strength 15)" : {
				name : "Destructive Slam",
				description : desc(["In place of an attack I can expend Exploit Dice up to my prof. bonus to strike the ground at my feet.",
									"Each creature within an adjacent 20ft cube must make a Dex save. On a failed save, the creature takes bludgeoning damage equal to twice my Exploit Dice roll + my Str mod and fall prone.",
									"Objects in the area take the max amount of damage. The area remains difficult terrain until a creature spends 1 minute to clear it."]),
				submenu : "[3nd-degree exploits (level 9+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 15;}
			},

			"primal terror" : {
				name : "Primal Terror",
				description : desc(["As an action I force a creature within 5 feet of me to make a Wis save.",
									"On a failed save it regards everyone as enemies for 1 minute. The creature repeats the saving throw whenever it takes damage.",
									"The target attacks a random creature within range, and uses its opportunity attack whenever possible."]),
				submenu : "[3nd-degree exploits (level 9+)]",
				source : ["GMB:LL", 0],
				action : ["action",""],
			},

			"mythic resilience (constitution 15)" : {
				name: "Mythic Resilience",
				description : desc(["When I take damage and can see the source I can expend Exploit dice up to my prof. bonus to reduce the damage taken.",
									"For the reduction I roll Exploit Dice equal to three times the dice spent.",
									"If I rolled higher than the damage I took, I gain temp hp equal to the difference in values."]),
				submenu : "[3nd-degree exploits (level 9+)]",
				source : ["GMB:LL", 0],
				action : ["reaction",""],
				prereqeval : function(v) { return What('Con') >= 15;}
			},	

			"roar of triumph" : {
				name : "Roar of Triumph",
				description : desc(["When I crit I can expend an Exploit Die to let out a cry that can be heard up to 300 feet away.",
									"I and a number of creatures that heard me (up to my Con mod, minimum 1) gain temp hp equal to my level + Con mod."]),
				submenu : "[3nd-degree exploits (level 9+)]",
				source : ["GMB:LL", 0]
			},
			
			"savage defiance" : {
				name : "Savage Defiance",
				description : desc(["As an action I can expend an Exploit Die to challenge each creature of my choice within 60 feet of me that can hear me.",
									"For 1 minute each of these creatures have disadvantage on any attack they make that isn't against until me they hit me."]),
				submenu : "[3nd-degree exploits (level 9+)]",
				source : ["GMB:LL", 0],
				action : ["action",""]
			},

			"war cry" : {
				name : "War Cry",
				description : desc(["As an action I can expend an Exploit Die to force hostile creatures of my choice within a 30ft cone of me to make a Wis save.",
									"On a failed save the creatures drop what they are holding and become frightened of me for 1 minute.",
									"Affected creatures can attempt the save again at the end of their turn when they don't have line of sight on me, ending the effect on a succes."]),
				submenu : "[3nd-degree exploits (level 9+)]",
				source : ["GMB:LL", 0],
				action : ["action",""]
			},

			//4th-degree exploits (level 13+)
			"devastating critical (strength 17)" : {
				name : "Devastating Critical",
				description : desc(["When I crit, I can expend an Exploit Die to make a creature lose their concentration on their spells and effects.",
									"For the next minute the creature has disadvantage on Int/Cha/Wis saves and Con saves for concentration.",
									"The creature can make an Int save at the start of each of its turns, ending the effect on a success."]),
				submenu : "[4th-degree exploits (level 13+)]",
				source : ["GMB:LL", 0],				
				prereqeval : function(v) { return What('Str') >= 17;}
			},

			"staggering blow (strength 17)" : {
				name : "Staggering Blow",
				description : desc(["When I hit a creature with a melee weapon attack I can expend an Exploit Die to make it take damage equal to 3 rolls of it.",
									"The creature must succeed on a Wis save or has disadvantages on all attack rolls and ability checks and cannot take reactions.",
									"The creature can make a Wis save at the start of each of its turns, ending the effect on a success."]),
				submenu : "[4th-degree exploits (level 13+)]",
				source : ["GMB:LL", 0],				
				prereqeval : function(v) { return What('Str') >= 17;}
			},

			"strength of the colossus (strength 17)" : {
				name : "Strength of the Colossus",
				description : desc(["As a bonus action I can expend Exploit Dice up to my prof. bonus to change my drag/pull/push/lift potential for 10 minutes.",
									"The potential is equals: (number of spent Exploit Dice x 50) x Strength score",
									"This potential is then doubled for every size I am larger than medium.",
									"Maintaining this effect is as if I were concentrating on a spell.",
									"Once the effect ends I must succeed on a DC 17 Con save or suffer exhaustion levels equal to the number of Exploit Dice spent."]),
				submenu : "[4th-degree exploits (level 13+)]",
				source : ["GMB:LL", 0],				
				action : ["bonus action",""],
				prereqeval : function(v) { return What('Str') >= 17;}
			},

			"unbreakable (constitution 17)" : {
				name : "Unbreakable",
				description : desc(["If I take damage that would reduce me to 0 hit points, even if it would kill me, I can expend Exploit Dice up to my prof. bonus to remain at 1hp.",
									"I also roll 3x the amount of Exploit Dice spent and gain that much temp hp."
				]),
				submenu : "[4th-degree exploits (level 13+)]",
				source : ["GMB:LL", 0],				
				prereqeval : function(v) { return What('Con') >= 17;}
			},

			//5th-degree exploits (level 17+)
			"cataclysmic slam (strength 19)" : {
				name : "Cataclysmic Slam",
				description : desc(["As an action I can expend Exploit Dice up to my prof. bonus to strike the ground at my feet.",
									"Each creature within 30 feet of me must make a Con save. On a failed save the creature takes bludgeoning damage equal to 2x my Exploit Dice roll + my Str mod and is knocked prone.",
									"Creatures succeeding the roll take half damage and don't fall prone. Objects in the area take the maximum amount of damage.",
									"The area becomes difficult terrain, a creature can use their action to clear a 5-foot square of this."]),
				submenu : "[5th-degree exploits (level 13+)]",
				source : ["GMB:LL", 0],
				action : ["action", ""],				
				prereqeval : function(v) { return What('Str') >= 19;}
			},

			"vorpal critical (strength 19)" : {
				name : "Vorpal Critical",
				description : desc(["When I crit with a melee weapon I can expend an Exploit Die to attempt to behead the target.",
									"My attack deals additional damage equal to 3 rolls of the Exploit Die.",
									"If the creature remains at 50hp or less after this attack, they lose one of their heads.",
									"Legendary Resistance can prevent the beheading, but not the additional damage.",
									"Creatures that don't require a head or are immune to this effect don't die to this but still take the additional damage."]),
				submenu : "[5th-degree exploits (level 13+)]",
				source : ["GMB:LL", 0],				
				prereqeval : function(v) { return What('Str') >= 19;}
			}
		},

		"subclassfeature3" : {
            name : "Primal Path",
            source : ["GMB:LL", 0],
            minlevel : 3,
            description : desc([
                "Choose a path that best represents my ferocity and skills and put it in the \"Class\" field.",
			    "Choose either Berserker, Champion, Totem Warrior or an alternate version of an official path."
            ])
        },

		"reckless attack" : {
			name : "Reckless Attack",
			source : ["GMB:LL", 0],
			minlevel : 5,
			description : desc([
                "I can choose to have advantage on attacks that use Strength this turn.",
			    "When doing so, creatures have advantage on attack rolls against me until the start of my next turn."
            ])
		},

		"feral instincts" : {
			name : "Feral Instincts",
			source : ["GMB:LL", 0],
			minlevel : 7,
			description : desc([
                "My Rage now only ends early if I choose so or go unconcious.",
			    "I have advantage on Dex saves against effects I can see so long as I'm not blinded/deafened or incapacitated."
            ])
		},

		"improved critical" : {
			name : "Improved Critical",
			source : ["GMB:LL", 0],
			minlevel : 9,
			description : levels.map(function(n) {
				if (n < 13) {
					var descr = ["My attacks crit on rolling a 19 or higher."];
				} else if (n > 12 && n < 17){
					var descr = ["My attacks crit on rolling an 18 or higher."];
				} else {
					var descr = ["My attacks crit on rolling a 17 or higher."];
				}
				return desc(descr);
			  }),
			},

		"critical strike" : {
			name : "Critical Strike",
			source : ["GMB:LL", 0],
			minlevel : 11,
			description : desc(["When I crit with a weapon attack, I can use an Exploit I know as part of that attack without spending an Exploit Dice."]),
		},
		
		"relentless rage" : {
			name : "Relentless Rage",
			source : ["GMB:LL", 0],
			minlevel : 11,
			description : desc(["If I drop to 0hp, but not killed outright, I can end my rage to remain at 1hp.",
								"I add my Con mod to Int/Wis/Cha saves while raging."
			]),
		},

		"persistent rage" : {
			name : "Persistent Rage",
			source : ["GMB:LL", 0],
			minlevel : 15,
			description : desc(["My rage now lasts 1 hour."]),
		},
		
		"indomitable might" : {
			name : "Indomitable Might",
			source : ["GMB:LL", 0],
			minlevel : 18,
			description : desc(["If I make a Str/Con check and my roll is lower than my Str score, use my Str score instead."]),
		},	

		"primal champion" : {
			name : "Primal Champion",
			source : ["GMB:LL", 0],
			minlevel : 20,
			description : desc(["My current and maximum Str/Con scores increase by 4."]),
		},	
	}
}

AddSubClass("barbarian(laserllama)", "berserker", { 
	regExpSearch : /berserker/i,
	subname : "Path of the Berserker",
	source : ["GMB:LL", 0],
	features : {

		"subclassfeature3" : {
			name : "Savage Exploit: Cunning Instinct",
			toNotesPage : [{
				name : "Cunning Instinct",
				note : ["When I make a Perception or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Savage Rebuke",
			toNotesPage : [{
				name : "Savage Rebuke",
				note : ["When a creature I can see hits me with a melee attack I can expend an Exploit Die to make 1 melee weapon attack back at them.",
									"On a hit, I add the Exploit Die to the damage."],				
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			action : ["reaction", ""],				
			source : [["GMB:LL", 0]]
		},
		
		"subclassfeature3.2" : {
			name : "Frenzy",
			description : desc(["Additionally, while raging:",
								"The first time I hit with a weapon attack on my turn I deal bonus damage equal to two rolls of the Exploit Die.",
								"My walking speed increases by 10 feet."]),		
			minlevel : 3,					
			source : [["GMB:LL", 0]]
		},
	
		"subclassfeature5" : {
			name : "Savage Exploit: Bloodthirsty Critical",
			toNotesPage : [{
				name : "Bloodthirsty Critical",
				note : ["When I crit with a weapon attack I can expend an Exploit Die to make an additional weapon attack.",
						"If the additional attack hits I can add the Exploit Die to the damage.",
						"I cannot use this exploit on a crit achieved by this exploit."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Menacing Shout",
			toNotesPage : [{
				name : "Menacing Shout",
				note : ["As a bonus action I can expend an Exploit Die to force a creature within 30 feet that can see or hear me to make a wisdom save.",
						"On a fail, the creature is frightened of me until the end of my next turn and must use its action to move as far from me as possible without harming itself."],	
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,		
			action : ["bonus action",""],			
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Mindless Rage",
			description : desc(["I cannot be charmed/frightened while raging.",
								"If I Rage while charmed/frightened, the effect is suspended for the duration.",
								"While raging, I can ignore the first five exhaustion levels."]),
			minlevel : 6,
			source : [["GMB:LL", 0]]
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Roar of Triumph",
			toNotesPage : [{
				name : "Roar of Triumph",
				note : ["When I crit I can expend an Exploit Die to let out a cry that can be heard up to 300 feet away.",
						"I and a number of creatures that heard me (up to my Con mod, minimum 1) gain temp hp equal to my level + Con mod."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature10" : {
			name : "Intimidating Presence",
			description : desc(["I can use Menacing shout without using an Exploit Die equal to my con mod per long rest.",
								"Creatures I've hit during the turn where I use Menacing Shout have disadvantage on the saving throw."]),
			minlevel : 10,
			source : [["GMB:LL", 0]],
			recovery : "long rest",
			usages: "Con mod per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
		},

		"subclassfeature14" : {
			name : "Unrivaled Fury",
			description : desc(["I can use the Savage Rebuke Exploit without expending an Exploit Die."]),
			minlevel : 14,
			source : [["GMB:LL", 0]],
			action : ["reaction", ""]
		}
	}
});

AddSubClass("barbarian(laserllama)", "brute", { 
	regExpSearch : /brute/i,
	subname : "Path of the Brute",
	source : ["GMB:LL", 0],
	features : {

		"subclassfeature3" : {
			name : "Savage Exploit: Commanding Presence",
			toNotesPage : [{
				name : "Commanding Presence",
				note : ["When I make an Intimidation or Persuasion check, I can expend an Exploit Die and add it to the result before knowing if it succeeds.",
						"Whenever I make an Intimidation check, I can use my Strenght instead of Charisma"],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Crushing Grip",
			toNotesPage : [{
				name : "Crushing Grip",
				note : ["If I expend an Exploit Die on a succesfull grapple:", 
						"The grappled creature takes bludgeoning damage at the start of each of their turns equal to the roll."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},
		
		"subclassfeature3.2" : {
			name : "The Wrong Crowd",
			description : desc(["When spending the night in a settlement I have advantage on ability checks that gather information on the settlement, its culture, factions and any important/infamous/influential figures."]),		
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},

		"subclassfeature3.3" : {
			name : "Unarmed & Dangerous",
			description : desc(["My Unarmed Strikes damage equal to my Exploit Die.",
								"While raging, if I only hit a creature with Unarmed Strikes or shoves/grapples, I can grapple/shove or make 1 Unarmed Strike as a bonus action"]),		
			minlevel : 3,
			source : [["GMB:LL", 0]],
			weaponsAdd : ["Unarmed Strike"],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.baseWeaponName == "unarmed strike") {
							var aBruteDie = function (n) {return  (n < 5 ? 4 : n < 11 ? 6 : n <17 ? 8 : 10);}(classes.known["barbarian(laserllama)"].level)
							try {
								var curDie = eval_ish(fields.Damage_Die.replace('d', '*'));
							} catch (e) {
								var curDie = 'x';
							};
							if (isNaN(curDie) || curDie < aBruteDie) {
								fields.Damage_Die = '1d' + aBruteDie;
							};
						};
					}
				]
			},
			action : ["bonus action",""],
		},
	
		"subclassfeature5" : {
			name : "Savage Exploit: Concussive Blow",
			toNotesPage : [{
				name : "Concussive Blow",
				note : ["When I hit a creature with a melee attack, I can expend an Exploit Die to force it to make a Con save.",
						"On a failed save the target's speed becomes 0, can only speak falteringly, attack rolls against it have advantage and it has disadvantage on attacks, ability checks and Dex saves.",
						"These effects last until the beginning of my next turn."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Greater Hurl",
			toNotesPage : [{
				name : "Greater Hurl",
				note : ["As an action force a creature smaller than me within range to make a Str save.",
						"On a failed save the target is thrown towards a point I can see within 30 feet.",
						"If they land in an unoccupied space they fall prone.",
						"If they hit another creature, that creature must make a Dex save or take bludgeoning damage equal to the Exploit Die roll + my Str mod.",
						"Counting as 1 size larger for carrying or grappling also applies to this exploit."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			action : ["action",""],
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Fists of Fury",
			description : desc(["When I hit a creature I can use concussive blow without expending an Exploit Die an amount of times equal to my Con mod."],
			"While raging, my weapons count as magical for the purpose of overcoming resistances and immunities to nonmagical damage."),
			minlevel : 6,
			usages : "Con mod per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest",
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && !v.thisWeapon[1] && !v.theWea.isMagicWeapon && !(/counts as( a)? magical/i).test(fields.Description) && (v.baseWeaponName === "unarmed strike")) {
							fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical while Raging.';
						};
					},
				]
			},
			source : [["GMB:LL", 0]]
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Confounding Critical",
			toNotesPage : [{
				name : "Confounding Critical",
				note : ["When I crit with a weapon attack I can expend an Exploit Die to strike the head, muddling the target.",
						"For 1 minute it must roll a d6 and subtract the result from any attack roll, ability or concentration check.",
						"At the start of the creature's turns they can make an Int save, ending the effect on a success."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature10" : {
			name : "Iron Grip",
			description : desc(["While raging I can grapple creatures up to two sizes larger than me.", 
								"I can move at normal speed while dragging grappled creatures.",
								"My climbing speed equals my walking speed."]),
			minlevel : 10,
			source : [["GMB:LL", 0]],
			speed : { climb : { spd : "walk", enc : "walk" } }
		},

		"subclassfeature14" : {
			name : "Brutish Determination",
			description : desc(["I can add 1d4 to Str/Dex/Con and death saves.",
								"Rolling a 20 or higher on my death saves lets me stand up instantly with 1hp."]),
			minlevel : 14,
			source : [["GMB:LL", 0]],
		}
	}
});

AddSubClass("barbarian(laserllama)", "champion", { 
	regExpSearch : /champion/i,
	subname : "Path of the Champion",
	source : ["GMB:LL", 0],
	features : {

		"subclassfeature3" : {
			name : "Savage Exploit: Feat of Strenght",
			toNotesPage : [{
				name : "Feat of Strenght",
				note : ["When I make a Str or Con related check/save, I can expend Exploit Dice up to my prof. bonus and add it to the result before knowing if it succeeds."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Mighty Leap",
			toNotesPage : [{
				name : "Mighty Leap",
				note : ["When I make a running/standing jump, I can expend Exploit Dice up to my prof. bonus and additionally jump 10 feet per dice spent.",
						"This jump can exceed my remaining speed."],			
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,			
			source : [["GMB:LL", 0]]
		},
		
		"subclassfeature3.2" : {
			name : "Fighting Style",
			description : desc('Choose a Fighting Style for the fighter using the "Choose Feature" button above'),
			choices : ["Great Weapon Fighting", "Thrown Weapon Fighting", "Dual Wielding", "Improvised Fighting", "Strongbow", "Versatile Fighting"],
			"great weapon fighting" : {
				name : "Great Weapon Fighting",
				description : desc(["While taking the attack action with a two-handed heavy weapon I treat the weapon's  total damage rolls lower than 6 as a 6."]),
				source : [["GMB:LL", 0]]
			},
			"thrown weapon fighting" : FightingStyles.thrown_weapon,
			"dual wielding" : {
				name : "Dual Wielding",
				description : desc(["When taking the attack action while two-weapon fighting, I can make an additional attack as part of the action instead of a bonus action.",
									"My ability modifiers are added to this attack's hit and damage roll."]),
				source : [["GMB:LL", 0]]
			},
			"improvised fighting" :{
				name : "Improvised Fighting",
				description : desc(["I become proficient in improvised weapons.",
									"When I hit with an improvised weapon I can roll the damage dice twice and take the higher roll. Doing so breaks the weapon if it isn't magical."]),
				weaponProfs : [false, false, ["Improvised Weapons"]],
				weaponsAdd : ["Improvised Weapons"],
				source : [["GMB:LL", 0]]
			},
			"strongbow" : {
				name : "Strongbow",
				description : desc(["I can choose to use my Str instead of Dex for Longbow/Shortbow hit and damage rolls."]),
				source : [["GMB:LL", 0]]
			},	
			"versatile fighting" : {
				name : "Versatile fighting",
				description : desc(["While wielding a single versatile weapon and no shield I gain +1 to attack rolls with this weapon.",
									"When doing this I can use my bonus action to shove/grapple or take the Use an Object action."
				]),
				source : [["GMB:LL", 0]]
			},	
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},

		"subclassfeature3.3" : {
			name : "Martial Training",
			description : desc(["I gain an additional Exploit Die.",
			"While Raging, every time I use an exploit my Exploit Die it increase by one size (d6, d8, etc.), to a max of d12.",
			"The Exploit Die size resets when my Rage ends."]),	
			minlevel : 3,
			source : [["GMB:LL", 0]],
			extraLimitedFeatures : [{
				name : "Savage Exploits",
				usages : 1,
				recovery : "short rest",
				addToExisting : true
			}]
		},
	
		"subclassfeature5" : {
			name : "Savage Exploit: Thunderous Blow",
			toNotesPage : [{
				name : "Thunderous Blow",
				note : ["When I hit a creature with a melee weapon attack I can expend an Exploit Die to force them to make a Str save.",
						"On a failed save the target takes bludgeoning damage equal to the attack + Exploit Die roll and is pushed away [5 x Str mod] feet.",
						"Creatures larger than me have advantage on the save."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Honor Duel",
			toNotesPage : [{
				name : "Honor Duel",
				note : ["As a bonus action I can shout at a foe within 30 feet that can see or hear me and force them to make a saving throw.",
						"On a failed save, the creature has disadvantage on all attacks made against anyone but me for 1 minute.",
						"The creature can attempt the save again at the end of each of its turns. The effect also ends early if I attack somebody else."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			action : ["bonus action",""],
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Mighty Blow",
			description : desc(["When I hit a creature with a Strenght-based weapon attack I can end my rage to turn the hit into a crit."]),
			minlevel : 6,
			usages : 1,
			recovery : "short rest",
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6.1" : {
			name : "Peak Athlete",
			description : desc(["My climbing and swimming speed is the same as my walking speed.",
								"While raging I benefit from the dash action."]),
			minlevel : 6,
			source : [["GMB:LL", 0]],
			speed : { climb : { spd : "walk", enc : "walk" }, swim : { spd : "walk", enc : "walk" }}
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Mythic Resilience",
			toNotesPage : [{
				name : "Mythic Resilience",
				note : ["When I take damage and can see the source I can expend Exploit dice up to my prof. bonus to reduce the damage taken.",
					"For the reduction I roll Exploit Dice equal to three times the dice spent.",
					"If I rolled higher than the damage I took, I gain temp hp equal to the difference in values."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			action : ["reaction",""],
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature10" : {
			name : "Invigorating Critical",
			description : desc(["When I crit with a Strength-based weapon attack, I regain hp equal to my Con mod + an Exploit Die roll (minimum of 1hp)."]),
			minlevel : 10,
			source : [["GMB:LL", 0]]
		},

		"subclassfeature14" : {
			name : "Survivor",
			description : desc(["At the beginning of each of my turns I gain temp hp equal to my Con mod (minimum of 1)."]),
			minlevel : 14,
			source : [["GMB:LL", 0]],
		}
	}
});

AddSubClass("barbarian(laserllama)", "totem warrior", { 
	regExpSearch : /^(?=.*totem)(?=.*warrior).*$/i,
	subname : "Path of the Totem Warrior",
	source : ["GMB:LL", 0],
	features : {

		"subclassfeature3" : {
			name : "Spirit Guide",
			source : [["GMB:LL", 0]],
			minlevel : 3,
			description : desc(["I can cast Beast Sense and Speak with Animals as rituals (PHB 217 \u0026 277)"]),
			spellcastingBonus : {
				name : "Spirit Guide",
				spells : ["beast sense", "speak with animals"],
				selection : ["beast sense", "speak with animals"],
				firstCol : "(R)",
				times : 2
			},
			spellChanges : {
				"beast sense" : {
					time : "10 min",
					changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
				},
				"speak with animals" : {
					time : "10 min",
					changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
				}
			}
		},
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Mighty Leap",
			toNotesPage : [{
				name : "Mighty Leap",
				note : ["When I make a running/standing jump, I can expend an Exploit Die and additionally jump [5 x roll] feet (minimum of 5)",
				"This jump can exceed my remaining speed."],			
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,		
			source : [["GMB:LL", 0]]
		},
		
		"subclassfeature3.2" : {
			name : "Savage Exploit: Rustic Intuition",
			toNotesPage : [{
				name : "Rustic Intuition",
				note : ["When I make an Animal Handling, Nature or Medicine check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],			
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,		
			source : [["GMB:LL", 0]]
		},

		"subclassfeature3.3" : {
			name : "Totemic Spirit",
			source : [["GMB:LL", 0]],
			minlevel : 3,
			description : desc(['Choose Bear, Eagle, Elk, Wolf, or Tiger Spirit using the "Choose Feature" button above']),
			choices : ["Bear", "Eagle", "Elk", "Tiger", "Wolf"],
			"bear" : {
				name : "Bear Spirit",
				description : "\n   " + "While raging, I have resistance to all damage types except psychic and force.",
				dmgres : [["All -Psychic/Force", "All -Psychic/Force (rage)"]],
				eval : function() {
					processResistance(false, 'Barbarian: Rage', ClassList.barbarian.features.rage.dmgres);
				},
				removeeval : function() {
					processResistance(true, 'Barbarian: Rage', ClassList.barbarian.features.rage.dmgres);
				}
			},
			"eagle" : {
				name : "Eagle Spirit",
				description : desc(["I can use the Dash/Disengage action as a bonus action while raging, including the turn where I started raging."]),
				action : ["bonus action", "(Dash or Disengage)"]
			},
			"elk" : {
				name : "Elk Spirit",
				description : desc(["While raging my walking speed increases by 15 feet."])
			},
			"tiger" : {
				name : "Tiger Spirit",
				description : desc(["Once per turn while raging, I can use Mighty Leap at its lowest level without expending an Exploit Die."])
			},
			"wolf" : {
				name : "Wolf Spirit",
				description : desc(["While raging, allies of my choice have advantage on melee attack rolls vs. hostiles within 10 ft of me."])
			}
		},
	
		"subclassfeature5" : {
			name : "Savage Exploit: Arresting Critical",
			toNotesPage : [{
				name : "Arresting Critical",
				note : ["When I crit with a weapon attack I can expend an Exploit Die to reduce a target's movement speed to 0 for 1 minute.",
						"The target can make a Con save at the start of each of its turn, ending the effect on a success."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Greater Hurl",
			toNotesPage : [{
				name : "Greater Hurl",
				note : ["As an action force a creature smaller than me within range to make a Str save.",
						"On a failed save the target is thrown towards a point I can see within 30 feet.",
						"If they land in an unoccupied space they fall prone.",
						"If they hit another creature, that creature must make a Dex save or take bludgeoning damage equal to the Exploit Die roll + my Str mod.",
						"Counting as 1 size larger for carrying or grappling also applies to this exploit."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			action : ["action",""],
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Totemic Aspect",
			source : [["GMB:LL", 0]],
			minlevel : 6,
			description : "\n   " + 'Choose Elephant, Owl, Panther Aspect using the "Choose Feature" button above',
			choices : ["Elephant", "Owl", "Panther"],
			"Elephant" : {
				name : "Aspect of the Elephant",
				description : desc(["When making an Athletics or Insight check I add my Con mod to the roll."])
			},
			"eagle" : {
				name : "Aspect of the Owl",
				description : desc(["When making an Investigation or Perception check I add my Con mod to the roll."])
			},
			"wolf" : {
				name : "Aspect of the Panther",
				description : desc(["When making an Stealth or Survival check I add my Con mod to the roll."])
			}
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Savage Defiance",
			toNotesPage : [{
				name : "Savage Defiance",
				note : ["As an action I can expend an Exploit Die to challenge each creature of my choice within 60 feet of me that can hear me.",
						"For 1 minute each of these creatures have disadvantage on any attack they make that isn't against until me they hit me."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			action : ["action",""],
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature10" : {
			name : "Spirit Walker",
			source : [["GMB:LL", 0]],
			minlevel : 10,
			description : desc(["I can cast Commune with Nature as a ritual",
								"Once per Long rest while doing this, I can replace a totem spirit with another one of the same level."]),
			spellcastingBonus : {
				name : "Spirit Walker",
				spells : ["commune with nature"],
				selection : ["commune with nature"],
				firstCol : "(R)"
			},
			spellChanges : {
				"commune with nature" : {
					time : "11 min",
					changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
				}
			}
		},

		"subclassfeature14" : {
			name : "Totemic Attunement",
			source : [["GMB:LL", 0]],
			minlevel : 14,
			description : desc(['Choose Lion, Falcon, Rhino Attunement using the "Choose Feature" button']),
			choices : ["Lion", "Falcon", "Rhino"],
			"bear" : {
				name : "Lion Attunement",
				description : desc(["While raging, any hostile creature within 5 feet of me has disadv. on attacks vs. others."])
			},
			"eagle" : {
				name : "Falcon Attunement",
				description : desc(["While raging, I gain flying speed equal to my walking speed."])
			},
			"wolf" : {
				name : "Rhino Attunement",
				description : desc(["While raging, if I hit a creature up to 1 size larger than me with a Strength-based weapon attack they must make a Str save or be knocked prone."]),
			}
		}
	}
});

AddSubClass("barbarian(laserllama)", "Blood & Iron", { 
	regExpSearch : /blood & iron/i,
	subname : "Path of Blood & Iron",
	source : ["GMB:LL", 0],
	features : {

		"subclassfeature3" : {
			name : "Savage Exploit: Crushing Grip",
			toNotesPage : [{
				name : "Crushing Grip",
				note : ["If I expend an Exploit Die on a succesfull grapple:", 
						"The grappled creature takes bludgeoning damage at the start of each of their turns equal to the roll."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Mighty Leap",
			toNotesPage : [{
				name : "Mighty Leap",
				note : ["When I make a running/standing jump, I can expend an Exploit Die and additionally jump [5 x roll] feet (minimum of 5)",
						"This jump can exceed my remaining speed."],			
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,		
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3.2" : {
			name : "Savage Smith",
			source : [["GMB:LL", 0]],
			minlevel : 3,
			description : desc(["I gain proficiency in Heavy Armor and Smith's Tools.",
								"I can Rage in Heavy Armor."]),
			toolProfs : [["Smith's Tools"]],
			armorProfs : [false, false, true, false]
		},

		"subclassfeature3.3" : {
			name : "Spiked Armor",
			source : [["GMB:LL", 0]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with spiked armor both as an armor and as a weapon.",
				"As a bonus action while raging, I can attack once with my armor spikes.",
				"With my spiked armor I do piercing damage equal to my Exploit Die when I grapple."
			]),
			action : ["bonus action", "Armor Spikes attack (in rage)"],
			weaponOptions : {
				regExpSearch : /^(?=.*armou?r)(?=.*spike).*$/i,
				name : "Armor spikes",
				source : [["GMB:LL", 0]],
				ability : 1,
				type : "armor spikes",
				damage : [1, "", "piercing"],
				range : "Melee",
				abilitytodamage : true
			},
			weaponProfs : [false, false, ["armor spikes"]],
			weaponsAdd : ['Armor Spikes'],			
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.type == "armor spikes") {
							var aRagerDie = function (n) {return  (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10);}(classes.known["barbarian(laserllama)"].level)
							try {
								var curDie = eval_ish(fields.Damage_Die.replace('d', '*'));
							} catch (e) {
								var curDie = 'x';
							};
							if (isNaN(curDie) || curDie < aRagerDie) {
								fields.Damage_Die = '1d' + aRagerDie;
								fields.Description += (fields.Description ? '; ' : '') + 'When initiating a grapple.';
							};
						};
					}
				]
			},
			eval : function() {
				AddString('Proficiency Armor Other Description', 'Spiked Armor', ', ');
			},
			removeeval : function () {
				RemoveString('Proficiency Armor Other Description', 'Spiked Armor');
			}
		},
	
		"subclassfeature5" : {
			name : "Savage Exploit: Bloodthirsty Critical",
			toNotesPage : [{
				name : "Bloodthirsty Critical",
				note : ["When I crit with a weapon attack I can expend an Exploit Die to make an additional weapon attack.",
						"If the additional attack hits I can add the Exploit Die to the damage.",
						"I cannot use this exploit on a crit achieved by this exploit."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]			
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Aggressive Sprint",
			toNotesPage : [{
				name : "Aggressive Sprint",
				note : ["As a bonus action, I can expend an Exploit Die to move up to my walking speed towards a hostile creature and make one melee weapon attack."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			action : ["bonus action",""],
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Reckless Abandon",
			description : desc(["On the first attack of my turn while raging I also gain temp hp equal to my Con mod.", 
								"I lose this temp hp when my rage ends. I can turn magical armor into spiked armor."]),
			minlevel : 6,
			source : [["GMB:LL", 0]],
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Savage Defiance",
			toNotesPage : [{
				name : "Savage Defiance",
				note : ["As an action I can expend an Exploit Die to challenge each creature of my choice within 60 feet of me that can hear me.",
						"For 1 minute each of these creatures have disadvantage on any attack they make that isn't against until me they hit me."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			source : [["GMB:LL", 0]],	
			action : ["action",""],
		},

		"subclassfeature10" : {
			name : "Wild Charge",
			source : [["GMB:LL", 0]],
			minlevel : 10,
			description : desc(["While raging I can use Aggressive sprint without using an Exploit Die. The included attack must be with my spiked armor."]),
		},

		"subclassfeature14" : {
			name : "Spiked Retribution",
			description : desc(["While Raging and wearing Spiked Armor:", 
								"when I'm hit with a melee attack the attacker takes piercing damage equal to my Str mod.",
								"I can use my reaction while conscious to replace the damage with my spiked armor attack damage."]),
			minlevel : 14,
			source : [["GMB:LL", 0]],
			action : ["reaction",""]
		}
	}
});

AddSubClass("barbarian(laserllama)", "conduit", { 
	regExpSearch : /^(?=.*conduit).*$/i,
	subname : "Path of the Conduit",
	source : ["GMB:LL", 0],
	features : {

		"subclassfeature3" : {
			name : "Savage Exploit: Heroic Fortitude",
			toNotesPage : [{
				name : "Heroic Fortitude",
				note : ["When I make a Str/Dex/Con save, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Rustic Intuition",
			toNotesPage : [{
				name : "Rustic Intuition",
				note : ["When I make an Animal Handling, Nature or Medicine check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],			
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,		
			source : [["GMB:LL", 0]]
		},
		
		"subclassfeature3.2" : {
			name : "Conduit of Spirits",
			description : desc(["As a bonus action I can enter a state for 10 minutes that lets me add my Con mod(Min. 1) to Int/Wis ability checks.",
								"I leave this state early by raging, going unconscious or ending it with my bonus action."]),
			minlevel : 3,
			source : [["GMB:LL", 0]],
			action : ["bonus action",""]
		},

		"subclassfeature3.3" : {
			name : "Spectral Warriors",
			description : desc(["Once per turn, while raging, when I hit a creature with a melee attack I can impose disadvantage to it on attacks against everyone but me.",
								"If the creature attacks somebody else, their target has resistance to the damage dealt."
			]),
			minlevel : 3,
			source : [["GMB:LL", 0]],
		},
	
		"subclassfeature5" : {
			name : "Savage Exploit: Arresting Critical",
			toNotesPage : [{
				name : "Arresting Critical",
				note : ["When I crit with a weapon attack I can expend an Exploit Die to reduce a target's movement speed to 0 for 1 minute.",
						"The target can make a Con save at the start of each of its turn, ending the effect on a success."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Thunderous Blow",
			toNotesPage : [{
				name : "Thunderous Blow",
				note : ["When I hit a creature with a melee weapon attack I can expend an Exploit Die to force them to make a Str save.",
						"On a failed save the target takes bludgeoning damage equal to the attack + Exploit Die roll and is pushed away [5 x Str mod] feet.",
						"Creatures larger than me have advantage on the save."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature6" : {
			name : "Spiritual Ward",
			source : [["GMB:LL", 0]],
			minlevel : 6,
			description : desc([
				"As a reaction while raging when an ally I see within 30 ft is damaged, I can reduce it.",
				"My guardian spirits reduce the damage by an amount equal to the 3 rolls of an Exploit Die.",
				"If my Spectral Warriors feature is currently active, it deactivates when using this feature."
			]),
			action : ["reaction", ""]
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Mythic Resilience",
			toNotesPage : [{
				name : "Mythic Resilience",
				note : ["When I take damage and can see the source I can expend Exploit dice up to my prof. bonus to reduce the damage taken.",
					"For the reduction I roll Exploit Dice equal to three times the dice spent.",
					"If I rolled higher than the damage I took, I gain temp hp equal to the difference in values."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			action : ["reaction",""],
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature10" : {
			name : "Greater Conduit",
			source : [["GMB:LL", 0]],
			minlevel : 10,
			description : desc([
				"While using my Conduit of Spirits feature:",
				"I can cast either Clairvoyance or Commune, without a spell slot or material components.",
				"Commune consults my bonded spirits for information, Clairvoyance summons an invisible spirit I am communed with.",
				"After casting either of these spells, my Conduit of Spirits state ends."
			]),
			spellcastingAbility : 5,
			spellcastingBonus : [{
				name : "Greater Conduit",
				spells : ["commune"],
				selection : ["commune"],
				firstCol : 'oncesr'
			}, {
				name : "Greater Conduit",
				spells : ["clairvoyance"],
				selection : ["clairvoyance"],
				firstCol : 'oncesr'
			}],
			spellChanges : {
				"commune" : {
					components : "V,S",
					compMaterial : "",
					description : "Ask my divine proxy three yes/no questions which it answers honestly.",
					changes : "My casting of Commune is a practice of consulting my bonded spirits, thus requiring no material components."
				},
				"clairvoyance" : {
					components : "V,S",
					compMaterial : "",
					changes : "My casting of Clairvoyance is a practice of consulting a spirit I am communed with, thus requiring no material components."
				}
			}
		},
		"subclassfeature14" : {
			name : "Vengeful Spirits",
			description : desc(["When using Spiritual Ward, the attacker takes the reduced amount as force damage"]),
			minlevel : 14,
			source : [["GMB:LL", 0]],
		}
	}
});

AddSubClass("barbarian(laserllama)", "lycan", {
	regExpSearch : /lycan/i,
	subname : "Path of the Lycan",
	source : [["GMB:LL", 0]],
	features : {

		"subclassfeature3" : {
			name : "Savage Exploit: Mighty Leap",
			toNotesPage : [{
				name : "Mighty Leap",
				note : ["When I make a running/standing jump, I can expend an Exploit Die and additionally jump [5 x roll] feet (minimum of 5)",
						"This jump can exceed my remaining speed."],			
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,		
			source : [["GMB:LL", 0]]
		},
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Cunning Instinct",
			toNotesPage : [{
				name : "Cunning Instinct",
				note : ["When I make a Perception or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},

		"subclassfeature3" : {
			name : "Animal Form",
			description : desc(["I choose an animal of CR 1 or lower that my form is based on.",
								"As an action, I can expend a use of my rage to transform into this creature, similar to the Druid wildshape feature, for up to 1 hour.",
								"I can use my Barbarian features as if I'm raging and Savage Exploits while in this form.",
								"I can expend another use of my rage as a bonus action to extend the duration by 1 hour, or end the transformation as an action"]),
			action : ["action",""],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},
		"subclassfeature3.1" : {
			name : "Bestial Rage",
			source : [["T", 24]],
			minlevel : 3,
			description : desc([
				"When I enter my rage, I can transform to gain a bite, tail, or claws attack for that rage.",
				"On a hit with the bite attack once on each of my turns, I gain temp hp equal to my Con mod.",
				"With the claws I can make one extra attack if I only make claw attacks with my attack action.",
				"As a reaction with the tail when I'm hit by someone within 10 feet of me, I can add my Exploit Die to my AC for that attack",
				"This only works if the hit is from an attack roll made a creature I can see within 30 ft"
			]),
			weaponOptions : [{
				regExpSearch : /^(?=.*(bestial|beast))(?=.*bite).*$/i,
				name : "Bestial Bite",
				source : [["GMB:LL", 0]],
				ability : 1,
				type : "Natural",
				damage : [1, 8, "piercing"],
				range : "Melee",
				description : "Once per turn on a hit, gain temp hp equal to my Con mod.",
				abilitytodamage : true,
				bestialNaturalWeapon : true
			}, {
				regExpSearch : /^(?=.*(bestial|beast))(?=.*claws?).*$/i,
				name : "Bestial Claws",
				source : [["GMB:LL", 0]],
				ability : 1,
				type : "Natural",
				damage : [1, 6, "slashing"],
				range : "Melee",
				description : "Extra attack if I've only used claw attacks in my attack action.",
				abilitytodamage : true,
				bestialNaturalWeapon : true
			}, {
				regExpSearch : /^(?=.*(bestial|beast))(?=.*tail).*$/i,
				name : "Bestial Tail",
				source : [["GMB:LL", 0]],
				ability : 1,
				type : "Natural",
				damage : [1, 8, "piercing"],
				range : "Melee",
				description : "Reach.",
				abilitytodamage : true,
				bestialNaturalWeapon : true
			}],
			weaponsAdd : ["Bestial Bite", "Bestial Claws", "Bestial Tail"],
			additional : levels.map(function(n) {
				return n < 6 ? "" : "chosen weapon counts as magical";
			}),
			action : [["reaction", "Bestial Tail"]]
		},

		"subclassfeature5" : {
			name : "Savage Exploit: Aggressive Sprint",
			toNotesPage : [{
				name : "Aggressive Sprint",
				note : ["As a bonus action, I can expend an Exploit Die to move up to my walking speed towards a hostile creature and make one melee weapon attack."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			action : ["bonus action",""],
			source : [["GMB:LL", 0]]
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Bloodthirsty Critical",
			toNotesPage : [{
				name : "Bloodthirsty Critical",
				note : ["When I crit with a weapon attack I can expend an Exploit Die to make an additional weapon attack.",
						"If the additional attack hits I can add the Exploit Die to the damage.",
						"I cannot use this exploit on a crit achieved by this exploit."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]			
		},

		"subclassfeature6" : {
			name : "Savage Prowess",
			description : desc([
				"I gain climbing speed equal to my walking speed.",
				"I can use Mighty Leap and Cunning instinct at will, as if I spent 1 Exploit Die.",]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.bestialNaturalWeapon && !v.thisWeapon[1] && !v.theWea.isMagicWeapon && !(/counts as( a)? magical/i).test(fields.Description)) {
							fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
						};
					},
					"The natural melee weapon that I gain from Form of the Beast count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
				]
			},
			minlevel : 6,
			source : [["GMB:LL", 0]],
			speed : { climb : { spd : "walk", enc : "walk" } }
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Roar of Triumph",
			toNotesPage : [{
				name : "Roar of Triumph",
				note : ["When I crit I can expend an Exploit Die to let out a cry that can be heard up to 300 feet away.",
						"I and a number of creatures that heard me (up to my Con mod, minimum 1) gain temp hp equal to my level + Con mod."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			source : [["GMB:LL", 0]]	
			},
		
		"subclassfeature10" : {
			name : "Infectious Fury",
			source : [["GMB:LL", 0]],
			minlevel : 10,
			description : desc([
				"In rage, when I hit a creature with my natural weapon, it must make a Wis save.",
				"If it fails it suffers one effect of my choice:",
				"It uses its reaction to make a melee attack against one creature I can see of my choice -or-",
				"It takes 2d12 psychic damage.",
				"If I'm out of uses of this feature, I can expend an Exploit Die to use it."]),
			usages : "Con mod per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest"

		},
		
		"subclassfeature14" : {
			name : "Primal Roar",
			source : [["GMB:LL", 0]],
			minlevel : 14,
			description : desc(["I can use Roar of Triumph as long as I have Exploit Dice.",
								"Creatures that have temp hp from Roar of Triumph have advantage on their first melee weapon attack during their turn"]),
		}
	}
});
AddSubClass("barbarian(laserllama)", "Storm", { 
	regExpSearch : /^(?=.*storm).*$/i,
	subname : "Path of the Storm",
	source : ["GMB:LL", 0],
	features : {

		"subclassfeature3" : {
			name : "Savage Exploit: Destructive Strike",
			toNotesPage : [{
				name : "Destructive Strike",
				note : ["In place of an attack I can expend Exploit Dice up to my prof. bonus to strike the ground at my feet.",
						"Each creature within an adjacent 20ft cube must make a Dex save. On a failed save, the creature takes bludgeoning damage equal to twice my Exploit Dice roll + my Str mod and fall prone.",
						"Objects in the area take the max amount of damage. The area remains difficult terrain until a creature spends 1 minute to clear it."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Hurl",
			toNotesPage : [{
				name : "Hurl",
				note : levels.map(function(n) {
					if (n < 11) {
						var descr = ["In place of an attack I can expend an Exploit Die to throw an object I am holding at a target I can see within 60 feet.",
									 "The target takes bludgeoning damage equal the roll and my Str modifier if it fails a Dex save."];
					} else {
						var descr = ["In place of an attack I can expend an Exploit Die to throw an object I am holding at a target I can see within 120 feet.",
									 "The target takes bludgeoning damage equal the roll and my Str modifier if it fails a Dex save."];
					}
					return desc(descr);
				}),
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3" : {
			name : "Storm Aura",
			source : [["GMB:LL", 0]],
			minlevel : 3,
			description : desc([
				"While raging, I emanate a 10-ft radius aura.",
				'Use the "Choose Feature" button above to select the type of aura']),
			choices : ["drought", "blizzard", "hurricane"],
			"drought" : {
				name : "Storm Aura: Drought",
				description : desc(["Any creature of my choice that starts it's turn has their movement halved."])
			},
			"blizzard" : {
				name : "Storm Aura: Blizzard",
				description : desc(["At the end of my turns, creatures of my choice take damage equal to my Con mod."])
			},
			"hurricane" : {
				name : "Storm Aura: Hurricane",
				description : desc([
					"At the end of my turns I can force 1 creature to make a Dex save.",
					"On a fail, it takes damage equal to two rolls of my Exploit Die, or half as much if they saved."
				])
			},
			choiceDependencies : [{
				feature : "subclassfeature6"
			}, {
				feature : "subclassfeature10"
			}, {
				feature : "subclassfeature14"
			}]
		},
	
		"subclassfeature5" : {
			name : "Savage Exploit: Shattering Slam",
			toNotesPage : [{
				name : "Shattering Slam",
				note : ["In place of an attack I can expend an Exploit Die to force creatures within 5 feet of me to make a Dex save.",
						"On a failed save, the creature takes bludgeoning damage equal to the Exploit Die roll and my Str mod and fall prone.",
						"On a successful save the creature takes half damage without falling prone.",
						"The area I strike becomes difficult terrain if it's stone or loose earth, and stays this way until someone uses their action to clear it."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Thunderous Blow",
			toNotesPage : [{
				name : "Thunderous Blow",
				note : ["When I hit a creature with a melee weapon attack I can expend an Exploit Die to force them to make a Str save.",
						"On a failed save the target takes bludgeoning damage equal to the attack + Exploit Die roll and is pushed away [5 x Str mod] feet.",
						"Creatures larger than me have advantage on the save."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature6" : {
			name : "Elemental Body",
			source : [["GMB:LL", 0]],
			minlevel : 6,
			description : desc(['Use the "Choose Feature" button above to select the effect']),
			choices : ["drought", "blizzard", "hurricane"],
			choicesNotInMenu : true,
			"drought" : {
				name : "Elemental Body: Drought",
				description : desc([
					"I have resistance to fire damage, and I can cast the produce flame cantrip using my Con mod for spellcasting.",
					"I can cast this cantrip even while raging."
				]),
				dmgres : ["Fire"],
				savetxt : { immune : ["effects of extreme heat"] },
				spellcastingAbility : 3,
				spellcastingBonus : {
					name : "Elemental Body: Drought",
					spells : ["produce flame"],
					selection : ["produce flame"],
				},
			},
			"blizzard" : {
				name : "Storm Soul: Blizzard",
				description : desc([
					"I have resistance to cold damage, and can make my Savage Exploits deal cold damage if I choose it to."
				]),
				dmgres : ["Cold"],
			},
			"hurricane" : {
				name : "Storm Soul: Hurricane",
				description : desc([
					"I can breathe underwater and I have swimming speed equal to my walking speed.",
					"In addition, I have resistance to lightning and thunder damage."
				]),
				dmgres : ["Lightning/Thunder"],
				speed : { swim : { spd : "walk", enc : "walk" } }
			},
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Destructive Slam",
			toNotesPage : [{
				name : "Destructive Slam",
				note : ["In place of an attack I can expend Exploit Dice up to my prof. bonus to strike the ground at my feet.",
						"Each creature within an adjacent 20ft cube must make a Dex save. On a failed save, the creature takes bludgeoning damage equal to twice my Exploit Dice roll + my Str mod and fall prone.",
						"Objects in the area take the max amount of damage. The area remains difficult terrain until a creature spends 1 minute to clear it."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature10" : {
			name : "Storm Ward",
			description : desc(["While raging, creatures of my choice inside my aura also gain the benefits from my Elemental Body feature."]),
			minlevel : 10,
			source : [["GMB:LL", 0]],
		},

		"subclassfeature14" : {
			name : "Raging Storm",
			source : [["GMB:LL", 0]],
			minlevel : 14,
			description : desc(['Use the "Choose Feature" button above to select the effect.']),
			choices : ["drought", "blizzard", "hurricane"],
			choicesNotInMenu : true,
			"drought" : {
				name : "Raging Storm: Drought",
				description : desc([
					"As a reaction when hit by a creature in my Storm Aura, I can have it make a Dex save.",
					"On a failed save, the attacker takes fire damage equal to two rolls of my Exploit Die."
				]),
				action : ["reaction", " (when hit)"],
			},
			"blizzard" : {
				name : "Raging Storm: Blizzard",
				description : desc([
					"When a creative starts its turn in my aura, I can use my reaction to have it make a Str save.",
					"On a failed save, the creature's speed is reduced to 0 until the start of its next turn."
				]),
				action : ["reaction", ""]
			},
			"hurricane" : {
				name : "Raging Storm: Hurricane",
				description : desc([
					"When a creature in my aura hits me with an attack, I can force it to make a Str save.",
					"On a failed save the creatures is knocked back 10 feet in a straight line and falls prone."
				]),
				action : ["reaction", " (when hit)"],
			}
		}
	}
});

AddSubClass("barbarian(laserllama)", "wild magic", {
	regExpSearch : /^(?=.*wild)(?=.*magic).*$/i,
	subname : "Path of Wild Magic",
	source : [["GMB:LL", 0]],
	features : {

		"subclassfeature3" : {
			name : "Savage Exploit: Mighty Leap",
			toNotesPage : [{
				name : "Mighty Leap",
				note : ["When I make a running/standing jump, I can expend Exploit Dice up to my prof. bonus and additionally jump 10 feet per dice spent.",
						"This jump can exceed my remaining speed."],			
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,			
			source : [["GMB:LL", 0]]
		},
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Heroic Fortitude",
			toNotesPage : [{
				name : "Heroic Fortitude",
				note : ["When I make a Str/Dex/Con save, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	

		"subclassfeature3.3" : {
			name : "Magic Awareness",
			source : [["GMB:LL", 0]],
			minlevel : 3,
			description : desc(["As an action, until my next turn I can detect magic items or spells within 60 feet of me that aren't behind total cover.",
								"If I detect a spell, I learn its school of magic.",
								"I can use this feature once per short rest. Each time thereafter I can use it by expending an Exploit Die."]),
			action : [["action", ""]]
		},

		"subclassfeature3" : {
			name : "Wild Sorcery",
			source : [["GMB:LL", 0]],
			minlevel : 3,
			description :  desc(["When I rage, I roll on this class' Wild Magic Table (D20). (see notes)",
								 "If the rolled effect requires a saving throw, it uses my Exploit Die DC."]),
			toNotesPage : [{
				name : "Wild Magic Table",
				source : [["GMB:LL", ]],
				note : ["1 - Creatures of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take necrotic damage equal to two rolls of your Exploit Die. You then gain temporary hit points equal to two rolls of your Exploit Die + your level",
						"2 - You teleport up to 30 feet to an unoccupied space you can see. Until the end of your current Rage, you can use this effect again on each of your turns as a bonus action.",
						"3 - An orb of wild magic explodes at a point that you can see within 30 feet. Creatures within 5 feet must succeed on a Dexterity saving throw or take force damage equal to your Exploit Die. Until the end of your current Rage, you can use a bonus action to cause this effect to happen again.",
						"4 - Magic infuses one weapon of your choice that you are holding. Until your current Rage, the weapon's damage type changes to force, and it gains the light and thrown properties, with a normal range of 20 feet and a long range of 60 feet. If the magic weapon leaves your hand, it appears in your hand at the end of your turn.",
						"5 - Whenever a creature hits you with an attack roll before the end of your current Rage, it takes force damage equal to your Exploit Die, as magic lashes out in retribution.",
						"6 - Until the end of your current Rage, you are surrounded by multicolored, protective lights; you, and allied creatures within 10 feet of you, all gain a +1 bonus to your Armor Class.",
						"7 - Flowers and vines temporarily grow around you; until the end of your current Rage, the ground within 15 feet of you is considered difficult terrain for creatures of your choice.",
						"8 - Roll another d20. On an even roll, your size grows by one category as if by the enlarge part of the enlarge/reduce spell. On an odd roll, your size is reduced by one category as if by the reduce part of the enlarge/reduce spell.",
						"9 - Youa can't speak for duration of your current Rage. Whenever you try, a small bird flies out of your mouth and flies toward the sun.",
						"10 - You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space.",
						"11 - For the duration of your current Rage, you gain resistance to the last instance of damage you took, until you take another instance of damage. For example, if you take fire damage from a red dragon's fire breath, you are resistant to fire damage until you take another type of damage.",
						"12 - For the duration of your current Rage, every hair on your body grows by one foot at the end of each of your turns. When your current Rage ends, all of your hair falls out.",
						"13 - A bolt of radiant light shoots from your chest. A creature of your choice that you can see within 30 feet must succeed on a Constitution saving throw or take radiant damage equal to your Exploit Die and be blinded until the start of your next turn. Until the end of your current Rage, you can use this effect again on each of your turns as a bonus action.",
						"14 - For the duration of your current Rage, you can walk through solid objects and creatures as if they were difficult terrain. If you end your movement inside a creature or object, you are instantly shunted to the nearest unoccupied space, taking 1d10 force damage for each 5 feet that you were forced to travel.",
						"15 - Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",
						"16 - For the duration of your current Rage, any flammable object you touch that isn't being worn or carried, instantly bursts into flame.",
						"17 - Your limbs grow strangely long. For the duration of your current Rage, the reach of your melee attacks increases by 5 feet.",
						"18 - Your muscles are engorged with wild magic. For the duration of your current Rage, all creatures have disadvantage on any saving throws to resist the effects of your Exploits.",
						"19 - For the duration of your current Rage, the distance of your long and high jumps is tripled, even if this extra distance would exceed your remaining movement.",
						"20 - You instantly regain all expended uses of your Rage."],
			}]
		},

		"subclassfeature5" : {
			name : "Savage Exploit: Thunderous Blow",
			toNotesPage : [{
				name : "Thunderous Blow",
				note : ["When I hit a creature with a melee weapon attack I can expend an Exploit Die to force them to make a Str save.",
						"On a failed save the target takes bludgeoning damage equal to the attack + Exploit Die roll and is pushed away [5 x Str mod] feet.",
						"Creatures larger than me have advantage on the save."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Immovable Stance",
			toNotesPage : [{
				name : "Immovable Stance",
				note : ["As a bonus action I can expend an Exploit Die to plant my feet.",
						"Until I move, a creature trying to grapple/move me or move through my space has to succeed on a Str save to do so."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			action : ["bonus action",""],
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Sorcerous Infusion",
			source : [["GMB:LL", 0]],
			minlevel : 6,
			description : desc([
				"As an action, I can touch a creature or myself and confer one of the following benefits:",
				"For 10 minutes, they can add an Exploit Die to ability checks and saving throws of a stat I choose.",
				"The target gains temp hp equal to my level + Exploit Die. While the target has temp hp this way, they are immune to Wild Sorcery effects.",
				"The target I touch regains a spell slot whose level equals my Exploit Die expended for this benefit.",
				"I can use this feature a number of times equal to my Con mod (minimum of 1)."
			]),
			usages: "Con mod per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery: "long rest",
			action : [["action", ""]]
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Savage Defiance",
			toNotesPage : [{
				name : "Savage Defiance",
				note : ["As an action I can expend an Exploit Die to challenge each creature of my choice within 60 feet of me that can hear me.",
						"For 1 minute each of these creatures have disadvantage on any attack they make that isn't against until me they hit me."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			source : [["GMB:LL", 0]],	
			action : ["action",""],
		},
		
		"subclassfeature10" : {
			name : "Unstable Sorcery",
			source : [["GMB:LL", 0]],
			minlevel : 10,
			description : desc([
				"As a reaction duringm my rage when taking damage or failing a save, I can lash out with magic",
				"I roll on the Wild Magic table and immediately apply the roll, replacing my current effect"
			]),
			action : [["reaction", " (in rage on damage/save fail)"]]
		},

		"subclassfeature14" : {
			name : "Sorcerous Warrior",
			source : [["GMB:LL", 0]],
			minlevel : 14,
			description : desc(["Whenever I roll on the Wild Magic table, I can roll two dice and choose which to use"])
		}
	}
});

AddSubClass("barbarian(laserllama)", "zealot", {
	regExpSearch : /zealot/i,
	subname : "Path of the Zealot",
	source : [["GMB:LL", 11]],
	features : {

		"subclassfeature3" : {
			name : "Savage Exploit: Feat of Strenght",
			toNotesPage : [{
				name : "Feat of Strenght",
				note : ["When I make a Str or Con related check/save, I can expend Exploit Dice up to my prof. bonus and add it to the result before knowing if it succeeds."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Savage Rebuke",
			toNotesPage : [{
				name : "Savage Rebuke",
				note : ["When a creature I can see hits me with a melee attack I can expend an Exploit Die to make 1 melee weapon attack back at them.",
						"On a hit, I add the Exploit Die to the damage."],				
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			action : ["reaction", ""],				
			source : [["GMB:LL", 0]]
		},

		"subclassfeature3.2" : {
			name : "Divine Fury",
			source : [["X", 11]],
			minlevel : 3,
			description : desc([
				"While raging, the first creature I hit with a weapon attack in my turn gets extra damage",
				'Select your alignment using the "Choose Feature" button above'
			]),
			choices : ["Evil", "Neutral" ,"Good"],
			"evil" : {
				name : "Divine Fury",
				description : desc([
					"While raging, the first creature I hit with a weapon attack in my turn gets extra damage.",
					"It takes my Exploit Die + Con mod worth of necrotic damage."
				]),
			},
			"neutral" : {
				name : "Divine Fury",
				description : desc([
					"While raging, the first creature I hit with a weapon attack in my turn gets extra damage.",
					"It takes my Exploit Die + Con mod worth of thunder damage."
				]),
			},
			"good" : {
				name : "Divine Fury",
				description : desc([
					"While raging, the first creature I hit with a weapon attack in my turn gets extra damage.",
					"It takes my Exploit Die + Con mod worth of radiant damage."
				]),
			}
		},

		"subclassfeature5" : {
			name : "Savage Exploit: Honor Duel",
			toNotesPage : [{
				name : "Honor Duel",
				note : ["As a bonus action I can shout at a foe within 30 feet that can see or hear me and force them to make a saving throw.",
						"On a failed save, the creature has disadvantage on all attacks made against anyone but me for 1 minute.",
						"The creature can attempt the save again at the end of each of its turns. The effect also ends early if I attack somebody else."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			action : ["bonus action",""],
			source : [["GMB:LL", 0]]
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Menacing Shout",
			toNotesPage : [{
				name : "Menacing Shout",
				note : ["As a bonus action I can expend an Exploit Die to force a creature within 30 feet that can see or hear me to make a wisdom save.",
						"On a fail, the creature is frightened of me until the end of my next turn and must use its action to move as far from me as possible without harming itself."],	
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,		
			action : ["bonus action",""],			
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature6" : {
			name : "Fanatical Focus",
			source : [["GMB:LL", 0]],
			minlevel : 6,
			description : desc([
				"When I fail a saving throw while raging, I can expend an Exploit Die to add the roll to the result."
			]),
			usages : 1,
			recovery : "rage"
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Mythic Resilience",
			toNotesPage : [{
				name : "Mythic Resilience",
				note : ["When I take damage and can see the source I can expend Exploit dice up to my prof. bonus to reduce the damage taken.",
						"For the reduction I roll Exploit Dice equal to three times the dice spent.",
						"If I rolled higher than the damage I took, I gain temp hp equal to the difference in values."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			action : ["reaction",""],
			source : [["GMB:LL", 0]]	
		},
		"subclassfeature10" : {
			name : "Divine Mandate",
			source : [["GMB:LL", 0]],
			minlevel : 10,
			description : desc([
				"As a bonus action, I choose up to 10 creatures within 60 ft that can hear my battle cry",
				"These creatures gain adv. on attacks and saves until the start of my next turn"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		},

		"subclassfeature14" : {
			name : "Rage Beyond Death",
			source : [["GMB:LL", 0]],
			minlevel : 14,
			description : desc([
				"While raging, having 0 hit points doesn't knock me unconscious.",
				"I still must make death saves, and I suffer the normal effects of taking damage.",
				"After 3 failed death saves, I must succeed on a DC 10 Con save every turn to maintain my rage.",
				"If I have 3 death saves, I die if I'm still at 0 hp when my rage ends."
			])
		}
	}
});
