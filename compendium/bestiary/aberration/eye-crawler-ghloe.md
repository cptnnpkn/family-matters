---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Eye Crawler"]
---
# [Eye Crawler](3-Mechanics\CLI\bestiary\aberration/eye-crawler-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 82*  

An eye crawler is an ambulatory eye that observes everything. It might be spying for something else. An eye crawler has no effective attacks. Mages theorize eye crawlers derive sustenance from light or ambient magical energy.

```statblock
"name": "Eye Crawler (GHLoE)"
"size": "Tiny"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "11"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "3"
- !!int "13"
- !!int "10"
- !!int "6"
- !!int "11"
- !!int "5"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "0"
"traits":
- "desc": "The eye crawler has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/eye-crawler-ghloe.webp"
```
^statblock