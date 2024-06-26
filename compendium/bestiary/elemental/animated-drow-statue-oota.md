---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/oota
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Animated Drow Statue"]
---
# [Animated Drow Statue](3-Mechanics\CLI\bestiary\elemental/animated-drow-statue-oota.md)
*Source: Out of the Abyss p. 96*  

```statblock
"name": "Animated Drow Statue (OotA)"
"size": "Medium"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "25 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1"
"traits":
- "desc": "The statue is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ while in the area of an [antimagic field](/3-Mechanics/CLI/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md), the\
    \ statue must succeed on a Constitution saving throw against the caster's spell\
    \ save DC or fall [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)\
    \ for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "While the statue remains motionless, it is indistinguishable from a normal\
    \ statue."
  "name": "False Appearance"
"actions":
- "desc": "The statue makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) bludgeoning damage."
  "name": "Slam"
"source":
- "OotA"
"image": "/3-Mechanics/CLI/bestiary/elemental/token/animated-drow-statue-oota.webp"
```
^statblock