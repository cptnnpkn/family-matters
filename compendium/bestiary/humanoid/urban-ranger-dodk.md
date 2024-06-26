---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Urban Ranger"]
---
# [Urban Ranger](3-Mechanics\CLI\bestiary\humanoid/urban-ranger-dodk.md)
*Source: Dungeons of Drakkenheim p. 220*  

> [!quote]- A quote from Petra Lang of the Hooded Lanterns  
> 
> We train day after day to survive the horrors of the city. More than just your own life is riding on you. A missed shot, a wrong turn, a split-second delay in noticing a lurking monster ahead could be the mistake that costs you everything in these dangerous ruins.

Grizzled and grim urban rangers stalk city streets and rooftops like their natural counterparts hunt forest paths and treetops, leaping between buildings and scaling walls with ease.

```statblock
"name": "Urban Ranger (DoDk)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "12"
- !!int "17"
- !!int "14"
- !!int "11"
- !!int "15"
- !!int "11"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Stealth": !!int "7"
  "Perception": !!int "6"
  "Survival": !!int "6"
"senses": "passive Perception 16"
"languages": "Any two"
"cr": "3"
"traits":
- "desc": "The urban ranger is an 8th-level spellcaster that uses Wisdom as its spellcasting\
    \ ability (spell save DC 12; +4 to hit with spell attacks). It knows the following\
    \ spells from the ranger spell list:\n\n1st level (4 slots): [cure wounds](/3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [fog cloud](/3-Mechanics/CLI/spells/fog-cloud.md), [hunter's mark](/3-Mechanics/CLI/spells/hunters-mark.md)\n\
    \n2nd level (3 slots): [pass without trace](/3-Mechanics/CLI/spells/pass-without-trace.md),\
    \ [spike growth](/3-Mechanics/CLI/spells/spike-growth.md)"
  "name": "Spellcasting"
"actions":
- "desc": "The urban ranger makes two melee attacks or two ranged attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: +5 to hit, ranged 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage."
  "name": "Longbow"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/urban-ranger-dodk.webp"
```
^statblock