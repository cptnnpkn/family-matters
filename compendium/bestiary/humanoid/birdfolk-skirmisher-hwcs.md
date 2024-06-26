---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-birdfolk
statblock: inline
aliases: ["Birdfolk Skirmisher"]
---
# [Birdfolk Skirmisher](3-Mechanics\CLI\bestiary\humanoid/birdfolk-skirmisher-hwcs.md)
*Source: Humblewood Campaign Setting p. 191*  

The bulk of the Perch Guard's military force are a light infantry called "The Spears." They train relentlessly with polearm weapons perfectly suited for branch-to-branch combat. Many are also skilled at ranged attacks with these weapons, as well as performing special diving maneuvers, making them an even greater threat to enemies below. In times of peace, skirmishers often serve as skilled hunters, following the direction of trackers to collect enough food for entire villages.

```statblock
"name": "Birdfolk Skirmisher (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any birdfolk"
"alignment": "Any Non-Chaotic alignment"
"ac": !!int "14"
"ac_class": "[chain shirt](/3-Mechanics/CLI/items/chain-shirt.md)"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "14"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "4"
"senses": "passive Perception 10"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "1/8"
"traits":
- "desc": "When falling at least 10 feet, the skirmisher can spend a reaction to fly\
    \ up to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "The skirmisher can make an attack during their glide. If they do so they\
    \ deal an extra 4 (1d8) points of damage."
  "name": "Drop Attack"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/birdfolk-skirmisher-hwcs.webp"
```
^statblock