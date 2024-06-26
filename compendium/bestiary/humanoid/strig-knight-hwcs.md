---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/strig
statblock: inline
aliases: ["Strig Knight"]
---
# [Strig Knight](3-Mechanics\CLI\bestiary\humanoid/strig-knight-hwcs.md)
*Source: Humblewood Campaign Setting p. 204*  

The Perch Guard produces many skilled soldiers, but only those who possess a great degree of talent are trained to become knights. The knights of Alderheart's Perch Guard are taught how to protect others by creating opportunities for allies to regroup or retreat as necessary. Experts in sword-and-shield fighting, the knight's heavily-armoured fighting style allows them to hold the line against even the fiercest of enemies. The strig knight listed is equipped with a [wing crest shield](/3-Mechanics/CLI/items/wing-crest-shield-hwcs.md) (see "Appendix D: New Magic Items").

```statblock
"name": "Strig Knight (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "strig"
"alignment": "Any Non-Chaotic alignment"
"ac": !!int "18"
"ac_class": "[half plate armor](/3-Mechanics/CLI/items/half-plate-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "16"
- !!int "10"
- !!int "16"
- !!int "8"
- !!int "13"
- !!int "12"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "5"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "3"
"traits":
- "desc": "When falling at least 10 feet, the knight can spend a reaction to fly up\
    \ to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "The knight rolls advantage on Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics))\
    \ checks made to climb any surface their talons could reasonably grip."
  "name": "Talons"
- "desc": "When the knight hits with an attack, they can choose to maneuver the enemy\
    \ out of position, granting an ally within 5 feet of the target the opportunity\
    \ to use their reaction to move away from this enemy at half their movement speed\
    \ without provoking an [attack of opportunity](/3-Mechanics/CLI/rules/actions.md#opportunity%20attack)."
  "name": "Maneuver (2/Day)"
"actions":
- "desc": "The knight makes two short sword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Short Sword"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage. The knight can choose to grapple a target hit by this\
    \ attack as a bonus action."
  "name": "Talons"
- "desc": "The knight casts the [gust of wind](/3-Mechanics/CLI/spells/gust-of-wind.md)\
    \ spell (save DC 15)."
  "name": "Wing Crest Shield (1/Day)"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/strig-knight-hwcs.webp"
```
^statblock