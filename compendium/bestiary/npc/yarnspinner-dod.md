---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dod
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fey/archfey
statblock: inline
aliases: ["Yarnspinner"]
---
# [Yarnspinner](3-Mechanics\CLI\bestiary\npc/yarnspinner-dod.md)
*Source: Domains of Delight p. 22*  

## Yarnspinner

Yarnspinner has a monstrous form resembling that of an enormous spider. However, he has a benevolent personality and is obsessed with stories. In fact, he has amassed quite a collection of storybooks, which he keeps in silk sacks for easy transport. When Yarnspinner dreams, he projects a harmless, ghost-like version of himself that wanders his domain. In this form, he can talk to strangers and steer them one direction or another without fear of being harmed. If a visitor needs a safe haven, Yarnspinner is more than happy to fashion a hut made of spider silk for his guest to inhabit. The visitor is free to remain there as long as they wish, provided they do no harm to the other denizens of Fablerise.

Yarnspinner's favorite activity is to read stories aloud to the animals that occupy his domain, all of which benefit from having had [awaken](/3-Mechanics/CLI/spells/awaken.md) spells cast on them. The archfey's stories attract quite a gathering and are the talk of Fablerise's awakened animal kingdom.

## Fablerise

Fablerise is a vast thicket of thick roots, thorny vines, and sinuous creepers that weave together to form long tunnels, grand hallways, and enormous domes. It's a gloomy realm. A mushroom circle in the heart of the domain serves as a fey crossing, and one can travel more quickly through the thicket by whistling a tune while walking backward.

```statblock
"name": "Yarnspinner (DoD)"
"size": "Huge"
"type": "fey"
"subtype": "archfey"
"alignment": "Lawful Good"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "138"
"hit_dice": "12d12 + 60"
"stats":
- !!int "24"
- !!int "16"
- !!int "21"
- !!int "18"
- !!int "21"
- !!int "19"
"speed": "40 ft., climb 40 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "13"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "Common, Druidic, Sylvan"
"cr": "10"
"traits":
- "desc": "Yarnspinner casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [faerie fire](/3-Mechanics/CLI/spells/faerie-fire.md), [speak with animals](/3-Mechanics/CLI/spells/speak-with-animals.md)\n\
    \n1/day each: [awaken](/3-Mechanics/CLI/spells/awaken.md) (as an action),\
    \ [pass without trace](/3-Mechanics/CLI/spells/pass-without-trace.md)\n\n2/day\
    \ each: [animal friendship](/3-Mechanics/CLI/spells/animal-friendship.md), [create\
    \ food and water](/3-Mechanics/CLI/spells/create-food-and-water.md), [revivify](/3-Mechanics/CLI/spells/revivify.md)"
  "name": "Spellcasting"
- "desc": "If Yarnspinner dies in his Domain of Delight, he revives with all his hit\
    \ points 1d4 days later in a safe location in that domain."
  "name": "Fey Rebirth"
- "desc": "If Yarnspinner fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Yarnspinner can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "Yarnspinner ignores movement restrictions caused by webbing."
  "name": "Web Walker"
- "desc": "Yarnspinner can take 1 minute to craft one of the following structures\
    \ out of webbing:\n\n- A 3-inch-thick, opaque wall of webbing consisting of up\
    \ to three 10-foot-square sections, each of which must be anchored on at least\
    \ two sides by other walls or surfaces. Each section has AC 12; 20 hit points;\
    \ vulnerability to fire damage; and immunity to bludgeoning, poison, and psychic\
    \ damage.  \n- A hut small enough to fit in a 10-foot cube. The hut comes with\
    \ a closable door and a comfortable bed made of webbing, sized for a Tiny, Small,\
    \ or Medium creature.  \n- A message consisting of no more than twenty-five characters,\
    \ anchored at various points so it hangs in the air.  "
  "name": "Web Weaver (3/Day)"
"actions":
- "desc": "Yarnspinner makes two Bite attacks and uses Spellcasting or Web once."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17\
    \ (3d6 + 7) piercing damage plus 11 (2d10) poison damage."
  "name": "Bite"
- "desc": "Yarnspinner shoots webbing at one creature he can see within 120 feet of\
    \ himself. The target must succeed on a DC 17 Strength saving throw or be [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ for 1 hour. The target can repeat the save at the end of each of its turns,\
    \ ending the effect on itself on a success."
  "name": "Web"
"source":
- "DoD"
"image": "/3-Mechanics/CLI/bestiary/npc/token/yarnspinner-dod.webp"
```
^statblock