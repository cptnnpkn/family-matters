---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/dodk
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Ratling"]
---
# [Ratling](3-Mechanics\CLI\bestiary\monstrosity/ratling-dodk.md)
*Source: Dungeons of Drakkenheim p. 202*  

> [!quote]-  
> 
> A pair of glinting yellow-purple eyes appear down the dark tunnel ahead, then another, then more. A scurrying mass of furry bodies bound up in mud-spattered cloth and greasy leather surge forward. Their rodent-like claws brandish rust-caked blades as many squeaking voices erupt into a cacophony of chittering, chirping, screeching, and finally a howl of "Kill! Kill! Kill!"

Ratlings are oversized mutated rats imbued with malevolent cunning and driven by a mad compulsion to consume and multiply. These wretched monsters suffer from a constant internal struggle between cowardly survival instincts and violent impulsive urges. Ratlings dream of eating everything, and will eat anything, but love eating people. They especially love eating babies. While they will subsist on carrion, ratlings take captives back to their lairs so they can have fresh food later. Thousands of ratlings dwell in the city. They form warring colonies that dig maze-like burrows featuring multiple entrances and tight looping passages. Successful colonies grow in number quickly, as ratlings mature in a matter of weeks when ample food and delerium are available.

```statblock
"name": "Ratling (DoDk)"
"size": "Small"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "5"
"hit_dice": "2d6 - 2"
"stats":
- !!int "7"
- !!int "15"
- !!int "8"
- !!int "8"
- !!int "10"
- !!int "5"
"speed": "30 ft., climb 30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "1/8"
"traits":
- "desc": "The ratling can take the Hide action as a bonus action on each of its turns."
  "name": "Skulker"
- "desc": "The ratling has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The ratling has advantage on an attack roll against a creature if at least\
    \ one of the ratling's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit:\
    \ 4 (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "DoDk"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/ratling-dodk.webp"
```
^statblock