---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/cervan
statblock: inline
aliases: ["Cervan Bandit General"]
---
# [Cervan Bandit General](3-Mechanics\CLI\bestiary\humanoid/cervan-bandit-general-hwcs.md)
*Source: Humblewood Campaign Setting p. 193*  

Bandit clans are commanded by generals. Serving as both a battle-tested warrior and master strategist, they alone coordinate the disparate band of thieves and outlaws that make up the collective. While military monikers are used to refer to bandit leadership, more than combat prowess is needed to maintain order in these volatile organizations. A dominating personality and charismatic voice are as necessary as a swift blade and a sharp mind. Cervans don't typically take to brigandry, but their practical skills and ability to survive in even the most adverse situations make those with loose morals and dubious ambitions a natural fit.

```statblock
"name": "Cervan Bandit General (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "cervan"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "[studded leather armor](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "14"
- !!int "17"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "14"
"speed": "35 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "5"
"skillsaves":
  "Deception": !!int "4"
  "Persuasion": !!int "4"
"senses": "passive Perception 10"
"languages": "Birdfolk, Cervan"
"cr": "2"
"traits":
- "desc": "If an attack deals over half of the general's current remaining hit points\
    \ in damage (even if their hit points are reduced to 0 by the attack), they immediately\
    \ regain 8 (1d12 + 2) hit points."
  "name": "Surge of Vigor (Recharges after a Long Rest)"
- "desc": "The general's long jump is 30 feet, and their base high jump is 15 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "The general makes three melee attacks, two with their scimitar and one\
    \ with their dagger. Alternatively, the general can make two ranged attack with\
    \ their daggers."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"reactions":
- "desc": "The general adds 2 to their AC against one melee attack that would hit\
    \ them. The general must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/cervan-bandit-general-hwcs.webp"
```
^statblock