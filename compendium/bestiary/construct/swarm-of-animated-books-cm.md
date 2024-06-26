---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Swarm of Animated Books"]
---
# [Swarm of Animated Books](3-Mechanics\CLI\bestiary\construct/swarm-of-animated-books-cm.md)
*Source: Candlekeep Mysteries p. 19*  

```statblock
"name": "Swarm of Animated Books (CM)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "10"
- !!int "13"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "0 ft., fly 30 ft. (hover)"
"damage_vulnerabilities": "fire"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone), [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained),\
  \ [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "If the swarm is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the swarm move\
    \ or act, that creature must succeed on a DC 15 Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ check to discern that the swarm is animate."
  "name": "False Objects"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a 1-foot-tall, 8-inch-wide, 2-inch-thick\
    \ object. The swarm can't regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's\
    \ space. Hit: 6 (2d4 + 1) bludgeoning damage, or 3 (1d4 + 1) bludgeoning\
    \ damage if the swarm has half its hit points or fewer."
  "name": "Book Club"
"source":
- "CM"
"image": "/3-Mechanics/CLI/bestiary/construct/token/swarm-of-animated-books-cm.webp"
```
^statblock