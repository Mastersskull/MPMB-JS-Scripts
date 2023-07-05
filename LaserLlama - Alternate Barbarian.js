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
									"The target can make a Con save at the start of each of its turn, ending the effect on a succes."]),
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
					var descr = ["I now crit on rolling a 19 or higher."];
				} else if (n > 12 && n <17){
					var descr = ["I now crit on rolling an 18 or higher."];
				} else {
					var descr = ["I now crit on rolling a 17 or higher."];
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
			usages : "Con mod per",
			recovery : "long rest",
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
			"Rolling a 20 or higher on my death saves lets me stand up instantly with 1hp."],
			"my unarmes strikes become 1d8 (1d10 when both hands are free)."),
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
				weaponProfs : [true, true, ["Improvised Weapons"]],
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