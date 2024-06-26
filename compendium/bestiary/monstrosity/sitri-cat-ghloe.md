---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Sitri Cat"]
---
# [Sitri Cat](3-Mechanics\CLI\bestiary\monstrosity/sitri-cat-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 85*  

Disease is no stranger to the people of Etharis. The virulent Weeping Pox has devastated towns and families, and the Tears of the Hungerer is rumored to be a poison designed by necromancers. Other afflictions, such as the Seven Shades of Sitri and the Faith Cough, are not deadly but can impede even the strongest body. These diseases can be carried by animals, breaking their normal method of transmission. A twist of nature or foul magic has created carriers, some intentionally and some aggressively, that spread sickness quickly.

```statblock
"name": "Sitri Cat (GHLoE)"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "5"
"hit_dice": "2d4"
"stats":
- !!int "3"
- !!int "16"
- !!int "10"
- !!int "3"
- !!int "12"
- !!int "7"
"speed": "40 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- "desc": "The Sitri cat has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "A humanoid who touches a Sitri cat must succeed on a DC 13 Constitution\
    \ saving throw or become infected with the Seven Shades of Sitri. If a humanoid\
    \ succeeds on the saving throw, they're immune to the disease for 24 hours. Carnal\
    \ urges overwhelm an infected humanoid. When the infected interacts with another\
    \ non-hostile humanoid, the infected becomes [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ by that humanoid until the subject of the infatuation or their friends harm\
    \ the infected. The infected can repeat the saving throw once every 24 hours.\
    \ Current infatuations end when one of these saves succeeds. The disease ends\
    \ for the infected when they have succeeded on five saving throws."
  "name": "Seven Shades of Sitri"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing\
    \ damage and Seven Shades of Sitri."
  "name": "Claws"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/sitri-cat-ghloe.webp"
```
^statblock