---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tftyp
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Giant Skeleton"]
---
# [Giant Skeleton](3-Mechanics\CLI\bestiary\undead/giant-skeleton-tftyp.md)
*Source: Tales from the Yawning Portal p. 236, Divine Contention, Sleeping Dragon's Wake, Infernal Machine Rebuild*  

```statblock
"name": "Giant Skeleton (TftYP)"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "115"
"hit_dice": "10d12 + 50"
"stats":
- !!int "21"
- !!int "10"
- !!int "20"
- !!int "4"
- !!int "6"
- !!int "6"
"speed": "30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Giant but can't speak"
"cr": "7"
"traits":
- "desc": "If the skeleton is subjected to an effect that allows it to make a saving\
    \ throw to take only half damage, it instead takes no damage if it succeeds on\
    \ the saving throw, and only half damage if it fails."
  "name": "Evasion"
- "desc": "The skeleton has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The skeleton is immune to effects that turn undead."
  "name": "Turn Immunity"
"actions":
- "desc": "The skeleton makes three scimitar attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 15\
    \ (3d6 + 5) slashing damage."
  "name": "Scimitar"
"source":
- "TftYP"
- "DC"
- "SDW"
- "IMR"
"image": "/3-Mechanics/CLI/bestiary/undead/token/giant-skeleton-tftyp.webp"
```
^statblock