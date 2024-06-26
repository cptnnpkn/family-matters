---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Naiad"]
---
# [Naiad](3-Mechanics\CLI\bestiary\fey/naiad-cm.md)
*Source: Candlekeep Mysteries p. 84*  

```statblock
"name": "Naiad (CM)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "11"
- !!int "15"
- !!int "10"
- !!int "18"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Sleight of Hand": !!int "5"
  "Persuasion": !!int "6"
"damage_resistances": "psychic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "passive Perception 10"
"languages": "Common, Sylvan"
"cr": "2"
"traits":
- "desc": "The naiad's spellcasting ability is Charisma (spell save DC 14). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [minor illusion](/3-Mechanics/CLI/spells/minor-illusion.md)\n\n1/day\
    \ each: [fly](/3-Mechanics/CLI/spells/fly.md), [hypnotic pattern](/3-Mechanics/CLI/spells/hypnotic-pattern.md)\n\
    \n3/day: [phantasmal force](/3-Mechanics/CLI/spells/phantasmal-force.md)"
  "name": "Innate Spellcasting"
- "desc": "The naiad can breathe air and water."
  "name": "Amphibious"
- "desc": "The naiad is [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible)\
    \ while fully immersed in water."
  "name": "Invisible in Water"
- "desc": "The naiad has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The naiad makes two psychic touch attacks."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) psychic damage."
  "name": "Psychic Touch"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/fey/token/naiad-cm.webp"
```
^statblock