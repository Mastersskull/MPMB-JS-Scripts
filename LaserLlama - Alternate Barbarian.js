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
			"Take Down (Strength 11)",

			//2nd-degree exploits (level 5+)
			"Bloodthirsty Critical (Strength 13)",
			"Concussive Blow (Strength 13)",
			"Crippling Critical (Strength 13)",
			"Execute (Strength 13)",
			"Greater Hurl (Strength 13)",
			"Immovable Stance (Strength 13 or Constitution 13)",
			"Savage Rebuke",
			"Shattering Slam (Strength 13)",
			"Thunderous Blow (Strength 13)",
			"Trampling Rush (Strength 13)",
			"Warrior's Challenge",

			//3rd-degree exploits (level 9+)
			"Destructive Slam (Strength 15)",
			"Disorienting Blow (Strength 15)",
			"Resilient Body (Constitution 15)",
			"Roar of Triumph",
			"Savage Defiance",
			"War Cry",

			//4th-degree exploits (level 13+)
			"Devastating Critical (Strength 17)",
			"Staggering Blow (Strength 17)",
			"Strenght of the Colossus (Strength 17)",

			//5th-degree exploits (level 17+)
			"Cataclysmic Slam (Strength 19)",
			"Vorpal Critical (Strength 19 or Dexterity 19)"
			],
			extraTimes : levels.map(function (n) {
					return n < 2 ? 0 : n < 4 ? 2 : n < 6 ? 3 : n < 8 ? 4 : n < 10 ? 5 : n < 13 ? 6 : n < 17 ? 7 : 8;
			}),
			
			//1st-degree exploits
			"aggressive sprint" : {
				name : "Aggressive Sprint",
				description : desc(["As a bonus action, I can expend an Exploit Die to move up to my full speed towards a hostile creature I can see."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]]
			},
			
			"bonebreaker critical (strength 11)" : {
				name : "Bonebreaker Critical",
				description : desc(["When I crit a target I can expend an Exploit Die to cripple it.",
									"The target deals half damage for 1 minute.",
									"The target can make a Con save at the start of each turn, ending the effect on a succes."]),
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

			"crushing grip (strength 11)" : {
				name : "Crushing Grip",
				description : desc(["If I expend an Exploit Die on a succesfull grapple:", 
									"The grappled creature takes bludgeoning damage at the start of each of their turns equal to the roll."]),
									submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"destructive strike (strength 11)" : {
				name : "Destructive Strike",
				description : desc(["If I expend an Exploit Die when attacking a nonmagical object, the attack deals maximum damage and I add the roll to the damage."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},
			
			"feat of strength (strength 11 or constitution 11)" : {
				name : "Feat of Strength",
				description : desc(["When I make a Str or Con related check/save, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11 || What('Con') >= 11;}
			},
			
			"feral senses (wisdom 11)" : {
				name : "Feral Senses",
				description : desc(["When I make a Perception or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Wis') >= 11;}
			},

			"heroic fortitude" : {
				name : "Heroic Fortitude",
				description : desc(["When I make a Str/Dex/Con save, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]]
			},

			"hurl (strength 11)" : {
				name : "Hurl",
				description : desc(["In place of an attack I can expend an Exploit Die to throw an object I am holding at a target I can see within 60 feet.",
									"The target takes bludgeoning damage equal the roll and my Str modifier if it fails a Dex save."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"imposing presence (strength 11 or charisma 11)" : {
				name : "Imposing Presence",
				description : desc(["When I make an Intimidation check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11 || What('Cha') >= 11;}
			},

			"menacing shout" : {
				name : "Menacing Shout",
				description : desc(["As a bonus action I can expend an Exploit Die and force a creature within 30 feet to make a wisdom save. On a failed save the creature is frightened for 1 minute. It can repeat the saving throw at the end of each of its turns. The effect ends early if the creature succeed any of these saves or takes any damage."]),
				submenu : "[1st-degree exploits]",									
				action : ["bonus action", ""],
				source : [["GMB:LL", 0]]
			},

			"mighty leap (strength 11)" : {
				name : "Mighty Leap",
				description : desc(["When I make a running/standing jump, I can expend an Exploit Die and additionally jump [5 x roll] feet (minimum of 5)",
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

			"primal intuition (wisdom 11)" : {
				name : "Primal Intuition",
				description : desc(["When I make an Animal Handling, Nature or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Wis') >= 11;}
			},

			"ruthless strike (strenght 11)" : {
				name : "Ruthless Strike",
				description : desc(["When I hit a creature with a melee weapon attack, I can expend an Exploit Die and add the roll to the damage."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			"take down (strength 11)" : {
				name : "Take Down",
				description : desc(["As a bonus action I can expend an Exploit die to make a Shove or Grapple attack against a creature in reach and add the roll to my Athletics check."]),
				submenu : "[1st-degree exploits]",
				source : [["GMB:LL", 0]],				
				action : ["bonus action", ""],
				prereqeval : function(v) { return What('Str') >= 11;}
			},

			//2nd-degree exploits
			"bloodthirsty critical (strength 13)" : {
				name : "Bloodthirsty Critical",
				description : desc(["When I crit I can expend an Exploit Die to make an additional weapon attack.",
									"I cannot use this exploit on a crit achieved by this exploit."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"concussive blow (strength 13)" : {
				name : "Concussive Blow",
				description : desc(["When I hit a creature with a melee attack, I can expend an Exploit Die to force it to make a Con save.",
									"On a failed save the target's speed becomes 0, can only speak falteringly, cannot take (bonus) actions/reactions and has disadvantage on Dex saves.",
									"These effects last until the beginning of my next turn."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"crippling critical (strength 13)" : {
				name : "Crippling Critical",
				description : desc(["When I crit, I can reduce a target's movement speed to 0 for 1 minute.",
									"The target can make a Con save at the start of each of its turn, ending the effect on a success."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"execute (strength 13)" : {
				name : "Execute",
				description : desc(["Instead of an attack I can expend an Exploit Die to make a melee attack against a prone or incapacitated creature within 5 feet of me.",
									"If the attack roll + Exploit Die roll exceeds the target's remaining HP, their HP is reduced to 0."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"greater hurl (strength 13)" : {
				name : "Greater Hurl",
				description : desc(["As an action force a creature smaller than me within range to make a Str save.",
									"On a failed save the target is thrown towards a point I can see within 30 feet.",
									"If they land in an unoccupied space that can't support their weight they take fall damage and fall prone.",
									"If they hit another creature, that creature must make a Dex save or take bludgeoning damage equal to the Exploit Die roll + my Str mod.",
									"Counting as 1 size larger for carrying or grappling works for this exploit."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				action : ["action",""],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"immovable stance (strength 13 or constitution 13)" : {
				name : "Immovable Stance",
				description : desc(["As a bonus action I can expend an Exploit Die to plant my feet.",
									"Until I move, a creature trying to move me or move through my space has to succeed on a Str save to do so."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				action : ["bonus action",""],
				prereqeval : function(v) { return What('Str') >= 13 || What('Con' >= 13);}
			},

			"savage rebuke" : {
				name : "Savage Rebuke",
				description : desc(["When a creature hits me with a melee attack I can expend an Exploit Die to make 1 melee weapon attack back."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0]
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
									"On a failed save the target takes bludgeoning damage equal to the Exploit Die roll and is pushed away [5 x Str mod] feet.",
									"Creatures larger than me has advantage on the save."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"trampling rush (strength 13)" : {
				name : "Trampling Rush",
				description : desc(["When I move at least 20 feet towards a creature and hit them with a melee weapon attack I can expend an Exploit Die to attempt to trample the creature.",
									"The target must make a Str save. On a failed save, the target is knocked prone and takes bludgeoning damage equal to the Exploit Die roll."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 13;}
			},

			"warrior's challenge" : {
				name : "Warrior's Challenge",
				description : desc(["As a bonus action I can expend an Exploit die to force a creature to make a Wis save.",
									"On a failed save the target has disadvantage on any attack roll that isn't targeted at me for 1 minute.",
									"The target can repeat the saving throw at the end of each of its turns, ending the effect on a succes."]),
				submenu : "[2nd-degree exploits (level 5+)]",
				source : ["GMB:LL", 0],
				action : ["bonus action",""]
			},

			//3rd-degree exploits (level 9+)
			"destructive slam (strength 15)" : {
				name : "Destructive Slam",
				description : desc(["In place of an attack I can expend an Exploit die to strike the ground at my feet.",
									"Each creature within a 20ft cube of me must make a Dex save. On a failed save, the creature takes bludgeoning damage equal to twice my Exploit Die roll + my Str mod and fall prone.",
									"Objects in the area take the max amount of damage. The area remains difficult terrain until a creature spends 1 minute to clear it."]),
				submenu : "[3nd-degree exploits (level 9+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 15;}
			},

			"disorienting blow (strength 15)" : {
				name : "Disorienting Blow",
				description : desc(["When I hit a creature with a melee weapon attack I can expend an Exploit Die to so the creature for 1 minute:",
									"Cannot take reactions and have their speed halved. Must choose between using their action or bonus action.",
									"Has -2AC and -2 to Dex saves. Can only make a single attack during its turn.",
									"The creature can make a Wis save at the end of each of its turns, ending the effect on a succes."]),
				submenu : "[3nd-degree exploits (level 9+)]",
				source : ["GMB:LL", 0],
				prereqeval : function(v) { return What('Str') >= 15;}
			},

			"resilient body (constitution 15)" : {
				name : "Resilient Body",
				description : desc(["When I take damage and can see the source I can expend an Exploit die to reduce the damage taken by twice the roll + my Con mod.",
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
									"Each of these creatures has disadvantage on any attack they make that isn't against until they hit me."]),
				submenu : "[3nd-degree exploits (level 9+)]",
				source : ["GMB:LL", 0],
				action : ["action",""]
			},

			"war cry" : {
				name : "War Cry",
				description : desc(["As an action I can expend an Exploit Die to force any hostile creature within a 30ft cone of me to make a Wis save.",
									"On a failed save the creature drop what it is holding and becomes frightened of me for 1 minute.",
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
									"The creature can make a con save at the start of each of its turns, ending the effect on a success."]),
				submenu : "[4th-degree exploits (level 13+)]",
				source : ["GMB:LL", 0],				
				prereqeval : function(v) { return What('Str') >= 17;}
			},

			"staggering blow (strength 17)" : {
				name : "Staggering Blow",
				description : desc(["When I hit a creature with a melee weapon attack I can expend an Exploit Die to make it take damage equal to:",
									"Additionally take 3x the damage of the Exploit Die roll.",
									"Give it disadvantage on attack rolls and ability checks, and make it unable to use reactions for 1 minute.",
									"The creature can make a Wis save at the end of each of its turns, ending the effect on a success."]),
				submenu : "[4th-degree exploits (level 13+)]",
				source : ["GMB:LL", 0],				
				prereqeval : function(v) { return What('Str') >= 17;}
			},

			"strenght of the colossus (strength 17)" : {
				name : "Strenght of the Colossus",
				description : desc(["As an action I can expend an Exploit Die to change my drag/pull/push potential to 50x my Str score.",
									"Additionally, I can expend Hit Dice up to my Str mod, multiplying this potential by the amount of Hit Dice spent.",
									"This potential is doubled for every size I am larger than medium."]),
				submenu : "[4th-degree exploits (level 13+)]",
				source : ["GMB:LL", 0],				
				action : ["action",""],
				prereqeval : function(v) { return What('Str') >= 17;}
			},

			"unbreakable (constitution 17)" : {
				name : "Devastating Critical",
				description : desc([""]),
				submenu : "[4th-degree exploits (level 13+)]",
				source : ["GMB:LL", 0],				
				prereqeval : function(v) { return What('Con') >= 17;}
			},

			//5th-degree exploits (level 17+)
			"cataclysmic slam (strength 19)" : {
				name : "Cataclysmic Slam",
				description : desc(["In place of an attack I can expend an Exploit Die to strike the ground at my feet.",
									"Each creature within 30 feet of me must make a Con save. On a failed save the creature takes bludgeoning damage equal to 3x my Exploit Die roll + my Str mod and is knocked prone.",
									"Creatures succeeding the roll take half damage and don't fall prone. Objects in the area take the maximum amount of damage.",
									"The area becomes difficult terrain, a creature can use their action to clear a 1 foot square of this."]),
				submenu : "[5th-degree exploits (level 13+)]",
				source : ["GMB:LL", 0],				
				prereqeval : function(v) { return What('Str') >= 19;}
			},

			"vorpal critical (strength 19 or dexterity 19)" : {
				name : "Vorpal Critical",
				description : desc(["When I crit with a melee weapon I can expend an Exploit Die to attempt to behead the target.",
									"If the creature's remaining HP is equal or less than my level + Str or Dex score I cut off one of its heads.",
									"Creatures that don't require a head or are immune to slashing damage don't die to this."]),
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
                "I can choose to have advantage on melee/thrown weapon attacks that use Strength this turn.",
			    "When doing so, other creatures have advantage against me for the rest of the turn."
            ])
		},

		"feral instincts" : {
			name : "Feral Instincts",
			source : ["GMB:LL", 0],
			minlevel : 7,
			description : desc([
                "My Rage now lasts 10 minutes and only ends early if I choose so or become incapacitated.",
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
				} else if (n > 12 && n <17){
					var descr = ["My attacks crit on rolling an 18 or higher."];
				} else {
					var descr = ["My attacks crit on rolling a 17 or higher."];
				}
				return desc(descr);
			  }),
			}
	}
}

AddSubClass("barbarian(laserllama)", "berserker", { 
	regExpSearch : /berserker/i,
	subname : "Path of the Berserker",
	source : ["GMB:LL", 0],
	features : {

		"subclassfeature3" : {
			name : "Savage Exploit: Feral Senses",
			toNotesPage : [{
				name : "Feral Senses",
				note : ["When I make a Perception or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Menacing Shout",
			toNotesPage : [{
				name : "Menacing Shout",
				note : ["As a bonus action I can expend an Exploit Die and force a creature within 30 feet to make a wisdom save. On a failed save the creature is frightened for 1 minute. It can repeat the saving throw at the end of each of its turns. The effect ends early if the creature succeed any of these saves or takes any damage."],				
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			action : ["bonus action", ""],				
			source : [["GMB:LL", 0]]
		},
		
		"subclassfeature3.2" : {
			name : "Frenzied Rage",
			description : desc(["When I Rage I can instead enter a Frenzied Rage:",
								"I can make a melee attack as a bonus action during my Frenzied Rage, including the turn I activate it.",
								"If I use this feature more than once/long rest, I suffer 1 level of exhaustion whenever I stop raging."]),		
			minlevel : 3,								
			action : ["bonus action", ""],
			source : [["GMB:LL", 0]]
		},
	
		"subclassfeature5" : {
			name : "Savage Exploit: Bloodthirsty Critical",
			toNotesPage : [{
				name : "Bloodthirsty Critical",
				note : ["When I crit I can expend an Exploit Die to make an additional weapon attack.",
						"I cannot use this exploit on a crit achieved by this exploit."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Savage Rebuke",
			toNotesPage : [{
				name : "Savage Rebuke",
				note : ["When a creature hits me with a melee attack I can expend an Exploit Die to make 1 melee weapon attack back."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,					
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Mindless Rage",
			description : desc(["I cannot be charmed/frightened while raging.",
								"If I Rage while charmed/frightened, the effect is suspended for the duration.",
								"While in a Frenzied Rage, I can ignore any exhaustion levels."]),
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
			description : desc(["Once per long rest, when I finish a short rest I can reduce my exhaustion level by 1."]),
			minlevel : 10,
			source : [["GMB:LL", 0]],
			usages : 1,
			recovery : "long rest"
		},

		"subclassfeature14" : {
			name : "Furious Retaliation",
			description : desc(["When I take damage from a creature within my reach, I can use my reaction to make a melee attack against that creature."]),
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
			name : "Savage Exploit: Imposing Presence",
			toNotesPage : [{
				name : "Imposing Presence",
				note : ["When I make an Intimidation check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Take Down",
			toNotesPage : [{
				name : "Take Down",
				note : ["As a bonus action I can expend an Exploit die to make a Shove or Grapple attack against a creature in reach and add the roll to my Athletics check."],			
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			action : ["bonus action", ""],				
			source : [["GMB:LL", 0]]
		},
		
		"subclassfeature3.2" : {
			name : "The Wrong Crowd",
			description : desc(["When spending the night in a settlement I have advantage on ability checks that gather information on the settlement, its culture, factions and important figures."]),		
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},

		"subclassfeature3.3" : {
			name : "Unarmed & Dangerous",
			description : desc(["My Unarmed Strikes now deal 1d4 damage, 1d6 if both hands are free.",
								"When I use the attack action to only make Unarmed Strike attacks, I can make an additional one.",
								"Once per turn when I hit a creature with an Unarmed Strike, I can attempt to grapple it as part of the attack, so long as I have at least 1 hand free for the grapple."]),		
			minlevel : 3,
			source : [["GMB:LL", 0]],
			weaponsAdd : ["Unarmed Strike"],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.baseWeaponName == "unarmed strike") {
							var aBruteDie = function (n) {return  (n < 10 ? 4 : n < 14 ? 6 : 8);}(classes.known["barbarian(laserllama)"].level)
							try {
								var curDie = eval_ish(fields.Damage_Die.replace('d', '*'));
							} catch (e) {
								var curDie = 'x';
							};
							if (isNaN(curDie) || curDie < aBruteDie) {
								fields.Damage_Die = '1d' + aBruteDie;
								fields.Description += (fields.Description ? '; ' : '') + 'Versatile (1d' + (aBruteDie + 2)  +')';
							};
						};
					}
				]
			}
		},
	
		"subclassfeature5" : {
			name : "Savage Exploit: Concussive Blow",
			toNotesPage : [{
				name : "Concussive Blow",
				note : ["When I hit a creature with a melee attack, I can expend an Exploit Die to force it to make a Con save.",
				"On a failed save the target's speed becomes 0, can only speak falteringly, cannot take (bonus) actions/reactions and has disadvantage on Dex saves.",
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
				"If they land in an unoccupied space that can't support their weight they take fall damage and fall prone.",
				"If they hit another creature, that creature must make a Dex save or take bludgeoning damage equal to the Exploit Die roll + my Str mod.",
				"Counting as 1 size larger for carrying or grappling works for this exploit."],		
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
			name : "Savage Exploit: Disorienting Blow",
			toNotesPage : [{
				name : "Disorienting Blow",
				note : ["When I hit a creature with a melee weapon attack I can expend an Exploit Die to so the creature for 1 minute:",
				"Cannot take reactions and have their speed halved. Must choose between using their action or bonus action.",
				"Has -2AC and -2 to Dex saves. Can only make a single attack during its turn.",
				"The creature can make a Wis save at the end of each of its turns, ending the effect on a succes."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature10" : {
			name : "Iron Grip",
			description : desc(["The size of creatures I can grapple increases by 1 size.", 
			"When I grapple a creature more than 1 size larger it can move as normal and I move with it.",
			"While grappling a creature one size larger or smaller, I can move at normal speed.",
			"My unarmed strikes become 1d6 (1d8 when both hands are free).",
			"My climbing speed equals my walking speed."]),
			minlevel : 10,
			source : [["GMB:LL", 0]],
			speed : { climb : { spd : "walk", enc : "walk" } }
		},

		"subclassfeature14" : {
			name : "Brutish Determination",
			description : desc(["I can add 1d4 to Str/Dex/Con and death saves.",
			"Rolling a 20 or higher on my death saves lets me stand up instantly with 1hp.",
			"My Unarmed Strikes become 1d8 (1d10 when both hands are free)."]),
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
				note : ["When I make a Str or Con related check/save, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],
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
			action : ["bonus action", ""],				
			source : [["GMB:LL", 0]]
		},
		
		"subclassfeature3.2" : {
			name : "Fighting Style",
			description : desc('Choose a Fighting Style for the fighter using the "Choose Feature" button above'),
			choices : ["Great Weapon Fighting", "Dual Wielding", "Improvised Fighting", "Strongbow"],
			"great weapon fighting" : FightingStyles.great_weapon,
			"dual wielding" : {
				name : "Dual Wielding",
				description : desc(["When taking the attack action while two-weapon fighting, I can make an additional attack as part of the action instead of a bonus action.",
				"My ability modifiers are added to this attack's hit and damage roll."]),
				source : [["GMB:LL", 0]]
			},
			"improvised fighting" :{
				name : "Improvised Fighting",
				description : desc(["I become proficient in improvised weapons.",
				"When I hit with a nonmagical improvised weapon I can roll the damage dice twice and take the higher roll. Doing so breaks the weapon."]),
				weaponProfs : [false, false, ["Improvised Weapons"]],
				weaponsAdd : ["Improvised Weapons"],
				source : [["GMB:LL", 0]]
			},
			"strongbow" : {
				name : "Strongbow",
				description : desc(["I can choose to use my Str instead of Dex for Longbow/Shortbow hit and damage rolls."]),
				source : [["GMB:LL", 0]]
			},	
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},

		"subclassfeature3.3" : {
			name : "Martial Training",
			description : desc(["I gain an additional Exploit Die.",
			"While Raging, every time I use an exploit my Exploit Die it increase by one size (d6, d8, etc.), to a max of d12.",
			"The exploit that triggers the increase also benefits from it. The Exploit Die size resets when my Rage ends."]),	
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
				"On a failed save the target takes bludgeoning damage equal to the Exploit Die roll and is pushed away [5 x Str mod] feet.",
				"Creatures larger than me has advantage on the save."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Warrior's Challenge",
			toNotesPage : [{
				name : "Warrior's Challenge",
				note : ["As a bonus action I can expend an Exploit die to force a creature to make a Wis save.",
				"On a failed save the target has disadvantage on any attack roll that isn't targeted at me for 1 minute.",
				"The target can repeat the saving throw at the end of each of its turns, ending the effect on a succes."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			action : ["bonus action",""],
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Mighty Blow",
			description : desc(["When I hit a creature with a melee or thrown weapon attack I can end my rage to turn the hit into a crit."]),
			minlevel : 6,
			usages : 1,
			recovery : "short rest",
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6.1" : {
			name : "Remarkable Athlete",
			description : levels.map(function(n) {
				if (n < 14) {
					var descr = ["When I use Feat of Strenght or Mightly Leap I can use a 1d6 instead of expending an Exploit Die."];
				} else {
					var descr = ["When I use Feat of Strenght or Mightly Leap I can use a 1d8 instead of expending an Exploit Die."];
				}
				return desc(descr);
			  }),
			minlevel : 6,
			source : [["GMB:LL", 0]]
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Resilient Body",
			toNotesPage : [{
				name : "Resilient Body",
				note : ["When I take damage and can see the source I can expend an Exploit die to reduce the damage taken by twice the roll + my Con mod.",
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
			description : desc(["When I crit with a melee or thrown weapon attack, I regain hp equal to my Con mod + an Exploit Die roll (minimum of 1hp)."]),
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
			name : "Savage Exploit: Primal Intuition",
			toNotesPage : [{
				name : "Primal Intuition",
				note : ["When I make an Animal Handling, Nature or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],			
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
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Bear Spirit",
				description : "\n   " + "While raging, I have resistance to all damage types except psychic",
				dmgres : [["All -Psychic", "All -Psychic (rage)"]],
				eval : function() {
					processResistance(false, 'Barbarian: Rage', ClassList.barbarian.features.rage.dmgres);
				},
				removeeval : function() {
					processResistance(true, 'Barbarian: Rage', ClassList.barbarian.features.rage.dmgres);
				}
			},
			"eagle" : {
				name : "Eagle Spirit",
				description : desc(["While raging without heavy armor, others have disadv. on opportunity attacks vs. me",
				"I can use the Dash action as a bonus action"]),
				action : ["bonus action", " (Dash)"]
			},
			"wolf" : {
				name : "Wolf Spirit",
				description : desc(["While raging, friends have advantage on attacks vs. hostiles within 5 ft of me"])
			}
		},
	
		"subclassfeature5" : {
			name : "Savage Exploit: Crippling Critical",
			toNotesPage : [{
				name : "Crippling Critical",
				note : ["When I crit, I can reduce a target's movement speed to 0 for 1 minute.",
				"The target can make a Con save at the start of each of its turn, ending the effect on a success."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature5.1" : {
			name : "Savage Exploit: Trampling Rush",
			toNotesPage : [{
				name : "Trampling Rush",
				note : ["When I move at least 20 feet towards a creature and hit them with a melee weapon attack I can expend an Exploit Die to attempt to trample the creature.",
				"The target must make a Str save. On a failed save, the target is knocked prone and takes bludgeoning damage equal to the Exploit Die roll."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			action : ["bonus action",""],
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Totemic Aspect",
			source : [["GMB:LL", 0]],
			minlevel : 6,
			description : "\n   " + 'Choose Bear, Eagle, Elk, Wolf, or Tiger Aspect using the "Choose Feature" button above',
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Aspect of the Bear",
				description : "\n   " + "Advantage on Strength checks to push/pull/lift/break; Carrying capacity is doubled",
				carryingCapacity : 2
			},
			"eagle" : {
				name : "Aspect of the Eagle",
				description : "\n   " + "I can see up to 1 mile away perfectly; No disadvantage on Perception from dim light"
			},
			"wolf" : {
				name : "Aspect of the Wolf",
				description : "\n   " + "I can track while traveling at a fast pace; I can move stealthily at a normal pace"
			}
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Savage Defiance",
			toNotesPage : [{
				name : "Savage Defiance",
				note : ["As an action I can expend an Exploit Die to challenge each creature of my choice within 60 feet of me that can hear me.",
				"Each of these creatures has disadvantage on any attack they make that isn't against until they hit me."],
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
			description : desc(["I can cast Commune with Nature as a ritual"]),
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
			description : desc(['Choose Bear, Eagle, Elk, Wolf, or Tiger Attunement using the "Choose Feature" button']),
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Bear Attunement",
				description : desc(["While raging, any creature I hit with a melee weapon attack has disadv. on attacks vs. others"])
			},
			"eagle" : {
				name : "Eagle Attunement",
				description : desc(["While raging, I can fly at my current speed, but I can only stay aloft during my turn"])
			},
			"wolf" : {
				name : "Wolf Attunement",
				description : desc(["If my melee attack hits while raging, I can knock prone as a bonus action (up to Large)"]),
				action : ["bonus action", " (raging: knock prone)"]
			}
		}
	}
});

AddSubClass("barbarian(laserllama)", "ancestral guardian", { 
	regExpSearch : /^(?=.*ancestral)(?=.*guardian).*$/i,
	subname : "Path of the Ancestral Guardian",
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
			name : "Savage Exploit: Primal Intuition",
			toNotesPage : [{
				name : "Primal Intuition",
				note : ["When I make an Animal Handling, Nature or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],			
				page3notes : true,				
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,		
			source : [["GMB:LL", 0]]
		},
		
		"subclassfeature3.2" : {
			name : "Ancestral Protectors",
			source : [["X", 10]],
			minlevel : 3,
			description : desc([
				"While raging, the first creature I hit with an attack on my turn becomes distracted",
				"While distracted, it has disadvantage on attack rolls that don't target me",
				"In addition, everybody but me counts as having resistance to all of the target's attacks",
				"This lasts until the start of my next turn, or until my rage ends"
			])
		},
	
		"subclassfeature5" : {
			name : "Savage Exploit: Crippling Critical",
			toNotesPage : [{
				name : "Crippling Critical",
				note : ["When I crit, I can reduce a target's movement speed to 0 for 1 minute.",
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
				"If they land in an unoccupied space that can't support their weight they take fall damage and fall prone.",
				"If they hit another creature, that creature must make a Dex save or take bludgeoning damage equal to the Exploit Die roll + my Str mod.",
				"Counting as 1 size larger for carrying or grappling works for this exploit."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			action : ["action",""],
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Spirit Shield",
			source : [["X", 10]],
			minlevel : 6,
			description : desc([
				"As a reaction while raging when an ally I see within 30 ft is damaged, I can reduce it.",
				"My guardian spirits reduce the damage by an amount equal to the roll of an Exploit Die.",
				"While Raging I can reduce the damage by an amount equal to the roll of two Exploit Die."
			]),
			action : ["reaction", ""]
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Resilient Body",
			toNotesPage : [{
				name : "Resilient Body",
				note : ["When I take damage and can see the source I can expend an Exploit die to reduce the damage taken by twice the roll + my Con mod.",
				"If I rolled higher than the damage I took, I gain temp hp equal to the difference in values."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			action : ["reaction",""],
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature10" : {
			name : "Consult the Spirits",
			source : [["X", 10]],
			minlevel : 10,
			description : desc([
				"I can cast either Clairvoyance or Augury, without a spell slot or material components",
				"Augury consults ancestral spirits; Clairvoyance summons an invisible ancestral spirit",
				"Wisdom is my spellcasting ability for these spells"
			]),
			spellcastingAbility : 5,
			spellcastingBonus : [{
				name : "Consult the Spirits",
				spells : ["augury"],
				selection : ["augury"],
				firstCol : 'oncesr'
			}, {
				name : "Consult the Spirits",
				spells : ["clairvoyance"],
				selection : ["clairvoyance"],
				firstCol : 'oncesr'
			}],
			usages : 1,
			recovery : "short rest",
			spellChanges : {
				"augury" : {
					components : "V,S",
					compMaterial : "",
					description : "Omen about specific course of action I plan to take in the next 30 min",
					changes : "My casting of Augury is a practice of consulting my ancestral spirits, thus requiring no material components."
				},
				"clairvoyance" : {
					components : "V,S",
					compMaterial : "",
					changes : "My casting of Clairvoyance is a practice of consulting my an ancestral spirit of mine, thus requiring no material components."
				}
			}
		},
		"subclassfeature14" : {
			name : "Vengeful Ancestors",
			source : [["X", 10]],
			minlevel : 14,
			description : "\n   " + "When using Spirit Shield, the attacker takes the reduced amount as force damage"
		}
	}
});

AddSubClass("barbarian(laserllama)", "battlerager", { 
	regExpSearch : /battlerager/i,
	subname : "Path of the Battlerager",
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
			name : "Savage Exploit: Imposing Presence",
			toNotesPage : [{
				name : "Imposing Presence",
				note : ["When I make an Intimidation check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],
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
			"I can Rage in Heavy Armor without any drawbacks."
			]),
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
				note : ["When I crit I can expend an Exploit Die to make an additional weapon attack.",
						"I cannot use this exploit on a crit achieved by this exploit."],
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
				"Until I move, a creature trying to move me or move through my space has to succeed on a Str save to do so."],		
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			action : ["bonus action",""],
			source : [["GMB:LL", 0]]
		},

		"subclassfeature6" : {
			name : "Reckless Abandon",
			source : [["GMB:LL", 0]],
			minlevel : 6,
			description : desc(["When I use my reckless attack while raging I also gain temp hp equal to my Exploit Die.", 
			"I lose this temp hp when my rage ends. I can turn magical armor into spiked armor."
			]),
		},

		"subclassfeature9" : {
			name : "Savage Exploit: Savage Defiance",
			toNotesPage : [{
				name : "Savage Defiance",
				note : ["As an action I can expend an Exploit Die to challenge each creature of my choice within 60 feet of me that can hear me.",
				"Each of these creatures has disadvantage on any attack they make that isn't against until they hit me."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			action : ["action",""],
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature10" : {
			name : "Battlerager Charge",
			source : [["S", 121]],
			minlevel : 10,
			description : desc(["As a bonus action while raging, I can use the Dash action."]),
			action : ["bonus action", " (in rage)"]
		},

		"subclassfeature14" : {
			name : "Spiked Retribution",
			source : [["GMB:LL", 0]],
			minlevel : 14,
			description : desc(["While Raging and wearing Spiked Armor:", 
			"when I'm hit with a melee attack the attacker takes piercing damage equal to my Str mod.",
			"I can use my reaction while conscious to replace the damage with my spiked armor attack damage."]),
			action : ["reaction",""]
		}
	}
});

AddSubClass("barbarian(laserllama)", "storm herald", { 
	regExpSearch : /^(?=.*storm)(?=.*herald).*$/i,
	subname : "Path of the Storm Herald",
	source : ["GMB:LL", 0],
	features : {

		"subclassfeature3" : {
			name : "Savage Exploit: Destructive Strike",
			toNotesPage : [{
				name : "Destructive Strike",
				note : ["If I expend an Exploit Die when attacking a nonmagical object, the attack deals maximum damage and I add the roll to the damage."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3.1" : {
			name : "Savage Exploit: Feral Senses",
			toNotesPage : [{
				name : "Feral Senses",
				note : ["When I make a Perception or Survival check, I can expend an Exploit Die and add it to the result before knowing if it succeeds."],
				page3notes : true,			
				source : [["GMB:LL", 0]]
			}],
			minlevel : 3,
			source : [["GMB:LL", 0]]
		},	
		
		"subclassfeature3" : {
			name : "Storm Aura",
			source : [["X", 10]],
			minlevel : 3,
			description : desc([
				"While raging, I emanate a 10-ft radius aura.",
				'Use the "Choose Feature" button above to select the type of aura']),
			choices : ["Desert", "Sea", "Tundra"],
			action : ["bonus action", " (reactivate)"],
			"desert" : {
				name : "Storm Aura: Desert",
				description : desc([
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, anybody in my aura other than me takes fire damage equal to my Exploit Die."
				])
			},
			"sea" : {
				name : "Storm Aura: Sea",
				description : desc([
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, I can choose one creature in my aura other than me",
					"It takes lightning damage equal to my Exploit die + Con mod.",
					"It takes half as much on a successful Dexterity saving throw"
				])
			},
			"tundra" : {
				name : "Storm Aura: Tundra",
				description : desc([
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, all creatures of my choice in my aura gain temp hp equal to my Exploit Die."
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
				"On a failed save the target takes bludgeoning damage equal to the Exploit Die roll and is pushed away [5 x Str mod] feet.",
				"Creatures larger than me has advantage on the save."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],
			minlevel : 5,
			source : [["GMB:LL", 0]]		
		},

		"subclassfeature6" : {
			name : "Storm Soul",
			source : [["X", 10]],
			minlevel : 6,
			description : desc(['Use the "Choose Feature" button above to select the effect']),
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Storm Soul: Desert",
				description : desc([
					"I have resistance to fire damage and don't suffer the effects of extreme heat",
					"As an action, I can set fire to an unattended flammable object I touch"
				]),
				action : ["action", " (ignite)"],
				dmgres : ["Fire"],
				savetxt : { immune : ["effects of extreme heat"] }
			},
			"sea" : {
				name : "Storm Soul: Sea",
				description : desc([
					"I can breathe underwater and I have 30 ft swim speed",
					"In addition, I have resistance to lightning damage"
				]),
				dmgres : ["Lightning"],
				speed : { swim : { spd : 30, enc : 20 } }
			},
			"tundra" : {
				name : "Storm Soul: Tundra",
				description : desc([
					"I have resistance to cold damage and don't suffer the effects of extreme cold",
					"As an action, I can turn a 5-ft cube of water to ice, which melts after 1 minute",
					"This action fails if there are any creatures within the cube of water"
				]),
				action : ["action", " (freeze)"],
				dmgres : ["Cold"],
				savetxt : { immune : ["effects of extreme cold"] }
			}
		},

		"subclassfeature6.1" : {
			name : "Elemental Strikes",
			source : [["GMB:LL", 0]],
			minlevel : 6,
			description : desc(["When I use a damage dealing exploit while Raging, I can change the damage to match my aura:",
			"Desert - Fire, Sea - Lightning, Tundra - Cold."]),
		},

		"subclassfeature9" : {
			name : "Savage Exploit: War Cry",
			toNotesPage : [{
				name : "War Cry",
				note : ["As an action I can expend an Exploit Die to force any hostile creature within a 30ft cone of me to make a Wis save.",
				"On a failed save the creature drop what it is holding and becomes frightened of me for 1 minute.",
				"Affected creatures can attempt the save again at the end of their turn when they don't have line of sight on me, ending the effect on a succes."],
				page3notes : true,							
				source : [["GMB:LL", 0]]
				}],	
			minlevel : 9,	
			action : ["action",""],
			source : [["GMB:LL", 0]]	
		},

		"subclassfeature10" : {
			name : "Shielding Storm",
			source : [["X", 10]],
			minlevel : 10,
			description : desc(["In rage, creatures of my choice within my Storm Aura also gain Storm Soul resistance"]),
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Shielding Storm: Desert",
				description : desc(["While raging, creatures of my choice within my Storm Aura also gain resistance to fire."])
			},
			"sea" : {
				name : "Shielding Storm: Sea",
				description : desc(["In rage, creatures of my choice within my Storm Aura also gain resistance to lightning."])
			},
			"tundra" : {
				name : "Shielding Storm: Tundra",
				description : desc(["While raging, creatures of my choice within my Storm Aura also gain resistance to cold."])
			}
		},

		"subclassfeature14" : {
			name : "Raging Storm",
			source : [["GMB:LL", 0]],
			minlevel : 14,
			description : desc(['Use the "Choose Feature" button above to select the effect.']),
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Raging Storm: Desert",
				description : desc([
					"As a reaction when hit by a creature in my Storm Aura, I can have it make a Dex save.",
					"On a failed save, the attacker takes fire damage equal to my Exploit Die + Con mod.",
					"My Storm Herald features have DC 8 + my Proficiency Bonus + my Constitution modifier"
				]),
				action : ["reaction", " (if hit)"],
			},
			"sea" : {
				name : "Raging Storm: Sea",
				description : desc([
					"As a reaction when I hit a creature in my Storm Aura, I can have it make a Str save",
					"On a failed save, the creature is knocked prone, as if struck by a wave"
				]),
				action : ["reaction", " (with attack)"]
			},
			"tundra" : {
				name : "Raging Storm: Tundra",
				description : desc([
					"Whenever I activate my Storm Aura, I can choose a creature in my aura that I can see",
					"It must make a Str save or have its speed reduced to 0 until the start of my next turn"
				])
			}
		}
	}
});