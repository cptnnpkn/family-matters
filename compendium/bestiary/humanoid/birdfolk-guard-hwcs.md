---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-birdfolk
statblock: inline
aliases: ["Birdfolk Guard"]
---
# [Birdfolk Guard](3-Mechanics\CLI\bestiary\humanoid/birdfolk-guard-hwcs.md)
*Source: Humblewood Campaign Setting p. 191*  

Aspiring recruits from all over the Wood flock to the Perch Guard headquarters in the capital of Alderheart to join their ranks. After successful training, these newly sworn guards return to their home perch. They serve with pride, acting as the perch's first line of defense. Under the Humblefolk Treaty, members of the Perch Guard are tasked to aid nearby villages on the forest floor whenever necessary. In larger cities like Alderheart, the Perch Guard are also responsible for dealing with inner city issues such as robbery, bar fights, and investi-gating and arresting criminals.

```statblock
"name": "Birdfolk Guard (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any birdfolk"
"alignment": "Any Non-Chaotic alignment"
"ac": !!int "16"
"ac_class": "[chain shirt](/3-Mechanics/CLI/items/chain-shirt.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "1/8"
"traits":
- "desc": "When falling at least 10 feet, the guard can spend a reaction to fly up\
    \ to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects or heavy weapons, (though they can drop any\
    \ held items as part of their reaction)."
  "name": "Glide"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/birdfolk-guard-hwcs.webp"
```
^statblock