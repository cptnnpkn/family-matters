---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/scc
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/sorcerer
statblock: inline
aliases: ["Galazeth Prismari"]
---
# [Galazeth Prismari](3-Mechanics\CLI\bestiary\npc/galazeth-prismari-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 193*  

The dragon Galazeth Prismari embodies the flow of magic from inspiration into artistic expression, whether through physical form or another sensory medium. His magic draws on primal energy—such as flame, lightning, and the tides—and weaves them into spectacles both beautiful and deadly.

Galazeth founded Prismari College to ensure that the study of magic wouldn't ever be relegated to pure practicality. His teachings emphasize that magic's beauty must contribute to unfolding culture and personal emotional growth. Galazeth views dynamic expression and precise perfection as necessarily competing forces, both within individuals and the world at large.

```statblock
"name": "Galazeth Prismari (SCC)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "sorcerer"
"alignment": "Chaotic Neutral"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "402"
"hit_dice": "23d20 + 161"
"stats":
- !!int "26"
- !!int "14"
- !!int "25"
- !!int "18"
- !!int "20"
- !!int "26"
"speed": "40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "15"
  "Dexterity": !!int "9"
  "Wisdom": !!int "12"
  "Constitution": !!int "14"
"skillsaves":
  "Perception": !!int "12"
  "Performance": !!int "22"
  "Acrobatics": !!int "16"
  "Arcana": !!int "18"
"damage_resistances": "lightning"
"damage_immunities": "cold, fire"
"senses": "blindsight 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "23"
"traits":
- "desc": "Galazeth casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\n1/day\
    \ each: [control water](/3-Mechanics/CLI/spells/control-water.md), [gust of\
    \ wind](/3-Mechanics/CLI/spells/gust-of-wind.md), [wall of stone](/3-Mechanics/CLI/spells/wall-of-stone.md)"
  "name": "Spellcasting"
- "desc": "If Galazeth fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "Galazeth makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 13\
    \ (1d10 + 8) piercing damage plus 5 (1d10) lightning damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 11\
    \ (1d6 + 8) slashing damage. If the target is a Large or smaller creature, it\
    \ is knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Claw"
- "desc": "Galazeth exhales a blast of flames and ice in a 90-foot cone. Each creature\
    \ in that area must make a DC 22 Dexterity saving throw, gaining no benefit from\
    \ cover (other than total cover) and taking 38 (7d10) fire damage and 38 (7d10)\
    \ cold damage on a failed save, or half as much damage on a successful one."
  "name": "Dancing Elements Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "Galazeth makes one Claw attack."
  "name": "Claw"
- "desc": "Galazeth moves up to half his flying speed without provoking opportunity\
    \ attacks. When he passes within 15 feet of a creature during this move, that\
    \ creature must succeed on a DC 22 Dexterity saving throw or take 11 (2d10)\
    \ lightning damage. A creature can take this damage no more than once during the\
    \ move."
  "name": "Lightning Flash (Costs 2 Actions)"
- "desc": "Galazeth magically summons 1d4 [elemental mascots](/3-Mechanics/CLI/bestiary/elemental/art-elemental-mascot-scc.md)\
    \ in unoccupied spaces he can see within 60 feet of himself. The art elementals\
    \ obey his commands and take their turns immediately after his. Any creature,\
    \ other than an art elemental, takes 5 (1d10) cold, fire, or lightning damage\
    \ (Galazeth's choice) if it ends its turn within 5 feet of one or more of these\
    \ elementals. When one of these elementals drops to 0 hit points, Galazeth can\
    \ fly up to 20 feet without provoking opportunity attacks. These elementals disappear\
    \ after 10 minutes, when Galazeth dies, or when he uses this action again."
  "name": "Flowing Creation (Costs 3 Actions)"
"source":
- "SCC"
"image": "/3-Mechanics/CLI/bestiary/npc/token/galazeth-prismari-scc.webp"
```
^statblock