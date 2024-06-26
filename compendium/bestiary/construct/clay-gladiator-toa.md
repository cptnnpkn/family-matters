---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/toa
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Clay Gladiator"]
---
# [Clay Gladiator](3-Mechanics\CLI\bestiary\construct/clay-gladiator-toa.md)
*Source: Tomb of Annihilation p. 100*  

A clay gladiator fights if attacked or when called to the gladiatorial pit. If reduced to 0 hit points outside of the gladiatorial pit, the gladiator disappears along with its possessions, reappears in its cell at full health with spear and shield in hand, and returns to the gladiatorial pit if it can. If defeated in the gladiatorial pit, the gladiator leaves its spear behind before reforming in its cell

```statblock
"name": "Clay Gladiator (ToA)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor, [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "15"
"speed": "30 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "10"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "passive Perception 11"
"languages": ""
"cr": "5"
"traits":
- "desc": "The gladiator can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Climbing"
- "desc": "The gladiator can't be disarmed, and cannot make ranged attacks."
  "name": "Steadfast"
- "desc": "A melee weapon deals one extra die of its damage when the gladiator hits\
    \ with it (included in the attack)."
  "name": "Brute"
"actions":
- "desc": "The gladiator makes three melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11\
    \ (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with\
    \ two hands."
  "name": "Spear"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9\
    \ (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature,\
    \ it must succeed on a DC 15 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Shield Bash"
"reactions":
- "desc": "The gladiator adds 3 to its AC against one melee attack that would hit\
    \ it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "ToA"
"image": "/3-Mechanics/CLI/bestiary/construct/token/clay-gladiator-toa.webp"
```
^statblock