---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/toa
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Mister Threadneedle"]
---
# [Mister Threadneedle](3-Mechanics\CLI\bestiary\npc/mister-threadneedle-toa.md)
*Source: Tomb of Annihilation p. 183*  

```statblock
"name": "Mister Threadneedle (ToA)"
"size": "Medium"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "11"
- !!int "13"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "13"
"speed": "30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "1"
"traits":
- "desc": "While Mister Threadneedle remains motionless, it is indistinguishable from\
    \ an ordinary, inanimate scarecrow."
  "name": "False Appearance"
"actions":
- "desc": "Mister Threadneedle makes two claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4\
    \ + 1) slashing damage. If the target is a creature, it must succeed on a DC\
    \ 11 Wisdom saving throw or be [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ until the end of Mister Threadneedle's next turn."
  "name": "Claw"
- "desc": "Mister Threadneedle targets one creature it can see within 30 feet of it.\
    \ If the target can see Mister Threadneedle, the target must succeed on a DC 11\
    \ Wisdom saving throw or be magically [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ until the end of Mister Threadneedle's next turn. The [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)\
    \ target is [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed)."
  "name": "Terrifying Glare"
"source":
- "ToA"
"image": "/3-Mechanics/CLI/bestiary/npc/token/mister-threadneedle-toa.webp"
```
^statblock