---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Living Iron Statue"]
---
# [Living Iron Statue](3-Mechanics\CLI\bestiary\construct/living-iron-statue-gos.md)
*Source: Ghosts of Saltmarsh p. 241*  

This squat, solid-looking statue, currently guarding the evil cult's treasure in Isle of the Abbey, is made from pure iron. Its hands are shaped into deadly weapons.

```statblock
"name": "Living Iron Statue (GoS)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"stats":
- !!int "16"
- !!int "14"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "20 ft."
"damage_vulnerabilities": "acid"
"damage_immunities": "lightning, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- "desc": "The statue is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
"actions":
- "desc": "The statue makes two attacks: one with its blade and one with its hammer."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) slashing damage."
  "name": "Blade"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
    \ (2d6 + 3) bludgeoning damage, and the target is knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Hammer"
- "desc": "The statue can use its action to spin at the waist, targeting creatures\
    \ of its choice within 10 feet of it. Each target must make a DC 13 Dexterity\
    \ saving throw, taking 19 (3d10 + 3) bludgeoning damage on a failed save, or\
    \ half as much damage on a successful one."
  "name": "Whirl (Recharge 5-6)"
"source":
- "GoS"
"image": "/3-Mechanics/CLI/bestiary/construct/token/living-iron-statue-gos.webp"
```
^statblock