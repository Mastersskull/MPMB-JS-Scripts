var iFileName = "LaserLlama - Path of the Mutant.js";
// Tested on sheet version 13.1.7 and 13.1.0, encountered problems on sheet version 13.1.0
// Script updated to the LaserLlama GMBinder file https://www.gmbinder.com/share/-N2gn3QXALCVqwAFJe5v (Alternate Barbarian) as of August 6th, 2024
RequiredSheetVersion("13.1.7");
AddSubClass("barbarian(laserllama)", "mutant", {
    regExpSearch: /^(?=.*mutant).*$/i,
    subname: "Path of the Mutant",
    source: ["GMB:LL", 0],
    features: {

        "subclassfeature3": {
            name: "Savage Exploit: Crushing Grip",
            toNotesPage: [{
                name: "Crushing Grip",
                note: ["If I expend an Exploit Die on a succesfull grapple:",
                    "The grappled creature takes bludgeoning damage at the start of each of their turns equal to the roll."],
                page3notes: true,
                source: [["GMB:LL", 0]]
            }],
            minlevel: 3,
            source: [["GMB:LL", 0]]
        },

        "subclassfeature3.1": {
            name: "Savage Exploit: Feat of Strength",
            toNotesPage: [{
                name: "Feat of Strength",
                note: ["When I make a Str or Con related check/save, I can expend Exploit Dice up to my prof. bonus and add it to the result before knowing if it succeeds."],
                page3notes: true,
                source: [["GMB:LL", 0]]
            }],
            minlevel: 3,
            source: [["GMB:LL", 0]]
        },

        "subclassfeature3.2": {
            name: "Abberant Alchemy",
            description: desc(["I am proficient with Alchemist's Supplies and the Nature skill.",
                               "I know a number of mutations appropriate for my Barbarian level.",
                               "I can spend 1 hour during a long rest to replace one Mutation I know for a different one.",
                               "When I rage, a number of these mutations equal to my Con mod manifest until my rage ends."
            ]),
            minlevel: 3,
            source: [["GMB:LL", 0]],
            skills: ["Nature"],
            toolProfs: ["Alchemist's Supplies"],
            extraname: "Mutations",
            extrachoices: [

                // lvl 3+
                "Abberant Sight",
                "Alchemical Resistance",
                "Aquatic Adaptation",
                "Deviant Glide",
                "Enhanced Movement",
                "Oozing Form",
                "Synthetic Carapace",
                "Unnatural Physicality",

                // lvl 6+
                "Corrosive Secretions",
                "Inoculated Vigor",
                "Toxic Vitality",
                "Viscious Grip",

                // lvl 10+
                "Acidic Bile",
                "Grappling Appendages",

                // lvl 14+
                "Perverted Flight",
            ],

            extraTimes: levels.map(function (n) {
                return n < 3 ? 0 : n < 6 ? 3 : n < 10 ? 5 : n < 14 ? 7 : 9;
            }),

            "abberant sight": {
                name: "Abberant Sight",
                description: desc(["I gain Darkvision of 60 feet. If I already have Darkvision it is increased by 60 feet.",
                    "I also gain advantage on Perception checks that rely on sight."
                ]),
                submenu: "[Lvl 3+]",
                source: [["GMB:LL", 0]],
                vision: [["Darkvision", "fixed 60"], ["Darkvision", "+60"], ["Adv. on Perception checks based on sight", 0]],
            },

            "alchemical resistance": {
                name: "Alchemical Resistance",
                choices: ["Acid", "Cold", "Fire", "Poison", "Lightning"],
                choicesNotInMenu: true,
                "acid": {
                    description: desc(["I am resistant to Acid damage."]),
                    dmgres: ["Acid"],
                },
                "cold": {
                    description: desc(["I am resistant to Cold damage."]),
                    dmgres: ["Cold"],
                },
                "fire": {
                    description: desc(["I am resistant to Fire damage."]),
                    dmgres: ["Fire"],
                },
                "poison": {
                    description: desc(["I am resistant to Poison damage."]),
                    dmgres: ["Poison"],
                },
                "lightning": {
                    description: desc(["I am resistant to Lightning damage."]),
                    dmgres: ["Lightning"],
                },
                submenu: "[Lvl 3+]",
                source: [["GMB:LL", 0]],
            },

            "aquatic adaptation": {
                name: "Aquatic Adaptation",
                description: desc[("I gain walking speed equal to my swimming speed, and I can breath both air and water.")],
                submenu: "[Lvl 3+]",
                speed: { swim: { spd: "walk", enc: "walk" } },
            },

            "deviant glide": {
                name: "Deviant Glide",
                description: desc[("When calculating fall damage, I subtract 100 feet from the fall. I can also move 2 feet horizontally for every foot I fall.")],
                submenu: "[Lvl 3+]",
            },

            "enhanced movement": {
                name: "Enhanced Movement",
                description: desc[("My movement speed increases by 5 times my Con mod. I also add my Con mod to my long and standing jumps.")],
                submenu: "[Lvl 3+]",
                changeeval: function (v) {
                    var conSpd = '+' + 5 * What('Con Mod');
                    SetProf('speed', conSpd !== '+0', { allModes: conSpd }, "Mutation: Enhanced Movement");
                },
            },

            "oozing form": {
                name: "Oozing Form",
                description: desc[("I can use my bonus action to escape grapples and nonmagical restraints. I can also squeeze through spaces as narrow as one inch along with my equipment.")],
                submenu: "[Lvl 3+]",
                action: ["bonus action", "Escape grapple or nonmagical restraint"]
            },

            "synthetic carapace": {
                name: "Synthetic Carapace",
                description: desc[("My AC increases by half my Con Mod (rounded down).")],
                submenu: "[Lvl 3+]",
                extraAC: [{
                    mod: What('Con Mod') * 0.5,
                }]
            },

            "unnatural physicality": {
                name: "Unnatural Physicality",
                description: desc[("I gain a bonus to my Athletics and Acrobatics checks equal to one roll of my Exploit Die.")],
                submenu: "[Lvl 3+]",
            },

            "corrosive secretions": {
                name: "Corrosive Secretions",
                description: desc[("When someone within 30ft hits me with an attack I can use my reaction to deal acid to them for 1 Exploit Die roll + my Con mod.")],
                submenu: "[Lvl 6+]",
                action: ["reaction", "when hit within 30ft"]
            },

            "inoculated vigor": {
                name: "Inoculated Vigor",
                description: desc[("I am resistant to Poison and Acid damage, and I have advantage on saves to resist the poisoned condition.")],
                submenu: "[Lvl 6+]",
                dmgres: ["Poison", "Acid"],
                savetxt: { text: ["Advantage on saves vs poisoned condition."] },
            },

            "toxic vitality": {
                name: "Toxic Vitality",
                description: desc[("While raging, I gain temp hp equal to my Con mod(minimum 1) at the start of each of my turns.")],
                submenu: "[Lvl 6+]",
            },

            "viscious grip": {
                name: "Viscious Grip",
                description: desc[("I gain climbing speed equal to my walking speed and can climb difficult surfaces without making an ability check.")],
                submenu: "[Lvl 6+]",
                speed: { climb: { spd: "walk", enc: "walk" } },
            },

            "acidic bile": {
                name: "Acidic Bile",
                description: desc[("I learn the Acid Splash cantrip. Constitution is my ability mod for it and I can use it even while raging.",
                    "It also deals bonus damage equal to my Con Mod."
                )],
                submenu: "[Lvl 10+]",
                spellcastingBonus: [{
                    name: "Acidic Bile",
                    spells: ["acid splash"],
                    selection: ["acid splash"],
                    firstCol: "atwill",
                    spellcastingAbility: 3,
                }],
                calcChanges: {
                    atkCalc: [
                        function (fields, v, output) {
                            if (v.baseWeaponName == 'acid splash') output.extraDmg += What('Con Mod');
                        },
                        "I add my Constitution modifier to the damage of my Acid Splash cantrip."
                    ],
                    spellAdd: [
                        function (spellKey, spellObj, spName) {
                            if (spellKey == "acid splash") {
                                spellObj.description = spellObj.description.replace("1d6 acid damage", "1d6+" + What("Con Mod") + " Acid dmg");
                                return true;
                            };
                        },
                        "I add my Constitution modifier to the damage of my Acid Splash cantrip."
                    ]
                }
            },

            "grappling appendages": {
                name: "Grappling Appendages",
                description: desc[("I grow two appendages which are natural weapons. They cannot use tools or hold weapons.",
                    "If I hit a creature with a melee attack, I can use my bonus action to attempt to grapple it with these appendages."
                )],
                submenu: "[Lvl 10+]",
                action: ["bonus action", "Grapple (on melee hit)"],
            },

            "perverted flight": {
                name: "Perverted Flight",
                description: desc[("I gain flying speed equal to my walking speed.")],
                submenu: "[Lvl 14+]",
                speed: { flying: { spd: "walk", enc: "walk" } },
            },
        },

        "subclassfeature5": {
            name: "Savage Exploit: Rending Strike",
            toNotesPage: [{
                name: "Rending Strike",
                note: ["When I hit a creature with a melee weapon attack I can expend an Exploit Die to force it to make a Dex save.",
                    "On a fail, it takes additional damage equal to 1 roll of my Exploit Die and loses 1AC until it repairs it or finishes a long rest."
                ],
                page3notes: true,
                source: [["GMB:LL", 0]]
            }],
            minlevel: 5,
            source: [["GMB:LL", 0]]
        },

        "subclassfeature5.1": {
            name: "Savage Exploit: Whirlwind Strike",
            toNotesPage: [{
                name: "Whirlwind Strike",
                note: ["In place of an attack, I can expend an Exploit Die and force each creature within my melee reach to make a Dex save.",
                    "On a fail, the creature takes damage equal to 1 roll of my Exploit Die + my Str or Dex mod (my choice), half as much on a success."
                ],
                page3notes: true,
                source: [["GMB:LL", 0]]
            }],
            minlevel: 5,
            source: [["GMB:LL", 0]]
        },

        "subclassfeature6": {
            name: "Enduring Mutation",
            description: desc(["One Mutation of my choice remains even when I'm not raging."]),
            source: [["GMB:LL", 0]],
            minlevel: 6,
        },

        "subclassfeature9": {
            name: "Savage Exploit: Confounding Critical",
            toNotesPage: [{
                name: "Confounding Critical",
                note: ["When I crit with a weapon attack I can expend an Exploit Die to strike the head, muddling the target.",
                    "For 1 minute it must roll a d6 and subtract the result from any attack roll, ability or concentration check.",
                    "At the start of the creature's turns they can make an Int save, ending the effect on a success."],
                page3notes: true,
                source: [["GMB:LL", 0]]
            }],
            minlevel: 9,
            source: [["GMB:LL", 0]]
        },

        "subclassfeature10": {
            name: "Noxious Strike",
            description: desc([
                "When I hit a creature with a melee attack I can expend an Exploit Die and force it to make a Con save.",
                "On a failed save, I roll a D6 and the creature suffers the corresponding condition:",
                "1=blinded, 2=charmed, 3=deafened, 4=frightened, 5=paralyzed, 6=poisoned."
            ]),
            minlevel: 10,
            source: [["GMB:LL", 0]],
        },

        "subclassfeature14": {
            name: "Rapid Mutation",
            description: desc([
                "While raging, I can use my bonus action to replace one mutation for another one I know."
            ]),
            minlevel: 14,
            source: [["GMB:LL", 0]],
            action: ["bonus action", "replace mutation while raging"],
            usages: "Con mod per ",
            usagescalc: "event.value = Math.max(1, What('Con Mod'));",
            recovery: "long rest"
        },
    }
});