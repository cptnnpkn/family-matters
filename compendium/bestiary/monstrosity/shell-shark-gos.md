---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Shell Shark"]
---
# [Shell Shark](3-Mechanics\CLI\bestiary\monstrosity/shell-shark-gos.md)
*Source: Ghosts of Saltmarsh p. 252*  

These impressive creatures, swimming through the sahuagin stronghold in The Final Enemy, are chosen by priestesses of Sekolah to serve as protectors and messengers. The sharks are blessed in a ritual during which plates of shell and coral are permanently affixed to their bodies.

```statblock
"name": "Shell Shark (GoS)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "shell plate armor"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "15"
- !!int "12"
- !!int "14"
- !!int "3"
- !!int "10"
- !!int "7"
"speed": "0 ft., swim 40 ft."
"saves":
  "Strength": !!int "6"
"skillsaves":
  "Athletics": !!int "6"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- "desc": "The shark has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- "desc": "The shark has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "The shark makes two bite attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 13\
    \ (2d10 + 2) piercing damage."
  "name": "Bite"
"source":
- "GoS"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/shell-shark-gos.webp"
```
^statblock