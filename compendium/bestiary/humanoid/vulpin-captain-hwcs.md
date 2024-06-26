---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/vulpin
statblock: inline
aliases: ["Vulpin Captain"]
---
# [Vulpin Captain](3-Mechanics\CLI\bestiary\humanoid/vulpin-captain-hwcs.md)
*Source: Humblewood Campaign Setting p. 207*  

Captains are respected among the bandit forces, leading units on raids and ambushes, and sometimes running the operations of an entire camp. While captains are among the more skilled warriors in the coalition, involvement with day-to-day operations grants them a certain rapport with even the low-ranking bandits. This leadership, coupled with their prowess, allows them to rally or kowtow those foolish enough to consider desertion. Vulpins, with their natural ambition, cunning, and force of personality, can readily be found climbing to the rank of captain.

```statblock
"name": "Vulpin Captain (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "vulpin"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "[studded leather armor](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "13"
- !!int "15"
- !!int "12"
- !!int "14"
- !!int "14"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "4"
  "Acrobatics": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Birdfolk, Vulpin"
"cr": "1"
"traits":
- "desc": "The captain includes their Intelligence modifier as a bonus to their Dexterity\
    \ saving throws."
  "name": "Evasive"
"actions":
- "desc": "The captain makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Short sword"
- "desc": "Melee Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit:\
    \ 5 (1d6 + 2) piercing damage."
  "name": "Short bow"
"reactions":
- "desc": "The captain adds 2 to their AC against one melee attack that would hit\
    \ them per round. The captain must see the attacker and be wielding a melee weapon. "
  "name": "Parry"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/vulpin-captain-hwcs.webp"
```
^statblock