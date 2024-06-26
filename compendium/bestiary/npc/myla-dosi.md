---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dosi
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Myla"]
---
# [Myla](3-Mechanics\CLI\bestiary\npc/myla-dosi.md)
*Source: Dragons of Stormwreck Isle p. 9*  

```statblock
"name": "Myla (DoSI)"
"size": "Small"
"type": "humanoid"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "10"
"hit_dice": "3d6"
"stats":
- !!int "7"
- !!int "14"
- !!int "10"
- !!int "15"
- !!int "7"
- !!int "9"
"speed": "30 ft., fly 10 ft."
"skillsaves":
  "Perception": !!int "0"
  "Arcana": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Draconic"
"cr": "1/4"
"traits":
- "desc": "Myla can cast [detect magic](/3-Mechanics/CLI/spells/detect-magic.md),\
    \ requiring no spell components and using Intelligence as the spellcasting ability."
  "name": "Inquiring Mind (1/Day)"
- "desc": "Myla has advantage on an attack roll against a creature if at least one\
    \ of its allies is within 5 feet of the creature and the ally isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- "desc": "While in sunlight, Myla has disadvantage on attack rolls, as well as on\
    \ Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
- "desc": "Myla unleashes fire in a 15-foot cone. Each creature in that area must\
    \ make a DC 12 Dexterity saving throw, taking 10 (3d6) fire damage on a failed\
    \ saving throw, or half as much damage on a successful one."
  "name": "Alchemical Flame (Recharge 6)"
"source":
- "DoSI"
"image": "/3-Mechanics/CLI/bestiary/npc/token/myla-dosi.webp"
```
^statblock