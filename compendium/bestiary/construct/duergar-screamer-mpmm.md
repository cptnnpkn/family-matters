---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct/dwarf
statblock: inline
aliases: ["Duergar Screamer"]
---
# [Duergar Screamer](3-Mechanics\CLI\bestiary\construct/duergar-screamer-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 111*  

A duergar screamer uses sonic energy to grind rock into dust and to hurl invaders to the ground.

## Duergar Constructs

Creative duergar engineers have built numerous war machines, including some that can be fused with a duergar. Such a duergar-machine hybrid is fueled by the duergar's psionic energy, and the duergar inside the machine can psychically channel pain into power when attacked.

These machines are deployed to assist with construction projects and war. Some duergar bravely volunteer to become hybrids, while other duergar are forced into the fusion by Underdark tyrants. Unless incapacitated, the duergar inside a machine can extricate themself from it over the course of a short rest, completing the process at the rest's end.

```statblock
"name": "Duergar Screamer (MPMM)"
"size": "Medium"
"type": "construct"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"stats":
- !!int "18"
- !!int "7"
- !!int "12"
- !!int "5"
- !!int "5"
- !!int "5"
"speed": "20 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 7"
"languages": "understands Dwarvish but can't speak"
"cr": "3"
"actions":
- "desc": "The screamer makes one Drill attack, and it uses Sonic Scream."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
    \ (1d12 + 4) piercing damage."
  "name": "Drill"
- "desc": "The screamer emits destructive energy in a 15-foot cube. Each creature\
    \ in that area must succeed on a DC 11 Strength saving throw or take 7 (2d6)\
    \ thunder damage and be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Sonic Scream"
"reactions":
- "desc": "Immediately after a creature within 5 feet of the screamer hits it with\
    \ an attack roll, the screamer makes a Drill attack against that creature."
  "name": "Engine of Pain"
"source":
- "MPMM"
- "MTF"
"image": "/3-Mechanics/CLI/bestiary/construct/token/duergar-screamer-mpmm.webp"
```
^statblock

## Environment

mountain, underdark