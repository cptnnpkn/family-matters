---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/jerbeen
statblock: inline
aliases: ["Jerbeen Swashbuckler"]
---
# [Jerbeen Swashbuckler](3-Mechanics\CLI\bestiary\humanoid/jerbeen-swashbuckler-hwcs.md)
*Source: Humblewood Campaign Setting p. 200*  

A common figure in many jerbeen folktales, a swashbuckler is a champion who fights with finesse and daring. Natural leaders, swashbucklers keep their wits about them during a duel, pressing small advantages to win the day. Jerbeen swashbucklers often train in the tradition of their Amaranthine, Gaspard. Each year swashbucklers participate in fencing matches held in Gaspard's honor. Not all swashbucklers follow this path, with some using their talents for brigandry.

```statblock
"name": "Jerbeen Swashbuckler (HWCS)"
"size": "Small"
"type": "humanoid"
"subtype": "jerbeen"
"alignment": "Any Non-Lawful alignment"
"ac": !!int "17"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "34"
"hit_dice": "8d6 + 6"
"stats":
- !!int "12"
- !!int "18"
- !!int "12"
- !!int "14"
- !!int "11"
- !!int "15"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Acrobatics": !!int "8"
  "Persuasion": !!int "6"
"senses": "passive Perception 10"
"languages": "Birdfolk, Jerbeen"
"cr": "3"
"traits":
- "desc": "The swashbuckler's base long jump is 30 feet, and their base high jump\
    \ is 15 feet, with or without a running start."
  "name": "Standing Leap"
- "desc": "The swashbuckler can take the [Help](/3-Mechanics/CLI/rules/actions.md#Help)\
    \ action as a bonus action."
  "name": "Team Tactics"
- "desc": "While the swashbuckler is wearing light or no armor and wielding no shield,\
    \ their AC includes their Charisma modifier."
  "name": "Sharp Witted Defense"
"actions":
- "desc": "The swashbuckler makes three attacks, one with a dagger and two with their\
    \ rapier."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) piercing damage."
  "name": "Rapier"
"reactions":
- "desc": "The swashbuckler reduces the damage dealt by one melee attack that would\
    \ hit them by 4 (1d8), and deals that much piercing damage to their attacker.\
    \ The swashbuckler must see the attacker and be wielding a melee weapon."
  "name": "Riposte"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/jerbeen-swashbuckler-hwcs.webp"
```
^statblock