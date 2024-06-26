---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-birdfolk
statblock: inline
aliases: ["Birdfolk Farmer"]
---
# [Birdfolk Farmer](3-Mechanics\CLI\bestiary\humanoid/birdfolk-farmer-hwcs.md)
*Source: Humblewood Campaign Setting p. 190*  

Simple farmers can be found across the Wood, providing necessary food and supplies to the cities. There are many places in Humblewood where digging up large heaps of soil would either be impractical or damaging to the forest. While traditional farms exists in Humblewood, the majority of farms are built in the canopies in or around cities. Farming in the canopy consists of growing flowering

moss gardens or fruit-bearing vines on the branches of perch trees. Canopy farms can also include the raising of large insects for food, or silkworms for clothing.

```statblock
"name": "Birdfolk Farmer (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any birdfolk"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Nature": !!int "4"
"senses": "passive Perception 10"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "0"
"traits":
- "desc": "When falling at least 10 feet, the farmer can spend a reaction to fly up\
    \ to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ slashing damage."
  "name": "Pitchfork"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/birdfolk-farmer-hwcs.webp"
```
^statblock