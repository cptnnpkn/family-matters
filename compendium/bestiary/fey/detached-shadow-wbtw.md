---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Detached Shadow"]
---
# [Detached Shadow](3-Mechanics\CLI\bestiary\fey/detached-shadow-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 213*  

```statblock
"name": "Detached Shadow (WBtW)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "6"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "10"
- !!int "8"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
  \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The shadow can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "While in dim light or darkness, the shadow can take the Hide action as\
    \ a bonus action. Its stealth bonus is also improved to +6."
  "name": "Shadow Stealth"
- "desc": "While in sunlight, the shadow has disadvantage on attack rolls, ability\
    \ checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9\
    \ (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4.\
    \ The target falls [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)\
    \ if this reduces its Strength to 0. The creature regains consciousness and the\
    \ reduction to its Strength score disappears after it finishes a short or long\
    \ rest."
  "name": "Strength Drain"
"source":
- "WBtW"
"image": "/3-Mechanics/CLI/bestiary/fey/token/detached-shadow-wbtw.webp"
```
^statblock