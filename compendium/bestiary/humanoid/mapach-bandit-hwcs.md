---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/mapach
statblock: inline
aliases: ["Mapach Bandit"]
---
# [Mapach Bandit](3-Mechanics\CLI\bestiary\humanoid/mapach-bandit-hwcs.md)
*Source: Humblewood Campaign Setting p. 202*  

Mapachs are particularly distrusted among birdfolk because of their eccentricities and willingness to break with commonly held customs. Often judged on sight to be crooked, some mapachs find it hard to integrate into birdfolk society and turn to crime to survive. Local bandit forces are happy to exploit this, offering the displaced mapachs shelter and a share of the spoils in exchange for their service.

```statblock
"name": "Mapach Bandit (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "mapach"
"alignment": "Neutral Evil"
"ac": !!int "12"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "12"
- !!int "13"
- !!int "10"
- !!int "8"
- !!int "12"
- !!int "12"
"speed": "30 ft., climb 20 ft."
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Birdfolk, Mapach"
"cr": "1/8"
"traits":
- "desc": "The bandit has advantage on saving throws against being [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)."
  "name": "Resilience"
- "desc": "The bandit has advantage on [Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth)\
    \ checks made in dim light or total darkness."
  "name": "Skulker"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit:\
    \ 4 (1d6 + 1) piercing damage."
  "name": "Shortbow"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/mapach-bandit-hwcs.webp"
```
^statblock