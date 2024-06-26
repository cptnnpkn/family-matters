---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/oota
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Jimjar"]
---
# [Jimjar](3-Mechanics\CLI\bestiary\npc/jimjar-oota.md)
*Source: Out of the Abyss p. 6*  

```statblock
"name": "Jimjar (OotA)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Investigation": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"senses": "passive Perception 16"
"languages": "Common, Gnomish, Terran, Undercommon"
"cr": "1"
"traits":
- "desc": "On each of its turns, Jimjar can use a bonus action to take the Dash, Disengage,\
    \ or Hide action."
  "name": "Cunning Action"
- "desc": "Jimjar deals an extra 7 (2d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of Jimjar that isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ and Jimjar doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "Jimjar makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit:\
    \ 5 (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
"source":
- "OotA"
"image": "/3-Mechanics/CLI/bestiary/npc/token/jimjar-oota.webp"
```
^statblock