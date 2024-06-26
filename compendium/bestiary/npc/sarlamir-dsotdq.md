---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dsotdq
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Sarlamir"]
---
# [Sarlamir](3-Mechanics\CLI\bestiary\npc/sarlamir-dsotdq.md)
*Source: Dragonlance: Shadow of the Dragon Queen p. 102*  

```statblock
"name": "Sarlamir (DSotDQ)"
"size": "Medium"
"type": "undead"
"alignment": "typically  Lawful Evil"
"ac": !!int "18"
"ac_class": "[plate](/3-Mechanics/CLI/items/plate-armor.md)"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "20"
- !!int "10"
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "10"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "5"
  "Constitution": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages it knew in life but can't speak"
"cr": "7"
"traits":
- "desc": "If damage reduces Sarlamir to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is bludgeoning\
    \ or from a critical hit. On a success, Sarlamir drops to 1 hit point instead."
  "name": "Undead Fortitude"
- "desc": "Sarlamir doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "Sarlamir makes three Enervating Blade or Throwing Axe attacks in any combination."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15\
    \ (3d6 + 5) necrotic damage, and if the target is a creature, it can't regain\
    \ hit points until the start of Sarlamir's next turn."
  "name": "Enervating Blade"
- "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 14 (2d8 + 5) slashing damage."
  "name": "Throwing Axe"
"source":
- "DSotDQ"
"image": "/3-Mechanics/CLI/bestiary/npc/token/sarlamir-dsotdq.webp"
```
^statblock