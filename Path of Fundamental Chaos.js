var iFileName = "Matthew Mercer - Path of Fundamental Chaos.js";
RequiredSheetVersion("13.0.6");
AddSubClass("barbarian", "fundamental chaos", { 

	regExpSearch : /^(?=.*fundamental)(?=.*chaos).*$/i,
	subname : "Path of Fundamental Chaos",
	source : ["HB", 0],
    abilitySave : 3,
	features : {

		"subclassfeature3" : {
			name : "Chaos Burst",
			description : desc(["When I attack a creature I can choose to deal additional damage an amount of times equal to my proficiency bonus per day.",
                                "For the damage type I roll a die, resulting in either Acid, Lightning, Force, Cold, Fire, Psychic or Thunder."]),
            additional : ['', '', '2d4', '2d4', '2d4', '2d4', '2d4', '2d4', '2d4', '2d4', '2d4', '2d4', '2d4', '2d6', '2d6', '2d6', '2d6', '2d6', '2d6', '2d6'],
            usages : [0, 0, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
            recovery : "day",
			minlevel : 3,
			source : ["HB", 0]
		},	
		
		"subclassfeature3.1" : {
			name : "Fundamental Force",
			description : desc(["When I enter my rage I roll 1d4 to gain additional benefits during my rage:",
                     "Time: Hostile creatures that start their turn within 15ft of me must succeed on a con save or have their speed halved and reactions taken away.",
                     "Space: When I reduce a creature to 0 hp with a melee attack, I can teleport up to 60ft to a point I can see.",
                     "Gravity: Enemies within 15ft of me who try to move away from me have their speed reduced by 10ft or get pulled in 10ft and suffer disadvantage on attacks against anyone other than me.",
                     "Potential: Allies within 10ft of me can add 1d4 to their attack rolls and saving throws."]),
			minlevel : 3,			
			source : ["HB", 0]
		},
		
		"subclassfeature6" : {
			name : "Fundamental Force Enhancement",
			description : desc(["When I Rage I can choose to use a Chaos Burst adding an effect to my Rage:",
								"Time: My speed is doubled and I can use my bonus attack to make 1 additional attack or disengage.",
								"Space: I summon a portal next to me and one within 60ft where I can see. I can attack through the portal as if they are adjacent to eachother. Attacks through the portal deal additional damage equal to a Chaos Burst die.",
                                "Gravity: I cannot be moved or knocked prone against my will. When I hit a creature with a melee weapon attack they must succeed on a Str save or be knocked prone.",
                                "Potential: When a creature misses me with an attack I can use my reaction to force the creature to reroll the attack, targeting itself. On a hit, it takes half damage."]),		
			minlevel : 6,								
			source : ["HB", 0]
		},
    }
});