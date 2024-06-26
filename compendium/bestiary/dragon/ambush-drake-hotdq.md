---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hotdq
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Ambush Drake"]
---
# [Ambush Drake](3-Mechanics\CLI\bestiary\dragon/ambush-drake-hotdq.md)
*Source: Hoard of the Dragon Queen p. 88*  

```statblock
"name": "Ambush Drake (HotDQ)"
"size": "Medium"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d6 + 8"
"stats":
- !!int "13"
- !!int "15"
- !!int "14"
- !!int "4"
- !!int "11"
- !!int "6"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "understands Draconic but can't speak it"
"cr": "1/2"
"traits":
- "desc": "The drake has advantage on an attack roll against a creature if at least\
    \ one of the drake's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- "desc": "If the drake surprises a creature and hits it with an attack during the\
    \ first round of combat, the target takes an extra 7 (2d6) damage from the attack."
  "name": "Surprise Attack"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage."
  "name": "Bite"
"source":
- "HotDQ"
- "ToD"
"image": "/3-Mechanics/CLI/bestiary/dragon/token/ambush-drake-hotdq.webp"
```
^statblock