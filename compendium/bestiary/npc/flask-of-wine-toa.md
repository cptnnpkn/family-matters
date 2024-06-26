---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/toa
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/tabaxi
statblock: inline
aliases: ["Flask of Wine"]
---
# [Flask of Wine](3-Mechanics\CLI\bestiary\npc/flask-of-wine-toa.md)
*Source: Tomb of Annihilation p. 35*  

```statblock
"name": "Flask of Wine (ToA)"
"size": "Medium"
"type": "humanoid"
"subtype": "tabaxi"
"alignment": "Chaotic Good"
"ac": !!int "14"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "30 ft., climb 20 ft."
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "5"
  "Perception": !!int "4"
  "Survival": !!int "6"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common plus any one language"
"cr": "1"
"traits":
- "desc": "When Flask of Wine moves on its turn in combat, it can double its speed\
    \ until the end of the turn. Once it uses this ability, Flask of Wine can't use\
    \ it again until it moves 0 feet on one of its turns."
  "name": "Feline Agility"
"actions":
- "desc": "Flask of Wine makes two attacks with its claws, its shortsword, or its\
    \ shortbow."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ slashing damage."
  "name": "Claws"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit:\
    \ 6 (1d6 + 3) piercing damage."
  "name": "Shortbow"
"source":
- "ToA"
"image": "/3-Mechanics/CLI/bestiary/npc/token/flask-of-wine-toa.webp"
```
^statblock