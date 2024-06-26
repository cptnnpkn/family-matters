---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/mapach
statblock: inline
aliases: ["Mapach Brute"]
---
# [Mapach Brute](3-Mechanics\CLI\bestiary\humanoid/mapach-brute-hwcs.md)
*Source: Humblewood Campaign Setting p. 202*  

Although many in the bandit coalition follow noble ideals, there have always been a handful of unreliable members, only concerned with their own advancement. These ruthless brutes are scoundrels through and through, willing to seize power within the coalition by any means necessary. Mapachs don't have more knaves among them as a matter of course, but the infamy of a few such villains has further sullied their reputation in the eyes of perch-dwellers.

```statblock
"name": "Mapach Brute (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "mapach"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[studded leather armor](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "14"
- !!int "17"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "14"
"speed": "30 ft., climb 20 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "5"
"skillsaves":
  "Deception": !!int "4"
  "Persuasion": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Birdfolk, Mapach"
"cr": "3"
"traits":
- "desc": "The brute has advantage on saving throws against being [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)."
  "name": "Resilience"
- "desc": "The brute has advantage on [Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth)\
    \ checks made in dim light or total darkness."
  "name": "Skulker"
"actions":
- "desc": "The brute makes three melee attacks, two with their rapier and one with\
    \ their parrying dagger."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Rapier"
- "desc": "Melee Weapon Attack: +5 to hit, range 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Parrying Dagger"
"reactions":
- "desc": "The brute adds 2 to his AC against one melee attack that would hit them.\
    \ The brute must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/mapach-brute-hwcs.webp"
```
^statblock