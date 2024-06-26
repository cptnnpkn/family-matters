---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Wall Gargoyle"]
---
# [Wall Gargoyle](3-Mechanics\CLI\bestiary\elemental/wall-gargoyle-dodk.md)
*Source: Dungeons of Drakkenheim p. 198*  

These gargoyles defend the walls of Drakkenheim.

```statblock
"name": "Wall Gargoyle (DoDk)"
"size": "Medium"
"type": "elemental"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "15"
- !!int "11"
- !!int "16"
- !!int "6"
- !!int "11"
- !!int "7"
"speed": "30 ft., fly 60 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't adamantine"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., truesight 120 ft., passive Perception 10"
"languages": "Terran"
"cr": "2"
"traits":
- "desc": "While the gargoyle remains motionless, it is indistinguishable from an\
    \ inanimate statue."
  "name": "False Appearance"
- "desc": "The creature that caused the gargoyle to animate becomes its quarry. The\
    \ gargoyle knows the direction and distance to its quarry as long the quarry remains\
    \ within Drakkenheim or until the gargoyle is destroyed."
  "name": "Faultless Tracker"
- "desc": "The gargoyle has advantage on Wisdom (Perception) checks that rely on sight."
  "name": "Keen Sight"
- "desc": "The gargoyle's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "If the wall gargoyle is destroyed, it regains all its hit points in 1 hour\
    \ unless a [disintegrate](/3-Mechanics/CLI/spells/disintegrate.md) spell is cast\
    \ on its remains."
  "name": "Rejuvenation"
"actions":
- "desc": "The gargoyle makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Claws"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/wall-gargoyle-dodk.webp"
```
^statblock