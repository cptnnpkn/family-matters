---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Faevlin"]
---
# [Faevlin](3-Mechanics\CLI\bestiary\fey/faevlin-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 9*  

> [!quote]-  
> 
> Never make a deal with the fey. Never make a deal with a goblin. And if you ever meet a faevlin, you'll know why.

## Salvage

Faevlins love to collect objects that increase their personal prestige and power. Every faevlin is likely to have a few personal trinkets like this, along with the occasional item of real worth.

## Lore

- **DC 10 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** A faevlin can teleport away from attackers but does so in a manner even the faevlin can't predict.  
- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Faevlins are goblins cursed by powerful fey magic  
- **DC 20 Intelligence ([Nature](/3-Mechanics/CLI/rules/skills.md#Nature)).** A faevlin can't be charmed by nonfey, but they have been known to pretend to be charmed to trick the enchanter.  

```statblock
"name": "Faevlin (GHLoE)"
"size": "Small"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "10"
"hit_dice": "3d6"
"stats":
- !!int "8"
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Goblin, Sylvan"
"cr": "1/4"
"traits":
- "desc": "Magic can't put the faevlin to sleep. Only a creature of the fey type can\
    \ cause the faevlin to become [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
    \ and a faevlin always knows if a nonfey creature attempted to render it [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)."
  "name": "Fey Touched"
- "desc": "The faevlin can use a bonus action to take the Hide action."
  "name": "Sneaky"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
- "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit:\
    \ 5 (1d6 + 2) piercing damage."
  "name": "Shortbow"
"reactions":
- "desc": "When an attack misses a faevlin, the faevlin can teleport up to 30 feet\
    \ in a random direction, arriving in a safe, unoccupied space."
  "name": "Fey Fade"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/fey/token/faevlin-ghloe.webp"
```
^statblock