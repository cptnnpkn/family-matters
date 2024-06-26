---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/scc
- ttrpg-cli/monster/cr/25
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/wizard
statblock: inline
aliases: ["Velomachus Lorehold"]
---
# [Velomachus Lorehold](3-Mechanics\CLI\bestiary\npc/velomachus-lorehold-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 219*  

Velomachus Lorehold was the first dragon of Strixhaven to master the magic of order and chaos, the flow and prediction of events through time. Her magic encourages exploration and discovery through the lens of creating a direct conduit to the past.

She founded Lorehold College to ensure mortals would never forget the lessons of the past. After living for centuries, Velomachus has grown tired of watching the same mistakes repeated continually. She hopes her college's teachings will foster the skills to either predict future pitfalls by taking lessons from those that came before or create flexible mindsets that allow people to shift their plans effectively when the unexpected occurs.

Velomachus's spells, legendary actions, and breath weapon are accompanied by visual effects resembling tomes and scrolls composed of golden light, perceptible distortions as time doubles back on itself, and thunderous sounds.

```statblock
"name": "Velomachus Lorehold (SCC)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "wizard"
"alignment": "Lawful Neutral"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "487"
"hit_dice": "25d20 + 225"
"stats":
- !!int "30"
- !!int "14"
- !!int "29"
- !!int "30"
- !!int "20"
- !!int "18"
"speed": "40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "12"
  "Dexterity": !!int "10"
  "Wisdom": !!int "13"
  "Constitution": !!int "17"
"skillsaves":
  "Investigation": !!int "18"
  "Perception": !!int "13"
  "History": !!int "18"
  "Arcana": !!int "18"
"damage_immunities": "thunder"
"senses": "blindsight 120 ft., passive Perception 23"
"languages": "all"
"cr": "25"
"traits":
- "desc": "Velomachus casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability:\n\n1/day each: [contact\
    \ other plane](/3-Mechanics/CLI/spells/contact-other-plane.md) (as an action,\
    \ contacting a long-dead spirit), [divination](/3-Mechanics/CLI/spells/divination.md),\
    \ [move earth](/3-Mechanics/CLI/spells/move-earth.md), [wall of force](/3-Mechanics/CLI/spells/wall-of-force.md)"
  "name": "Spellcasting"
- "desc": "If Velomachus fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "Velomachus makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +18 to hit, reach 15 ft., one target. Hit: 15\
    \ (1d10 + 10) piercing damage plus 6 (1d12) thunder damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +18 to hit, reach 10 ft., one target. Hit: 13\
    \ (1d6 + 10) slashing damage. If the target is a Huge or smaller creature, it\
    \ is knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Claw"
- "desc": "Velomachus exhales thunderous sound in a 90-foot cone. Each creature in\
    \ that area must make a DC 25 Constitution saving throw. On a failure, a creature\
    \ takes 45 (7d12) force damage and 45 (7d12) thunder damage and is pushed\
    \ up to 20 feet in a horizontal direction of Velomachus' choice. On a success,\
    \ the creature takes half as much damage and isn't pushed. Objects that aren't\
    \ being worn or carried take the damage and are pushed as if they were creatures\
    \ that failed the saving throw."
  "name": "Battle Tide Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "Velomachus makes one Claw attack."
  "name": "Claw"
- "desc": "Velomachus moves up to half her flying speed. If a creature hits or misses\
    \ her with an opportunity attack during this move, the attacker takes 19 (3d12)\
    \ thunder damage."
  "name": "Chaotic Flow (Costs 2 Actions)"
- "desc": "Velomachus magically summons 1d4 [statue mascots](/3-Mechanics/CLI/bestiary/construct/spirit-statue-mascot-scc.md)\
    \ in unoccupied spaces she can see within 60 feet of herself. The spirit statues\
    \ obey her commands and take their turns immediately after hers. Any creature,\
    \ other than a spirit statue or Velomachus, is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ if it starts its turn within 5 feet of one or more of these spirit statues.\
    \ This [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained) condition\
    \ lasts until the end of the creature's turn. These spirit statues disappear after\
    \ 10 minutes, when Velomachus dies, or when she uses this action again."
  "name": "Repeating History (Costs 3 Actions)"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/npc/token/velomachus-lorehold-scc.webp"
```
^statblock